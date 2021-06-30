const Upload = require("../models/Upload");
const CloudinaryService = require("../services/cloudinaryService");
const asyncHandler = require("express-async-handler");
const { HTTP_CONSTANTS } = require("../utils/constants");

const cursor = new CloudinaryService();

/**
 * This method checks for a valid upload
 * @param {*} param0
 * @returns Boolean | { Object }
 */
const retrieveUpload = ({ mimetype }) => {
  const upload = new Upload();
  return upload.isValid(mimetype) && upload;
};

/**
 * THis method checks if a file already exists
 * @param {*} filterData
 * @returns
 */
const uploadExists = async (filterData) =>
  await Upload.findOne({ ...filterData });

/**
 * This method accepts and uploads a file
 * @param {*} param0
 * @returns <Promise>
 */
const doUpload = async ({ originalname, buffer }, userId) => {
  const filePublicId = `${originalname}-${userId}`; // ensure uniqueness per user. This is the file's public id
  return await cursor.upload(buffer, { filePublicId });
};

/**
 * This method assigns model properties
 * @param {*} upload
 * @param {*} data
 * @returns model
 */
const setProperties = (upload, data) => {
  const { userId, fileName, fileType } = data;
  upload.user = userId;
  upload.fileType = fileType;
  upload.fileName = fileName;
  upload.filePublicId = `${fileName}-${userId}`;
  return upload;
};

/**
 * This method persists an upload in the db
 * @param {*} upload
 * @param {*} data
 * @returns <Promise>
 */
const saveUpload = async (upload, data) => {
  upload = setProperties(upload, data);
  const { isDuplicate } = data;
  const { user } = upload;
  const filePublicId = isDuplicate
    ? isDuplicate.filePublicId
    : upload.filePublicId;
  const tryDeletes = async () => {
    try {
      await Upload.deleteMany({
        user,
        isProfilePhoto: true,
        filePublicId: { $ne: filePublicId },
      }); //remove previous profile photo from db excluding an existing one
      await cursor.delete(filePublicId); // delete from cloudinary
    } catch (error) {
      //do nothing, since it may not exist
    }
  };
  const trySave = async () =>
    isDuplicate ? isDuplicate.save() : await upload.save();

  await tryDeletes();
  return await trySave();
};

/**
 * This method bulk persists uploads
 * @param {*} instances
 */
const bulkSave = async (instances) =>
  await Upload.collection.insertMany(instances);

/**
 * This method uploads a single file
 *  * @param {*} Request
 */
exports.uploadSingle = asyncHandler(async (req, res, next) => {
  const { body, file } = req;
  const { userId } = body;
  const { originalname, mimetype } = file;
  const data = { userId, fileName: originalname, fileType: mimetype };
  const upload = retrieveUpload(file); // check validity
  if (!upload) {
    res.status(HTTP_CONSTANTS.BAD_REQUEST);
    throw new Error("Invalid file type. Please upload [png, jpg]");
  }
  try {
    const fileResponse = await doUpload(file, userId);
    const { secure_url } = fileResponse;
    const isDuplicate = await uploadExists({
      fileUrl: secure_url,
    });
    upload.fileUrl = secure_url;
    isDuplicate
      ? (isDuplicate.isProfilePhoto = true)
      : (upload.isProfilePhoto = true);
    await saveUpload(upload, { ...data, isDuplicate });
    res.status(HTTP_CONSTANTS.OK).json({ data: upload });
  } catch (error) {
    const { http_code, message } = error;
    res.status(http_code || HTTP_CONSTANTS.BAD_REQUEST);
    throw new Error(message);
  }
});

/**
 * This method uploads multiple files
 *  * @param {*} Request
 */
exports.uploadMultiple = asyncHandler(async (req, res, next) => {
  const { body, files } = req;
  const { userId } = body;
  const errors = [];
  const uploads = [];
  const duplicates = [];
  const doMultiple = async () => {
    for (let file of files) {
      const { originalname, mimetype } = file;
      const data = { userId, fileName: originalname, fileType: mimetype };
      const upload = retrieveUpload(file);
      try {
        const fileResponse = await doUpload(file, userId);
        const { secure_url } = fileResponse;
        const isDuplicate = await uploadExists({ fileUrl: secure_url });
        const appendUpload = () => {
          upload.fileUrl = secure_url;
          uploads.push(setProperties(upload, { ...data, isDuplicate }));
        };
        upload && !isDuplicate ? appendUpload() : duplicates.push(isDuplicate);
      } catch (error) {
        const { http_code, message } = error;
        errors.push({ http_code, message });
      }
    }
  };
  await doMultiple(); //cloud upload
  let message = errors.map((err) => `${err.message || "Null"}\n`).toString();
  if (errors.length && errors.length == files.length) {
    // all files failed
    message =
      `${errors.length} upload${
        errors.length == 1 ? "" : "s"
      } failed with the following errors: ` +
      "\r\n" +
      messages;
    res.status(HTTP_CONSTANTS.BAD_REQUEST);
    throw new Error(message);

    
  }
  let responseData = { data: [], message, hasError: !!errors.length };
  await bulkSave(uploads)
    .then(({ ops }) => {
      //persist
      responseData.data = ops;
    })
    .catch((error) => {
      if (duplicates.length && !uploads.length)
        return (responseData.data = duplicates);
      throw new Error(error.message);
    });
  res.status(HTTP_CONSTANTS.OK).json(responseData);
});

/**
 * This method retrieves a user's profile photo by their id
 */
exports.getProfileUpload = asyncHandler(async (req, res, next) => {
  const { entityId } = req.params;
  const profilePhoto = await Upload.findOne({
    user: entityId,
    isProfilePhoto: true,
  });
  res.status(HTTP_CONSTANTS.OK).json({ data: profilePhoto });
});

/**
 * This method updates a user's profile photo by it's url
 */
exports.updateUpload = asyncHandler(async (req, res, next) => {
  // return
});

/**
 * This method deletes a user's  upload by its publicId
 */
exports.deleteUpload = asyncHandler(async (req, res, next) => {
  const { entityId } = req.params;
  await cursor.delete(entityId); // delete from cloudinary
  await Upload.findOneAndDelete({ filePublicId: entityId }); // delete from app db
  res.status(HTTP_CONSTANTS.OK).json({ data: { message: "Photo removed." } });
});

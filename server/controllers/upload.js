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
const retrieveUpload = ({ mimetype }) =>{
    const upload = new Upload();
    return upload.isValid(mimetype) && upload;
}

/**
 * THis method checks if a file already exists
 * @param {*} fileUrl 
 * @returns 
 */
const uploadExists = async (fileUrl) => await Upload.findOne({ fileUrl });

/**
 * This method accepts and uploads a file 
 * @param {*} param0 
 * @returns <Promise>
 */
const doUpload = async ({ originalname, buffer }) =>  await cursor.upload(buffer, { originalname });

/**
 * This method assigns model properties
 * @param {*} upload 
 * @param {*} data 
 * @returns model
 */
const setProperties = (upload, data) => {
    const { userId, fileName, fileType } = data;
    upload.userId = userId;
    upload.fileType = fileType;
    upload.fileName = fileName;
    return upload;
}

/**
 * This method persists an upload in the db
 * @param {*} upload 
 * @param {*} data 
 * @returns <Promise>
 */
const saveUpload = async (upload, data) => {
    upload = setProperties(upload, data);
    return data.isDuplicate ? upload : await upload.save();
}

/**
 * This method bulk persists uploads
 * @param {*} instances 
 */
const bulkSave = async (instances) =>  await Upload.collection.insertMany(instances);

/**
 * This method uploads a single file
 *  * @param {*} Request 
 */
exports.uploadSingle = asyncHandler(async(req, res, next) => {
    const { body, file } = req;
    const { userId } = body;
    const { originalname, mimetype } = file;
    const data = { userId, fileName:originalname, fileType:mimetype };
    const upload = retrieveUpload(file);
    if(!upload){
        res.status(HTTP_CONSTANTS.BAD_REQUEST);
        throw new Error('Invalid file type. Please upload [png, jpg]')
    }
    try{
       const fileResponse = await doUpload(file);
       const { secure_url } = fileResponse;
       const isDuplicate = await uploadExists(secure_url);
       upload.fileUrl = secure_url;
       await saveUpload(upload, { ...data, isDuplicate });
       res.status(HTTP_CONSTANTS.OK).json({ upload });
    }catch(error){
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
        for(let file of files){
            const { originalname, mimetype } = file;
            const data = { userId, fileName:originalname, fileType:mimetype };
            const upload = retrieveUpload(file);
            try{
                const fileResponse = await doUpload(file);
                const { secure_url } = fileResponse;
                const isDuplicate = await uploadExists(secure_url);
                const appendUpload = () => {
                    upload.fileUrl = secure_url;
                    uploads.push(setProperties(upload, {...data, isDuplicate }))
                }
                (upload && !isDuplicate) ? appendUpload() : duplicates.push(isDuplicate);
            }catch(error){
                const { http_code, message } = error;
                errors.push({ http_code, message });
            }
            // await doUpload(file).then( async (fileResponse) => {
            //     const { secure_url } = fileResponse;
            //     const isDuplicate = await uploadExists(secure_url);
            //     const appendUpload = () => {
            //         upload.fileUrl = secure_url;
            //         uploads.push(setProperties(upload, {...data, isDuplicate }))
            //     }
            //     (upload && !isDuplicate) ? appendUpload() : duplicates.push(isDuplicate);
            // }).catch((error)=>{
            //     const { http_code, message } = error;
            //     errors.push({ http_code, message });
            // });
        }
    }
    await doMultiple(); //cloud upload
    let message = errors.map((err) => `${err.message || 'Null'}\n`).toString();
    if(errors.length && errors.length == files.length){ // all files failed
        message = `${errors.length} upload${errors.length == 1 ? '':'s'} failed with the following errors: `+"\r\n"+messages;
        res.status(HTTP_CONSTANTS.BAD_REQUEST);
        throw new Error(message);
    }
    let responseData = { data:[], message, hasError:!!errors.length };
    await bulkSave(uploads).then(({ ops }) => { //persist
        responseData.data = ops;
    }).catch(error => {
        if(duplicates.length && !uploads.length) return responseData.data = duplicates;
        throw new Error(error.message)
    });
    res.status(HTTP_CONSTANTS.OK).json(responseData);
    
  });



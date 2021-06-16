const Upload = require("../models/Upload");
const CloudinaryService = require("../services/cloudinaryService");
const asyncHandler = require("express-async-handler");
const { HTTP_CONSTANTS } = require("../utils/constants");

const cursor = new CloudinaryService();

exports.uploadSingle = asyncHandler(async(req, res, next) => {
    const { fieldname, originalname, mimetype, buffer } = req.file;
    const { userId } = req.body;
    const upload = new Upload();
    if(!upload.isValid(mimetype)){
        res.status(HTTP_CONSTANTS.BAD_REQUEST);
        throw new Error('Invalid file type. Please upload [jpeg, png, jpg]')
    }
    console.log(req.file);
    upload.userId = userId;
    upload.fileType = mimetype;
    upload.fileName = originalname;
    return await cursor.upload(buffer, { originalname }).then( async (fileResponse) => {
        const { secure_url } = fileResponse;
        upload.fileUrl = secure_url;
        await upload.save();
        res.status(HTTP_CONSTANTS.OK).json({ upload });
     }).catch((error)=>{
        const { http_code, message } = error;
        res.status(http_code || HTTP_CONSTANTS.BAD_REQUEST);
        throw new Error(message);
     })
    
  });


exports.uploadMultiple = asyncHandler(async(req, res, next) => {
    
   
  });
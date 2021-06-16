const Upload = require("../models/Upload");
const CloudinaryService = require("../services/cloudinaryService");
const asyncHandler = require("express-async-handler");
const cursor = new CloudinaryService();

exports.uploadSingleFile = asyncHandler(async(req, res, next) => {
    const { fieldname, originalname, mimetype, buffer } = req.file;
    const { userId } = req.body;
    const upload = new Upload();
    if(!upload.isValid(mimetype)){
        res.status(400);
        throw new Error('Invalid file type. Please upload [jpeg, png, jpg]')
    }
    console.log(req.file);
    upload.file_type = mimetype;
    upload.file_name = originalname;
    return await cursor.upload(buffer, { originalname }).then( async (fileResponse) => {
        const { secure_url } = fileResponse;
        upload.file_url = secure_url;
        await upload.save();
        res.status(200).json({ upload });
     }).catch((error)=>{
        const { http_code, message } = error;
        res.status(http_code);
        throw new Error(message);
     })
    
  });
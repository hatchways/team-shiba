const cloudinary = require("cloudinary").v2;
const streamifier = require('streamifier');
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;


class CloudinaryService{

    constructor(){
        cloudinary.config({
            cloud_name: CLOUDINARY_CLOUD_NAME, 
            api_key: CLOUDINARY_API_KEY, 
            api_secret: CLOUDINARY_API_SECRET
        });
    }

    
  /**
   * 
   * @param {*} file 
   * returns a promise
   */
    upload = async (buffer) => {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { public_id: "sample_woman" }, 
              (error, result) => {
                if (result) return resolve(result);
                reject(error);
              },
            );
            streamifier.createReadStream(buffer).pipe(uploadStream);
          });
    }

    replace = (fileId, newFile) =>{
        
    }

    delete = (fileId) => {

    }

}

module.exports = CloudinaryService;
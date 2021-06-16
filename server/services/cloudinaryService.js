const cloudinary = require("cloudinary").v2;
const streamifier = require('streamifier');
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

//All methods in this class return a promise
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
    upload = async (buffer, options={ originalname:'' }) => {
        return new Promise((resolve, reject) => {
            let { originalname } = options;
            originalname = originalname.toLowerCase();
            ['.jpg','.png','.jpeg'].map(ext=> originalname.endsWith(ext) && (originalname = originalname.replace(ext,'')));
            const uploadStream = cloudinary.uploader.upload_stream(
                { public_id: originalname, folder:"teamShiba" }, 
              (error, result) => {
               return result && resolve(result) || reject(error);
               
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
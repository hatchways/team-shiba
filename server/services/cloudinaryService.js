const cloudinary = require("cloudinary").v2;
const streamifier = require('streamifier');
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;



//All methods in this class return a promise
class CloudinaryService{

   static allowedFiles = ['.jpg','.png','.jpeg'];

    constructor(){
        cloudinary.config({
            cloud_name: CLOUDINARY_CLOUD_NAME, 
            api_key: CLOUDINARY_API_KEY, 
            api_secret: CLOUDINARY_API_SECRET
        });
    }

    
  /**
   * This method uploads a file to cloudinary
   * @param {*} file 
   * returns a promise
   */
    upload = async (buffer, options={ filePublicId:'' }) => {
        return new Promise((resolve, reject) => {
            let { filePublicId } = options;
            filePublicId = filePublicId.toLowerCase();
            CloudinaryService.allowedFiles.map(ext=> filePublicId.endsWith(ext) && (filePublicId = filePublicId.replace(ext,'')));
            const uploadStream = cloudinary.uploader.upload_stream(
                { public_id: filePublicId, folder:"teamShiba" }, 
              (error, result) => result && resolve(result) || reject(error)
            );
            streamifier.createReadStream(buffer).pipe(uploadStream);
          });
    }

    /**
   * This method deletes a file from cloudinary using its public ID
   * @param {*} fileId
   * returns a promise
   */
    delete = (fileId) => cloudinary.uploader.destroy(fileId);

    

    
    replace = (fileId, newFile) => {
  
    }

  

}

module.exports = CloudinaryService;
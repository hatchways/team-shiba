const cloudinary = require("cloudinary").v2;
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
   * 
   */
    upload = (file={}) =>{
        cloudinary.uploader.upload("https://images.unsplash.com/photo-1588702547919-26089e690ecc",
        { public_id: "sample_woman" }, 
        function(error, result) {console.log(result); });
    }

    replace = (fileId, newFile) =>{
        
    }

    delete = (fileId) => {

    }

}

module.exports = CloudinaryService;
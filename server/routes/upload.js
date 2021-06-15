const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const multer  = require('multer');
const fileUploader = multer();
  
const { uploadSingleFile } = require("../controllers/upload");



/** 
 * @swagger 
 * /uploads/single: 
 *   post: 
 *     description: Upload a single file
 *     parameters: 
 *     - name: UploadFile 
 *       description: Uploads a file
 *       in: formData 
 *       required: true 
 *       type: file 
 *     responses:  
 *       201: 
 *         description: Created  
 *   
 */
router.route("/single").post([fileUploader.single('UploadFile')],uploadSingleFile);

module.exports = router;

const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const multer  = require('multer');
const fileUploader = multer();
  
const { uploadSingle, uploadMultiple } = require("../controllers/upload");



/** 
 * @swagger 
 * /uploads/single: 
 *   post: 
 *     description: Upload a single file
 *     parameters: 
 *     - name: singleFile 
 *       description: Uploads a file
 *       in: formData 
 *       required: true 
 *       type: file 
 *     - name: userId 
 *       description: The profile user's id
 *       in: formData 
 *       required: true 
 *       type: string 
 *     responses:  
 *       201: 
 *         description: Created  
 *       400: 
 *         description: Bad Request  
 *   
 */
router.route("/single").post([fileUploader.single('singleFile')],uploadSingle);

/** 
 * @swagger 
 * /uploads/multiple: 
 *   post: 
 *     description: Uploads multiple files
 *     parameters: 
 *     - name: multiFile 
 *       description: Uploads multiple files
 *       in: formData 
 *       required: true 
 *       type: file 
 *     - name: userId 
 *       description: The profile user's id
 *       in: formData 
 *       required: true 
 *       type: string 
 *     responses:  
 *       201: 
 *         description: Created  
 *       400: 
 *         description: Bad Request  
 *   
 */
router.route("/multiple").post([fileUploader.array('multiFile')],uploadMultiple);

module.exports = router;

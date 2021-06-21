const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const { getRequestsByOwnerId, getRequestsBySitterId, createSitterRequest } = require("../controllers/request");



/** 
 * @swagger 
 * /requests/sitter: 
 *   get: 
 *     description: This is for a sitter. It retrieves owner requests
 *     parameters: 
 *     - name: sitterId 
 *       description: The dog sitter's id
 *       in: query 
 *       required: true 
 *       type: string 
 *     responses:  
 *       200: 
 *         description: OK  
 *       400: 
 *         description: Bad Request  
 *   
 */
router.route("/sitter").get(getRequestsBySitterId);

/** 
 * @swagger 
 * /requests/owner: 
 *   get: 
 *     description: retrieves requests
 *     parameters: 
 *     - name: ownerId 
 *       description: The dog owner's id
 *       in: query 
 *       required: true 
 *       type: string 
 *   post: 
 *     description: creates a new sitter request
 *     parameters: 
 *     - name: owner 
 *       description: The dog owner's Id
 *       in: formData 
 *       required: true 
 *       type: string 
 *     - name: sitter 
 *       description: The sitter's Id
 *       in: formData 
 *       required: true 
 *       type: string 
 *     - name: startDate 
 *       description: The date to begin
 *       in: formData 
 *       required: true 
 *       type: string 
 *     - name: endDate 
 *       description: The date to begin
 *       in: formData 
 *       required: true 
 *       type: string 
 *     responses:  
 *       200: 
 *         description: OK  
 *       400: 
 *         description: Bad Request  
 *   
 */
router.route("/owner").get(getRequestsByOwnerId).post(createSitterRequest);





module.exports = router;

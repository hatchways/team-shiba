const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { uploadSingleFile } = require("../controllers/upload");
console.log({
    uploadSingleFile
})

router.route("/single").post(uploadSingleFile);

module.exports = router;

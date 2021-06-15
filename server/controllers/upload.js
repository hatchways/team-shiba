const Upload = require("../models/Upload");
const CloudinaryService = require("../services/cloudinaryService");
const asyncHandler = require("express-async-handler");

const cursor = new CloudinaryService();

exports.uploadSingleFile = asyncHandler(async(req, res, next) => {
  
    const upload = await cursor.upload();
    // console.log({
    //     req
    // })
    // if (searchString) {
    //   users = await User.find({
    //     username: { $regex: searchString, $options: "i" }
    //   });
    // }
  
    if (false) {
      res.status(404);
      throw new Error("No users found in search");
    }
  
    res.status(200).json({ users: ["EMEKA","JPEG","MP4"] });
  });
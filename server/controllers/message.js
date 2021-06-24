const Message = require('../models/Message');
const asyncHandler = require("express-async-handler");

exports.createMessage =  asyncHandler(async (req, res, next) => {
  const data = req.body;
  console.log("this is the request body " , data);
  const message = new Message({
    ...data
  });

  try {
    const messageSaved = await message.save();
    if (!messageSaved) {
      return res.status(400).json({status: "message not saved!!"})
    }
    return res.status(201).json({status: 'message saved!!', message: messageSaved});  
  } catch(error) {
    return res.status(500).json({error});
  };
})

const mongoose = require("mongoose");


const uploadSchema = new mongoose.Schema({

  userId: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true,
    unique:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
});

uploadSchema.methods.isValid =  (mimetype)  => {
  return ['image/png', 'image/jpeg'].includes(mimetype);
};


module.exports = Upload = mongoose.model("upload", uploadSchema);

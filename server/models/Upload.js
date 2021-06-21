const mongoose = require("mongoose"), Schema = mongoose.Schema;


const uploadSchema = new mongoose.Schema({

  user: {
    type: Schema.ObjectId, 
    ref: 'user',
    required:true,
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
  isProfilePhoto: {
    type: Boolean,
    default: false,
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

const mongoose = require("mongoose"), Schema = mongoose.Schema;


const uploadSchema = new mongoose.Schema({

  _user: {
    type: { type: Schema.ObjectId, ref: 'user' },
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

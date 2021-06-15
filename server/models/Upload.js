const mongoose = require("mongoose");


const uploadSchema = new mongoose.Schema({
  file_type: {
    type: String,
    required: true,
  },
  file_name: {
    type: String,
    required: true,
    unique: true
  },
  file_url: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
});

uploadSchema.methods.isValid =  (mimetype)  => {
  return ['image/png', 'image/jpeg'].includes(mimetype);
};



module.exports = Upload = mongoose.model("upload", uploadSchema);

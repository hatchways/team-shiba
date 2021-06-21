const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new mongoose.Schema({
  owner: { 
    type: Schema.ObjectId, 
    ref: 'user',
    required:true 
  },
  sitter: {
     type: Schema.ObjectId, 
     ref: 'user',
     required:true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date, 
    required: true
  },
  requestStatus: {
    type: String,
    enum:['PENDING','ACCEPTED','DECLINED'],
    default: "PENDING", 
    required:true
  },
  paid: {
    type: Boolean,
    default: false
  }
});

module.exports = Request = mongoose.model("request", requestSchema);
const mongoose = require('mongoose');
const User = require('./User');

const messageSchema = new mongoose.Schema({
  senderID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiverID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  data: {
    type: String,
    required: true,
    trim: true,
    default: ''
  },
  // this field is optional and is for testing purposes
  // attachment is for any document (invoice etc) whose hyperlink is provided
  // or first uploaded and then hyperlink is shared
   attachment : {
    type: String,
    required: false,
    default: ''
   }
});

const Message = new mongoose.model('Message' , messageSchema);

module.exports = Message;
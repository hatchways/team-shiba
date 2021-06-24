// conversation schema
/*
  Conversation
    -> title : string
    -> conversationID : ObjectId
    -> messages : [ message ]
    -> participants : [ user ]
*/

/*
  Message
    -> senderID : [User]
    -> receiverID : [User]
    -> data
    -> attachment (url, pdf, document)
*/

const mongoose = require('mongoose');
const User = require('./User');
const Message = require('./Message');

const conversationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  messages: [ 
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
      }
  ],
  participants: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }  
  ]  
}
  );

const Conversation = new mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;

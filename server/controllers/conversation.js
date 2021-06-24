const Conversation = require('../models/Conversation');
const asyncHandler = require('express-async-handler');

// creating a new conversation
exports.createConversation = asyncHandler( async (req, res, next) => {
  const data = req.body;
  console.log("this is the req body " , data);
  const conversation = new Conversation({
    ...data
  })
  try {
    const conversationSaved = await conversation.save();
    if (!conversationSaved) {
      return res.status(400).json({status: "conversation not saved!!"})
    }
    return res.status(201).json({status : "Conversation saved!!"});
  } catch (error) {
    return res.status(500).json({error});
  }
});

// Get all messages for a conversation
exports.getMessagesConversation = asyncHandler( async (req, res, next) => {
  const convID = req.params.id;
  console.log("this is the convID " , convID);
  try {
    const conversationFound = await Conversation.findById({_id: convID}).populate('messages');
    if (!conversationFound) {
      return res.status(404).json({status: "conversation not found!!"})
    }
    return res.status(200).json({messages : conversationFound.messages});
  } catch (error) {
    return res.status(500).json({error});
  }
});


// Get all conversations
exports.getConversationList = asyncHandler( async (req, res, next) => {
  try {
    const conversationList = await Conversation.find();
    console.log("this is the conversationList " , conversationList);
    if (conversationList.length === 0) {
      return res.status(404).json({status: "conversation not found!!"})
    }
    return res.status(200).json({conversationList});
  } catch (error) {
    return res.status(500).json({error});
  }
})

// get all details of a conversation
// Get all messages for a conversation
exports.getDetailedConversation = asyncHandler( async (req, res, next) => {
  const convID = req.params.id;
  try {
    const conversationFound = await Conversation.findById({_id: convID}).populate('participants');
    if (!conversationFound) {
      return res.status(404).json({status: "conversation not found!!"})
    }
    return res.status(200).json({conversation : conversationFound});
  } catch (error) {
    return res.status(500).json({error});
  }
});
const express = require('express');
const router = express.Router();

const {
  createConversation,
  getMessagesConversation,
  getConversationList,
  getDetailedConversation
} = require('../controllers/conversation');

// CREATE
router.route("/").post(createConversation);

// GET
router.route("/:id/messages").get(getMessagesConversation);
router.route("/").get(getConversationList);
router.route("/:id").get(getDetailedConversation);

module.exports = router;
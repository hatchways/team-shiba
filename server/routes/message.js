const express = require('express');
const router = express.Router();

const {
  createMessage
} = require('../controllers/message');

// CREATE
router.route("/").post(createMessage);


module.exports = router;
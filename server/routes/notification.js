const express = require('express');
const router = express.Router();

const {
    createNotification, getUnreadNotifications, getNotifications, markNotification
} = require('../controllers/notification');

// CREATE
router.route("/create").post(createNotification);

// READ
router.route("/unread").get(getUnreadNotifications);
router.route("/").get(getNotifications);

// UPDATE
router.route('/markRead/:id').patch(markNotification);

module.exports = router;
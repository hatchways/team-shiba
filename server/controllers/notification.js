const Notification = require("../models/Notification");
const asyncHandler = require("express-async-handler");

exports.createNotification = asyncHandler(async (req, res) => {
  const { type, title, description, read, date } = req.body;
  // checking if title is already taken
  // Note: for storing date the following format is used
  // const date = new Date();
  // date.toISOString() is stored in the collection as ISODate("2021-06-18T16:40:48.534Z")
  try {
    const titleTaken = await Notification.findOne({ title });
    if (titleTaken) {
      return res.status(400).json({ status: "title already exists" });
    } else {
      const notification = new Notification({
        type,
        title,
        description,
        read,
        date,
      });
      const result = await notification.save();
      if (!result) {
        return res.status(400).json({ status: "notification not saved!" });
      }
      res.status(201).json({ status: "notification saved!" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

exports.getUnreadNotifications = asyncHandler(async (req, res) => {
  try {
    const unreadNotifications = await Notification.find({ read: false });
    if (unreadNotifications.length === 0) {
      return res.status(201).json({ status: "no unread notification" });
    }
    return res.status(201).json({
      count: unreadNotifications.length,
      notifications: unreadNotifications,
    });
  } catch (error) {
    return res.status(500).json(errors);
  }
});

exports.getNotifications = asyncHandler(async (req, res) => {
  try {
    const notifications = await Notification.find({});
    // testing whether notifications collection is empty
    if (notifications.length === 0) {
      return res.status(201).json({ status: "no notifications" });
    }
    return res
      .status(201)
      .json({ count: notifications.length, notifications: notifications });
  } catch (error) {
    return res.status(500).json(errors);
  }
});

exports.markNotification = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const notificationExists = await Notification.findOne({ _id: id });
    if (!notificationExists) {
      return res.status(404).json({ status: "notification does not exist!!" });
    }
    notificationExists.read = true;
    const updateStatus = await notificationExists.save();
    if (!updateStatus) {
      return res.status(400).json({ status: "unable to mark notification" });
    }
    res.status(201).json({ status: "notification marked as read." , notification: updateStatus });
  } catch (error) {
    return res.status(500).json({ status: "error occured!!", error: error });
  }
});

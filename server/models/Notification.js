const mongoose = require('mongoose');

//const notificationTypes = ["accepted", "declined", "upcoming"]
const notificationSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    type: {
        type: String,
        required: true,
        trim: true,
    }, 
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description :{
        type: String,
        required: true,
        trim: true,
    },
    read : {
        type: Boolean,
        default: false
    },
    date : {
        type: Date,
        required: true
    } 
})

const Notification = new mongoose.model('Notification', notificationSchema);

module.exports = Notification;
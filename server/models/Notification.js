const mongoose = require('mongoose');

const notificationTypes = ["accepted", "declined", "upcoming"]
const notificationSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        trim: true,
    }, 
    title: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length < 5) {
                throw new Error("title must be 5 or more characters long")
            }
        }
    },
    description :{
        type: String,
        required: true,
        trim: true,
        validate (value) {
            if (value.length < 20) {
                throw new Error("description must be 20 or more characters long")
            }
        }
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
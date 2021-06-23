const mongoose = require('mongoose');

const currentDate = new Date();

const profileSchema = new mongoose.Schema({
    dogSitter: {
        type: String,
        required: true,
        default: 'no'
    },
    availabilityStatus: {
        type: String,
        required: false,
        default: 'no'
    },
    firstName : {
        type: String,
        required: true,
        trim: true,
        validate (value) {
            if (value.length < 1) {
                throw new Error("Please enter your firstname!!")
            }
        }
    },
    lastName : {
        type: String,
        required: true,
        trim: true,
        validate (value) {
            if (value.length < 1) {
                throw new Error("Please enter your lastname!!")
            }
        }
    },
    email: {
        type: String,
        required : true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    serviceCharge: {
        type: String,
        required: false,
        trim: true,
        default: '0'
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true,
        default: ''
    }
});


const Profile = new mongoose.model("profile" , profileSchema);

module.exports = Profile;
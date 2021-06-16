const mongoose = require('mongoose');

const currentDate = new Date();
const profileSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true,
        trim: true,
        validate (value) {
            if (value.length < 1) {
                throw new Error("Please enter your firstname!!")
            }
        }
    },
    lastname : {
        type: String,
        required: true,
        trim: true,
        validate (value) {
            if (value.length < 1) {
                throw new Error("Please enter your lastname!!")
            }
        }
    },
    description : {
        type: String,
        required: true,
        trim: true,
        validate (value) {
            if (value.length < 1) {
                throw new Error("Please describe yourself!!")
            }
        }
    },
    available_start : {
        type: String,
        trim: true
    },
    available_end : {
        type: String,
        trim: true
    }
});


const Profile = new mongoose.model("profile" , profileSchema);

module.exports = Profile;
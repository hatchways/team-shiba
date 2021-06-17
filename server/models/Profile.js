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
    }
});


const Profile = new mongoose.model("profile" , profileSchema);

module.exports = Profile;
const mongoose = require('mongoose');

// values for avaialbility hours each week
const availability_values = ["10" , "10+" , "20" , "20+" , "30" , "30+"];

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
    description :{
        type: String,
        required: true,
        trim: true,
        validate (value) {
            if (value.length < 1) {
                throw new Error("Please describe yourself!!")
            }
        }
    },
    availability : {
        type: String,
        required: true,
        trim : true,
        default: "10",
        validate (value) {
            // checking whether the value is one of the allowed ones in availability_values array
            if (!availability_values.includes(value)) {
                throw new Error('Please choose among the following values : [10 , 10+ , 20 , 20+ , 30 , 30+]');
            }
        }
    }
});


const Profile = new mongoose.model("profile" , profileSchema);

module.exports = Profile;
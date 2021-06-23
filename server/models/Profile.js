const mongoose = require('mongoose');
const User = require('./User');

const profileSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
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

profileSchema.pre("save" , async function (next) {
    // retrieving the userID from user model based on email id 
    try {
        const user = await User.findOne({email : this.email});
        if (!user) {
            console.log("user not found. error occurred!!")
        }
        this.userID = user._id;
    } catch(error) {
        console.log(error);
    }
});

const Profile = new mongoose.model("profile" , profileSchema);

module.exports = Profile;
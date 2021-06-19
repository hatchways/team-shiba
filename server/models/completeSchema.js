const mongoose = require('mongoose')


// schemas without any references
const userSchema = new mongoose.Schema({
    // ID will already be provided by mongodb
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    register_date: {
      type: Date,
      default: Date.now
    }
  });

  const profileSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        trim: true,
    },
    lastName : {
        type: String,
        required: true,
        trim: true,
    },
    description : {
        type: String,
        required: true,
        trim: true,
    }
});

const reviewSchema = new mongoose.Schema({
    reviewID: {
        type: String,
        requried: true, 
        trim: true
    },
    rating : {
        type: Number,
        required: true,
        enum: [1,2,3,4,5],
        default: 1 
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
});

const notificationSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['message', 'accepted', 'rejected', 'upcoming'],
        default: 'message'
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    read: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        required: true
    }
});


// models of above schemas 
const User = new mongoose.model("User", userSchema);
const Profile = new mongoose.model("Profile", profileSchema);
const Review = new mongoose.model("Review" , reviewSchema);
const Notification = new mongoose.model("Notification" , notificationSchema);



// schemas with references
const messageSchema = new mongoose.Schema({
    contents: {
        type: String,
        required: true,
        trim: true
    },
    senderID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    readStatus :{
        type: Boolean,
        requried: true,
        deafult: false
    }
});


const paymentSchema = new mongoose.Schema({
    paymentID: {
        type: String,
        required: true,
        trim: true
    },
    orderID: {
        type: String,
        required: true,
        trim: true
    },
    buyerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    }
});

const bookingSchema = new mongoose.Schema({
    senderID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    BookingID: {
        type: String,
        required: true,
        trim: true
    },
    bookStatus: {
        type: String,
        required: true,
        enum: ['accepted', 'declined', 'onHold']
    }
});


const uploadSchema = new mongoose.Schema({
    // this will be enum type from an array of values []
    fileType: {
        type: String,
        required: true,
        trim: true
    },
    filename: {
        type: String,
        required: true,
        trim: true
    },
    fileURL: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt : {
        type: Date,
        required: true
    },
    reviews: [{
        review : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    }]
});

// models of above schemas with references
const Payment = new mongoose.model('Payment' , paymentSchema);
const Message = new mongoose.model('Message' , messageSchema);
const Booking = new mongoose.model('Booking' , bookingSchema);
const Upload = new mongoose.model("Upload", uploadSchema);

module.exports = {
    User, Profile, Message, Payment, Booking, Upload, Notification, Review 
}
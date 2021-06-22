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

  const User = new mongoose.model("User" ,userSchema);

  const profileSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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

const Profile= new mongoose.model('Profile', profileSchema);

const reviewSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    rating : {
        type: Number,
        required: true,
        enum: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
        default: 1 
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
});

const notificationSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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


// // models of above schemas 

const Review = new mongoose.model("Review" , reviewSchema);
const Notification = new mongoose.model("Notification" , notificationSchema);



// // schemas with references
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


// const paymentSchema = new mongoose.Schema({
//     paymentID: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     orderID: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     buyerID: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     receiverID: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     amount: {
//         type: Number,
//         required: true,
//         default: 0
//     },
//     status: {
//         type: Boolean,
//         required: true,
//         default: false
//     }
// });

// const bookingSchema = new mongoose.Schema({
//     senderID : {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     receiverID: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     BookingID: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     bookStatus: {
//         type: String,
//         required: true,
//         enum: ['accepted', 'declined', 'onHold']
//     }
// });


const uploadSchema = new mongoose.Schema({
    // this will be enum type from an array of values []
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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
    }
});

// // models of above schemas with references
// const Payment = new mongoose.model('Payment' , paymentSchema);
const Message = new mongoose.model('Message' , messageSchema);
// const Booking = new mongoose.model('Booking' , bookingSchema);
const Upload = new mongoose.model("Upload", uploadSchema);

module.exports = {
    User, Profile, Upload, Notification, Review, Message 
    // Message, Payment, Booking,
}
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
// importing database connection
//  asyncHandler(async () => {
//     const conn = await mongoose.connect("mongodb://localhost:27017/dummyDB", {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false
//     });
  
//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
//   });
 
mongoose.connect("mongodb://localhost:27017/dummyDB", {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useFindAndModify: false
        }).then(result => console.log("successfully connected to the database!!"))
          .catch(error => console.log("the following error occurred " , error));

// importing models
const {
    User, Profile, Message, Notification, Review, Upload
}  = require('./completeSchema');

// creating sample data for reference-free collections first
const users = [
    new User({
        username: 'adam11',
        email: 'adam@corpo.com',
        password: 'adam11',
        register_date: Date("2021-06-19")
    }),
    new User({
        username: 'paula11',
        email: 'paula@corpo.com',
        password: 'paula11',
        register_date: Date("2021-06-18")
    }),
    new User({
        username: 'jenna11',
        email: 'jenna@corpo.com',
        password: 'jenna11',
        register_date: Date("2021-06-11")
    })
];

const profiles = [
    new Profile({
        userID: "60d2151679902b7c64abafe2",
        firstName: "Adam",
        lastName: "Jenson",
        description: "I am a professional dog trainer.I love spending time training dogs"
    }),
    new Profile({
        userID: "60d2151679902b7c64abafe3",
        firstName: "Paula",
        lastName: "Atkinson",
        description: "I am a cat person. Got cat problems, come to me."
    }),
    new Profile({
        userID: "60d2151679902b7c64abafe4",
        firstName: "Jenna",
        lastName: "Harper",
        description: "I own 4 dogs and 3 cats. I have a lot of experience with animals."
    })
];


const reviews  = [
    new Review({
        userID: "60d2151679902b7c64abafe2",
        rating : 5,
        description: 'Had an excellent experince with this dog keeper.'
    }),
    new Review({
        userID: "60d2151679902b7c64abafe2",
        rating : 4,
        description: 'Had mixed feelings. The person was soft-spoken but my dog was bumped after I took him back.'
    }),
    new Review({
        userID: "60d2151679902b7c64abafe2",
        rating : 1,
        description: 'Worst  experince of my life!! Never going to recommend this person to anyone.'
    }),
    new Review({
        userID: "60d2151679902b7c64abafe4",
        rating: 3.5,
        description: 'Good sitter for dogs. Not for cats!!'
    }),
    new Review({
        userID: "60d2151679902b7c64abafe4",
        rating: 4.5,
        description: 'loved the service!!'
    })
]


const notifications  = [
    new Notification({
        userID: "60d2151679902b7c64abafe2",
        type: 'accepted',
        title: '2 dogs appointment',
        description: 'dogs require special care. One of them is to be fed twice and other once',
        read: false,
        date: Date('2021-06-18')
    }),
    new Notification({
        userID: "60d2151679902b7c64abafe2",
        type: 'upcoming',
        title: '2 cats appointment',
        description: 'Appointment with Mrs. Carter at 6 today. Both cats are extremely friendly.',
        read: false,
        date: Date('2021-06-17')
    }),
    new Notification({
        userID: "60d2151679902b7c64abafe3",
        type: 'upcoming',
        title: '2 cats appointment',
        description: 'Appointment with Mrs. Carter at 6 today. Both cats are extremely friendly.',
        read: false,
        date: Date('2021-06-17')
    })
]

//inserting data into database
// users.forEach(async (user) => {
//     try{
//         const result = await user.save();
//         if (!result) {
//             console.log("could not save user!")
//         } else {
//             console.log({
//                 status: "user saved!!",
//                 user: result
//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// });


// profiles.forEach(async (profile) => {
//     try{
//         const result = await profile.save();
//         if (!result) {
//             console.log("could not save profile!")
//         } else {
//             console.log({
//                 status: "profile saved!!",
//                 profile: result
//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// });

// reviews.forEach(async (review) => {
//     try{
//         const result = await review.save();
//         if (!result) {
//             console.log("could not save review!")
//         } else {
//             console.log({
//                 status: "review saved!!",
//                 review: result
//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// });

// notifications.forEach(async (notification) => {
//     try{
//         const result = await notification.save();
//         if (!result) {
//             console.log("could not save user!")
//         } else {
//             console.log({
//                 status: "notification saved!!",
//                 notification: result
//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// });


// retrieving query testing
// Profile.findOne({userID: "60d208c6454b377785ce6e3e"})
//     .populate('userID')
//     .exec(function (err, profile) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(profile);
//         }
//     })

// retrieving query testing for reviews
// Review.find({userID: "60d2151679902b7c64abafe2"})
//     .populate('userID')
//     .exec(function (err, profile) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(profile);
//         }
//     })


// retrieving query testing for notifications
Notification.find({userID: "60d2151679902b7c64abafe2"})
    .populate('userID')
    .exec(function (err, profile) {
        if (err) {
            console.log(err);
        } else {
            console.log(profile);
        }
    })
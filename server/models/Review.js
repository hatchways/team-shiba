const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema;

let reviewSchema = new Schema({
  author: {
    type: ObjectId,
    ref: 'user',
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    validate: { validator: rating.isInteger },
    required: true,
  },
  comments: String,
},{timestamps: true});

module.exports = Review = mongoose.model("Review", reviewSchema);

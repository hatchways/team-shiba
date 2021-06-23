const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const PaymentScema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  cardNumer: {
    type: Number,
    required: true
  },
  cardType: {
    type: String,
    required: true
  },
  expDate: {
    type: Date,
    required: true
  },
  zipCode: {
    type: Number,
    required: true
  },
  cvc: {
    type: Number,
    required: true
  }
});

module.exports = PaymentMethod = mongoose.model("paymentMethod", PaymentScema);

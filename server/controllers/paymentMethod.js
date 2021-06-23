const PaymentMethod = require('../models/Payment');
const asyncHandler = require('express-async-handler');

exports.addPaymentMethod = asyncHandler(async(req, res, next) => {
    const {userId, cardNumber, cardType, zipCode, expDate, cvc} = req.body;
    const cardExists = await PaymentMethod.findOne({cardNumber})
    if(cardExists){
        res.status(400);
        throw new Error("This card already exits!")
    }
    const method = await PaymnetMethods.create(req.body);
    if(method){
        res.status(201).json({success: {message: 'Payment method added succesfully'}})
    }
    else{
        res.status(400);
        throw new Error('Something went wrong');
    }
})

exports.getPaymentMethods = asyncHandler(async(req,res,next) => {
    const userID = req.body.id;

    const methods = await PaymentMethod.find({userID})

    if(methods){
        res.status(200).json({savePayments: {payments: methods}});
    }else{
        res.status(400);
        throw new Error('No saved payment method found.')
    }
})

exports.test = asyncHandler(async(req,res,next) => {
    res.send('test payment response..')
})
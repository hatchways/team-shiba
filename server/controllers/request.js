const mongoose = require('mongoose');
const Request = require("../models/Request");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// This is for an owner. It returns requests they have made
exports.getRequestsByOwnerId = asyncHandler(async (req, res, next) => {
    const { ownerId } = req.data;
    const data = await Request.find({ owner: ownerId }).populate('sitter');
    res.status(200).json({ data });

});


// This is for a sitter. It returns owner requests
exports.getRequestsBySitterId = asyncHandler(async (req, res, next) => {
    const { sitterId } = req.query;
    const data = await Request.find({ sitter: sitterId }).populate('owner');
    res.status(200).json({ data });

});


// Creates a sitter request
exports.createSitterRequest = asyncHandler(async (req, res, next) => {
    const sitterRequest = req.body;
    let { owner, sitter } = sitterRequest;
    const data = await Request.create({...sitterRequest, owner, sitter});
    res.status(200).json({ data });

});
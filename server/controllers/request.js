const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");
const { HTTP_CONSTANTS } = require("../utils/constants");

// This retrieves a request by its id
exports.getRequestById = asyncHandler(async (req, res, next) => {
  const { requestId } = req.params;
  try{
    const data = await Request.findById(requestId).populate("sitter");
    res.status(HTTP_CONSTANTS.OK).json({ data });
  }
  catch (error) {
    const { http_code, message } = error;
    res.status(http_code || HTTP_CONSTANTS.BAD_REQUEST);
    throw new Error(message);
  }
});

// This is for an owner. It returns requests they have made
exports.getRequestsByOwnerId = asyncHandler(async (req, res, next) => {
    const { ownerId } = req.params;
  try {
    const data = await Request.find({ owner: ownerId }).populate("sitter");
    res.status(HTTP_CONSTANTS.OK).json({ data });
  } catch (error) {
    const { http_code, message } = error;
    res.status(http_code || HTTP_CONSTANTS.BAD_REQUEST);
    throw new Error(message);
  }
});

// This is for a sitter. It returns owner requests
exports.getRequestsBySitterId = asyncHandler(async (req, res, next) => {
    const { sitterId } = req.params;
  try {
    const data = await Request.find({ sitter: sitterId }).populate("owner");
    res.status(HTTP_CONSTANTS.OK).json({ data });
  } catch (error) {
    const { http_code, message } = error;
    res.status(http_code || HTTP_CONSTANTS.BAD_REQUEST);
    throw new Error(message);
  }
});

// Creates a sitter request
exports.createSitterRequest = asyncHandler(async (req, res, next) => {
  const sitterRequest = req.body;
  let { owner, sitter } = sitterRequest;
  const { ownerId } = req.params;
  try {
    const data = await Request.create({ ...sitterRequest, owner, sitter });
    res.status(HTTP_CONSTANTS.OK).json({ data });
  } catch (error) {
    const { http_code, message } = error;
    res.status(http_code || HTTP_CONSTANTS.BAD_REQUEST);
    throw new Error(message);
  }
});

// Updates an existing sitter request
exports.updateSitterRequest = asyncHandler(async (req, res, next) => {
  const sitterRequest = req.body;
  const { requestId } = req.params;
  try {
    const data = await Request.findByIdAndUpdate(
      requestId,
      { ...sitterRequest },
      { new: true }
    );
    res.status(HTTP_CONSTANTS.OK).json({ data });
  } catch (error) {
    const { http_code, message } = error;
    res.status(http_code || HTTP_CONSTANTS.BAD_REQUEST);
    throw new Error(message);
  }
});

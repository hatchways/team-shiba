const Review = require("../models/Review");
const asyncHandler = require("express-async-handler");
const Profile = require("../models/Profile");
const ObjectId = require("mongodb").ObjectId;

// @route POST /review ?
// @desc Add review
// @access Private
exports.createReview = asyncHandler(async (req, res, next) => {
  const profileId = req.params.profileId;
  const reviewerId = req.params.reviewerId;

  try {
    const profile = await Profile.findById(profileId);
    const reviewer = await Review.findById(reviewerId);

    if (reviewer.includes(req.body.author)) {
      reviewer.comments.push(req.body);
      reviewer.save((error, convo) => {
        if (error) {
          return res.status(400).json({
            error: error.message,
          });
        }
        return res.json({ success: true, msg: "Review Added" });
      });
    } else {
      res.status(400).send("Reviewer isn't a account holder!");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

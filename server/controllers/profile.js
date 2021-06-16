const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const profileModel = require('../models/Profile');

const currentDate = new Date();
const [month, day, year] = [currentDate.getMonth() , currentDate.getDate(), currentDate.getFullYear()];
const date = `${day}-${month}-${year}`;
console.log("the current date is " , date);

exports.createProfile = asyncHandler(async (req, res, next) => {
  let { firstName, lastName, description, availableStart, availableEnd } = req.body;
  // checking if start_date is not mentioned and giving a default value of today
  if (availableStart === '') {
    availableStart = date;
  }
  // checking if end_date is not mentioned and giving a default value to 1 day following today
  if (availableEnd === '') {
    availableEnd = date;
  }
  const profile = new Profile({
    firstName,
    lastName,
    description,
    availableStart,
    availableEnd
  });
  try {
    const result = await profile.save();
    if (!result) {
      return res.status(400).json({ status: "profile not saved!!" });
    }
    res.status(201).json({
      status: "profile saved!!",
      profile,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

exports.getProfileById = asyncHandler(async (req, res, next) => {
  const profileID = req.params.id;
  try {
    const foundProfile = await profileModel.findById({ _id: profileID });
    if (!foundProfile) {
      return res.status(404).json({ status: "profile not found!!" });
    }
    res.status(201).json({
      status: "profile found!!",
      profile: foundProfile,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

exports.getProfilesList = asyncHandler(async (req, res, next) => {
  try {
    const profiles = await profileModel.find({});
    if (profiles.length === 0) {
      return res.status(404).json({ status: "no profiles in records!!" });
    }
    res.status(201).json({
      profilesFound: profiles.length,
      profiles,
    });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

exports.updateProfileById = asyncHandler(async (req, res, next) => {
  const profileID = req.params.id;
  const { firstname, lastname, description, availability } = req.body;
  try {
    const updatedProfile = await profileModel.findByIdAndUpdate(profileID, {
      firstname,
      lastname,
      description,
      availability,
    });
    if (!updatedProfile) {
      return res
        .status(404)
        .json({ status: "profile doesn't exist in records!!" });
    }
    // updating profile
    res.status(201).json({
      status: "profile updated!!",
      profile: updatedProfile,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

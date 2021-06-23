const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

exports.createProfile = asyncHandler(async (req, res) => {

  let { firstname, lastname, description} = req.body;
  const profile = new Profile({
    firstname,
    lastname,
    description,
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

exports.getProfileById = asyncHandler(async (req, res) => {
  const profileID = req.params.id;
  try {
    const foundProfile = await Profile.findById({ _id: profileID });
    if (!foundProfile) {
      return res.status(404).json({ status: "profile not found!!" });
    }
    res.status(200).json({
      status: "profile found!!",
      profile: foundProfile,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

exports.getProfilesList = asyncHandler(async (req, res) => {
  try {
    const profiles = await Profile.find({});
    if (profiles.length === 0) {
      return res.status(404).json({ status: "no profiles in records!!" });
    }
    res.status(200).json({
      profilesFound: profiles.length,
      profiles,
    });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

exports.updateProfileById = asyncHandler(async (req, res) => {
  const profileID = req.params.id;
  const { firstname, lastname, description } = req.body;
  try {
    const updatedProfile = await Profile.findByIdAndUpdate(profileID, {
      firstname,
      lastname,
      description,
    });
    if (!updatedProfile) {
      return res
        .status(404)
        .json({ status: "profile doesn't exist in records!!" });
    }
    // updating profile
    res.status(200).json({
      status: "profile updated!!",
      profile: updatedProfile,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

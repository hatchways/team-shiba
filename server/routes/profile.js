const express = require("express");
const router = express.Router();

const {
    createProfile,
    getProfileById,
    getProfilesList,
    updateProfileById
} = require("../controllers/profile");

// CREATE
router.route("/create").post(createProfile);

// READ
router.route("/:id").get(getProfileById);
router.route("/").get(getProfilesList);

// UPDATE
router.route("/:id").patch(updateProfileById);

module.exports = router;
 
const express = require("express");
const router = express.Router();

const {
    postProfile,
    getProfileById,
    getProfilesList,
    updateProfileById
} = require("../controllers/profile");

// CREATE
router.route("/").post(postProfile);

// READ
router.route("/:id").get(getProfileById);
router.route("/").get(getProfilesList);

// UPDATE
router.route("/:id").patch(updateProfileById);

module.exports = router;

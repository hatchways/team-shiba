const express = require('express');
const router = express.Router();
const { validateRegister, validateLogin } = require('../validate');
const protect = require('../middleware/auth');
const {
  registerUser,
  loginUser,
  loadUser,
  logoutUser,
  createProfile,
} = require('../controllers/auth');

router.route('/register').post(validateRegister, registerUser);

router.route('/login').post(validateLogin, loginUser);

router.route('/user').get(protect, loadUser);

router.route('/logout').get(logoutUser);


// sample register routes
router.route('/createProfile').post(createProfile);

module.exports = router;

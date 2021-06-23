const express = require('express');
const protect = require('../middleware/auth');
const router = express.Router();

const { addPaymentMethod, getPaymentMethods, test } = require('../controllers/paymentMethod');

router.route('/addPaymentMethod').post(addPaymentMethod);
router.route('/getPaymentMethods').post(getPaymentMethods);
router.route('/test').get(test);
module.exports = router;
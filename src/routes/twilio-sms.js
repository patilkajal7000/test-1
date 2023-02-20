const express = require( 'express');
const { sendoTP, verifyoTP } = require('../controller/twilio-sms')
const router = express.Router();
router.route('/send-otp').post(sendoTP);
router.route ('/verify-otp').post (verifyoTP);
module.exports = router;
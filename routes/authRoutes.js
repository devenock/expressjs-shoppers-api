const express = require('express')
const {register, login, forgotPassword, resetPassword} = require("../controllers/authController");
const router = express.Router();

//register route
router.route('/register').post(register);
//login route
router.route('/login').post(login);
// forgot password
router.route('/forgotpassword').post(forgotPassword);
// reset password
router.route('/resetpassword').post(resetPassword);
// resend OTP

module.exports = router;
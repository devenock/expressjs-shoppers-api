const crypto = require('crypto');

// Generate a random 6-digit OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// Generate hash to store in DB
const generateOTPHash = (otp) => {
    return crypto.createHash('sha256').update(otp).digest('hex');
};

module.exports = { generateOTP, generateOTPHash };
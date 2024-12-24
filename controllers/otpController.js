const { generateOTP, generateOTPHash } = require('../utils/otp');
const OTP = require('../models/OTP');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

// Send OTP
exports.sendOTP = async (req, res) => {
    try {
        const { email } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Generate new OTP
        const otp = generateOTP();
        const hashedOTP = generateOTPHash(otp);

        // Delete any existing OTP for this user
        await OTP.deleteMany({ userId: user._id });

        // Save new OTP
        await new OTP({
            userId: user._id,
            otp: hashedOTP
        }).save();

        // Send OTP email
        await sendEmail(
            email,
            "Your OTP for Verification",
            {
                name: user.name,
                otp: otp
            },
            "./template/sendOTP.handlebars"
        );

        res.status(200).json({
            success: true,
            message: 'OTP sent successfully'
        });

    } catch (error) {
        console.error('Error in sendOTP:', error);
        res.status(500).json({
            success: false,
            message: 'Error sending OTP'
        });
    }
};

// Resend OTP
exports.resendOTP = async (req, res) => {
    try {
        const { email } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Check if previous OTP was sent less than 1 minute ago
        const lastOTP = await OTP.findOne({ userId: user._id });
        if (lastOTP) {
            const timeDiff = Date.now() - lastOTP.createdAt.getTime();
            if (timeDiff < 60000) { // 1 minute in milliseconds
                return res.status(429).json({
                    success: false,
                    message: 'Please wait 1 minute before requesting another OTP'
                });
            }
        }

        // Generate and send new OTP
        const otp = generateOTP();
        const hashedOTP = generateOTPHash(otp);

        // Delete existing OTP
        await OTP.deleteMany({ userId: user._id });

        // Save new OTP
        await new OTP({
            userId: user._id,
            otp: hashedOTP
        }).save();

        // Send OTP email
        await sendEmail(
            email,
            "Your New OTP for Verification",
            {
                name: user.name,
                otp: otp
            },
            "./template/sendOTP.handlebars"
        );

        res.status(200).json({
            success: true,
            message: 'New OTP sent successfully'
        });

    } catch (error) {
        console.error('Error in resendOTP:', error);
        res.status(500).json({
            success: false,
            message: 'Error resending OTP'
        });
    }
};

// Verify OTP
exports.verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Find OTP record
        const otpRecord = await OTP.findOne({ userId: user._id });
        if (!otpRecord) {
            return res.status(400).json({
                success: false,
                message: 'OTP has expired or does not exist'
            });
        }

        // Verify OTP
        const hashedOTP = generateOTPHash(otp);
        if (hashedOTP !== otpRecord.otp) {
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP'
            });
        }
        // Delete used OTP
        await otpRecord.deleteOne();
        res.status(200).json({
            success: true,
            message: 'OTP verified successfully'
        });

    } catch (error) {
        console.error('Error in verifyOTP:', error);
        res.status(500).json({
            success: false,
            message: 'Error verifying OTP'
        });
    }
};
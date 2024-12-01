const User = require('../models/user');
const Token = require('../models/token');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/email/sendEmail')

//register
exports.register = async (req, res) => {
    try{
        // check if user is already registered
        const UserExist = await User.findOne({email: req.body.email});
        if(UserExist){
            return res.status(400).json({error:'User with this email already exist!'})
        }

        // hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        await newUser.save();
        res.status(201).json({message:'User registered successfully!'})
    }catch(err){
        res.status(500).json({error: err})
    }
}

// login
exports.login = async (req, res) => {
    try{
        // check if user(email) exist
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(401).json({error: 'User with this email does not exist!'});
        }
    //     compare password
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if(!passwordMatch){
            return res.status(401).json({error:'Password does not match'})
        }

    //     generate token
        const token = jwt.sign({email: user.email}, process.env.JWT_SECRETE, {expiresIn: "30mins"});
        res.status(200).json({token})
    }catch(err){
        res.status(500).json({ error: err });
        console.log(err);
    }
}

// forgot password(request password reset)
exports.forgotPassword = async (req, res) => {
    try{
        const {email} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({error: 'User does not exist!'})
        }
        let token = await Token.findOne({ userId: user._id });
        if (token) await token.deleteOne();
        let resetToken = crypto.randomBytes(32).toString("hex");
        const hash = await bcrypt.hash(resetToken, 10);
        await new Token({
            userId: user._id,
            token: hash,
            createdAt: Date.now(),
        }).save();

        const link = `${process.env.CLIENT_URL}/passwordReset?token=${resetToken}&id=${user._id}`;
        await sendEmail(user.email, "Password Reset Request", {
            name: user.name,
            link: link,
        }, "./template/requestResetPassword.handlebars");
        return link;
    }catch(err){
        console.log(err);
    }
}

//reset password
exports.resetPassword = async (req, res) => {
    const{userId, token, password} = req.body;
    let passwordResetToken = await Token.findOne({ userId });
    if (!passwordResetToken) {
        return res.status(401).json({error:'Invalid or expired password reset token'})
    }
    const isValid = await bcrypt.compare(token, passwordResetToken.token);
    if (!isValid) {
        return res.status(401).json({error:'Invalid or expired password reset token'})
    }
    const hash = await bcrypt.hash(password, 10);
    await User.updateOne(
        { _id: userId },
        { $set: { password: hash } },
        { new: true }
    );
    const user = await User.findById({ _id: userId });
    await sendEmail(
        user.email,
        "Password Reset Successfully",
        {
            name: user.name,
        },
        "./template/resetPassword.handlebars"
    );
    await passwordResetToken.deleteOne();
    return true;
};

// verify by sending OTP
exports.verifyOTP = async (req, res) => {
    try{
        console.log(req.body);
    }catch(err){
        console.log(err);
    }
}

//resend otp
exports.resendOtp = async (req, res) => {
    try{
        console.log(req.body);
    }catch(err){
        console.log(err);
    }
}
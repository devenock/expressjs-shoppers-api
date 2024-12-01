const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

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

// forgot password
exports.forgotPassword = async (req, res) => {
    try{
        console.log(req.body);
    }catch(err){
        console.log(err);
    }
}

//reset password
exports.resetPassword = async (req, res) => {
    try{
        console.log(req.body);
    }catch(err){
        console.log(err);
    }
}

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
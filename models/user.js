const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { v4: uuidv4 } = require('uuid');

const userSchema = new Schema({
    userId:{
        type: String,
        default: uuidv4,
        unique: true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:"user",
    },
    address:{
        type:String,
    }
},{timestamps: true})

const User = model("User", userSchema);
module.exports = User;
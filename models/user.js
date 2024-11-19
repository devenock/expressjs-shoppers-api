const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { v4: uuidv4 } = require('uuid');

const userSchema = new Schema({
    userId:{
        type: String,
        default: uuidv4,
        unique: true,
    },
    name:{
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
        required:true,
        default:"user",
    },
    address:{
        type:String,
        required:true,
    }
},{timestamps: true})

const User = model("User", userSchema);
module.exports = User;
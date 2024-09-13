const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        unique: true,
    },
    name:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        unique: true,
        min:8
    },
    role:{
        type:String,
        enum:['user','admin'],
        required:true,
        default:"user"
    },
    address:{
        type:String,
        required:true,
    }
},{timestamps: true})

const User = model("User", userSchema);
module.exports = User;
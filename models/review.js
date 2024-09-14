const mongoose = require('mongoose');
const User = require("./user");
const Product = require("./product");
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
   id:{
        type: Schema.Types.ObjectId,
        required: true,
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: User,
        required:true,
    },
    productId:{
        type: Schema.Types.ObjectId,
        ref: Product,
        required:true,
    },
    comment:{
        type: String,
        required:true,
    },
    rating:{
        type: Number,
        required:true,
    }
},{timestamps:true});

const Review = model("Review", reviewSchema);
module.exports = Review;
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    productId:{
        type: Schema.Types.ObjectId,
        ref: 'Product',
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
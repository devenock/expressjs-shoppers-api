const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const productSchema = new Schema({
    productId:{
        type: Schema.Types.ObjectId,
        unique: true,
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    images:{
        type:Array,
        required:true
    }
}, {timestamps:true});

const Product = model("Product",productSchema);
module.exports = Product;
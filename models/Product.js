const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const productSchema = new Schema({
    productId:{
        type: Schema.Types.ObjectId,
        unique: true,
    },
    name:{
        type:String,
        required:[true, 'Product name is required'],
        trim: true,
        maxLength:[100, "Product name can not exceed 100"],
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
        required:true,
        ref: 'Category'
    },
    images:[
        {
            type:String,
            required:true
        }
    ]
}, {timestamps:true});

const Product = model("Product",productSchema);
module.exports = Product;
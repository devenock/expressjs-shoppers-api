const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const cartSchema = new Schema({
    cartId:{
        type: Schema.Types.ObjectId,
        required: true,
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products:[
        {
            product:{
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required:true,
            }, quantity:{
                type: Number,
                required:true
            },
            price:{
                type: Number,
                required:true
            }
        }
    ]
})

const Cart = model("Cart", cartSchema);
module.exports = Cart;
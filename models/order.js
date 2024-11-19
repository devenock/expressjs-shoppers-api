const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const orderSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products:[
        {
        product:{
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required:true,
        },
            quantity:{
            type: Number,
                required:true
            },
            price:{
            type: Number,
                required:true
            }
        }
    ],
    totalAmount:{
        type:Number,
        required:true
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['credit_card', 'paypal', 'bank_transfer', 'cash_on_delivery'],
    },
    paymentStatus: {
        type: String,
        required: true,
        enum: ['pending', 'completed', 'failed', 'refunded'],
        default: 'pending',
    },
    orderStatus:{
        type: String,
        enum:["processing", "shipped", "delivered", "cancelled", "returned"],
        required:true,
        default:"processing"
    },
    shippingAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        zip: { type: String, required: true },
    },
},{timestamps:true});

const Order = model("Order",orderSchema);
module.exports = Order;
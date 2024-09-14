const Order = require('../models/order');

//create an order
exports.createOrder = async (req, res) => {
    try{
        const order = await Order.create(req.body)
        return res.status(200).json({
            status: 'success',
            data:{
                order
            },
            message:"Order created successfully"
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//list all orders
exports.getAllOrders = async (req, res) => {
    try{
        const orders = await Order.find()
        res.status(200).json({
            status: 'success',
            data:{
                orders
            }
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//get order by ID
exports.getOrder = async (req, res) => {
    try{
        const order = await Order.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data:{
                order
            }
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//update order
exports.updateOrder = async (req, res) => {
    try{
        const order = await Order.findById(req.params.id)

    }catch(error){
        res.status(500).json({message:error})
    }
}

//delete order
exports.deleteOrder = async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            data:null,
            message:"Order deleted successfully"
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}
const Product = require('../models/product');


//create a product
exports.createProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(201).json({
            status: "success",
            data: {
                product,
            }
        })
    }catch(error){
res.status(500).json({message:error})
    }
}

//get all existing products
exports.getAllProducts = async (req, res) => {
    try{
const products = await Product.find()
        res.status(200).json({
            status: 'success',
            data: {
                products,
            }
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//get a product by ID
exports.getProduct = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data:{
                product
            }
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//update a product
exports.updateProduct = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        const {name, description, price, category} = req.body
        if(!product){
            res.status(400).json({
                message:`Product with id ${req.params.id} not found!`,
            })
        }
        await Product.findByIdAndUpdate(product, {name, description, price, category})
        res.status(200).json({
            status: 'success',
            message:`Product updated successfully!`
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//delete a product
exports.deleteProduct = async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            data: null,
            message:`Product deleted successfully!`,
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}
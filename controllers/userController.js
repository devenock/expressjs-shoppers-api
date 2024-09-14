const User = require('../models/user');


//create a user
exports.createUser = async (req, res) => {
    try{
    const user = await User.create(req.body)
        res.status(201).json({
            status: 'success',
            data:{
                user,
            }
        })
    }catch(error){
        res.status(500).json({
            message: error,
        })
    }
}

//get all existing users
exports.getAllUsers = async (req, res) => {
    try{
        const users = await User.find()
        res.status(200).json({
            status: 'success',
            data: {
                users,
            }
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//get a user by ID
exports.getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//update a user
exports.updateUser = async (req, res) => {
    try{
const user = await User.findById(req.params.id)
        const {name, email, password , role, address} = req.body
        if(!user){
            res.status(400).json({
                message:`User not found!`,
            })
        }
        await User.findByIdAndUpdate(user, {name, email, password , role, address})
        res.status(200).json({
            message:`User updated successfully!`,
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}


//delete a user
exports.deleteUser = async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        if(!user){
            res.status(400).json({
                message:`User with id ${req.params.id} not found!`,
            })
        }
        res.status(200).json({
            status: 'success',
            data: null,
            message:`User deleted successfully!`,
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}
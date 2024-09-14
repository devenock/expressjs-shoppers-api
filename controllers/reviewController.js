const Review = require('../models/review');


//create a review
exports.createReview = async (req, res) => {
    try{
        const review = await Review.create(req.body)
        res.status(201).json({
            status: 'success',
            data:{
                review,
            }
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//get all existing reviews
exports.getAllReviews = async (req, res) => {
    try{
        const reviews = await Review.find()
        res.status(200).json({
            status: 'success',
            data:{
                reviews
            }
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//get a review by ID
exports.getReview = async (req, res) => {
    try{
        const review = await Review.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data:{
                review
            }
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//update a review
exports.updateReview = async (req, res) => {
    try{
        const review = await Review.findById(req.params.id)
        const{comment, rating} = req.body;
        await Review.findByIdAndUpdate(review,{comment, rating})
        res.status(200).json({
            status: 'success',
            message:`Review updated successfully`
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}

//delete a review
exports.deleteReview = async (req, res) => {
    try{
        await Review.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            data: null,
            message:`Review deleted successfully`
        })
    }catch(error){
        res.status(500).json({message:error})
    }
}
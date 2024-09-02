const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.DB_URI;
const connectDB = async () =>{
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(dbUrl)
    }catch(err){
        console.error('MongoDB connection error:', err);
    }
    process.exit(1);
}

module.exports = connectDB;
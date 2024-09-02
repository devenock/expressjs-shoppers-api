const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Category = model("Category", categorySchema);
module.exports = Category;
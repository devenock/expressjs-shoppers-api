const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, default: 0 },
  reserved: { type: Number, default: 0 },
  warehouseLocation: { type: String },
});

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;

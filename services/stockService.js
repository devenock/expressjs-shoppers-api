const Stock = require("../models/Stock");

exports.adjustStock = async (productId, quantityChange) => {
  const stock = await Stock.findOneAndUpdate(
    { product: productId },
    { $inc: { quantity: quantityChange } },
    { new: true, upsert: true },
  );
  return stock;
};

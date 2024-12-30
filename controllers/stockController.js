const Stock = require("../models/stock");

exports.updateStock = async (req, res) => {
  try {
    const { productId, quantity, reserved } = req.body;
    const stock = await Stock.findOneAndUpdate(
      { product: productId },
      { $inc: { quantity, reserved } },
      { new: true, upsert: true },
    );
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStockByProductId = async (req, res) => {
  try {
    const stock = await Stock.findOne({
      product: req.params.productId,
    }).populate("product");
    if (!stock)
      return res.status(404).json({ error: "StockController not found" });
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

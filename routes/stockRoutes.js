const express = require("express");
const {
  getStockByProductId,
  updateStock,
} = require("../controllers/stockController");
const router = express.Router();

router.route("/:productId").get(getStockByProductId);
router.route("/").post(updateStock);

module.exports = router;

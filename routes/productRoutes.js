const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductByName,
  searchProducts,
} = require("../controllers/productController");
const router = express.Router();

router.route("/").post(createProduct);
router.route("/").get(getAllProducts);
router.route("/:id").get(getProduct);
router.route("/").get(getProductByName);
router.route("/update/:id").post(updateProduct);
router.route("/:id").delete(deleteProduct);
router.route("/search").delete(searchProducts);

module.exports = router;

const express = require("express");
const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.route("/").post(createCategory);
router.route("/").get(getAllCategories);
router.route("/:id").get(getCategory);
router.route("/update/:id").post(updateCategory);
router.route("/:id").delete(deleteCategory);

module.exports = router;

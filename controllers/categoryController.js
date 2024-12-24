const Category = require("../models/category");

//create a category
exports.createCategory = async (req, res) => {
  try {
    const categoryNameExist = await Category.findOne({ name: req.body.name });
    if (categoryNameExist) {
      return res.status(400).json({
        status: "fail",
        message: "Category name already exists",
      });
    }
    const category = await Category.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//list all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      data: {
        categories,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//get category by ID
exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//update category
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      res
        .status(404)
        .json({ message: `Category with id ${req.params.id} not found` });
    }
    const { name, description } = req.body;
    await Category.findByIdAndUpdate(category, { name, description });
    res.status(200).json({
      status: "success",
      message: "Category updated successfully!",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//delete category
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      res
        .status(404)
        .json({ message: `Category with id ${req.params.id} not found` });
    }
    res.status(200).json({
      status: "success",
      data: null,
      message: `Category deleted successfully!`,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const Product = require("../models/product");

//create a product
exports.createProduct = async (req, res) => {
  try {
    const productNameExist = await Product.findOne({ name: req.body.name });
    if (productNameExist) {
      return res.status(400).json({
        status: "fail",
        message: `Product with name ${req.body.name} already exists`,
      });
    }
    const product = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//get all existing products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//get a product by ID
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    // check if product exist
    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with id ${req.params.id} not found` });
    }
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get product by name(use query params instead of route params)
exports.getProductByName = async (req, res) => {
  try {
    const name = await req.query.name;
    // Find product by name
    const product = await Product.findOne({ name });
    // check if product exist
    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with name ${name} not found` });
    }
    console.log(name);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//update a product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const { name, description, price, category, stock, images } = req.body;
    if (!product) {
      res.status(400).json({
        message: `Product with id ${req.params.id} not found!`,
      });
    }
    await Product.findByIdAndUpdate(product, {
      name,
      description,
      price,
      category,
      stock,
      images,
    });
    res.status(200).json({
      status: "success",
      message: `Product updated successfully!`,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with id ${req.params.id} not found` });
    }
    res.status(200).json({
      status: "success",
      data: null,
      message: `Product deleted successfully!`,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

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

// search products
exports.searchProducts = async (req, res) => {
  try {
    const {
      name,
      category,
      minPrice,
      maxPrice,
      attributes,
      sortBy,
      order,
      page,
      limit,
    } = req.query;

    // Default values for pagination
    const pageNumber = parseInt(page, 10) || 1;
    const pageSize = parseInt(limit, 10) || 10;

    // Build the search query
    const query = {};

    // Search by name (case-insensitive partial match)
    if (name) {
      query.name = { $regex: name, $options: "i" };
    }

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Price range filter
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }

    // Filter by custom attributes
    if (attributes) {
      const attributeFilters = JSON.parse(attributes); // Expecting attributes as a JSON string
      for (const key in attributeFilters) {
        query[`attributes.${key}`] = attributeFilters[key];
      }
    }

    // Sort options (default to 'createdAt' descending)
    const sortField = sortBy || "createdAt";
    const sortOrder = order === "asc" ? 1 : -1;

    // Pagination
    const skip = (pageNumber - 1) * pageSize;

    // Fetch matching products
    const products = await Product.find(query)
      .sort({ [sortField]: sortOrder })
      .skip(skip)
      .limit(pageSize);

    // Total count for pagination
    const total = await Product.countDocuments(query);

    res.status(200).json({
      products,
      pagination: {
        total,
        page: pageNumber,
        pages: Math.ceil(total / pageSize),
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

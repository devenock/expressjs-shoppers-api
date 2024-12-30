const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxLength: [100, "Product name can not exceed 100"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      ref: "Category",
    },
    images: [
      {
        type: String,
      },
    ],
    variants: [
      {
        name: { type: String },
        options: [{ type: String }],
      },
    ],
  },
  { timestamps: true },
);

const Product = model("Product", productSchema);
module.exports = Product;

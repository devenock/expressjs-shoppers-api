const { Schema, model } = require("mongoose");

const transactionSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    type: { type: String, enum: ["sale", "restock", "return"], required: true },
    quantity: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

const Transaction = model("Transaction", transactionSchema);
module.exports = Transaction;

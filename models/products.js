const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const products = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  stock: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", products);
module.exports = { Product };

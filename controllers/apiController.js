const { Product } = require("../models/products");
const { validationResult } = require("express-validator");

module.exports = {
  user(req, res) {
    res.status(201).send("ruta del usuario");
  },

  async list(req, res) {
    const items = await Product.find();
    res.json({ items });
  },

  async listById(req, res) {
    const itemById = await Product.findById(req.params.id);
    res.json({ itemById });
  },

  async create(req, res) {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        const item = new Product(req.body);
        await item.save();
        res.status(201).json(item);
      } else {
        res.status(501), json(err);
      }
    } catch (error) {
      res.status(401).json(error);
    }
  },

  async edit(req, res) {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        await Product.findByIdAndUpdate(req.params.id, req.body);
        res
          .status(201)
          .json({ msg: "Se modifico el producto: " + req.params.id });
      } else {
        res.json(err);
      }
    } catch (error) {
      res.status(401).json(error);
    }
  },

  async delete(req, res) {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: "El producto se elimino de la base de datos" });
  },
};

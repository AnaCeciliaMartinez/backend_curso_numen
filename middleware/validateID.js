const { Product } = require("../models/products");
module.exports = validateID = async (req, res, next) => {
  try {
    const item = await Product.findById(req.params.id);
    if (item !== null) {
      next();
    } else {
      return res.status(501).json({ msg: "ID inválido" });
    }
  } catch (error) {
    res.json(error);
  }
};

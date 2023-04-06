const { check } = require("express-validator");

const createValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Se requiere el nombre del producto"),
  check("stock").not().isEmpty().withMessage("Stock requerido"),
  check("price").not().isEmpty().withMessage("El campo precio es requerido"),
];

module.exports = { createValidator };

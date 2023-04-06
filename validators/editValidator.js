const { check } = require("express-validator");

const editValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Se requiere el nombre del producto a editar"),
  check("stock")
    .not()
    .isEmpty()
    .withMessage("Stock requerido del producto a editar"),
  check("price")
    .not()
    .isEmpty()
    .withMessage("El campo precio es requerido para editar el producto"),
];

module.exports = { editValidator };

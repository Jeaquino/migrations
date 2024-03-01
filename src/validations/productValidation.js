const { body } = require("express-validator");
module.exports = [
  body("name")
    .notEmpty()
    .withMessage("Este campos no puede estar vacio")
    .bail()
    .isLength({ min: 3, max: 30 })
    .withMessage("Este campo debe tener una longitud entre 3 y 30 catacteres")
    .bail(),
  body("price")
    .notEmpty()
    .withMessage("Este campos no puede estar vacio")
    .bail()
    .isLength({ min: 3, max: 30 })
    .withMessage("Este campo debe tener una longitud entre 3 y 30 catacteres")
    .bail(),
  body("description")
    .notEmpty()
    .withMessage("Este campos no puede estar vacio")
    .bail()
    .isLength({ min: 3, max: 70 })
    .withMessage("Este campo debe tener una longitud entre 3 y 70 catacteres")
    .bail(),
  body("image")
    .notEmpty()
    .withMessage("Este campos no puede estar vacio")
    .bail(),
  body("category_id")
    .notEmpty()
    .withMessage("Este campos no puede estar vacio")
    .bail()
    .isInt()
    .withMessage("Este debe ser un numero entero")
    .bail(),
];

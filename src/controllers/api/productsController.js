const db = require("../../database/models");
const { validationResult } = require("express-validator");
const productosController = {
  create: async (req, res) => {
    const errores = validationResult(req);
    try {
      if (errores.isEmpty()) {
        const product = await db.Product.create(req.body);
        console.log(product);
        return res.status(200).send(product);
      } else {
        console.log("else",errores);
        const erroresMapeado = errores.mapped();
        for (const key in erroresMapeado) {
          delete erroresMapeado[key].type;
          delete erroresMapeado[key].location;
          delete erroresMapeado[key].path;
        }
        const errorJson = JSON.stringify(erroresMapeado)
        //return res.status(400).send(erroresMapeado);
        throw new Error(errorJson);
      }      
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message)
    }

  },
  all: (req, res) => {
    db.Product.findAll().then((resp) => {
      res.send(resp);
    });
  },
  update: (req, res) => {
    const errores = validationResult(req);
    const id = +req.params.id;
    console.log(typeof id);

    if (typeof id != "number") {
      return res.status(400).json({
        msg: "El valor indicado como ID debe ser un número entero",
        params: "id",
      });
    }

    if (errores.isEmpty()) {
      db.Product.findByPk(id).then((product) => {
        db.Product.update(req.body, {
          where: {
            id,
          },
        }).then()
      });
    } else {
      const erroresMapeado = errores.mapped();
      for (const key in erroresMapeado) {
        delete erroresMapeado[key].type;
        delete erroresMapeado[key].location;
        delete erroresMapeado[key].path;
      }

      res.status(400).send(erroresMapeado);
    }
  },
  destroy: (req, res) => {},
  getProduct: (req, res) => {},
};

module.exports = productosController;

const db = require("../database/models");

const productosController = {
  create: (req, res) => {
    const sizes = db.Size.findAll().catch(err => console.log(err))
    const colors = db.Color.findAll().catch(err => console.log(err))
    const products = db.Product.findAll().catch(err => console.log(err))


    Promise.all([sizes,colors,products]).then(([sizes,colors,products])=>{
      console.log("products: dentro del then");
        res.send([{sizes},{colors},{products}])
    })

    console.log("Despues del promise all");
  },
  all:(req,res)=>{
    db.Product.findAll().then(resp => {
      res.send(resp)
    })
  }
};

module.exports = productosController

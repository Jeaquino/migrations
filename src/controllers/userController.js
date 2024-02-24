const db = require("../database/models");
const bcrypt = require("bcrypt");

module.exports = {
  create: (req, res) => {
    const { name, surname, email, password, address, city, country, phone,province } = req.body;
          db.User.create({
            name,
            surname,
            email,
            password: bcrypt.hashSync(password, 10),
            avatar: req.file ? req.file.name : "default.jpg",
            rol_id: 2,
            phone
          }).then((resp) => {
            db.Address.create({ address, city, country,user_id:resp.dataValues.id,province }).then(resp => {
              db.User.findByPk(resp.dataValues.user_id, {include:{
                association:"addresses"
              }}).then( resp => {
                res.send(resp)
              })

            });
          })
          .catch((err) => console.log(err));
    },

  allUsers: (req, res) => {
    db.User.findAll({
      include: [
        { association: "addresses" },
        { association: "rols" },
        { association: "statuses" },
      ],
    })
      .then((response) => {
        res.send(response);
      })
      .catch((err) => console.log(err));
  },
  destroy: (req, res) => {
    db.User.destroy({
      where: { id: req.params.id },
    })
      .then((response) => {
        db.User.findAll({
          include: [
            { association: "addresses" },
            { association: "rols" },
            { association: "statuses" },
          ],
        })
          .then((users) => {
            res.send(users);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  },
};

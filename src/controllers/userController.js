const db = require("../database/models");

module.exports = {
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
    }).then((response) => {
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
    }).catch(err => console.log(err));
  },
};

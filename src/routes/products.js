const express = require('express');
const router = express.Router();
const {create,all} = require("../controllers/productsController");
/* GET users listing. */
router
.get('/createStock', create)
.get('/all', all)

module.exports = router;

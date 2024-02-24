const express = require('express');
const router = express.Router();
const {allUsers,destroy,create} = require("../controllers/userController");
/* GET users listing. */
router
.get('/', (req, res, next) => {res.send('respond with a resource');})
.get('/all', allUsers)
.get('/rols', (req, res, next) => {res.send('respond with a resource');})
.get('/address', (req, res, next) => {res.send('respond with a resource');})
.post('/createUser',create)
.get('/destroy/:id', destroy);

module.exports = router;

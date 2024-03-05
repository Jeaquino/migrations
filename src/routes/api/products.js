const express = require('express');
const router = express.Router();
const {create,all,update,destroy,getProduct} = require("../../controllers/api/productsController");
const {send,sendTemplate} = require("../../controllers/api/messageController");
const productValidator = require('../../validations/productValidation');
const validateApi = require('../../middleware/validateTokenApi');
/* GET users listing. */
router
.get('/all', all)
.get('/product/:id',validateApi, getProduct)
.post('/product', productValidator, create)
.put('/product/:id', productValidator, update)
.patch('/product/:id', update)
.delete('/product/:id', destroy)
.post('/sendMessage', send)
.post('/sendTemplate', sendTemplate)

module.exports = router;
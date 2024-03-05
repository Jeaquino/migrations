const express = require('express');
const router = express.Router();
const {viewMessage,verify} = require("../controllers/webhookController");
/* GET users listing. */
router
.get('/inbound/message', verify)
.post('/inbound/message', viewMessage)

module.exports = router;

const express = require('express');
const router = express.Router();
const {viewMessage} = require("../controllers/webhookController");
/* GET users listing. */
router
.get('/inbound/message', viewMessage)

module.exports = router;

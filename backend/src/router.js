const express = require('express');
const router = express.Router();

const userControl = require('./controllers/userControl')

router.post("/",userControl.store);

module.exports = router;
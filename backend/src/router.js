const express = require('express');
const router = express.Router();

const userControl = require('./controllers/userControl')

router.post("/",userControl.store);
router.post("/storequestion",userControl.storeQuestions);
router.get("/showquestion",userControl.showQuestion);

module.exports = router;
const User = require('../models/User');
const Question = require('../models/Question')

module.exports = {
    async store(req,res){
        const {name,password} = req.body;
        User.create({name,password})
        res.status(200).json({"status":"Deu tudo de bom"})
    },
    async storeQuestions(req,res){
        const {questions} = req.body;
        console.log(questions)
        Question.create({questions});
        res.status(200).json({"status":"Deu tudo de bom"})
    },

    async showQuestion(req,res){
        const datas = await Question.find();
        res.json(datas);
    }
}
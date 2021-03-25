const User = require('../models/User');

module.exports = {
    async store(req,res){
        const {name,password} = req.body;
        User.create({name,password})
        res.status(200).json({"status":"Deu tudo de bom"})
    },
}
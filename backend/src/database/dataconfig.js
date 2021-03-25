const mongodb = require('mongoose')

mongodb.connect("mongodb://localhost/test", {useNewUrlParser: true, useUnifiedTopology: true})
    .then( ()=> console.log("Mongodb conectado com sucesso!"))
    .catch( e =>{
        console.log("Falha ao iniciar Mongodb")
    })    

mongodb.Promise = global.Promise

module.exports = mongodb
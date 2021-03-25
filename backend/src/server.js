const express = require('express');
const app = express();
const router = require('./router');
require('dotenv').config();
app.use(express.json());


app.use(router);
app.listen(process.env.PORT,
    console.log(`Servidor está rodando na porta ${process.env.PORT}`));
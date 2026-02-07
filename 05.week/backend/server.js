const express = require('express');

const env = require('dotenv');
require('dotenv').config();

const app  = express();
const port = process.env.PORT;

app.use(express.json()); // add my first universal middleware 

app.use('/todo',require('./routers/todoRouter'))

app.listen(port,()=>{
    console.log('young man the server is started');
})
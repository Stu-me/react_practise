const express = require('express');
const env = require('dotenv').config();
const connectDb = require('./config/dbConnection')
const app  = express();
const port = process.env.PORT;
const errorHandler = require('./middlewares/errorHandler')

console.log("before server start");

connectDb();

console.log("after server start");


app.use(express.json()); // add my first universal middleware 

app.use('/todo',require('./routers/todoRouter'))

app.use(errorHandler);

app.listen(port,()=>{
    console.log('young man the server is started');
})
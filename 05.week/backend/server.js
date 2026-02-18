const express = require('express');
const env = require('dotenv').config();
const connectDb = require('./config/dbConnection')
const app  = express();
const port = process.env.PORT;
const errorHandler = require('./middlewares/errorHandler')

connectDb();

app.use(express.json()); // add my first universal middleware  to work with express.json

app.use('/todo',require('./routers/todoRouter'))

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`SERVER STARTED AT ${port}`);
})
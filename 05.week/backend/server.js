const express = require('express');
const env = require('dotenv');


const app  = express();
require('dotenv').config();
const port = process.env.PORT;


app.get('/todo',(req,res)=>{
    res.send("we made a basic server and ofc we will not be paid for this shit until I I I scale up ")
})

app.post('/todo',(req,res)=>{
    const name = req.body.name;
    res.send("his name is " + name);
});


app.listen(port,()=>{
    console.log('young man the server is started');
})
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/interest/:p/:r/:t",(req,res)=>{
    const p = req.params.p;
    const r = req.params.r;
    const t = req.params.t;

    if(!p || !r || !t){
        console.log("Enter all the values");
        process.exit(1);
    }
    const simpleInterest = (parseFloat(p)*parseFloat(r)*parseFloat(t))/100;
    res.json({simpleInterest});
})

app.listen(8000,()=>{
    console.log("server started");
})
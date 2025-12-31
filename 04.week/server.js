const express = require('express');
const cors = require('cors');


const app = express();

const port = 7000;

app.use(cors())

app.get('/sum/:firNum/:secNum/',(req,res)=>{
    const firNum = req.params.firNum;
    const secNum = req.params.secNum;
    const sum = parseInt(firNum)+parseInt(secNum);
    res.json({sum});
})

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
    
})
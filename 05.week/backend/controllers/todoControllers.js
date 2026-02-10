const { log } = require("async");

function getTodo(req, res){
   res.send("we made a basic server and ofc we will not be paid for this shit until I I I scale up ")
}

function postTodo(req,res){
    const name = req.body.name;
    const job = req.body.job;
    res.send("his name is " + name + "and his job is " + job);
}

function errorTodo(req,res){
   console.log("here we are bro");
   throw new Error("lets fucking go ");
}
module.exports = {getTodo ,postTodo , errorTodo};

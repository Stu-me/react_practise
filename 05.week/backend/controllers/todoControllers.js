function getTodo(req, res){
   res.send("we made a basic server and ofc we will not be paid for this shit until I I I scale up ")
}

function postTodo(req,res){
    const name = req.body.name;
    const job = req.body.job;
    res.send("his name is " + name + "and his job is " + job);
}

module.exports = {getTodo ,postTodo};

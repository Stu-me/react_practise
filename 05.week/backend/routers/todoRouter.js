const Router = require('router');
const router = Router();

router.get('/',(req,res)=>{
    res.send("we made a basic server and ofc we will not be paid for this shit until I I I scale up ")
})

router.post('/',(req,res)=>{
    const name = req.body.name;
    const job = req.body.job;
    res.send("his name is " + name + "and his job is " + job);
})

router.get('/look',(req,res)=>{
    res.send("yeah man thing is easier and cleaner in the folder structure ")
})

module.exports = router;
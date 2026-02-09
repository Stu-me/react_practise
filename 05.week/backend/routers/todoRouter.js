const Router = require('router');
const router = Router();
const {getTodo,postTodo} = require('../controllers/todoControllers')


router.get('/',getTodo())

router.post('/',postTodo())

router.get('/look',(req,res)=>{
    res.send("yeah man thing is easier and cleaner in the folder structure ")
})

module.exports = router;
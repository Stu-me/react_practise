const Router = require('router');
const router = Router();
const {getTodo, postTodo , errorTodo , putTodo ,importantTodo , starTodo} = require('../controllers/todoControllers')


router.get('/',getTodo)

router.post('/',postTodo)

router.put('/', putTodo)

router.get('/error',errorTodo)

router.get('/important' , importantTodo)

router.get('/star',starTodo)

module.exports = router;
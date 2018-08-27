const Router = require('koa-router');
const router = new Router();
const login = require('./login');
const articles = require('./articles');

router.post('/login', login);
router.get('/articles', articles);

module.exports = router;
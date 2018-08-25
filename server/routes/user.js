const router = require('koa-router');
const User = require('../models/user');

router.get('/', async ctx => {
  const uid = ctx.query.uid;
  const result = await User.detail(uid);
  ctx.body = result;
})
const Koa = require('koa');
const static = require('koa-static');
const bodyparser = require('koa-bodyparser');
const path = require('path');
const app = new Koa();
const router = require('./routes');

app.use(static(path.resolve(__dirname, '..', 'client/build')));
app.use(bodyparser());
app.use(router.routes());

app.listen(8080)

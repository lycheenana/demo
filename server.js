const Koa = require('koa');
const app = new Koa();
const Router = require('@koa/router');
const Static = require('koa-static');
const fs = require('fs');
const router = new Router();

// 静态文件请求，转到资源路径
app.use(Static(__dirname + '/dist/'));


// router.get('/', ctx => {
//     ctx.body = fs.readFileSync(__dirname + '/dist/index.html', 'utf-8');
// });
// app.use(router.routes());


app.listen(3000);
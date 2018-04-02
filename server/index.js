var koa = require('koa');
var app = new koa();
var router = require('koa-router')();
// CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
// 下面以koa2-cors为例，
const cors = require('koa2-cors');

const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
// 具体参数我们在后面进行解释
// app.use(cors({
//     origin: function (ctx) {
//         if (ctx.url === '/test') {
//             return "*"; // 允许来自所有域名请求
//         } else {
//             return '*';
//         }
//     },
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//     maxAge: 1728000,
//     credentials: true,
//     allowMethods: ['GET', 'POST', 'DELETE'],
//     allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }))


/*======================================================================*/
let ticketArr = ["000"];
const checkTicket = () => {
    const ticket = new Date().getTime() * Math.random();
    if (ticketArr.indexOf(ticket) == -1) {
        ticketArr.push(ticket)
        return ticket
    } else {
        return checkTicket()
    }
}
router.post('/loginIn', async function (ctx) {
    let result = {
        status: 200
    }
    result.ticket = checkTicket();
    ctx.body = result;
})
router.post('/loginOut', async function (ctx) {
    let result = {
        status: 200
    };
    const query = ctx.request.body;
    const ticket = query.ticket;
    ticketArr = ticketArr.splice(ticketArr.indexOf(ticket), 1);
    console.info(ticketArr);
    result.msg = 'ticket已注销';
    ctx.body = result
})
router.post('*', async function (ctx) {
    let result = {
    };
    console.log(ctx.url);
    const query = ctx.request.body;
    const ticket = query.ticket;
    ctx.response.status = 404;
    result.msg = "页面未找到";
    result.url = ctx.url;
    ctx.body = result
});
/*======================================================================*/

router.get('*', async function (ctx) {
    let result = {
    }
    ctx.response.status = 404;
    result.msg = "页面未找到";
    result.url = ctx.url;
    ctx.body = result
});
/*======================================================================*/

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('listening 3000')
});

const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
var cors = require('koa-cors');//解决跨域请求问题中间件
var User = require("./UserSchema.js");

app.use(cors());
app.use(bodyParser());
//引用外部user控制器
const UserRouter = require("./UserController.js");
app.use(UserRouter.routes()).use(UserRouter.allowedMethods());
//引用外部Company控制器
const CompanyRouter = require("./CompanyController.js");
app.use(CompanyRouter.routes()).use(CompanyRouter.allowedMethods());

app.listen(3000);

console.log("listen 3000")

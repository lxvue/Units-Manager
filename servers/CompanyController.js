
const Router = require('koa-router');
const router = new Router();
var User = require("./CompanySchema.js");

//翻页查询排序字段名称
let FirstSort = 'companyName'
let postUrl = '/Company';
//查询所有数据
router.post(postUrl+'/ddd', async ( ctx ,next) => {
  ctx.response.type = 'text/html';
  //console.log(ctx.query.TableId)
  ctx.body = ctx.request.body
	  //console.log(ctx)
	  const rows = parseInt(ctx.body.rows);
let pages = (parseInt(ctx.body.page) - 1)*rows;
console.log(pages);
console.log(typeof(rows));
let aa;
await User.find({}).skip(pages).limit(rows).sort({FirstSort:1}).then(function(res,err){
	  if (err) {
            aa= err;
        }
        else {
        console.log("Res:" + res);
        aa = res
        }
});
let total =await	User.find({}).count();
            
            aa = {"res":aa,"total":total,"status":true}
ctx.response.body = aa;
  	//ctx.response.body = await students.find({},{sort:{"text":1}},{limit:rows},{skip:pages});
});
//GetModel
router.post(postUrl+'/GetModel', async ( ctx ) => {
	ctx.response.type = 'text/html';
	  ctx.body = ctx.request.body;
//	  查询数据库
   	  var wherestr = {'_id' : ctx.body.companyID};
    
  await  User.find(wherestr).then(function(res, err){
        if (err) {
            ctx.response.body = "error"

        }
        else {
            console.log("Res:" + res);
            ctx.response.body = {"res":res,"status":true};
        }
    })
   	
})
//编辑
router.post(postUrl+'/Edit', async ( ctx ) => {
	ctx.response.type = 'text/html';
	  ctx.body = ctx.request.body;
	  console.log(ctx.body)
//	  查询数据库
	
   	    var wherestr = {'_id' : ctx.body.companyID};
    var updatestr = {
		"companyName":ctx.body.companyName,
		"companyProfile":ctx.body.companyProfile,
		"companyUsedName":ctx.body.companyUsedName,
		"companyAddress":ctx.body.companyAddress,
		"company_TEL":ctx.body.company_TEL,
		"paragraph":ctx.body.paragraph,
		"depositBank":ctx.body.depositBank,
		"bankAccount":ctx.body.bankAccount,
		"companyCoreCustomer":ctx.body.companyCoreCustomer,
		"parentCompany":ctx.body.parentCompany
		};
    
await    User.update(wherestr, updatestr).then(function (res, err) {//使用。then可以正常返回

        if (err) {
            ctx.response.body = "error"
						console.log(err)
        }
        else {
            ctx.response.body =true
        }

    })
})
//新增
router.post(postUrl+'/Add', async ( ctx ) => {
	ctx.response.type = 'text/html';
	  ctx.body = ctx.request.body;
	  console.log(ctx.body)
//	  查询数据库
	  //console.log(ctx.body.TableId)
	  //console.log(ctx.query.TableId)
   	
// for(let i =0;i<10000;i++){
// 			    let user = new User({
//      text : ctx.body.Name + Math.ceil(Math.random()*10)  ,                 //用户账号
//      parent : ctx.body.parent + Math.ceil(Math.random()*100)  ,                 //用户账号
//  });
//  user.save({});
//  console.log(i)
// 	}
   	let user = new User({
       "companyName":ctx.body.companyName,
       "companyProfile":ctx.body.companyProfile,
       "companyUsedName":ctx.body.companyUsedName,
       "companyAddress":ctx.body.companyAddress,
       "company_TEL":ctx.body.company_TEL,
       "paragraph":ctx.body.paragraph,
       "depositBank":ctx.body.depositBank,
       "bankAccount":ctx.body.bankAccount,
       "companyCoreCustomer":ctx.body.companyCoreCustomer,
       "parentCompany":ctx.body.parentCompany
    });

await  user.save({}).then(function (res, err) {//使用。then可以正常返回

        if (err) {
            ctx.response.body = "error"

        }
        else {
            ctx.response.body =true
        }

    });
   	
   //ctx.response.body ="success"	
   	
   	
   	
})
//删除
router.post(postUrl+'/Delate', async ( ctx ) => {
	  ctx.body = ctx.request.body;
//	  查询数据库
	  //let GetModel = await students.remove({"_id":ctx.body.TableId});
   	
   	    var wherestr = {'_id' : ctx.body.companyID};
    
  await  User.remove(wherestr).then(function (res, err) {//使用。then可以正常返回

        if (err) {
            ctx.response.body = "error"

        }
        else {
            ctx.response.body =true
        }

    })
   	
   	
   	
})

module.exports = router;

//console.log("listen 3000")

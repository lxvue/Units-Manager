# Units-Manager
单位体制内管理
//项目有axios组件，less组件，elementui组件，koa组件，mongoose组件

axios使用方法
a.引入 var qs = require('qs');
b.   			this.$ajax({
						      method: 'post',
						      url: _that.URL+'/ddd',
						      data:qs.stringify({'page': _that.page ,'rows': _that.rows })
						   }).then(function(res){
							  console.log(res);
							})
							.catch(function(err){
							  console.log(err);
							})

less使用方法
<!-- <style scoped="scoped" lang="less">
	.bb{
		color: red;
		.cc{
			color: green;
		}
	}
	
</style> -->

//1.cnpm install  下载相关组件

//2.cnpm run dev  运行项目

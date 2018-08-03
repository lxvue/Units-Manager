# Units-Manager
单位体制内管理、、修改1

//项目有axios组件，less组件，elementui组件，koa组件，mongoose组件

axios使用方法

a.

引入 var qs = require('qs');

b.   			

					this.$ajax({
	
						      method: 'post',
							  
						      url: _that.URL+'/ddd',
							  
						      data:qs.stringify({'page': _that.page ,'rows': _that.rows })
							  
						   }).then(function(res){
							   
							  console.log(res);
							  
							})
							
							.catch(function(err){
								
							  console.log(err);
							  
							})
							
c.table事件如何调用

例如：单击事件

在el-table中加入@cell-click="tableClick()"

在methods中tableClick方法中就可直接调用，并输出响应参数

cell-click	当某个单元格被点击时会触发该事件	row, column, cell, event

less使用方法

 <style scoped="scoped" lang="less">
 
	.bb{
		
		color: red;
		
			.cc{
				
				color: green;
				
			}
		
	}
	
</style> 

js跳转

_that.$router.push({ path: '/' });//跳转页面，且可以携带参数

USE

1.cnpm install  下载相关组件

2.cnpm run dev  运行项目

》》》》》》》》》》》》》》》》》》》》》》》》》

项目结构

1.四大模块

	a.Login -->登录页面
	
	b.Person -->个人信息
	
	c.Company -->公司单位
	
	d.School -->学校单位
	
	e.Main -->展示主页面
	
	f.Home -->后台主页面

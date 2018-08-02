<template>
    <div class="body">
		<el-row :gutter="15">
			<el-col :span="8" class="Search">
						  <el-input size="small" placeholder="请输入内容" v-model="input5" class="input-with-select">
						<!-- 	<el-select v-model="select" slot="prepend" placeholder="请选择">
							  <el-option label="餐厅名" value="1"></el-option>
							  <el-option label="订单号" value="2"></el-option>
							  <el-option label="用户电话" value="3"></el-option>
							</el-select> -->
							<el-button slot="append" icon="el-icon-search"></el-button>
						  </el-input>
			</el-col>
			<el-col :span="8" :offset="8">
					<el-row class="button_group">
					  <el-button size="mini" type="" plain icon="el-icon-refresh">刷新</el-button>	
					  <el-button size="mini" type=""  @click="dialogFormVisible = true" plain icon="el-icon-plus">
						  新增
					  </el-button>
					  <el-button size="mini" type="" plain icon="el-icon-edit" @click="EditFun()">编辑</el-button>
					  <el-button size="mini" type="" plain icon="el-icon-delete">删除</el-button>
					</el-row>
			</el-col>
		</el-row>
		
         <el-table
			:data="tableData3"
			height="550"
			border
			style="width: 100%">
			<el-table-column
			  prop="account"
			  label="账号"
			  width="">
			</el-table-column>
			<el-table-column
			  prop="passward"
			  label="密码"
			  width="">
			</el-table-column>
			<el-table-column
			  prop="name"
			  label="姓名">
			</el-table-column>
			<el-table-column
			prop="sex"
			label="性别">
			</el-table-column>
		  </el-table>
		  
		  <!-- 新增 -->
		<el-dialog title="新增用户信息" :visible.sync="dialogFormVisible">
			<el-form :model="form">
			<el-form-item label="账号" :label-width="formLabelWidth">
				<el-input v-model="form.account" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="密码" :label-width="formLabelWidth">
			<el-input v-model="form.passward" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="名称" :label-width="formLabelWidth">
			<el-input v-model="form.name" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="性别" :label-width="formLabelWidth">
				<el-select v-model="form.sex" placeholder="请选择">
				<el-option label="男" value="男"></el-option>
				<el-option label="女" value="女"></el-option>
				</el-select>
			</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="queryMessage()">确 定</el-button>
			</div>
		</el-dialog>
		
		<!-- 编辑 -->
    </div>


</template>

<script>
	//表单新增页面
	import Add from './Add.vue'
	//编辑页面
	import Edit from "./Edit.vue"
	//引用axios
	var qs = require('qs');//引用qs，下方axios方法里，才能在使用qs.stringify（）；
	
  export default {
    data() {
      return {
      input5: '',
      select: '',
        tableData3: [],//table数据
		dialogFormVisible: false,//弹窗的显示属性	
			form: {//表单数据
				account: '',
				name: '',
				passward: '',
				sex: ''
				},
				formLabelWidth:"80px",//表单输入框宽度
			URL:"http://localhost:3000"	,//提交地址
			rows:20, //单页总数
			page:1  //页码
      }
    },
	components:{
		
	}, 
	methods:{
		  queryMessage(){//表单提交
			  console.log(this.form);
			  let _that = this;
			  //获取账号密码和名称
			  if(this.form.account == ""||this.form.passward == ""||this.form.name == ""||this.form.sex == ""){
				  _that.$message.error('不可以为空');
			  }else{
				  //上传数据
					this.$ajax({
								method: 'post',
								url: _that.URL+'/Add',
								data:qs.stringify({
									'account': _that.form.account ,		
									'name': _that.form.name ,		
									'passward': _that.form.passward ,			
									'sex': _that.form.sex 
									})
						}).then(function(res){
							console.log(res);
							if(res.data == "success"){
								dialogFormVisible = false;//关闭弹窗
								
							}
						})
						.catch(function(err){
							console.log(err);
						})
			  }
		  },
		  //加载列表
		 Show(){
			 let _that = this;
				this.$ajax({
							method: 'post',
							url: _that.URL+'/ddd',
							data:qs.stringify({
								'page': _that.form.page ,		
								'rows': _that.form.rows
								})
					}).then(function(res){
						console.log(res);
						_that.tableData3 = res.data.res;
					})
					.catch(function(err){
						console.log(err);
					})		
		 }
	},
	mounted(){//钩子函数,
			//let _that = this;
			this.Show();//在页面渲染完成后，加载Show（）方法，从后端抓取数据			
								
		},
  }
</script>
<style scoped="scoped" lang="less">
	.body{
		line-height: 20px !important;
	}
	.Search{
		.el-input{
			max-width: 240px;
			float: left;
		}
		
	}
	.button_group{
			float: right;
	}
	.el-table{
		margin-top: 10px;
	}
</style>
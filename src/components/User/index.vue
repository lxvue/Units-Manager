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
					  <el-button size="mini" type=""  @click="Add()" plain icon="el-icon-plus">
						  新增
					  </el-button>
					  <el-button size="mini" type="" plain icon="el-icon-edit" @click="Edit()">编辑</el-button>
					  <el-button size="mini" type="" plain icon="el-icon-delete" @click="Delate()">删除</el-button>
					</el-row>
			</el-col>
		</el-row>
		<!-- highlight-current-row//可单选 -->
		<!-- current-change单选事件 -->
         <el-table
			:data="tableData3"
			ref="singleTable"
			highlight-current-row
			@current-change="tableClick"
			height="550"
			border
			style="width: 100%">
			<el-table-column
			prop="_id"
			label="UserID"
			v-if="false"<!-- 隐藏id -->
			width="">
			</el-table-column>
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
		<el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				
			<el-form-item label="账号" :label-width="formLabelWidth" >
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
				<el-button type="primary" v-show="AddShow" @click="AddImport()">确 定</el-button>		
				<el-button type="primary" v-show="EditShow" @click="EditImport()">确 定</el-button>
			</div>
		</el-dialog>
		
		<!-- 编辑 -->
    </div>


</template>

<script>
	//引用axios
	var qs = require('qs');//引用qs，下方axios方法里，才能在使用qs.stringify（）；
	
  export default {
    data() {
      return {
      input5: '',
      select: '',
	  UserID:'',
	  AddShow:"",
	  EditShow:'',
	  dialogTitle:"",
        tableData3: [],//table数据
		dialogFormVisible: false,//弹窗的显示属性	
			form: {//表单数据
				account: '',
				name: '',
				passward: '',
				sex: '',
				_id:''
				},
				formLabelWidth:"80px",//表单输入框宽度
			URL:"http://localhost:3000/User"	,//提交地址
			rows:20, //单页总数
			page:1,  //页码
			//currentRow: null
      }
    },
	components:{
		
	}, 
	methods:{
		  AddImport(){//表单提交
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
							if(res.data){
								_that.dialogFormVisible = false;//关闭弹窗
								_that.$message.success('数据已保存');
								_that.Show();//刷新列表
							}else{
								_that.$message.error('获取失败');
							}
						})
						.catch(function(err){
							console.log(err);
							_that.$message.error('获取失败');

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
						//console.log(res);				
						//console.log(res.data.res[0]._id);
						if(res.data.status){
							_that.tableData3 = res.data.res;
						}else{
							_that.$message.error('获取失败');

						}
						
					})
					.catch(function(err){
						console.log(err);
						_that.$message.error('获取失败');

					})		
		 },
		 //点击编辑
		 Edit(){
			 let _that = this;
			 this.AddShow=false;		
			 this.EditShow=true;
			 this.dialogTitle = "用户信息编辑";
			 //先依据UserID是否为空，判断有选择行
			 //console.log(_that.UserID)
			 if(this.UserID == ""){
				 this.$message({
				  message: '请选择相关信息',
				  type: 'warning'
				});
			 }else{
				 let _that = this;
				 this.$ajax({
				 			method: 'post',
				 			url: _that.URL+'/GetModel',
				 			data:qs.stringify({
				 				'UserID': _that.UserID
				 				})
				 	}).then(function(res){
				 		console.log(res);				
				 		//console.log(res.data.res[0]._id);
				 		
						if(res.data.status){
							_that.form = res.data.res[0];
							_that.dialogFormVisible = true;
						}else{
							
							_that.$message.error('连接失败');
						}
				 	})
				 	.catch(function(err){
				 		console.log(err);
						_that.$message.error('连接失败');

				 	})
			 }
		 },
		 //表格点击事件
		 tableClick(rows){
			 //console.log(123123);			
			 //console.log(rows);
			 if(rows!==undefined&&rows!==null){//解决有表单选中时刷新表单bug
				 this.UserID = rows._id;//给userID赋值
			 }
			 //this.currentRow = rows;
		 },
		 //编辑事件
		 EditImport(){
			 let _that = this;
			//获取账号密码和名称
			  if(this.form.account == ""||this.form.passward == ""||this.form.name == ""||this.form.sex == ""){
				  _that.$message.error('不可以为空');
			  }else{
				  //上传数据
					this.$ajax({
								method: 'post',
								url: _that.URL+'/Edit',
								data:qs.stringify({
									'UserID': _that.UserID,
									'account': _that.form.account ,		
									'name': _that.form.name ,		
									'passward': _that.form.passward ,			
									'sex': _that.form.sex 
									})
						}).then(function(res){
							//console.log(res);
							if(res.data){
								_that.dialogFormVisible = false;//关闭弹窗
								_that.$message.success('数据已保存');
								//_that.setCurrent();
								_that.Show();//刷新列表
							}else{
								
								_that.$message.error('提交失败');
							}
						})
						.catch(function(err){
							console.log(err);
							_that.$message.error('连接失败');

						})
			  }
		 },
		 //点击新增
		 Add(){
			 this.dialogFormVisible = true;
			 this.dialogTitle = "用户信息新增";
			 this.AddShow=true;		
			 this.EditShow=false;
			 this.ClearFromDatas();
			 
		 },
		 //清楚form事件
		 ClearFromDatas(){
			 this.form.account = "";		
			 this.form.passward = "";		
			 this.form.name = "";
			 this.form.sex = "";
			 this.form._id = "";
			 
		 },
		 //取消选中
		setCurrent(row) {
			this.$refs.singleTable.setCurrentRow(row);
      },
	  //删除
	  Delate(){
		  let _that = this;
		  
		    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					  confirmButtonText: '确定',
					  cancelButtonText: '取消',
					  type: 'warning'
					}).then(() => {
					this.$ajax({
							method: 'post',
							url: _that.URL+'/Delate',
							data:qs.stringify({
								'UserID': _that.UserID
								})
					}).then(function(res){
						console.log(res);				
						//console.log(res.data.res[0]._id);
						
						if(res.data){
							_that.$message.error('数据已删除');
							_that.Show();//刷新列表

						}else{
							
							_that.$message.error('删除失败');
						}
					})
					.catch(function(err){
						console.log(err);
						_that.$message.error('连接失败');
 
					})
					}).catch(() => {
					  this.$message({
						type: 'info',
						message: '已取消删除'
					  });          
					});
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
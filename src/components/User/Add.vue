<template>
<el-dialog  :visible.sync="$store.state.show">
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
				<el-button @click="$store.state.show = false">取 消</el-button>
				<el-button type="primary" v-show="$store.state.addShow" @click="AddImport()">确 定</el-button>	
			</div>
		</el-dialog>
</template>
<script>
	//引用axios
	var qs = require('qs');//引用qs，下方axios方法里，才能在使用qs.stringify（）；
    export default {
        data() {
            return {
				AddShow:"",
				EditShow:'',
				form: {
				account: '',
				name: '',
				passward: '',
				sex: ''
				},
				formLabelWidth:"80px",
				URL:"http://localhost:3000/User"	,//提交地址
            }
        },
		props:{
			imputVal:String
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
											_that.$store.state.show = false;
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
		}
    }
</script>
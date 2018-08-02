<template>
	<el-form :model="user" :rules="rules" ref="ruleForm" label-width="80px" class='loginBox'>
		<h1>后台登录</h1>
		<el-form-item label="用户名" prop="username" class="delu-box">
			<el-input v-model="user.username" placeholder="请输入用户名"></el-input>
		</el-form-item>
		<el-form-item label="密 码" prop="password" class="login-password delu-box">
			<el-input v-model="user.password" placeholder="请输入密码" type="password" @keyup.native.enter="handleSubmit"></el-input>
		</el-form-item>
		<el-form-item class="delu-box">
			<el-button type="primary" @click.native.prevent="login" :loading="btnLoading" style="float: left;">登录
			</el-button>
			<el-button @click.native.prevent="handleReset" style="float: right;">重置</el-button>
		</el-form-item>
	</el-form>

</template>

<script>
	export default {
		data() {
			return {
				user: {
					username: '',
					password: ''
				},
				rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password: [
						{ required: true, message: '请输入登录密码', trigger: 'blur' }
					]
				}
			 }
			},
			methods: {
				login() {
					this.$refs.ruleForm.validate((valid) => {
						if(valid) {
//							console.log('2222222222')
							this.user.password = Md5.md5(this.user.password)
							this.$store.dispatch('login', this.user).then(() => {
								axios({
									method: 'post',
									url: this.uploadAddr + 'public/getToken',
									data: {
										data: this.user.username + new Date().getTime()
									}
								}).then(response => {
									window.localStorage.setItem('token', response.data)
									axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token')
								})
								this.$router.push({ path: '/admin' })
							}).catch(err => {
								this.$message.error(err)
							})
						}
					})
				},
				handleReset() {
					this.$refs.ruleForm.resetFields()
				},
				handleSubmit() {
					this.login()
				}

			}
		}
			
</script>
<style>
	.loginBox{
		    max-width: 30%;
            min-width: 300px;
            height:300px;
            position: absolute;
		    margin: auto;
		    left: 0;
		    right: 0;
		    top: 0;
		    bottom: 0;
		   
	}
	h1{
		text-align: center;
		margin-bottom:20px;
	}
	
	
</style>
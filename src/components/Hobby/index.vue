<template>
	<div class="body">
		兴趣爱好
	<!-- 	<input type="text" v-model="account">	
		mima
		<input type="text" v-model="passward">
		{{account}} -->
		<button @click="Login">点我</button>
	</div>
</template>
<script>
	var qs = require('qs');//引用qs，下方axios方法里，才能在使用qs.stringify（）；

  export default {
	  data(){
		  return{
			  account:"",			
				passward:"",
				URL:"http://localhost:3000/User"	,//提交地址

		  }
	  },
		methods:{
			Login(){
				let _that = this;
				this.$ajax({
												method: 'post',
												url: _that.URL+'/Login',
												data:qs.stringify({
													'account': _that.account,		
													'passward': _that.passward 
													})
										}).then(function(res){
											console.log(res);
										
										})
										.catch(function(err){
											console.log(err);
				
										})
			}
		},
  }
</script>
<style scoped="scoped" lang="less">

</style>
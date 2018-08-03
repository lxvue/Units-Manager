<!-- <template>
	<div class="body">
		<span>{{imputVal}}</span>
		<input type="text" v-model="imputVal">
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
			<el-select v-model="form.sex" placeholder="请选择活动区域">
			<el-option label="男" value="0"></el-option>
			<el-option label="女" value="1"></el-option>
			</el-select>
		</el-form-item>
		</el-form>
	</div>
</template>
<script>
    export default {
        data() {
            return {
				form: {
				account: '',
				name: '',
				passward: '',
				sex: ''
				},
				formLabelWidth:"80px",
            }
        },
		props:{
			imputVal:String
		},
    }
</script> -->
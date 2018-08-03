<!-- <template>
	<div class="body">
		<span>{{EditStatus}}</span>
		<el-dialog title="新增用户信息" :visible.sync="EditStatus">
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
		<div slot="footer" class="dialog-footer">
			<el-button @click="EditStatus = false">取 消</el-button>
			<el-button type="primary" @click="SendMessage()">确 定</el-button>
		</div>
		</el-dialog>
	</div>
</template>
<script>
    export default {
        data() {
            return {
				// EditStatus:true,
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
			EditStatus:Boolean
		},
		methods:{
			SendMessage(){
				this.EditStatus = false;//关闭当前对话框
				 // 第二个参数this.childValue是需要传的值
				 let ChildValues = this.form;
				this.$emit('childByValue', ChildValues);//传参给父组件
			}
		},
    }
</script> -->
<template>
	<div class="body">
	<el-container style="height: 100vh;">
		<el-header>
			<el-row :gutter="24">
			<el-col :span="6">
				<div class="title">单位体制内管理系统</div>
				</el-col>
			<el-col :span="6" :offset="12">
				<div class="admin_name pop_pointer">
					<!-- 你好！{{admin_title}}
					<i class="el-icon-arrow-down"></i> -->
						<el-dropdown trigger="click">
							 <el-tooltip class="item" effect="dark" content="点击查看" placement="bottom">
									<span class="el-dropdown-link admin_greetings">
										你好！{{admin_title}}
										<i class="el-icon-arrow-down"></i>
									</span>
							</el-tooltip>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>查看信息</el-dropdown-item>
								<el-dropdown-item>更改密码</el-dropdown-item>
								<el-dropdown-item>
									<el-button type="text" @click="open7">安全退出</el-button>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					
				<img class="admin_img " src="../../assets/Administrator.jpg" alt="">
				
			</el-col>
		</el-row>
		</el-header>
		<el-container>
			<el-aside width="200px" >
				<NavMenu></NavMenu>
			</el-aside>
			<el-container>
				<el-main>
					<router-view></router-view>
				</el-main>
				<el-footer>
					
						<el-row :gutter="24">
						<el-col :span="12" class="footer_left">
							版本v1.0 | Copy right2018 | 21世纪强强组合
							</el-col>
						<el-col :span="12" class="footer_right">
							@技术支持:圆圆/雪萍
						</el-col>
					</el-row>
				</el-footer>
			</el-container>
		</el-container>
	</el-container>
	</div>
</template>

  <script>
		// <!-- 引入左侧导航菜单 -->
		import NavMenu from "./NavMenu.vue"
    export default {
      data() {
        return {
					admin_title:"管理员"
        }
      },
			components:{
				"NavMenu":NavMenu
			},
			   methods: {
						open7() {
							var _that = this;
							this.$confirm('退出后将进入登陆页面, 是否继续?', '提示', {
								confirmButtonText: '确认',
								cancelButtonText: '取消',
								type: 'warning',
								center: true
							}).then(() => {
								this.$message({
									type: 'success',
									message: '退出成功!'
								});
								_that.$router.push({ path: '/' });//跳转页面，且可以携带参数
							}).catch(() => {
								this.$message({
									type: 'info',
									message: '已取消'
								});
							});
						}
    }
    }
  </script>
  <style scoped="scoped" lang="less">
		.body{
			font-size: 12px;
		}
  .el-header{
	background-color: #506AA5;
	color: #333;
	text-align: center;
	line-height:  60px; 
	font-family:"PingFang SC" !important;
	//height: 200px !important;
  }
  .el-aside {
  background: #EFF3F5;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
  }
  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-footer {
  background-color: #2E99D5;
  color: #333;
  // text-align: right;
	height: 30px !important;
  line-height: 30px;
	font-size: 12px;
	color: white;
	.footer_left{
		text-align: left;
		}
		.footer_right{
				text-align: right;
			}
  }
	.title{
		font-size: 22px;
		letter-spacing: 2px;
		text-shadow: 0px 5px 5px #000;
		color: white;
	}
	.admin_img{
		display: inline-block;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		margin-top: 12px;
		float: right;
		margin-right: 10px;
	}
	.admin_name{
		float: right;
		color: white;
		font-size: 12px;
	}
	.admin_greetings{
		color: white;
		border-color: red !important;
	}
</style>
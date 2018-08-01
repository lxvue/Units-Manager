<template>
	<div>
	<el-container style="height: 100vh;">
		<el-header>单位体质内管理</el-header>
		<el-container>
			<el-aside width="200px" >Aside</el-aside>
			<el-container>
				<el-main>Main</el-main>
				<el-footer>
					@技术支持:圆圆/雪萍
				</el-footer>
			</el-container>
		</el-container>
	</el-container>
	</div>
</template>
  <script>
    export default {
      data() {
        return {
			
        }
      }
    }
  </script>
  <style scoped="scoped" lang="less">

  
 
  

  
  
  .el-header{
	background-color: #7ED8A9;
	color: #333;
	text-align: center;
	line-height:  60px; 
	//height: 200px !important;
  }
  .el-aside {
  background-color: #D3DCE6;
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
  background-color: gray;
  color: #333;
  text-align: center;
  line-height: 60px;
  }
</style>
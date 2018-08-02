<template>
	<div class="body">
		 <el-col :span="24">
    <!-- <h5>导航</h5> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo menu"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          
			<router-link to="/Home/User">
				<el-menu-item index="1-1">
					<i class="el-icon-mobile-phone"></i>
					用户管理
				</el-menu-item>
			</router-link>
         <!-- <el-menu-item index="1-2">选项2</el-menu-item>
		  <el-menu-item index="1-3">选项3</el-menu-item> -->

        </el-menu-item-group>
       <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group> -->
       <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
	  <el-submenu index="2">
	          <template slot="title">
	            <i class="el-icon-tickets"></i>
	            <span>信息中心</span>
	          </template>
	          <el-menu-item-group>
				  <router-link to="/Home/Company">
				  	<el-menu-item index="2-1">
				  		<i class="el-icon-star-on"></i>
				  		单位信息
				  	</el-menu-item>
				  </router-link>
				  <router-link to="/Home/School">
					  <el-menu-item index="2-2">
						<i class="el-icon-view"></i>
						学校信息
						</el-menu-item>
				  </router-link>
	           <router-link to="/Home/Person">
					<el-menu-item index="2-3">
						<i class="el-icon-menu"></i>
						客户信息
						</el-menu-item>
	           </router-link>
	  		  
	  
	          </el-menu-item-group>
	        </el-submenu>
			<el-submenu index="3">
					<template slot="title">
					<i class="el-icon-setting"></i>
					<span>数据服务</span>
					</template>
					<el-menu-item-group>
						<router-link to="/Home/StudyExprience">
						<el-menu-item index="3-1">
							<i class="el-icon-star-on"></i>
							学习经历
						</el-menu-item>
						</router-link>
						<router-link to="/Home/WorkExprience">
							<el-menu-item index="3-2">
							<i class="el-icon-view"></i>
							工作经历
							</el-menu-item>
						</router-link>
					<router-link to="/Home/Hobby">
						<el-menu-item index="3-3">
							<i class="el-icon-menu"></i>
							兴趣爱好
							</el-menu-item>
					</router-link>
					<router-link to="/Home/Relation">
						<el-menu-item index="3-3">
							<i class="el-icon-star-off"></i>
							客户关系
							</el-menu-item>
					</router-link>
			
					</el-menu-item-group>
				</el-submenu>
   
    </el-menu>
  </el-col>
	</div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped="scoped" lang="less">
	.body{
		font-size: 24px !important;
	}
	.menu{
		background: #EFF3F5;
		
	}
	span{
		font-size: 14px !important;
	}
	li{
		font-size: 12px !important;

	}
	a{
		text-decoration: none;
		line-height: 10px;
		i{
			font-size: 16px !important;
			vertical-align: 0px !important;
		}
	}
	
</style>
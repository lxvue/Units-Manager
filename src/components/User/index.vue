<template>
    <div class="body">
		<el-row :gutter="24">
			<el-col :span="8" class="Search">
				
				<el-row>
					<el-col>
						<el-input size="mini" placeholder="请输入内容" v-model="input4" class="input-with-select">
							<el-select v-model="select" slot="prepend" placeholder="请选择">
							<el-option label="餐厅名" value="1"></el-option>
							<el-option label="订单号" value="2"></el-option>
							<el-option label="用户电话" value="3"></el-option>
							</el-select>
							<el-button slot="append" icon="el-icon-search"></el-button>
						</el-input>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="8" :offset="8">
					<el-row class="button_group">
					  <el-button size="mini" type="primary" plain icon="el-icon-refresh">刷新</el-button>	
					  <el-button size="mini" type="primary" plain icon="el-icon-plus">新增</el-button>
					  <el-button size="mini" type="primary" plain icon="el-icon-edit">编辑</el-button>
					  <el-button size="mini" type="primary" plain icon="el-icon-delete">删除</el-button>
					</el-row>
			</el-col>
		</el-row>
		
		
         <el-table
			:data="tableData3"
			height="550"
			border
			style="width: 100%">
			<el-table-column
			  prop="date"
			  label="日期"
			  width="180">
			</el-table-column>
			<el-table-column
			  prop="name"
			  label="姓名"
			  width="180">
			</el-table-column>
			<el-table-column
			  prop="address"
			  label="地址">
			</el-table-column>
		  </el-table>
    </div>


</template>

<script>
  export default {
    data() {
      return {
		  input4:"",
		  select:"666",
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
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
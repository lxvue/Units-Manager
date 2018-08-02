<template>
	<div class='body'>
		<div class='search'>
			<el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
				<!--<el-select v-model="select" slot="prepend" placeholder="请选择">
					<el-option label="姓名" value="1"></el-option>
					<el-option label="电话" value="2"></el-option>
					<el-option label="住址" value="3"></el-option>
				</el-select>-->
				<el-button slot="append" icon="el-icon-search"></el-button>
			</el-input>
		</div>
		<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" class='tablegrid'>
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column label="日期" width="120">
				<template slot-scope="scope">{{ scope.row.date }}</template>
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120">
			</el-table-column>
			<el-table-column prop="phone" label="电话" width="120">
			</el-table-column>
			<el-table-column prop="address" label="地址" show-overflow-tooltip>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					<el-button size="mini" type="success" @click="handleCheck(scope.$index, scope.row)">查看</el-button>
				</template>
			</el-table-column>
		
		</el-table>
		<div class="block pagination">
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage4"
		      :page-sizes="[100, 200, 300, 400]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="400">
		    </el-pagination>
  		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input5: '',
				select: '',
				currentPage4: 1,
				tableData3: [{
					date: '2016-05-03',
					name: '王小虎',
					phone: '15801617784',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '张二牛',
					phone: '15801617784',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '赵小六',
					phone: '15801617784',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					phone: '15801617784',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					phone: '15801617784',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					phone: '15801617784',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					phone: '15801617784',
					address: '上海市普陀区金沙江路 1518 弄'}],
multipleSelection: []
}
},
methods: {
	handleEdit(index, row) {
		console.log(index, row);
	},
	handleDelete(index, row) {
		console.log(index, row);
		this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
		}).then(() => {
			this.$message({
				type: 'success',
				message: '删除成功!'
			});
		}).catch(() => {
			this.$message({
				type: 'info',
				message: '已取消删除'
			});
		});
	},
	handleCheck(index, row) {
		console.log(index, row);
		 this.$alert(row.date+"、"+row.name+"、"+row.phone+"、"+row.address, {
          dangerouslyUseHTMLString: true
        });
	},
	handleSizeChange(val) {
		console.log(`每页 ${val} 条`);
	},
	handleCurrentChange(val) {
		console.log(`当前页: ${val}`);
	},
	handleSelectionChange(val) {
		this.multipleSelection = val;
	}
}
}</script>
<style scoped="scoped" lang="less">
	.body {
		line-height: 20px !important;
	}
	
	.search {
		max-width: 300px;
	}
	.tablegrid{
		margin-top:30px;
	}
	.el-table th {
    white-space: nowrap;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center !important;
}

	.pagination{
	   	float:right;
	   	margin-top:20px;
	   }
</style>
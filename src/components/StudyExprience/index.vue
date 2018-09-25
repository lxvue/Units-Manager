<template>
	<div class="body">
		学习经历
		<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
	</div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
			datass:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
				let mm = this.datass;
				//alert(mm)
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: mm.map(function (item) {
                return item[0];
            })
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  }
}
</script>
<style scoped="scoped" lang="less">

</style>
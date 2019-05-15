<template>
  <div id="echart">
    <!--创建一个echarts的容器-->
    <div :id="id" :style="{'width':width+'px', 'height':height+'px'}"></div>
  </div>
</template>

<script>
  // const echarts = require('echarts');
  import echarts from 'echarts';
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      width: {
        type: Number,
        required: true
      },
      height: {
        type: Number,
        required: true
      }
    },
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(this.id));
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
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
</script>
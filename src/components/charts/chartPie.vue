<template>
  <div id="chart-pin">
    <!--创建一个echarts的容器-->
    <!--:style="{'height':height+'px'}"-->
    <div :id="id" style="width: 100%;" :style="{'height':height+'px'}"></div>
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
      },
      data: {
        type: Object
      }
    },
    mounted() {

    },
    watch: {
      data(value) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById(this.id));
        // 绘制图表
        myChart.setOption(value);
      }
    }
  }
</script>
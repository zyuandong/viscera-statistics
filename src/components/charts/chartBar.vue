<template>
  <div id="chart-bar">
    <!--:style="{'height':height+'px'}" -->
    <div :id="id" style="width: 100%;" :style="{'height':height+'px'}"></div>
  </div>
</template>

<script>
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
        type: Object,
        required: true
      }
    },
    mounted() {

    },
    watch: {
      data(value) {
        let myChart = echarts.init(document.getElementById(this.id));
        myChart.setOption(value);
      }
    }
  }
</script>
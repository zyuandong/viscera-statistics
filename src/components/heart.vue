<template>
  <div id="heart">
    <router-link to="/menu">返回</router-link>
    <div class="clearfix">
      <div class="pull-left width-4 p-10 block-d">
        <div class="clearfix">
          <div class="title-box">心脏数据</div>
        </div>
        <div class="main-box">
          <!--:key 为此组件的特殊标识，不能用作向子组件传值-->
          <ChartBar
            :id="'chart1'"
            :width = 500
            :height = 500
          ></ChartBar>
        </div>

        <div class="sub-title">
          <span class="main-text">心动周期</span><span class="sub-text">分析</span>
          <span class="sub-title-line w-6"></span>
        </div>
      </div>
      <div class="pull-left width-6 p-10 block-c">
        <div class="sub-title">
          <span class="main-text">正常心率</span><span class="sub-text">统计</span>
          <span class="sub-title-line w-6"></span>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="height:10px;"></div>
          <div class="pull-left">
            <ChartBar
              :id ="'chart2'"
              :width = 300
              :height = 300
            ></ChartBar>
          </div>
          <div class="pull-left">
            <ChartBar
              :id = "'chart3'"
              :width=300
              :height=300
            ></ChartBar>
          </div>
          <div class="pull-left"></div>
        </div>

        <div class="sub-title">
          <span class="main-text">可干预心脏疾病因素</span><span class="sub-text">调查</span>
          <span class="sub-title-line w-11"></span>
        </div>

        <div class="clearfix">
          <ChartRadar
            :id="'chart4'"
            :width=400
            :height=400
          ></ChartRadar>

          <ChartPie
            :id="'chart5'"
            :width=400
            :height=400
          ></ChartPie>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ChartPie from './charts/chartPie.vue';
  import ChartBar from './charts/chartBar.vue';
  import ChartRadar from './charts/chartRadar.vue';

  export default {
    components: {
      ChartPie,
      ChartBar,
      ChartRadar,
    }
  }
</script>

<style lang="scss">
  #heart {

  }
</style>
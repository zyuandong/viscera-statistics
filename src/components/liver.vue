<template>
  <div id="liver">

    <div class="clearfix">
      <div class="pull-left width-4 p-10 block-d">
        <router-link to="/menu">
          <div class="title-box">肝脏数据</div>
        </router-link>
        <div class="main-img-box">
          <img src="./../assets/images/liver/liver.png" alt="">
        </div>
      </div>
      <div class="pull-left width-6 p-10 block-c">
        <div class="sub-title">
          <span class="main-text">全国网民肝脏数据</span><span class="sub-text">分析</span>
          <span class="sub-title-line w-10"></span>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="width:20%">
            乙肝
          </div>
          <div class="pull-left" style="width:20%">
            肝硬化
          </div>
          <div class="pull-left" style="width:20%">
            肝癌
          </div>
          <div class="pull-left" style="width:40%">
            <ChartBar
              :id="'bar1'"
              :width=100
              :height=400
              :data="bar1"
            >
            </ChartBar>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix block-a p-10">
      <div class="sub-title">
        <span class="main-text">肝脏疾病</span><span class="sub-text">现状</span>
        <span class="sub-title-line w-6"></span>
      </div>

      <div class="clearfix">
        <div class="pull-left" style="width:35%">
          <ChartBar
            :id="'bar2'"
            :width=100
            :height=300
            :data="bar2"
          >
          </ChartBar>
        </div>
        <div class="pull-left" style="width:30%">
          <ChartPie
            :id="'pie'"
            :width=300
            :height=300
            :data="pie"
          ></ChartPie>
        </div>
        <div class="pull-left" style="width:35%">
          <ChartBar
            :id="'bar3'"
            :width=100
            :height=150
            :data="bar3"
          >
          </ChartBar>

          <ChartBar
            :id="'bar4'"
            :width=100
            :height=150
            :data="bar4"
          >
          </ChartBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios';
  import ChartBar from './charts/chartBar.vue';
  import ChartPie from './charts/chartPie.vue';

  export default {
    data() {
      return {
        bar1: {},
        bar2: {},
        bar3: {},
        bar4: {},
        pie: {},
      }
    },
    components: {
      ChartBar,
      ChartPie,
    },
    created() {
      Axios.get('./data/liver/bar1.json')
        .then(resp => {
          this.bar1 = resp.data;
        });

      Axios.get('./data/liver/bar2.json')
        .then(resp => {
          this.bar2 = resp.data;
        });

      Axios.get('./data/liver/bar3.json')
        .then(resp => {
          this.bar3 = resp.data;
        });

      Axios.get('./data/liver/bar4.json')
        .then(resp => {
          this.bar4 = resp.data
        });

      Axios.get('./data/liver/pie.json')
        .then(resp => {
          this.pie = resp.data;
        });
    }
  }
</script>

<style lang="scss">
  #liver {

  }
</style>
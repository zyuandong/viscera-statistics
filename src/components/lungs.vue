<template>
  <div id="lungs">
    <div class="clearfix">
      <div class="pull-left width-4 p-10 block-d">
        <router-link to="/menu">
          <div class="title-box">肺部数据</div>
        </router-link>

        <div class="main-img-box">
          <img src="./../assets/images/lungs/lungs.png" alt="">
        </div>

        <div class="sub-title">
          <span class="main-text">全国肺癌数据</span><span class="sub-text">分析</span>
          <span class="sub-title-line w-8"></span>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="width:33.33%">
            <ChartPie
              :id="'pie1'"
              :width=300
              :height=300
              :data="pie1"
            ></ChartPie>
          </div>
          <div class="pull-left" style="width:33.33%">
            <ChartPie
              :id="'pie2'"
              :width=300
              :height=300
              :data="pie2"
            ></ChartPie>
          </div>
          <div class="pull-left" style="width:33.33%">
            <ChartPie
              :id="'pie3'"
              :width=300
              :height=300
              :data="pie3"
            ></ChartPie>
          </div>
        </div>
      </div>

      <div class="pull-left width-6 p-10 block-c">
        <div class="sub-title">
          <span class="main-text">全国肺癌病发、死亡率</span><span class="sub-text">占比</span>
          <span class="sub-title-line w-12"></span>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="width:33.33%">
            <ChartBar
              :id="'bar1'"
              :width=300
              :height=300
              :data="bar1"
            ></ChartBar>
          </div>
          <div class="pull-left" style="width:33.33%">
            <ChartBar
              :id="'bar2'"
              :width=300
              :height=300
              :data="bar2"
            ></ChartBar>
          </div>
          <div class="pull-left" style="width:33.33%">
            <ChartLine
              :id="'line1'"
              :width = 500
              :height = 300
              :data = "line1"
            ></ChartLine>
          </div>
        </div>

        <div class="sub-title">
          <span class="main-text">全国肺癌发病因素</span><span class="sub-text">占比</span>
          <span class="sub-title-line w-10"></span>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="width:33.33%">
            <ChartBar
              :id="'bar3'"
              :width=300
              :height=200
              :data="bar3"
            ></ChartBar>
          </div>
          <div class="pull-left" style="width:33.33%">
            <ChartRadar
              :id="'radar'"
              :width=300
              :height=300
              :data="radar"
            ></ChartRadar>
          </div>
          <div class="pull-left" style="width:33.33%">
            <ChartLine
              :id="'line2'"
              :width=300
              :height=300
              :data="line2"
            ></ChartLine>
          </div>
        </div>
        
        <div class="clearfix part-4">
          <div class="pull-left" style="width:20%">
            <div class="text-box">
              <div class="text">大气污染</div>
            </div>
            <div class="pull-left" style="width:50%">
              <ChartPie
              :id="'pie4'"
              :width=100
              :height=100
              :data="pie4"
            ></ChartPie>
            </div>
            <div class="pull-left desc-text" style="width:50%">全球呼吸严重污染中的人数占比</div>
          </div>
          <div class="pull-left" style="width:20%">
            <div class="text-box">
            </div>
            <div class="pull-left" style="width:50%">
              <ChartPie
              :id="'pie5'"
              :width=100
              :height=100
              :data="pie5"
            ></ChartPie>
            </div>
            <div class="pull-left desc-text" style="width:50%">目前中国肺癌中腺癌占比</div>
          </div>
          <div class="pull-left" style="width:20%">
            <div class="text-box">
              <div class="text">肺部慢性疾病</div>
            </div>
            <div style="padding:30px 0 0;">
              肺部慢性疾病 <span style="color: #37fffe"> > </span> 正常人
            </div>
          </div>
          <div class="pull-left" style="width:20%">
            <div class="text-box">
              <div class="text">职业因素</div>
            </div>
            <div class="pull-left" style="width:50%">
              <ChartPie
              :id="'pie6'"
              :width=100
              :height=100
              :data="pie6"
            ></ChartPie>
            </div>
            <div class="pull-left desc-text" style="width:50%">职业因素在肺癌中的占比</div>
          </div>
          <div class="pull-left" style="width:20%">
            <div class="text-box">
            </div>
            <div class="pull-left" style="width:50%">
              <ChartPie
              :id="'pie7'"
              :width=100
              :height=100
              :data="pie7"
            ></ChartPie>
            </div>
            <div class="pull-left desc-text" style="width:50%">矿工中死于职业性肺癌占比</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios';
  import ChartPie from './charts/chartPie.vue';
  import ChartBar from './charts/chartBar.vue';
  import ChartLine from './charts/chartLine.vue';
  import ChartRadar from './charts/chartRadar.vue';

  export default {
    data() {
      return {
        bar1: {},
        bar2: {},
        bar3: {},
        pie1: {},
        pie2: {},
        pie3: {},
        pie4: {},
        pie5: {},
        pie6: {},
        pie7: {},
        line1: {},
        line2: {},
        radar: {},
      }
    },
    components: {
      ChartPie,
      ChartBar,
      ChartLine,
      ChartRadar
    },
    created() {
      Axios.get('./data/lungs/bar1.json')
        .then(response => {
          this.bar1 = response.data;
        });
      Axios.get('./data/lungs/bar2.json')
        .then(response => {
          this.bar2 = response.data;
        });
      Axios.get('./data/lungs/bar3.json')
        .then(response => {
          this.bar3 = response.data;
        });

      Axios.get('./data/lungs/pie1.json')
        .then(response => {
          this.pie1 = response.data;
        });
      Axios.get('./data/lungs/pie2.json')
        .then(response => {
          this.pie2 = response.data;
        });
      Axios.get('./data/lungs/pie3.json')
        .then(response => {
          this.pie3 = response.data;
        });
      Axios.get('./data/lungs/pie4.json')
        .then(response => {
          this.pie4 = response.data;
        });
      Axios.get('./data/lungs/pie5.json')
        .then(response => {
          this.pie5 = response.data;
        });
      Axios.get('./data/lungs/pie6.json')
        .then(response => {
          this.pie6 = response.data;
        });
      Axios.get('./data/lungs/pie7.json')
        .then(response => {
          this.pie7 = response.data;
        });

      Axios.get('./data/lungs/line1.json')
        .then(response => {
          this.line1 = response.data;
        });

      Axios.get('./data/lungs/line2.json')
        .then(response => {
          this.line2 = response.data;
        });

      Axios.get('./data/lungs/radar.json')
        .then(response => {
          this.radar = response.data;
        });
    }
  }
</script>

<style lang="scss">
  #lungs {
    .part-4 {
      padding: 15px 0 0;
      border-top: 1px solid #fff;

      .text-box {
        height: 50px;
      }
      .text {
        display: inline-block;
        background-color: #dd7473;
        padding: 3px 10px;
        border-radius: 3px;
      }

      .desc-text {
        padding: 20px 10px 0;
      }
    }
  }
</style>
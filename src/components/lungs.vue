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
              :height = 500
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
              :height=300
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
        
        <div class="clearfix">
          <div class="pull-left" style="width:20%">
            <div class="text">大气污染</div>
            <ChartPie
              :id="'pie4'"
              :width=300
              :height=300
              :data="pie4"
            ></ChartPie>
          </div>
          <div class="pull-left" style="width:20%">
            <div class="text"></div>
            <ChartPie
              :id="'pie5'"
              :width=300
              :height=300
              :data="pie5"
            ></ChartPie>
          </div>
          <div class="pull-left" style="width:20%">
            <div class="text">肺部慢性疾病</div>
            <div>
              肺部慢性疾病 <span> > </span> 正常人
            </div>
          </div>
          <div class="pull-left" style="width:20%">
            <div class="text">职业因素</div>
            <ChartPie
              :id="'pie6'"
              :width=300
              :height=300
              :data="pie6"
            ></ChartPie>
          </div>
          <div class="pull-left" style="width:20%">
            <div class="text"></div>
            <ChartPie
              :id="'pie7'"
              :width=300
              :height=300
              :data="pie7"
            ></ChartPie>
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
<template>
  <div id="heart">
    <div class="clearfix">
      <div class="pull-left width-4 p-10 block-d">
        <router-link to="/menu">
          <div class="title-box">心脏数据</div>
        </router-link>
        <div class="main-img-box">
          <img src="./../assets/images/heart/heart.png" alt="">
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
          <div class="pull-left" style="width:15%;">
            <div>总心跳动</div>
            <div>
              约
              <span>20亿</span>
              次
            </div>
          </div>
          <div class="pull-left" style="width:35%;">
            <!--:key 为此组件的特殊标识，不能用作向子组件传值-->
            <ChartBar
              :id="'bar1'"
              :width=300
              :height=300
              :data="bar1"
            ></ChartBar>
          </div>
          <div class="pull-left" style="width:35%">
            <ChartBar
              :id="'bar2'"
              :width=300
              :height=300
              :data="bar2"
            ></ChartBar>
          </div>
          <div class="pull-left" style="width:15%"></div>
        </div>

        <div class="sub-title">
          <span class="main-text">可干预心脏疾病因素</span><span class="sub-text">调查</span>
          <span class="sub-title-line w-11"></span>
        </div>

        <div class="clearfix radar-pie-box">
          <div class="pull-left" style="width:28%">
            <ChartRadar
              :id="'radar'"
              :width=400
              :height=300
              :data="radar"
            ></ChartRadar>
          </div>

          <div class="pull-left" style="width:12%">
            <ChartPie
              :id="'pie1'"
              :width=400
              :height=400
              :data="pie1"
            ></ChartPie>
          </div>
          <div class="pull-left pie-text" style="width:12%">
            担心心脏疾病人数比例
          </div>
          <div class="pull-left" style="width:12%">
            <ChartPie
              :id="'pie2'"
              :width=400
              :height=400
              :data="pie2"
            ></ChartPie>
          </div>
          <div class="pull-left pie-text" style="width:12%">
            了解体重指数的正常范围
          </div>
          <div class="pull-left" style="width:12%">
            <ChartPie
              :id="'pie3'"
              :width=400
              :height=400
              :data="pie3"
            ></ChartPie>
          </div>
          <div class="pull-left pie-text" style="width:12%;">
            知道腰围是重要因素人数比例
          </div>

          <div class="pull-left" style="width:12%">
            <ChartPie
              :id="'pie4'"
              :width=400
              :height=400
              :data="pie4"
            ></ChartPie>
          </div>
          <div class="pull-left pie-text" style="width:12%">
            知道正常血压值人数比例
          </div>
          <div class="pull-left" style="width:12%">
            <ChartPie
              :id="'pie5'"
              :width=400
              :height=400
              :data="pie5"
            ></ChartPie>
          </div>
          <div class="pull-left pie-text" style="width:12%">
            了解自身血压水平人数比例
          </div>
          <div class="pull-left" style="width:12%">
            <ChartPie
              :id="'pie6'"
              :width=400
              :height=400
              :data="pie6"
            ></ChartPie>
          </div>
          <div class="pull-left pie-text" style="width:12%">
            了解糖尿病死亡因素为心脏疾病人数比例
          </div>

        </div>

        <div class="clearfix">
          <div style="width:65%;margin:0 auto;">
            <div class="pull-left" style="width: 15%">
              <div class="title">血压</div>
              <div class="num">120/80</div>
            </div>

            <div class="pull-left" style="width: 15%">
              <div class="title">体重指数</div>
              <div class="num">18.9</div>
            </div>

            <div class="pull-left" style="width: 25%">
              <div class="title">胆固醇水平</div>
              <div class="num">
                < 200hg/分升
              </div>
            </div>

            <div class="pull-left" style="width: 15%">
              <div class="title">血糖</div>
              <div class="num">
                <div>血糖蛋白空腹</div>
                <div>
                  < 6
                </div>
              </div>
            </div>

            <div class="pull-left" style="width: 30%">
              <div class="title">腰围</div>
              <div class="num">
                <div class="pull-left">
                  <div>男性</div>
                  <div>
                    < 40英寸
                  </div>
                </div>
                <div class="pull-left">
                  <div>女性</div>
                  <div>
                    < 35英寸
                  </div>
                </div>
              </div>
            </div>

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
  import ChartRadar from './charts/chartRadar.vue';

  export default {
    data() {
      return {
        bar1: {},
        bar2: {},
        radar: {},
        pie1: {},
        pie2: {},
        pie3: {},
        pie4: {},
        pie5: {},
        pie6: {},
      }
    },
    components: {
      ChartPie,
      ChartBar,
      ChartRadar,
    },
    mounted() {
      console.log(2);
    },
    created() {
      console.log(1);
      Axios.get('./data/heart/chart1.json')
        .then(response => {
          this.chart1 = response.data;
        })
        .catch(error => {
        });

      Axios.get('./data/heart/bar1.json')
        .then(response => {
          this.bar1 = response.data;
        })
        .catch(error => {
        });

      Axios.get('./data/heart/bar2.json')
        .then(response => {
          this.bar2 = response.data;
        })
        .catch(error => {
        });

      Axios.get('./data/heart/radar.json')
        .then(resp => {
          this.radar = resp.data;
        });


      Axios.get('./data/heart/pie1.json')
        .then(resp => {
          this.pie1 = resp.data;
        });

      Axios.get('./data/heart/pie2.json')
        .then(resp => {
          this.pie2 = resp.data;
        });

      Axios.get('./data/heart/pie3.json')
        .then(resp => {
          this.pie3 = resp.data;
        });

      Axios.get('./data/heart/pie4.json')
        .then(resp => {
          this.pie4 = resp.data;
        });

      Axios.get('./data/heart/pie5.json')
        .then(resp => {
          this.pie5 = resp.data;
        });

      Axios.get('./data/heart/pie6.json')
        .then(resp => {
          this.pie6 = resp.data;
        });
    }
  }
</script>

<style lang="scss">
  #heart {

    .radar-pie-box {

      .pie-text {
        height: 100px;
      }
    }
  }
</style>
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
          <div class="pull-left" style="width:12%;">
            <div style="font-size:18px; color:#37fffe;">总心跳动</div>
            <div>
              约
              <span style="font-size: 22px">20亿</span>
              次
            </div>
          </div>
          <div class="pull-left" style="width:38%;">
            <!--:key 为此组件的特殊标识，不能用作向子组件传值-->
            <ChartBar
              :id="'bar1'"
              :width=300
              :height=300
              :data="bar1"
            ></ChartBar>
          </div>
          <div class="pull-left" style="width:38%">
            <ChartBar
              :id="'bar2'"
              :width=300
              :height=300
              :data="bar2"
            ></ChartBar>
          </div>
          <div class="pull-left legend" style="width:12%;padding: 30px 40px 0 0;">
            <div class="clearfix">
              <div class="pull-left text">运动员</div>
              <div class="pull-left block color-ydy"></div>
            </div>

            <div class="clearfix">
              <div class="pull-left text">极好</div>
              <div class="pull-left block color-jh"></div>
            </div>

            <div class="clearfix">
              <div class="pull-left text">很好</div>
              <div class="pull-left block color-hh"></div>
            </div>

            <div class="clearfix">
              <div class="pull-left text">尚好</div>
              <div class="pull-left block color-sh"></div>
            </div>

            <div class="clearfix">
              <div class="pull-left text">一般</div>
              <div class="pull-left block color-yb"></div>
            </div>

            <div class="clearfix">
              <div class="pull-left text">稍差</div>
              <div class="pull-left block color-sc"></div>
            </div>

            <div class="clearfix">
              <div class="pull-left text">不佳</div>
              <div class="pull-left block color-bj"></div>
            </div>
          </div>
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
              :height=250
              :data="radar"
            ></ChartRadar>
          </div>

          <div class="pull-left" style="width:12%">
            <ChartPie
              :id="'pie1'"
              :width=400
              :height=100
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
              :height=100
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
              :height=100
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
              :height=100
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
              :height=100
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
              :height=100
              :data="pie6"
            ></ChartPie>
          </div>
          <div class="pull-left pie-text" style="width:12%">
            了解糖尿病死亡因素为心脏疾病人数比例
          </div>
        </div>

        <div class="clearfix statistics-box">
          <div style="width:80%;margin:0 auto;">
            <div class="pull-left item" style="width: 15%">
              <div class="title">血压</div>
              <div class="content num" style="color:#37fffe; font-size:20px;">120/80</div>
            </div>

            <div class="pull-left item" style="width: 13%">
              <div class="title">体重指数</div>
              <div class="content num" style="color:#37fffe; font-size:20px;">18.9</div>
            </div>

            <div class="pull-left item" style="width: 25%">
              <div class="title">胆固醇水平</div>
              <div class="content num" style="color:#37fffe; font-size:20px;">
                < 200hg/分升
              </div>
            </div>

            <div class="pull-left item" style="width: 17%">
              <div class="title">血糖</div>
              <div class="content">
                <div style="color:#37fffe;">血糖蛋白空腹</div>
                <div class="num" style="color:#37fffe; font-size:20px;">
                  < 6
                </div>
              </div>
            </div>

            <div class="pull-left item" style="width: 30%">
              <div class="title">腰围</div>
              <div class="content">
                <div class="pull-left" style="width: 50%;">
                  <div style="color:#37fffe;">男性</div>
                  <div class="num" style="color:#37fffe; font-size:20px;">
                    < 40英寸
                  </div>
                </div>
                <div class="pull-left" style="width: 50%;">
                  <div style="color:#37fffe;">女性</div>
                  <div class="num" style="color:#37fffe; font-size:20px;">
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

      let instance = Axios.create({
        baseURL: '/',
        timeout: 1000,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        }
      });

      instance.get('data/heart/bar1.json')
        .then(response => {
          this.bar1 = response.data;
        })
        .catch(error => {
        });

      Axios.get('data/heart/bar2.json')
        .then(response => {
          this.bar2 = response.data;
        })
        .catch(error => {
        });

      Axios.get('data/heart/radar.json')
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
      &>div {
        margin: 10px 0;
      }

      .pie-text {
        padding: 35px 0;
      }
    }

    .legend {
      &>div {
        padding: 3px 0;
      }
      .block {
        width: 18px;
        height: 18px;

        &.color-ydy {
          background-color: #2ec7c9;
        }
        &.color-jh {
          background-color: #97b551;
        }
        &.color-hh {
          background-color: #51a3a3;
        }
        &.color-sh {
          background-color: #b0bff4;
        }
        &.color-yb {
          background-color: #ead84c;
        }
        &.color-sc {
          background-color: #dd7473;
        }
        &.color-bj {
          background-color: #db2828;
        }
      }

      .text {
        width: calc(100% - 20px);
        text-align: right;
        margin: 0 2px 0 0;
      }
    }

    .statistics-box {
      padding: 30px 0 0;
      .item {
        padding: 0 18px;
        border-right: 1px solid #083F54;
      }
      .content {
        height: 70px;
        color: #37fffe;
        padding: 20px 0 70px;
      }
    }
  }
</style>
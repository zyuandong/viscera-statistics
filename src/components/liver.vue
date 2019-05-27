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

        <div class="clearfix part-1">
          <div class="pull-left" style="width:22%;padding: 40px 0 0">
            <div class="item">乙肝</div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/red50.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box red">
                <span class="bar" style="width: 0%"></span>
              </span>
              <span class="text">0%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/red49.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box red">
                <span class="bar" style="width:56%"></span>
              </span>
              <span class="text">56%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/red24.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box red">
                <span class="bar" style="width:37%"></span>
              </span>
              <span class="text">37%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/red18.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box red">
                <span class="bar" style="width:7%"></span>
              </span>
              <span class="text">7%</span>
            </div>
          </div>
          <div class="pull-left" style="width:22%;padding: 40px 0 0">
            <div class="item">肝硬化</div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/blue50.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box blue">
                <span class="bar" style="width:2%"></span>
              </span>
              <span class="text">2%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/blue49.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box blue">
                <span class="bar" style="width:63%"></span>
              </span>
              <span class="text">63%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/blue24.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box blue">
                <span class="bar" style="width:28%"></span>
              </span>
              <span class="text">28%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/blue18.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box blue">
                <span class="bar" style="width:6%"></span>
              </span>
              <span class="text">6%</span>
            </div>
          </div>
          <div class="pull-left" style="width:22%;padding: 40px 0 0">
            <div class="item">肝癌</div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/green50.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box green">
                <span class="bar" style="width:1%"></span>
              </span>
              <span class="text">1%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/green49.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box green">
                <span class="bar" style="width:63%"></span>
              </span>
              <span class="text">63%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/green24.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box green">
                <span class="bar" style="width:28%"></span>
              </span>
              <span class="text">28%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/green18.png" alt="">
                <img src="./../assets/images/liver/tip.png" alt="">
              </span>
              <span class="progress-box green">
                <span class="bar" style="width:8%"></span>
              </span>
              <span class="text">8%</span>
            </div>
          </div>
          <div class="pull-left" style="width:34%;">
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
    .part-1 {
      .item {
        padding: 25px 10px 0 0;
        .img-box {
          img:first-child {
            width: 27px;
            height: 30px;
          }

          img:last-child {
            width: 27px;
            height: 30px;
          }
        }

        .progress-box {
          display: inline-block;
          width: calc(100% - 95px);
          height: 30px;

          margin: 0 0 0 -3px;

          &.red {
            border: 1px solid #dd7473;

            .bar {
              display: inline-block;
              height: 100%;
              background-color: #dd7473;
            }
          }

          &.blue {
            border: 1px solid #2ec7c9;

            .bar {
              display: inline-block;
              height: 100%;
              background-color: #2ec7c9;
            }
          }

          &.green {
            border: 1px solid #97b551;

            .bar {
              display: inline-block;
              height: 100%;
              background-color: #97b551;
            }
          }
        }

        .text {
          display: inline-block;
          width: 35px;
          float: right;
          text-align: left;
          padding: 7px 0;
        }
      }
    }
  }
</style>
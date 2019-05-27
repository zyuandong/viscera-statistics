<template>
  <div id="spleen">
    <div class="clearfix">
      <div class="pull-left width-4 p-10 block-d">
        <router-link to="/menu">
          <div class="title-box">脾部数据</div>
        </router-link>

        <div class="main-img-box">
          <img src="./../assets/images/spleen/spleen.png" alt="">
        </div>

        <div class="sub-title">
          <span class="main-text">脾部数据</span><span class="sub-text">分析</span>
          <span class="sub-title-line w-6"></span>
        </div>

        <div class="clearfix part-1">
          <div class="pull-left" style="width:45%">
            <ChartPie
              :id="'pie1'"
              :width=300
              :height=300
              :data="pie1"
            ></ChartPie>
          </div>
          <div class="pull-left message-box" style="width:55%">
            <div class="title">正常大小</div>
            <div class="item">
              <span class="text">长</span>
              <span class="num">10cm-12cm</span>
            </div>
            <div class="item">
              <span class="text">宽</span>
              <span class="num">6cm-8cm</span>
            </div>
            <div class="item">
              <span class="text">厚</span>
              <span class="num">3cm-4cm</span>
            </div>
            <div class="item">
              <span class="text">重</span>
              <span class="num">110g-200g</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pull-left width-6 p-10 block-c">
        <div class="sub-title">
          <span class="main-text">脾梗数据</span><span class="sub-text">统计</span>
          <span class="sub-title-line w-6"></span>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="width:20%">
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
          <div class="pull-left" style="width:17%">
            <ChartBar
              :id="'bar3'"
              :width=300
              :height=300
              :data="bar3"
            ></ChartBar>
          </div>
          <div class="pull-left" style="width:25%">
            <div class="pull-left" style="width:50%">
              <ChartPie
                :id="'pie2'"
                :width=100
                :height=150
                :data="pie2"
              ></ChartPie>
            </div>
            <div class="pull-left" style="width:50%">
              <ChartPie
                :id="'pie3'"
                :width=100
                :height=150
                :data="pie3"
              ></ChartPie>
            </div>
            <div class="pull-left" style="width:50%">
              <ChartPie
                :id="'pie4'"
                :width=70
                :height=150
                :data="pie4"
              ></ChartPie>
            </div>
            <div class="pull-left" style="width:50%">
              <ChartPie
                :id="'pie5'"
                :width=70
                :height=150
                :data="pie5"
              ></ChartPie>
            </div>
          </div>
        </div>

        <div class="clearfix part-3">
          <div class="pull-left" style="width:50%">
            <div class="clearfix">
              <span class="title">疾状</span>
            </div>
            <ChartBar
              :id="'bar4'"
              :width=300
              :height=300
              :data="bar4"
            ></ChartBar>
          </div>
          <div class="pull-left" style="width:50%">
            <div class="clearfix">
              <span class="title">体状</span>
            </div>
            <ChartBar
              :id="'bar5'"
              :width=300
              :height=300
              :data="bar5"
            ></ChartBar>
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

  export default {
    data() {
      return {
        pie1: {},
        bar1: {},
        bar2: {},
        bar3: {},
        bar4: {},
        bar5: {},
        pie2: {},
        pie3: {},
        pie4: {},
        pie5: {},
      }
    },
    components: {
      ChartPie,
      ChartBar,
    },
    created() {
      Axios.get('./data/spleen/pie1.json')
        .then(resp => {
          this.pie1 = resp.data;
        });

      Axios.get('./data/spleen/bar1.json')
        .then(resp => {
          this.bar1 = resp.data;
        });

      Axios.get('./data/spleen/bar2.json')
        .then(resp => {
          this.bar2 = resp.data;
        });
      Axios.get('./data/spleen/bar3.json')
        .then(resp => {
          this.bar3 = resp.data;
        });
      Axios.get('./data/spleen/bar4.json')
        .then(resp => {
          this.bar4 = resp.data;
        });
      Axios.get('./data/spleen/bar5.json')
        .then(resp => {
          this.bar5 = resp.data;
        });

      Axios.get('./data/spleen/pie2.json')
        .then(resp => {
          this.pie2 = resp.data;
        });

      Axios.get('./data/spleen/pie3.json')
        .then(resp => {
          this.pie3 = resp.data;
        });

      Axios.get('./data/spleen/pie4.json')
        .then(resp => {
          this.pie4 = resp.data;
        });

      Axios.get('./data/spleen/pie5.json')
        .then(resp => {
          this.pie5 = resp.data;
        });
    }
  }
</script>

<style lang="scss">
  #spleen {

    .part-1 {
      .message-box {
        padding: 60px 0 0 50px;
        .title {
          margin: 0 0 15px 0;
        }
        .item {
          padding: 0 0 20px 0;

          .text {
            margin: 0 15px 0 0;
          }

          .num {
            color: #37fffe;
          }
        }
      }
    }

    .part-3 {
      padding: 60px 0 0 0;
      .title {
        display: inline-block;
        background-color: #dd7473;
        padding: 3px 10px;
        border-radius: 3px;
      }
    }
  }
</style>
<template>
  <div id="kidney">
    <div class="clearfix">
      <div class="pull-left width-4 p-10 block-d">
        <router-link to="/menu">
          <div class="title-box">肾部数据</div>
        </router-link>
        <div class="main-img-box">
          <img src="./../assets/images/kidney/kidney.png" alt="">
        </div>

        <div class="sub-title">
          <span class="main-text">关于肾脏疾病数据</span><span class="sub-text">分析</span>
          <span class="sub-title-line w-10"></span>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="width:35%;border-right: 1px solid #fff">
            <ChartBar
              :id="'bar1'"
              :width=300
              :height=300
              :data="bar1"
            ></ChartBar>
          </div>
          <div class="pull-left" style="width:32.5%">
            <ChartBar
              :id="'pie1'"
              :width=300
              :height=300
              :data="pie1"
            ></ChartBar>
          </div>
          <div class="pull-left" style="width:32.5%">
            <ChartBar
              :id="'pie2'"
              :width=300
              :height=300
              :data="pie2"
            ></ChartBar>
          </div>
        </div>
      </div>
      <div class="pull-left width-6 p-10 block-c">
        <div class="sub-title">
          <span class="main-text">中国肾脏疾病数据</span><span class="sub-text">分析</span>
          <span class="sub-title-line w-10"></span>
        </div>

        <div class="clearfix">
          <div class="pull-left">慢性肾脏病分期</div>
          <div class="pull-left">

          </div>
        </div>

        <div class="clearfix">
          <div class="part-title">第一部分，慢性肾脏病</div>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="width:33.33%">
            <div class="item">住院患者中慢性肾脏病比例</div>
            <div class="item">慢性肾脏患病率</div>
            <div class="item">男性为主</div>
          </div>
          <div class="pull-left" style="width:33.33%">
            <div class="item">慢性肾脏病患者住院费用比非患者高30%</div>
            <div class="item">60岁以下</div>
          </div>
          <div class="pull-left" style="width:33.33%">
            <ChartBar
              :id="'bar2'"
              :width=200
              :height=200
              :data="bar2"
            ></ChartBar>
          </div>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="width:28%">
            <ChartPie
              :id="'pie3'"
              :width=300
              :height=300
              :data="pie3"
            ></ChartPie>
          </div>
          <div class="pull-left" style="width:72%">
            <div class="title">不同病因的高发省份（TOP3）</div>
            <div class="pull-left" style="width:25%">
              <div class="item-title">糖尿病肾病</div>
              <div class="pull-left" style="width:33.33%"></div>
              <div class="pull-left" style="width:33.33%"></div>
              <div class="pull-left" style="width:33.33%"></div>
            </div>
            <div class="pull-left" style="width:25%">
              <div class="item-title">梗阻性肾病</div>
              <div class="pull-left" style="width:33.33%"></div>
              <div class="pull-left" style="width:33.33%"></div>
              <div class="pull-left" style="width:33.33%"></div>
            </div>
            <div class="pull-left" style="width:25%">
              <div class="item-title">高血压肾病</div>
              <div class="pull-left" style="width:33.33%"></div>
              <div class="pull-left" style="width:33.33%"></div>
              <div class="pull-left" style="width:33.33%"></div>
            </div>
            <div class="pull-left" style="width:25%">
              <div class="item-title">肾小球肾病</div>
              <div class="pull-left" style="width:33.33%"></div>
              <div class="pull-left" style="width:33.33%"></div>
              <div class="pull-left" style="width:33.33%"></div>
            </div>
          </div>
        </div>

        <div class="clearfix">
          <div class="part-title">第二部分，终末期肾脏病</div>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="width:25%">
            <div class="clearfix">
              <img src="" alt="">
              血透
            </div>
            <div class="clearfix">
              <div class="pull-left" style="width:50%">
                <div class="num">553000</div>
                <div class="text">患者人数</div>
              </div>
              <div class="pull-left" style="width:50%">
                <div class="num">402.18</div>
                <div class="text">患病率（百万）</div>
              </div>
            </div>
          </div>
          <div class="pull-left" style="width:25%">
            <div class="clearfix">
              <img src="" alt="">
              腹透
            </div>
            <div class="clearfix">
              <div class="pull-left" style="width:50%">
                <div class="num">55000</div>
                <div class="text">患者人数</div>
              </div>
              <div class="pull-left" style="width:50%">
                <div class="num">39.95</div>
                <div class="text">患病率（百万）</div>
              </div>
            </div>
          </div>
          <div class="pull-left" style="width:25%">
            <div class="clearfix">
              <img src="" alt="">
            </div>
            <div class="clearfix">
              <div class="num">122.19</div>
              <div class="text">透析患者发病率（百万）</div>
            </div>
          </div>
          <div class="pull-left" style="width:25%">
            <div class="item clearfix">
              <div class="pull-left" style="width:25%"></div>
              <div class="pull-left" style="width:25%">18-44岁</div>
              <div class="pull-left" style="width:25%">11.80</div>
              <div class="pull-left" style="width:25%"></div>
            </div>

            <div class="item clearfix">
              <div class="pull-left" style="width:25%"></div>
              <div class="pull-left" style="width:25%">45-64岁</div>
              <div class="pull-left" style="width:25%">31.57</div>
              <div class="pull-left" style="width:25%"></div>
            </div>

            <div class="item clearfix">
              <div class="pull-left" style="width:25%"></div>
              <div class="pull-left" style="width:25%">>=65岁</div>
              <div class="pull-left" style="width:25%">91.69</div>
              <div class="pull-left" style="width:25%"></div>
            </div>
          </div>
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
        pie1: {},
        pie2: {},
        pie3: {},
      }
    },
    components: {
      ChartBar,
      ChartPie,
    },
    created() {
      Axios.get('./data/kidney/bar1.json')
        .then(resp => {
          this.bar1 = resp.data
        });

      Axios.get('./data/kidney/bar2.json')
        .then(resp => {
          this.bar2 = resp.data
        });

      Axios.get('./data/kidney/pie1.json')
        .then(resp => {
          this.pie1 = resp.data
        });

      Axios.get('./data/kidney/pie2.json')
        .then(resp => {
          this.pie2 = resp.data
        });

      Axios.get('./data/kidney/pie3.json')
        .then(resp => {
          this.pie3 = resp.data
        });
    }
  }
</script>
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
            <div class="item">
              <div class="circle red">乙肝</div>
              <div class="text">
                男性占比53%
                <br>
                女性占比47%
              </div>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/red50.png" alt="">
                <img src="./../assets/images/liver/redTip.png" alt="">
              </span>
              <span class="progress-box red">
                <span class="bar" style="width: 0%"></span>
              </span>
              <span class="text">0%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/red49.png" alt="">
                <img src="./../assets/images/liver/redTip.png" alt="">
              </span>
              <span class="progress-box red">
                <span class="bar" style="width:56%"></span>
              </span>
              <span class="text">56%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/red24.png" alt="">
                <img src="./../assets/images/liver/redTip.png" alt="">
              </span>
              <span class="progress-box red">
                <span class="bar" style="width:37%"></span>
              </span>
              <span class="text">37%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/red18.png" alt="">
                <img src="./../assets/images/liver/redTip.png" alt="">
              </span>
              <span class="progress-box red">
                <span class="bar" style="width:7%"></span>
              </span>
              <span class="text">7%</span>
            </div>
          </div>
          <div class="pull-left" style="width:22%;padding: 40px 0 0">
            <div class="item">
              <div class="circle blue">肝硬化</div>
              <div class="text">
                男性占比57%
                <br>
                女性占比43%
              </div>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/blue50.png" alt="">
                <img src="./../assets/images/liver/blueTip.png" alt="">
              </span>
              <span class="progress-box blue">
                <span class="bar" style="width:2%"></span>
              </span>
              <span class="text">2%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/blue49.png" alt="">
                <img src="./../assets/images/liver/blueTip.png" alt="">
              </span>
              <span class="progress-box blue">
                <span class="bar" style="width:63%"></span>
              </span>
              <span class="text">63%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/blue24.png" alt="">
                <img src="./../assets/images/liver/blueTip.png" alt="">
              </span>
              <span class="progress-box blue">
                <span class="bar" style="width:28%"></span>
              </span>
              <span class="text">28%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/blue18.png" alt="">
                <img src="./../assets/images/liver/blueTip.png" alt="">
              </span>
              <span class="progress-box blue">
                <span class="bar" style="width:6%"></span>
              </span>
              <span class="text">6%</span>
            </div>
          </div>
          <div class="pull-left" style="width:22%;padding: 40px 0 0">
            <div class="item">
              <div class="circle green">肝癌</div>
              <div class="text">
                男性占比57%
                <br>
                女性占比43%
              </div>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/green50.png" alt="">
                <img src="./../assets/images/liver/greenTip.png" alt="">
              </span>
              <span class="progress-box green">
                <span class="bar" style="width:1%"></span>
              </span>
              <span class="text">1%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/green49.png" alt="">
                <img src="./../assets/images/liver/greenTip.png" alt="">
              </span>
              <span class="progress-box green">
                <span class="bar" style="width:63%"></span>
              </span>
              <span class="text">63%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/green24.png" alt="">
                <img src="./../assets/images/liver/greenTip.png" alt="">
              </span>
              <span class="progress-box green">
                <span class="bar" style="width:28%"></span>
              </span>
              <span class="text">28%</span>
            </div>
            <div class="item">
              <span class="img-box">
                <img src="./../assets/images/liver/green18.png" alt="">
                <img src="./../assets/images/liver/greenTip.png" alt="">
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

  let timeout = null;
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
    beforeRouteLeave (to, from, next) {
      clearTimeout(timeout);
      next();
    },
    mounted() {
      if (this.$route.meta.isRedirect) {
        timeout = setTimeout(() => {
          this.$router.push('/spleen')
        }, this.$route.meta.time)
      }
      this.bar1 = {
        "tooltip": {},
        "grid": {
          "left": 110
        },
        "xAxis": {
          "show": false,
          "type": "value",
          "axisLine": {
          },
          "splitLine": {
            "show": false
          }
        },
        "yAxis": {
          "type": "category",
          "inverse": true,
          "data": [
            {
              "value": "乙肝五项对照表",
              "textStyle": {
                "color": "#fff"
              }
            },{
              "value": "肝胆湿热",
              "textStyle": {
                "color": "#fff"
              }
            },{
              "value": "肝硬化",
              "textStyle": {
                "color": "#fff"
              }
            },{
              "value": "乙肝",
              "textStyle": {
                "color": "#fff"
              }
            },{
              "value": "肝癌早起症状",
              "textStyle": {
                "color": "#fff"
              }
            },{
              "value": "脂肪肝",
              "textStyle": {
                "color": "#fff"
              }
            },{
              "value": "肝癌",
              "textStyle": {
                "color": "#fff"
              }
            },{
              "value": "肝火旺",
              "textStyle": {
                "color": "#fff"
              }
            },{
              "value": "乙肝表面抗体阳性",
              "textStyle": {
                "color": "#fff"
              }
            },{
              "value": "肝脏不好的症状",
              "textStyle": {
                "color": "#fff"
              }
            }],
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          "axisLabel": {
            "textStyle": {
              "fontSize": 10
            }
          }
        },
        "series": [{
          "name": "销量",
          "type": "bar",
          "barWidth": "40%",
          "data": [446, 416, 353, 347, 323, 275, 217, 146, 134, 103],
          "label": {
            "normal": {
              "show": true,
              "color": "#fff",
              "position": "right",
              "fontSize": 10,
              "formatter": "{c}万"
            }
          },
          "itemStyle": {
            "normal": {
              "color": "#DE8F6C",
              "barBorderRadius": 30
            }
          }
        }]
      };
      this.bar2 = {
        "title": {
          "text": "病毒性肝炎占比",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "top": "5%",
          "right": "20%" },
        "tooltip": {},
        "legend": {
          "show": false,
          "data": ["type1", "type2", "type3"]
        },
        "xAxis": {
          "type": "value",
          "axisLine": {
            "lineStyle": {
              "color": "#fff"
            }
          },
          "splitLine": {
            "show": false
          }
        },
        "yAxis": {
          "type": "category",
          "inverse": true,
          "data": ["全球","欧美","中国"],
          "axisLine": {
            "lineStyle": {
              "color": "#fff"
            }
          }
        },
        "series": [{
          "name": "type1",
          "type": "bar",
          "barWidth": "30%",
          "data": [130000,0,40000],
          "label": {
            "normal": {
              "show": true,
              "color": "#fff",
              "position": "right",
              "formatter": "{c}万"
            }
          },
          "itemStyle": {
            "normal": {
              "color": "#DE8F6C"
            }
          }
        },{
          "name": "type2",
          "type": "bar",
          "barWidth": "30%",
          "data": [0,50000,9300],
          "label": {
            "normal": {
              "show": true,
              "color": "#fff",
              "position": "right",
              "formatter": "{c}万"
            }
          },
          "itemStyle": {
            "normal": {
              "color": "#97b551"
            }
          }
        },{
          "name": "type3",
          "type": "bar",
          "barWidth": "30%",
          "data": [0, 0, 1300],
          "label": {
            "normal": {
              "show": true,
              "color": "#fff",
              "position": "right",
              "formatter": "{c}万"
            }
          },
          "itemStyle": {
            "normal": {
              "color": "#97b551"
            }
          }
        }]
      };
      this.bar3 = {
        "title": {
          "text": "乙型肝炎",
          "textStyle":{
            "color":"#fff",
            "fontSize": 12,
            "fontWeight": 400
          },
          "top": 30
        },
        "grid": {
          "left": 85,
          "bottom": 20
        },
        "tooltip": {},
        "xAxis": {
          "show": false,
          "type": "value",
          "axisLine": {
            "show": false
          },
          "splitLine": {
            "show": false
          }
        },
        "yAxis": {
          "type": "category",
          "inverse": true,
          "data": [{
            "value": "发病数（例）",
            "textStyle": {
              "color": "#fff"
            }
          },{
            "value": "死亡数（例）",
            "textStyle": {
              "color": "#fff"
            }
          }],
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          }
        },
        "series": [{
          "type": "bar",
          "data": [1001000, 425],
          "barWidth": 10,
          "barMinHeight": 50,
          "barGap": 10,
          "barCategoryGap": 10,
          "label": {
            "normal": {
              "show": true,
              "position": "right",
              "color": "#fff"
            }
          },
          "itemStyle": {
            "normal": {"color": "#dd7473"}
          }
        }]
      };
      this.bar4 = {
        "title": {
          "text": "丙型肝炎",
          "textStyle":{
            "color":"#fff",
            "fontSize": 12,
            "fontWeight": 400
          },
          "top": 30
        },
        "grid": {
          "left": 85,
          "bottom": 20
        },
        "tooltip": {},
        "xAxis": {
          "show": false,
          "type": "value",
          "axisLine": {
            "show": false
          },
          "splitLine": {
            "show": false
          }
        },
        "yAxis": {
          "type": "category",
          "inverse": true,
          "data": [{
            "value": "发病数（例）",
            "textStyle": {
              "color": "#fff"
            }
          },{
            "value": "死亡数（例）",
            "textStyle": {
              "color": "#fff"
            }
          }],
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          }
        },
        "series": [{
          "type": "bar",
          "data": [210000, 120],
          "barWidth": 10,
          "barMinHeight": 50,
          "barGap": 10,
          "barCategoryGap": 10,
          "label": {
            "normal": {
              "show": true,
              "position": "right",
              "color": "#fff"
            }
          },
          "itemStyle": {
            "normal": {"color": "#dd7473"}
          }
        }]
      };
      this.pie = {
        "title":{
          "text":"不同类型病毒性肝炎占比",
          "left":"center",
          "top":0,
          "textStyle":{
            "color":"#fff",
            "fontSize": 12,
            "fontWeight": 400
          }
        },
        "legend": {
          "data": ["甲型肝炎", "乙型肝炎", "丙型肝炎", "戊型肝炎", "其他"],
          "textStyle": {
            "color": "#fff"
          },
          "top": 20
        },
        "color": ["#eaa84c", "#dd7473", "#97b551", "#db2828", "#51a3a3"],
        "tooltip":{
          "trigger":"item",
          "formatter":"{a} <br/>{b} : {c} ({d}%)"
        },

        "series":[
          {
            "name":"访问来源",
            "type":"pie",
            "radius":"55%",
            "center":[
              "50%",
              "50%"
            ],
            "data":[
              {
                "value":2,
                "name":"甲型肝炎",
                "itemStyle": {
                  "normal": {
                    "color": "#eaa84c"
                  }
                }
              },
              {
                "value":10,
                "name":"乙型肝炎",
                "itemStyle": {
                  "normal": {
                    "color": "#dd7473"
                  }
                }
              },
              {
                "value":8,
                "name":"丙型肝炎",
                "itemStyle": {
                  "normal": {
                    "color": "#97b551"
                  }
                }
              },
              {
                "value":2,
                "name":"戊型肝炎",
                "itemStyle": {
                  "normal": {
                    "color": "#db2828"
                  }
                }
              },
              {
                "value":3,
                "name":"其他",
                "itemStyle": {
                  "normal": {
                    "color": "#51a3a3"
                  }
                }
              }
            ],
            "roseType":"radius",
            "labelLine":{
              "normal":{
                "lineStyle":{
                  "color":"#fff"
                },
                "smooth":0.2,
                "length":7,
                "length2":5
              }
            },
            "label":{
              "normal":{
                "color":"#fff",
                "formatter": "{d}%"
              }
            },
            "animationType":"scale",
            "animationEasing":"elasticOut"
          }
        ]
      };
    },
    created() {
      // Axios.get('./data/liver/bar1.json')
      //   .then(resp => {
      //     this.bar1 = resp.data;
      //   });
      //
      // Axios.get('./data/liver/bar2.json')
      //   .then(resp => {
      //     this.bar2 = resp.data;
      //   });
      //
      // Axios.get('./data/liver/bar3.json')
      //   .then(resp => {
      //     this.bar3 = resp.data;
      //   });
      //
      // Axios.get('./data/liver/bar4.json')
      //   .then(resp => {
      //     this.bar4 = resp.data
      //   });
      //
      // Axios.get('./data/liver/pie.json')
      //   .then(resp => {
      //     this.pie = resp.data;
      //   });
    }
  }
</script>

<style lang="scss">
  #liver {
    //width: 1440px;
    height: 900px;
    position: relative;
    top: calc((100% - 900px) / 2);
    //left: calc((100% - 1440px) / 2);

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
          height: 32px;

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

        .circle {
          display: inline-block;
          width: 48px;
          height: 48px;
          line-height: 48px;
          text-align: center;
          border-radius: 50%;
          margin: 0 10px 0 0;

          &.red {
            border: 1px solid #dd7473;
          }

          &.blue {
            border: 1px solid #2ec7c9;
          }

          &.green {
            border: 1px solid #97b551;
          }

          +.text {
            display: inline-block;
            width: calc(100% - 65px);
          }
        }
      }
    }
  }
</style>

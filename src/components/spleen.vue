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
    mounted() {
      if (this.$route.meta.isRedirect) {
        setTimeout(() => {
          this.$router.push('/lungs')
        }, 5000)
      }
      this.bar1 = {
        "tooltip": {},
        "xAxis": {
          "data": ["脾梗\n死亡例","脾梗\n治愈率","脾梗\n死亡率"],
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          "axisLabel": {
            "color": "#fff",
            "rotate": 45,
            "align": "right"
          }
        },
        "yAxis": {
          "show": false
        },
        "series": [{
          "type": "bar",
          "barWidth": "40%",
          "data": [{
            "value": 137,
            "itemStyle": {
              "color": "#ead84c",
              "barBorderRadius": 3
            },
            "label": {
              "show": true,
              "color": "#fff",
              "position": "top"
            }
          }, {
            "value": 88.7,
            "itemStyle": {
              "color": "#2ec7c9",
              "barBorderRadius": 3
            },
            "label": {
              "show": true,
              "color": "#fff",
              "position": "top"
            }
          }, {
            "value": 11.3,
            "itemStyle": {
              "color": "#2ec7c9",
              "barBorderRadius": 3
            },
            "label": {
              "show": true,
              "color": "#fff",
              "position": "top"
            }
          }]
        }]
      };
      this.bar2 = {
        "title": {
          "text": "脾梗病发占比",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "top": "5%",
          "right": "20%"
        },
        "tooltip": {},
        "xAxis": {
          "data": ["循环系统\n疾病","血液系统\n疾病","消化系统\n疾病","自身免疫系统\n疾病","感染系统\n疾病"],
          "axisLine": {
            "lineStyle": {
              "color": "#fff"
            }
          },
          "axisTick": {
            "show": false
          },
          "axisLabel": {
            "rotate": 45
          }
        },
        "yAxis": {
          "axisLine": {
            "lineStyle": {
              "color": "#fff"
            }
          },
          "splitLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          }
        },
        "series": [{
          "type": "bar",
          "data": [29.8, 21.4, 21.4, 5.3, 6.1],
          "barWidth": "40%",
          "itemStyle": {
            "normal": {
              "color": "#51a3a3",
              "barBorderRadius": 3
            }
          },
          "label": {
            "show": true,
            "position": "top",
            "color": "#fff",
            "formatter": "{c}%"
          }
        }]
      };
      this.bar3 = {
        "title": {
          "text": "脾梗男女占比",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "top": "5%",
          "left": 60
        },
        "tooltip": {},
        "xAxis": {
          "data": ["男","女"],
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          "axisLabel": {
            "color": "#fff"
          }
        },
        "yAxis": {
          "show": false
        },
        "series": [{
          "type": "bar",
          "data": [85, 52],
          "barWidth": "40%",
          "itemStyle": {
            "color": "#51a3a3",
            "barBorderRadius": 3
          },
          "label": {
            "show": true,
            "position": "top",
            "color": "#fff",
            "formatter": "{c}人"
          }
        }]
      };
      this.bar4 = {
        "tooltip": {},
        "xAxis": {
          "type": "value",
          "show": false
        },
        "grid": {
          "left": 70
        },
        "yAxis": {
          "type": "category",
          "inverse": true,
          "data": ["腹痛","左上腹疼痛","发热","恶心呕吐","反射疼痛"],
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          "axisLabel": {
            "color": "#fff"
          }
        },
        "series": [{
          "type": "bar",
          "barWidth": "40%",
          "data": [80.7, 19.3, 53.8, 32.9, 30.1],
          "itemStyle": {
            "color": "#51a3a3",
            "barBorderRadius": 3
          },
          "label": {
            "show": true,
            "position": "right",
            "color": "#fff",
            "formatter": "{c}%"
          }
        }]
      };
      this.bar5 = {
        "tooltip": {},
        "xAxis": {
          "type": "value",
          "show": false
        },
        "grid": {
          "left": 70
        },
        "yAxis": {
          "type": "category",
          "inverse": true,
          "data": ["左上腹压痛","腹肌紧张","腹膜刺激征","腹部肿块"],
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          "axisLabel": {
            "color": "#fff"
          }
        },
        "series": [{
          "type": "bar",
          "barWidth": "40%",
          "data": [35.7, 33.7, 28.4, 48.6],
          "itemStyle": {
            "color": "#51a3a3",
            "barBorderRadius": 3
          },
          "label": {
            "show": true,
            "position": "right",
            "color": "#fff",
            "formatter": "{c}%"
          }
        }]
      };
      this.pie1 = {
        "title": {
          "text": "最大免疫系统\n占淋巴组织总量",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "right": 20,
          "bottom": 0
        },
        "grid": {
          "top": 0
        },
        "tooltip":{
          "trigger":"item",
          "formatter":"{a} <br/>{b}: {c} ({d}%)"
        },
        "legend":{
          "show": false,
          "orient":"vertical",
          "x":"left",
          "data":[
            "直接访问"
          ]
        },
        "series":[
          {
            "name":"访问来源",
            "type":"pie",
            "radius":[
              "70%",
              "80%"
            ],
            "avoidLabelOverlap":false,
            "label":{
              "normal":{
                "show":false,
                "position":"center"
              },
              "emphasis":{
                "show":true,
                "textStyle":{
                  "fontSize":"30",
                  "fontWeight":"bold"
                }
              }
            },
            "labelLine":{
              "normal":{
                "show":false
              }
            },
            "data":[
              {
                "value":25,
                "itemStyle": {
                  "color": "#db2828"
                }
              },{
                "value":75,
                "itemStyle": {
                  "color": "#033348"
                }
              }
            ]
          }
        ]
      };
      this.pie2 = {
        "title": {
          "text": "年龄最小",
          "textStyle": {
            "color": "#fff",
            "fontSize": 12,
            "fontWeight": 400
          },
          "textAlign": "center",
          "bottom": 0,
          "left": "45%",
          "right": 20
        },
        "grid": {
          "top": 10,
          "bottom": 30
        },
        "tooltip":{
          "trigger":"item",
          "formatter":"{a} <br/>{b}: {c} ({d}%)"
        },
        "legend":{
          "show": false,
          "orient":"vertical",
          "x":"left"
        },
        "series":[
          {
            "name":"访问来源",
            "type":"pie",
            "radius":[
              "70%",
              "80%"
            ],
            "avoidLabelOverlap":false,
            "label":{
              "normal":{
                "show":false,
                "position":"center"
              },
              "emphasis":{
                "show":true,
                "textStyle":{
                  "fontSize":"30",
                  "fontWeight":"bold"
                }
              }
            },
            "labelLine":{
              "normal":{
                "show":false
              }
            },
            "data":[
              {
                "value":10,
                "itemStyle": {
                  "color": "#033348"
                }
              }
            ]
          }
        ]
      };
      this.pie3 = {
        "title": {
          "text": "平均病发年龄",
          "textStyle": {
            "color": "#fff",
            "fontSize": 12,
            "fontWeight": 400
          },
          "textAlign": "center",
          "bottom": 0,
          "left": "45%",
          "right": 20
        },
        "tooltip":{
          "trigger":"item",
          "formatter":"{a} <br/>{b}: {c} ({d}%)"
        },
        "legend":{
          "show": false,
          "orient":"vertical",
          "x":"left"
        },
        "series":[
          {
            "name":"访问来源",
            "type":"pie",
            "radius":[
              "70%",
              "80%"
            ],
            "avoidLabelOverlap":false,
            "label":{
              "normal":{
                "show":false,
                "position":"center"
              },
              "emphasis":{
                "show":true,
                "textStyle":{
                  "fontSize":"30",
                  "fontWeight":"bold"
                }
              }
            },
            "labelLine":{
              "normal":{
                "show":false
              }
            },
            "data":[
              {
                "value":54.1,
                "itemStyle": {
                  "color": "#033348"
                }
              }
            ]
          }
        ]
      };
      this.pie4 = {
        "title": {
          "text": "年龄最大",
          "textStyle": {
            "color": "#fff",
            "fontSize": 12,
            "fontWeight": 400
          },
          "textAlign": "center",
          "bottom": 0,
          "left": "45%",
          "right": 20
        },
        "tooltip":{
          "trigger":"item",
          "formatter":"{a} <br/>{b}: {c} ({d}%)"
        },
        "legend":{
          "show": false,
          "orient":"vertical",
          "x":"left"
        },
        "series":[
          {
            "name":"访问来源",
            "type":"pie",
            "radius":[
              "70%",
              "80%"
            ],
            "avoidLabelOverlap":false,
            "label":{
              "normal":{
                "show":false,
                "position":"center"
              },
              "emphasis":{
                "show":true,
                "textStyle":{
                  "fontSize":"30",
                  "fontWeight":"bold"
                }
              }
            },
            "labelLine":{
              "normal":{
                "show":false
              }
            },
            "data":[
              {
                "value":83,
                "itemStyle": {
                  "color": "#033348"
                }
              }
            ]
          }
        ]
      };
      this.pie5 = {
        "title": {
          "text": ">=60岁占比",
          "textStyle": {
            "color": "#fff",
            "fontSize": 12,
            "fontWeight": 400
          },
          "textAlign": "center",
          "bottom": 0,
          "left": "45%",
          "right": 20
        },
        "grid": {
          "top": 0,
          "bottom": 50
        },
        "tooltip":{
          "trigger":"item",
          "formatter":"{a} <br/>{b}: {c} ({d}%)"
        },
        "legend":{
          "show": false,
          "orient":"vertical",
          "x":"left"
        },
        "series":[
          {
            "name":"访问来源",
            "type":"pie",
            "radius":[
              "70%",
              "80%"
            ],
            "avoidLabelOverlap":false,
            "label":{
              "normal":{
                "show":false,
                "position":"center"
              },
              "emphasis":{
                "show":true,
                "textStyle":{
                  "fontSize":"30",
                  "fontWeight":"bold"
                }
              }
            },
            "labelLine":{
              "normal":{
                "show":false
              }
            },
            "data":[
              {
                "value":27.7,
                "itemStyle": {
                  "color": "#e8ff00"
                }
              },{
                "value":72.3,
                "itemStyle": {
                  "color": "#033348"
                }
              }
            ]
          }
        ]
      };
    },
    created() {
      // Axios.get('./data/spleen/pie1.json')
      //   .then(resp => {
      //     this.pie1 = resp.data;
      //   });
      //
      // Axios.get('./data/spleen/bar1.json')
      //   .then(resp => {
      //     this.bar1 = resp.data;
      //   });
      //
      // Axios.get('./data/spleen/bar2.json')
      //   .then(resp => {
      //     this.bar2 = resp.data;
      //   });
      // Axios.get('./data/spleen/bar3.json')
      //   .then(resp => {
      //     this.bar3 = resp.data;
      //   });
      // Axios.get('./data/spleen/bar4.json')
      //   .then(resp => {
      //     this.bar4 = resp.data;
      //   });
      // Axios.get('./data/spleen/bar5.json')
      //   .then(resp => {
      //     this.bar5 = resp.data;
      //   });
      //
      // Axios.get('./data/spleen/pie2.json')
      //   .then(resp => {
      //     this.pie2 = resp.data;
      //   });
      //
      // Axios.get('./data/spleen/pie3.json')
      //   .then(resp => {
      //     this.pie3 = resp.data;
      //   });
      //
      // Axios.get('./data/spleen/pie4.json')
      //   .then(resp => {
      //     this.pie4 = resp.data;
      //   });
      //
      // Axios.get('./data/spleen/pie5.json')
      //   .then(resp => {
      //     this.pie5 = resp.data;
      //   });
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

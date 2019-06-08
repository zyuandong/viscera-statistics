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
    mounted() {
      if (this.$route.meta.isRedirect) {
        setTimeout(() => {
          this.$router.push('/kidney')
        }, 5000)
      }
      this.bar1 = {
        "title": {
          "text": "男性死亡率TOP10",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "top": 0,
          "left": "50%"
        },
        "tooltip": {},
        "legend": {
          "data": ["男性死亡率TOP10"]
        },
        "xAxis": {
          "data": ["肺癌","肝癌","胃癌","食管癌","结直肠癌", "胰腺癌", "脑癌", "白血病", "前列腺癌", "淋巴癌"],
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          "axisLabel": {
            "color": "#fff",
            "rotate": 45,
            "text": {
              "color": "#fff"
            }
          }
        },
        "yAxis": {
          "show": false
        },
        "series": [{
          "type": "bar",
          "data": [61.1, 33.32, 29.24, 19.92, 14.84, 6.64, 4.46, 4.41, 4.22, 4.13],
          "label": {
            "normal": {
              "show": true,
              "color": "#fff",
              "rotate": 90,
              "align": "left",
              "position": "top",
              "formatter": "{c}%"
            }
          },
          "itemStyle": {
            "color": "#78ffd6",
            "barBorderRadius": 3
          }
        }]
      };
      this.bar2 = {
        "title": {
          "text": "女性死亡率TOP10",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "top": 0,
          "left": "50%"
        },
        "tooltip": {},
        "legend": {
          "data": ["女性死亡率TOP10"]
        },
        "xAxis": {
          "data": ["肺癌","胃癌","肝癌","结直肠癌","乳腺癌", "食管癌", "胰腺癌", "宫颈癌", "脑癌", "卵巢癌"],
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          "axisLabel": {
            "color": "#fff",
            "rotate": 45,
            "text": {
              "color": "#fff"
            }
          }
        },
        "yAxis": {
          "show": false
        },
        "series": [{
          "type": "bar",
          "data": [29.71, 13.33, 11.67, 11.34, 9.9, 8, 5.18, 4.57, 3.75, 3.375],
          "label": {
            "normal": {
              "show": true,
              "color": "#fff",
              "rotate": 90,
              "align": "left",
              "position": "top",
              "formatter": "{c}%"
            }
          },
          "itemStyle": {
            "color": "#ead84c",
            "barBorderRadius": 3
          }
        }]
      };
      this.bar3 = {
        "grid": {
          "left": 80,
          "right": 35
        },
        "xAxis": {
          "type": "value",
          "show": false
        },
        "yAxis": {
          "type": "category",
          "inverse": true,
          "data": ["中国吸烟总数","男性吸烟总数","女性吸烟总数"],
          "axisLabel": {
            "textStyle": {
              "color": "#fff"
            }
          },
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          }
        },
        "series": [{
          "type": "bar",
          "data": [3.15, 2.54, 0.14],
          "barWidth": "30%",
          "label": {
            "show": true,
            "color": "#fff",
            "position": "right",
            "formatter": "{c}亿人"
          },
          "itemStyle": {
            "color": "#2ec7c9",
            "barBorderRadius": 3
          }
        }]
      };
      this.pie1 = {
        "title": {
          "text": "每年新发肺癌人数",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "bottom": 10,
          "left": "50%"
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
                "value": 78.7,
                "itemStyle": {
                  "color": "#2ec8b6"
                }
              },{
                "value": 21.3,
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
          "text": "每年肺癌死亡人数",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "bottom": 10,
          "left": "50%"
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
                "value": 63.1,
                "itemStyle": {
                  "color": "#ead84c"
                }
              },{
                "value": 36.9,
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
          "text": "肺癌死亡率",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "bottom": 10,
          "left": "50%"
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
                "value": 46,
                "itemStyle": {
                  "color": "#db2828"
                }
              },{
                "value": 54,
                "itemStyle": {
                  "color": "#033348"
                }
              }
            ]
          }
        ]
      };
      this.pie4 = {
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
                "value": 80,
                "itemStyle": {
                  "color": "#2ec7c9"
                }
              },{
                "value": 20,
                "itemStyle": {
                  "color": "#033348"
                }
              }
            ]
          }
        ]
      };
      this.pie5 = {
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
                "value": 60,
                "itemStyle": {
                  "color": "#2ec7c9"
                }
              },{
                "value": 40,
                "itemStyle": {
                  "color": "#033348"
                }
              }
            ]
          }
        ]
      };
      this.pie6 = {
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
                "value": 10,
                "itemStyle": {
                  "color": "#ead84c"
                }
              },{
                "value": 90,
                "itemStyle": {
                  "color": "#033348"
                }
              }
            ]
          }
        ]
      };
      this.pie7 = {
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
                "value": 80,
                "itemStyle": {
                  "color": "#ead84c"
                }
              },{
                "value": 20,
                "itemStyle": {
                  "color": "#033348"
                }
              }
            ]
          }
        ]
      };
      this.line1 = {
        "xAxis": {
          "type": "category",
          "color": "#fff",
          "data": ["5-", "15-", "25-", "35-", "45-", "55-", "65-", "75-", "85-"],
          "axisLabel": {
            "rotate": 45
          },
          "axisLine": {
            "lineStyle": {
              "color": "#fff"
            }
          }
        },
        "yAxis": {
          "type": "value",
          "color": "#fff",
          "splitLine": {
            "show": false
          },
          "axisLine": {
            "lineStyle": {
              "color": "#fff"
            }
          }
        },
        "series": [{
          "data": [820, 932, 901, 934, 1290, 1330, 1320, 1330, 1440],
          "type": "line"
        }]
      }
;
      this.line2 = {
        "title": {
          "text": "不同人群死于肺癌概率（%）",
          "textStyle": {
            "color": "#fff",
            "fontSize": 12,
            "fontWeight": 400
          },
          "textAlign": "center",
          "top": 0,
          "left": "50%"
        },
        "xAxis": {
          "type": "category",
          "data": ["45", "55", "65", "75"],
          "axisLine": {
            "lineStyle": {
              "color": "#fff"
            }
          }
        },
        "yAxis": {
          "type": "value",
          "splitLine": {
            "show": false
          },
          "axisLine": {
            "lineStyle": {
              "color": "#fff"
            }
          }
        },
        "series": [{
          "data": [820, 932, 901, 934],
          "type": "line"
        }]
      }
;
      this.radar = {
        "legend":{
          "data":["男吸烟率","女吸烟率"]
        },
        "radar":{
          "name":{
            "textStyle":{
              "color":"#fff",
              "borderRadius":3
            }
          },
          "radius": "40%",
          "splitNumber": 3,
          "splitLine": {
            "lineStyle": {
              "color": "#acfcfa"
            }
          },
          "splitArea": {
            "show": false
          },
          "axisLine": {
            "show": false,
            "lineStyle": {
              "show": false
            }
          },
          "indicator":[
            {
              "name":"18-",
              "max":6500
            },
            {
              "name":"60-69",
              "max":16000
            },
            {
              "name":"50-",
              "max":30000
            },
            {
              "name":"40-",
              "max":38000
            },
            {
              "name":"30-",
              "max":52000
            }
          ]
        },
        "series":[
          {
            "name":"预算 vs 开销（Budget vs spending）",
            "type":"radar",
            "data":[
              {
                "value":[
                  4300,
                  10000,
                  28000,
                  35000,
                  50000
                ],
                "name":"预算分配（Allocated Budget）"
              }
            ],
            "itemStyle": {
              "normal": {
                "color": "#F9713C"
              }
            },
            "areaStyle": {
              "normal": {
                "opacity": 0.3
              }
            }
          }
        ]
      };
    },
    created() {
      // Axios.get('./data/lungs/bar1.json')
      //   .then(response => {
      //     this.bar1 = response.data;
      //   });
      // Axios.get('./data/lungs/bar2.json')
      //   .then(response => {
      //     this.bar2 = response.data;
      //   });
      // Axios.get('./data/lungs/bar3.json')
      //   .then(response => {
      //     this.bar3 = response.data;
      //   });
      //
      // Axios.get('./data/lungs/pie1.json')
      //   .then(response => {
      //     this.pie1 = response.data;
      //   });
      // Axios.get('./data/lungs/pie2.json')
      //   .then(response => {
      //     this.pie2 = response.data;
      //   });
      // Axios.get('./data/lungs/pie3.json')
      //   .then(response => {
      //     this.pie3 = response.data;
      //   });
      // Axios.get('./data/lungs/pie4.json')
      //   .then(response => {
      //     this.pie4 = response.data;
      //   });
      // Axios.get('./data/lungs/pie5.json')
      //   .then(response => {
      //     this.pie5 = response.data;
      //   });
      // Axios.get('./data/lungs/pie6.json')
      //   .then(response => {
      //     this.pie6 = response.data;
      //   });
      // Axios.get('./data/lungs/pie7.json')
      //   .then(response => {
      //     this.pie7 = response.data;
      //   });
      //
      // Axios.get('./data/lungs/line1.json')
      //   .then(response => {
      //     this.line1 = response.data;
      //   });
      //
      // Axios.get('./data/lungs/line2.json')
      //   .then(response => {
      //     this.line2 = response.data;
      //   });
      //
      // Axios.get('./data/lungs/radar.json')
      //   .then(response => {
      //     this.radar = response.data;
      //   });
    }
  }
</script>

<style lang="scss">
  #lungs {
    .part-4 {
      padding: 15px 0 0;
      border-top: 1px solid #fff;

      .text-box {
        height: 30px;
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

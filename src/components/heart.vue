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

        <img src="./../assets/images/heart/parallel.png" alt="" width="100%" style="padding: 40px 0 0;">
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
  import Jsonp from 'jsonp';
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

      this.bar1 = {
        "title": {
          "text": "男性心率/分钟",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "top": "5%",
          "right": "20%"
        },
        "grid": {
          "right": 47
        },
        "tooltip": {},
        "legend": {
          "show": false,
          "data": ["运动员", "极好", "很好", "尚好", "一般", "稍差", "不佳"]
        },
        "xAxis": {
          "name": "(年龄)",
          "data": ["18-25","26-35","36-45","46-55","56-65"],
          "axisLine": {
            "lineStyle": {
              "color": "#fff"
            }
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
          }
        },
        "series": [{
          "name": "运动员",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [52, 51, 53, 54, 55],
          "itemStyle": {
            "normal": {"color": "#2ec7c9"}
          }
        },{
          "name": "极好",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [57, 57, 58, 59, 59],
          "itemStyle": {
            "normal": {"color": "#97b551"}
          }
        },{
          "name": "很好",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [63, 63, 64, 65, 66],
          "itemStyle": {
            "normal": {"color": "#51a3a3"}
          }
        },{
          "name": "尚好",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [67, 68, 68, 69, 69],
          "itemStyle": {
            "normal": {"color": "#b0bff4"}
          }
        },{
          "name": "一般",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [71, 72, 73, 74, 74],
          "itemStyle": {
            "normal": {"color": "#ead84c"}
          }
        },{
          "name": "稍差",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [72, 73, 74, 75, 76],
          "itemStyle": {
            "normal": {"color": "#dd7473"}
          }
        },{
          "name": "不佳",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [81, 82, 83, 84, 85],
          "itemStyle": {
            "normal": {"color": "#db2828"}
          }
        }]
      };
      this.bar2 = {
        "title": {
          "text": "女性心率/分钟",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "top": "5%",
          "right": "20%"
        },
        "grid": {
          "right": 47
        },
        "tooltip": {},
        "legend": {
          "show": false,
          "data": ["运动员", "极好", "很好", "尚好", "一般", "稍差", "不佳"]
        },
        "xAxis": {
          "name": "(年龄)",
          "data": ["18-25","26-35","36-45","46-55","56-65"],
          "axisLine": {
            "lineStyle": {
              "color": "#fff"
            }
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
          }
        },
        "series": [{
          "name": "运动员",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [52, 51, 53, 54, 55],
          "itemStyle": {
            "normal": {"color": "#2ec7c9"}
          }
        },{
          "name": "极好",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [57, 57, 58, 59, 59],
          "itemStyle": {
            "normal": {"color": "#97b551"}
          }
        },{
          "name": "很好",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [63, 63, 64, 65, 66],
          "itemStyle": {
            "normal": {"color": "#51a3a3"}
          }
        },{
          "name": "尚好",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [67, 68, 68, 69, 69],
          "itemStyle": {
            "normal": {"color": "#b0bff4"}
          }
        },{
          "name": "一般",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [71, 72, 73, 74, 74],
          "itemStyle": {
            "normal": {"color": "#ead84c"}
          }
        },{
          "name": "稍差",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [72, 73, 74, 75, 76],
          "itemStyle": {
            "normal": {"color": "#dd7473"}
          }
        },{
          "name": "不佳",
          "stack": "总量",
          "type": "bar",
          "barWidth": "40%",
          "data": [81, 82, 83, 84, 85],
          "itemStyle": {
            "normal": {"color": "#db2828"}
          }
        }]
      };
      this.pie1 = {
        "tooltip":{
          "trigger":"item",
          "formatter":"{a} <br/>{b}: {c} ({d}%)"
        },
        "legend":{
          "show": false,
          "orient":"vertical",
          "x":"left",
          "data":[
            "normal",
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
                "value":31,
                "name":"normal",
                "itemStyle": {
                  "normal": {"color": "#033348"}
                }
              },
              {
                "value":69,
                "name":"直接访问",
                "itemStyle": {
                  "normal": {"color": "#2ec7c9"}
                }
              }
            ]
          }
        ]
      };
      this.pie2 = {
        "tooltip":{
          "trigger":"item",
          "formatter":"{a} <br/>{b}: {c} ({d}%)"
        },
        "legend":{
          "show": false,
          "orient":"vertical",
          "x":"left",
          "data":[
            "normal",
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
                "value":77,
                "name":"normal",
                "itemStyle": {
                  "normal": {"color": "#033348"}
                }
              },
              {
                "value":23,
                "name":"直接访问",
                "itemStyle": {
                  "normal": {"color": "#ae00bf"}
                }
              }
            ]
          }
        ]
      };
      this.pie3 = {
        "tooltip":{
          "trigger":"item",
          "formatter":"{a} <br/>{b}: {c} ({d}%)"
        },
        "legend":{
          "show": false,
          "orient":"vertical",
          "x":"left",
          "data":[
            "normal",
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
                "value":64,
                "name":"normal",
                "itemStyle": {
                  "normal": {"color": "#033348"}
                }
              },
              {
                "value":36,
                "name":"直接访问",
                "itemStyle": {
                  "normal": {"color": "#ffea00"}
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
            "normal",
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
                "value":90,
                "name":"normal",
                "itemStyle": {
                  "normal": {"color": "#033348"}
                }
              },
              {
                "value":10,
                "name":"直接访问",
                "itemStyle": {
                  "normal": {"color": "#ff153c"}
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
            "normal",
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
                "value":62,
                "name":"normal",
                "itemStyle": {
                  "normal": {"color": "#033348"}
                }
              },
              {
                "value":38,
                "name":"直接访问",
                "itemStyle": {
                  "normal": {"color": "#67c7ff"}
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
            "normal",
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
                "value":31,
                "name":"normal",
                "itemStyle": {
                  "normal": {"color": "#033348"}
                }
              },
              {
                "value":69,
                "name":"直接访问",
                "itemStyle": {
                  "normal": {"color": "#2ec8b6"}
                }
              }
            ]
          }
        ]
      };
      this.radar = {
        "radar":{
          "name":{
            "textStyle":{
              "color":"#fff",
              "borderRadius":3
            }
          },
          "radius": "50%",
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
              "name":"血压",
              "max":6500
            },
            {
              "name":"体重指数",
              "max":16000
            },
            {
              "name":"胆固醇水平",
              "max":30000
            },
            {
              "name":"腰围",
              "max":38000
            },
            {
              "name":"血糖",
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
                "color": "#2ec7c9"
              }
            },
            "areaStyle": {
              "normal": {
                "opacity": 0.7
              }
            }
          }
        ]
      };
    },
    created() {
      console.log(1);

// 1.
      // let instance = Axios.create({
      //   baseURL: '/',
      //   timeout: 1000,
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Credentials': true
      //   }
      // });

      // instance.get('data/heart/bar1.json')
      //   .then(response => {
      //     this.bar1 = response.data;
      //   })
      //   .catch(error => {
      //   });

// 2.
      // Axios({
      //   method: 'GET',
      //   url: 'data/heart/bar2.json',
      //   crossDomain: true,
      //   cache: false,
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //   }
      // }).then(resp => {
      //   this.bar2 = resp.data;
      // });

// 3.
      //axios本版本不支持jsonp 自己拓展一个
      // Axios.jsonp = (url) => {
      //   if(!url){
      //     console.error('Axios.JSONP 至少需要一个url参数!');
      //     return;
      //   }
      //   return new Promise((resolve,reject) => {
      //     window.jsonCallBack =(result) => {
      //       resolve(result)
      //     };
      //     var JSONP=document.createElement("script");
      //     JSONP.type="text/javascript";
      //     JSONP.src=`${url}&callback=jsonCallBack`;
      //     document.getElementsByTagName("head")[0].appendChild(JSONP);
      //     setTimeout(() => {
      //       document.getElementsByTagName("head")[0].removeChild(JSONP)
      //     },500)
      //   })
      // };
      // Axios.jsonp('data/heart/radar.json', (err, resp) => {
      //   console.log(err, resp)
      // });

// 4.
      // Jsonp('data/heart/radar.json', null, (error, resp) => {
      //   this.radar = resp.data;
      // });


      // Axios.get('data/heart/bar1.json')
      //   .then(response => {
      //     this.bar1 = response.data;
      //   })
      //   .catch(error => {
      //   });
      //
      // Axios.get('data/heart/bar2.json')
      //   .then(response => {
      //     this.bar2 = response.data;
      //   })
      //   .catch(error => {
      //   });
      //
      // Axios.get('data/heart/radar.json')
      //   .then(resp => {
      //     this.radar = resp.data;
      //   });
      //
      // Axios.get('./data/heart/pie1.json')
      //   .then(resp => {
      //     this.pie1 = resp.data;
      //   });
      //
      // Axios.get('./data/heart/pie2.json')
      //   .then(resp => {
      //     this.pie2 = resp.data;
      //   });
      //
      // Axios.get('./data/heart/pie3.json')
      //   .then(resp => {
      //     this.pie3 = resp.data;
      //   });
      //
      // Axios.get('./data/heart/pie4.json')
      //   .then(resp => {
      //     this.pie4 = resp.data;
      //   });
      //
      // Axios.get('./data/heart/pie5.json')
      //   .then(resp => {
      //     this.pie5 = resp.data;
      //   });
      //
      // Axios.get('./data/heart/pie6.json')
      //   .then(resp => {
      //     this.pie6 = resp.data;
      //   });
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

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
          <div class="pull-left" style="font-size: 16px; color:#2ec7c9; padding: 30px 0 0;">慢性肾脏病分期</div>
          <div class="pull-left" style="padding: 0 0 0 50px;">
            <img src="./../assets/images/kidney/kidney-disease-section.png" alt="" style="width: 90%">
          </div>
        </div>

        <div class="clearfix" style="padding: 20px 0 10px;">
          <div class="part-title">第一部分，慢性肾脏病</div>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="width:30%">
            <div class="item ">
              <div class="pull-left"
                   style="width: 50px;height:15px;background-color: #51a3a3;border-radius: 3px;margin:21px 0 0;"></div>
              <div class="pull-left" style="margin:0 0 0 20px;">
                <div class="num" style="color:#51a3a3; font-size: 28px;">4.8%</div>
                <div class="text">住院患者中慢性肾脏病比例</div>
              </div>
            </div>
            <div class="item clearfix">
              <div class="pull-left"
                   style="width: 100px;height:15px;background-color: #ead84c;border-radius: 3px;margin:21px 0 0;"></div>
              <div class="pull-left" style="margin:0 0 0 20px;">
                <div class="num" style="color:#ead84c; font-size: 28px;">10.8%</div>
                <div class="text">慢性肾脏患病率</div>
              </div>
            </div>
            <div class="item clearfix">
              <div class="pull-left"
                   style="margin:10px 0 0;">
                <img src="./../assets/images/kidney/icon2.png" alt="">
              </div>
              <div class="pull-left" style="margin:0 0 0 20px;">
                <div class="num" style="color:#51a3a3; font-size: 28px;">58.9%</div>
                <div class="text">男性为主</div>
              </div>
            </div>
          </div>
          <div class="pull-left" style="width:21%">
            <div class="item" style="padding: 20px 0;">
              <div class="pull-left"
                   style="margin:20px 0 0;">
                <img src="./../assets/images/kidney/icon1.png" alt="" width="42px">
              </div>
              <div class="pull-left" style="margin:0 0 0 20px;">
                <div class="num" style="color:#51a3a3; font-size: 28px;">30%</div>
                <div class="text" style="width: 115px;">慢性肾脏病患者住院费用比非患者高30%</div>
              </div>
            </div>

            <div class="item clearfix" style="padding: 20px 0;">
              <div class="pull-left"
                   style="margin:10px 0 0;">
                <img src="./../assets/images/kidney/icon3.png" alt="">
              </div>
              <div class="pull-left" style="margin:0 0 0 20px;">
                <div class="num" style="color:#51a3a3; font-size: 28px;">> 50%</div>
                <div class="text">60岁以下</div>
              </div>
            </div>
          </div>
          <div class="pull-left" style="width:16%;text-align: right">
            <img src="./../assets/images/kidney/icon4.png" alt="" width="110">
          </div>
          <div class="pull-left" style="width:33%">
            <ChartBar
              :id="'bar2'"
              :width=200
              :height=200
              :data="bar2"
            ></ChartBar>
          </div>
        </div>

        <div class="clearfix" style="padding: 20px 0 0;">
          <div class="pull-left" style="width:28%">
            <ChartPie
              :id="'pie3'"
              :width=300
              :height=250
              :data="pie3"
            ></ChartPie>
          </div>
          <div class="pull-left province-top3" style="width:72%">
            <div class="title" style="font-size: 16px; color:#2ec7c9;">不同病因的高发省份（TOP3）</div>
            <div class="pull-left" style="width:25%">
              <div class="item-title">糖尿病肾病</div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/qinghai.png" alt="">
                </div>
                <div class="text">青海</div>
              </div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/gansu.png" alt="">
                </div>
                <div class="text">甘肃</div>
              </div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/heilongjiang.png" alt="">
                </div>
                <div class="text">黑龙江</div>
              </div>
            </div>
            <div class="pull-left" style="width:25%">
              <div class="item-title">梗阻性肾病</div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/jiangxi.png" alt="" style="">
                </div>
                <div class="text">江西</div>
              </div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/guangxi.png" alt="">
                </div>
                <div class="text">广西</div>
              </div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/guangdong.png" alt="">
                </div>
                <div class="text">广东</div>
              </div>
            </div>
            <div class="pull-left" style="width:25%">
              <div class="item-title">高血压肾病</div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/shanghai.png" alt="">
                </div>
                <div class="text">上海</div>
              </div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/hubei.png" alt="">
                </div>
                <div class="text">湖北</div>
              </div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/chongqing.png" alt="">
                </div>
                <div class="text">重庆</div>
              </div>
            </div>
            <div class="pull-left" style="width:25%">
              <div class="item-title">肾小球肾病</div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/ningxia.png" alt="">
                </div>
                <div class="text">宁夏</div>
              </div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/hubei.png" alt="">
                </div>
                <div class="text">湖北</div>
              </div>
              <div class="pull-left" style="width:33.33%">
                <div class="img">
                  <img src="./../assets/images/kidney/xizang.png" alt="">
                </div>
                <div class="text">西藏</div>
              </div>
            </div>
          </div>
        </div>

        <div class="clearfix">
          <div class="part-title">第二部分，终末期肾脏病</div>
        </div>

        <div class="clearfix">
          <div class="pull-left" style="width:25%">
            <div class="clearfix">
              <img src="./../assets/images/kidney/icon5.png" alt="">
              血透
            </div>
            <div class="clearfix">
              <div class="pull-left" style="width:50%">
                <div class="img pull-left" style="width: 50%">
                  <img src="./../assets/images/kidney/icon8.png" alt="">
                </div>
                <div class="img pull-left" style="width: 50%">
                  <div class="num">553000</div>
                  <div class="text">患者人数</div>
                </div>
              </div>
              <div class="pull-left" style="width:50%">
                <div class="num">402.18</div>
                <div class="text">患病率（百万）</div>
              </div>
            </div>
          </div>
          <div class="pull-left" style="width:25%">
            <div class="clearfix">
              <img src="./../assets/images/kidney/icon6.png" alt="">
              腹透
            </div>
            <div class="clearfix">
              <div class="pull-left" style="width:50%">
                <div class="img pull-left" style="width: 50%">
                  <img src="./../assets/images/kidney/icon8.png" alt="">
                </div>
                <div class="img pull-left" style="width: 50%">
                  <div class="num">55000</div>
                  <div class="text">患者人数</div>
                </div>
              </div>
              <div class="pull-left" style="width:50%">
                <div class="num">39.95</div>
                <div class="text">患病率（百万）</div>
              </div>
            </div>
          </div>
          <div class="pull-left" style="width:25%">
            <div class="clearfix">
              <img src="./../assets/images/kidney/icon7.png" alt="">
            </div>
            <div class="clearfix">
              <div class="num">122.19</div>
              <div class="text">透析患者发病率（百万）</div>
            </div>
          </div>
          <div class="pull-left" style="width:25%">
            <div class="item clearfix">
              <div class="pull-left" style="width:25%">
                <img src="./../assets/images/kidney/icon9.png" alt="">
              </div>
              <div class="pull-left" style="width:25%">18-44岁</div>
              <div class="pull-left" style="width:25%">11.80</div>
              <div class="pull-left" style="width:25%"></div>
            </div>

            <div class="item clearfix">
              <div class="pull-left" style="width:25%">
                <img src="./../assets/images/kidney/icon10.png" alt="">
              </div>
              <div class="pull-left" style="width:25%">45-64岁</div>
              <div class="pull-left" style="width:25%">31.57</div>
              <div class="pull-left" style="width:25%"></div>
            </div>

            <div class="item clearfix">
              <div class="pull-left" style="width:25%">
                <img src="./../assets/images/kidney/icon11.png" alt="">
              </div>
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
    mounted() {
      this.bar1 = {
        "tooltip": {},
        "xAxis": {
          "data": ["全世界患肾\n脏疾病人数","每年死亡人数","中国患病人数"],
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          "axisLabel": {
            "rotate": 45,
            "textStyle": {
              "color": "#fff"
            }
          }
        },
        "yAxis": {
          "show": false
        },
        "series": [{
          "type": "bar",
          "data": [8.5, 0.042, 1.2],
          "barWidth": "40%",
          "label": {
            "show": true,
            "color": "#fff",
            "position": "top",
            "formatter": "{c}亿人"
          },
          "itemStyle": {
            "barBorderRadius": 3
          }
        }]
      };
      this.bar2 = {
        "title": {
          "text": "慢性肾脏疾病与心血管疾病关系密切",
          "textStyle": {
            "color": "#fff",
            "fontSize": 12,
            "fontWeight": 400
          },
          "textAlign": "center",
          "top": "10",
          "left": "50%"
        },
        "grid": {
          "left": 45
        },
        "xAxis": {
          "type": "value",
          "axisLine": {
            "show": false
          },
          "splitLine": {
            "color": "#fff"
          },
          "axisLabel": {
            "textStyle": {
              "color": "#fff"
            }
          }
        },
        "yAxis": {
          "type": "category",
          "inverse": true,
          "data": ["卒中","心衰","冠心病"],
          "axisLabel": {
            "textStyle": {
              "color": "#fff"
            }
          },
          "axisTick": {
            "show": false
          },
          "axisLine": {
            "lineStyle": {
              "color": "#fff"
            }
          }
        },
        "series": [{
          "type": "bar",
          "barWidth": "40%",
          "data": [13, 16, 18],
          "itemStyle": {
            "color": "#51a3a3"
          }
        }]
      };
      this.pie1 = {
        "title": {
          "text": "全世界发病率",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "left": "50%",
          "bottom": 20
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
                "value": 12
              },{
                "value": 88,
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
          "text": "中国患病率",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14,
            "fontWeight": 400
          },
          "textAlign": "center",
          "left": "50%",
          "bottom": 20
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
                "value":10.8
              },{
                "value":89.2,
                "itemStyle": {
                  "color": "#033348"
                }
              }
            ]
          }
        ]
      };
      this.pie3 = {
        "tooltip":{
          "trigger":"item",
          "formatter":"{a} <br/>{b} : {c} ({d}%)"
        },
        "legend": {
          "data": ["糖科病肾病","高血压肾病","硬阻性肾病","肾小球肾炎","其他病因"],
          "textStyle": {
            "color": "#fff",
            "fontSize": 10
          }
        },
        "color": ["#d76662", "#ba332f", "#8b2523", "#832220", "#621b19"],
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
                "value":21.5,
                "name":"其他病因",
                "itemStyle": {
                  "normal": {
                    "color": "#d76662"
                  }
                },
                "label": {
                  "position": "outside",
                  "color": "#fff",
                  "fontSize": "10",
                  "formatter": "{c}%"
                }
              },
              {
                "value":15.1,
                "name":"肾小球肾炎",
                "itemStyle": {
                  "normal": {
                    "color": "#ba332f"
                  }
                },
                "label": {
                  "position": "outside",
                  "color": "#fff",
                  "fontSize": "10",
                  "formatter": "{c}%"
                }
              },
              {
                "value":15.6,
                "name":"硬阻性肾病",
                "itemStyle": {
                  "normal": {
                    "color": "#8b2523"
                  }
                },
                "label": {
                  "position": "outside",
                  "color": "#fff",
                  "fontSize": "10",
                  "formatter": "{c}%"
                }
              },
              {
                "value":20.8,
                "name":"高血压肾病",
                "itemStyle": {
                  "normal": {
                    "color": "#832220"
                  }
                },
                "label": {
                  "position": "outside",
                  "color": "#fff",
                  "fontSize": "10",
                  "formatter": "{c}%"
                }
              },
              {
                "value":27.0,
                "name":"糖科病肾病",
                "itemStyle": {
                  "normal": {
                    "color": "#621b19"
                  }
                },
                "label": {
                  "position": "outside",
                  "color": "#fff",
                  "fontSize": "10",
                  "formatter": "{c}%"
                }
              }
            ],
            "roseType":"radius",
            "label":{
              "normal":{
                "textStyle":{
                  "color":"rgba(255, 255, 255, 0.3)"
                }
              }
            },
            "labelLine":{
              "normal":{
                "lineStyle":{
                  "color":"rgba(255, 255, 255, 0.3)"
                },
                "smooth":0.2,
                "length":7,
                "length2":5
              }
            },
            "itemStyle":{
              "normal":{
                "color":"#c23531",
                "shadowBlur":200,
                "shadowColor":"rgba(0, 0, 0, 0.5)"
              }
            },
            "animationType":"scale",
            "animationEasing":"elasticOut"
          }
        ]
      };
    },
    created() {
      // Axios.get('./data/kidney/bar1.json')
      //   .then(resp => {
      //     this.bar1 = resp.data
      //   });
      //
      // Axios.get('./data/kidney/bar2.json')
      //   .then(resp => {
      //     this.bar2 = resp.data
      //   });
      //
      // Axios.get('./data/kidney/pie1.json')
      //   .then(resp => {
      //     this.pie1 = resp.data
      //   });
      //
      // Axios.get('./data/kidney/pie2.json')
      //   .then(resp => {
      //     this.pie2 = resp.data
      //   });
      //
      // Axios.get('./data/kidney/pie3.json')
      //   .then(resp => {
      //     this.pie3 = resp.data
      //   });
    }
  }
</script>

<style lang="scss">
  #kidney {
    .part-title {
      display: inline-block;
      padding: 2px 10px;
      background-color: #2ec7c9;
      border-radius: 3px;
    }

    .province-top3 {
      .item-title {
        padding: 20px 0 10px;
      }
      .img {
        margin: 10px 0 0;
        line-height: 70px;
        height: 60px;
        text-align: center;
      }
      .text {
        text-align: center;
      }
    }
  }
</style>
<template>
  <div class="echarts">
    <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
  </div>
</template>
<script>
  let echarts = require('echarts/lib/echarts')
  import '../../node_modules/echarts/map/js/world.js'
  export default {
    name: "echarts",
    props: {
      className: {
        type: String,
        default: "yourClassName"
      },
      id: {
        type: String,
        default: "yourID"
      },
      width: {
        type: String,
        default: "100%"
      },
      height: {
        type: String,
        default: "600px"
      }
    },
    data() {
      return {
      };
    },
    mounted() {
      this.initChart();
    },
    beforeDestroy() {
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$refs.myEchart);
        window.onresize = echarts.init(this.$refs.myEchart).resize;
        // 把配置和数据放这里
        this.chart.setOption({
          backgroundColor: "transparent",
          title: {
            left: '40%',
            top: '0px',
            textStyle: {
              color: '#fff',
              opacity: 0.7
            }
          },
          dataRange: {
            show: false,
            min: 0,
            max: 1000000,
            text: ['High', 'Low'],
            realtime: true,
            calculable: true,
            color: ['orangered', 'yellow', 'lightskyblue']
          },
          geo: {
            map: 'world',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: false,
            silent: true,
            itemStyle: {
              normal: {
                areaColor: '#37376e',
                borderColor: '#000'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            }
          },
          series: [{
            type: 'map',
            mapType: 'world',
            // zoom: 1.2,
            mapLocation: {
              y: 100
            },
            data: [{
              name: 'China',
              value: 1359821.465
            }
            ],
            symbolSize: 12,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                borderColor: '#fff',
                borderWidth: 1
              }
            }
          }],
        });
      }
    }
  }
</script>
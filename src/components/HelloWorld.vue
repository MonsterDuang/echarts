<template>
  <div class="hello">
    <div id="myChart" :style="{width: '1000px', height: '500px'}"></div>
    <button @click="getSong(1)">新歌</button>
    <button @click="getSong(2)">热歌</button>
    <button @click="getSong(11)">摇滚</button>
    <button @click="getSong(12)">爵士</button>
    <button @click="getSong(22)">老歌</button>
  </div>
</template>

<script>
import http from 'axios'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入折线图组件
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'HelloWorld',
  data () {
    return {
      songTitle: [],
      hot: [],
      file_duration: []
    }
  },
  mounted(){
    this.getSong(1)
  },
  methods: {
    getSong(type) {
      this.songTitle = []
      this.hot = []
      this.file_duration = []
      let url = '/mozik/v1/restserver/ting?method=baidu.ting.billboard.billList&size=10&offset=0&type=' + type
      http.get(url).then(res => {
        let data = res.data.song_list
        console.log(data)
        data.map(val => {
          this.songTitle.push(val.title)
          this.hot.push(val.hot)
          this.file_duration.push(val.file_duration + '000')
          this.drawLine()
        })
      })
    },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            legend: {
              data:['歌曲热度', '歌曲周期']
            },
            tooltip: {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            xAxis: {
              type: 'category',
              data: this.songTitle,
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                interval: 0,
                rotate: 15
              },
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              name: '歌曲热度',
              type: 'line',
              data: this.hot
            },{
              name: '歌曲周期',
              type: 'line',
              data: this.file_duration
            }]
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

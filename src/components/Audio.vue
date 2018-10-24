<template>
  <div class="hello">
    <audio :src="song" controls autoplay @timeupdate="timeUpdate" id="audio"></audio>
    <div class="lrc">
      <div class="lrc_scroll" ref="lrc_scroll">
        <div v-for="(item) in lrc_done" :key="item[1]" :style="item[3]" :id="item[1].slice(0, 5)">{{item[2]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import After from './after.mp3'
export default {
  name: 'Audio',
  data () {
    return {
      song: After,
      lrc: {
      'title': "往后余生",
      'lrcContent': "[ti:0]\r\n[ar:0]\r\n[al:0]\r\n[by:0]\r\n[offset:0]\r\n[00:01.83]往后余生\r\n[00:02.23]\r\n[00:02.72]作词：马良\r\n[00:03.13]作曲：马良\r\n[00:03.62]演唱：马良、孙茜茹\r\n[00:04.08]编曲：刘凤瑶\r\n[00:04.53]吉他：蒋柽\r\n[00:04.98]录音：小金@好听音乐\r\n[00:05.43]混音：蒋柽@芬响家FINN MUSIC\r\n[00:05.91]制作STUDIO：芬响家FINN MUSIC\r\n[00:06.38]制作人：刘凤瑶\r\n[00:06.79]\r\n[00:34.85]在没风的地方找太阳\r\n[00:41.62]在你冷的地方做暖阳\r\n[00:47.66]人事纷纷\r\n[00:50.56]你总太天真\r\n[00:55.27]往后的余生\r\n[00:57.34]我只要你\r\n[01:00.34]往后余生\r\n[01:03.47]风雪是你\r\n[01:06.96]平淡是你\r\n[01:10.24]清贫也是你\r\n[01:13.81]荣华是你\r\n[01:17.22]心底温柔是你\r\n[01:20.81]目光所致\r\n[01:23.52]也是你\r\n[01:26.95]\r\n[01:44.69]想带你去看晴空万里\r\n[01:51.81]想大声告诉你我为你着迷\r\n[01:58.67]往事匆匆\r\n[02:00.81]你总会被感动\r\n[02:05.46]往后的余生\r\n[02:07.22]我只要你\r\n[02:10.77]往后余生\r\n[02:13.92]风雪是你\r\n[02:17.15]春华是你\r\n[02:20.51]夏雨也是你\r\n[02:24.19]秋黄是你\r\n[02:27.61]四季冷暖是你\r\n[02:31.05]目光所致\r\n[02:33.86]也是你\r\n[02:37.27]\r\n[03:05.45]往后余生\r\n[03:08.67]风雪是你\r\n[03:11.99]平淡是你\r\n[03:15.48]清贫也是你\r\n[03:19.03]荣华是你\r\n[03:22.36]心底温柔是你\r\n[03:25.99]目光所致\r\n[03:28.80]也是你\r\n[03:32.34]"
      },
      lrc_done: []
    }
  },
  mounted() {
    let lrc = this.lrc.lrcContent
    lrc = lrc.split(/\n/)
    for (let i in lrc) {
      let str = lrc[i]
      let reg = /\[(.+)\](.+)?/
      this.lrc_done.push(str.match(reg))
    }
    // console.log(this.lrc_done)
  },
  methods: {
    timeUpdate(data){
      this.lrc_done.map(val => {
        if (val[1].slice(0, 5) == this.sec_to_time(data.target.currentTime).slice(3, 8)) {
          val.push('color: red')
          let lrc_now = document.getElementById(val[1].slice(0, 5))
          let lrc_top = lrc_now.getBoundingClientRect().top
          if (lrc_top - 160 > 200) {
            this.$nextTick(() => {
              this.$refs.lrc_scroll.scrollTop += lrc_top - 360
            })
            // console.log(this.$refs.lrc_scroll.scrollTop, lrc_top)
          }
        } else if (val[1].slice(0, 5) < this.sec_to_time(data.target.currentTime).slice(3, 8)) {
          if (val[3] != '') {
            val[3] = 'color: #000;'
          }
        }
      })
    },
    sec_to_time(s) {
      var t;
      if(s > -1){
        var hour = Math.floor(s/3600);
        var min = Math.floor(s/60) % 60;
        var sec = s % 60;
        if(hour < 10) {
            t = '0'+ hour + ":";
        } else {
            t = hour + ":";
        }

        if(min < 10){t += "0";}
        t += min + ":";
        if(sec < 10){t += "0";}
        t += sec.toFixed(2);
      }
      return t;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
audio{
  margin: 10px 50px
}
.lrc{
  width: 400px;
  height: 400px;
  border: solid 1px #797979;
  text-align: center;
}
.lrc_scroll{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

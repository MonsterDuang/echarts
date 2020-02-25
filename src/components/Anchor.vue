<template>
  <div class="main">
    <div class="yx-container">
      <div class="plan">
        <div class="day">
          <p v-for="(item, idx) in 12" @click="intoView(idx)" :class="{'active': idx==dayIdx}">day{{item}}</p>
        </div>
        <div class="plan-info" @scroll="planScroll" id="plan">
          <div v-for="(item, idx) in 12" :id="idx" class="plan-detail">
            <span>第{{item}}天：布里斯班</span>
            <div>
              <div class="img"></div>
              <span>学生们将乘车前往澳大利亚常春藤名校联盟“八大名校”之一的昆士兰大学，进行一日的学习体验。昆士兰大学位于澳大利亚昆士兰首府布里斯班市，以拥有强大的教学和科研力量而受到国际的赞誉。这所综合性大学拥有五十多年接收国际学生的经验，力求让国际学生在这里拥有一个活力友好、体贴周到的学习生活环境。学生们将在这里感受真正的澳式名校教育，为留学澳洲做好充足的准备。学生将在新东方老师的带领下来到昆大ESL体验课程，进入世界50强顶尖名校昆士兰大学体验有趣生动的ESL英语定制课程，使学员对澳洲的教学方式和节奏有一定的了解。随后，将参加由昆士兰大学举办的中澳教育文化专题研讨会。结束workshop之后，学员将在昆大享用澳式下午茶，感受名校生活节奏与氛围。昆士兰大学名校体验日结束后，学员将获得由昆士兰大学颁发的学习认证证书。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    async asyncData({$axios, params, store}) {
      const {data} = await $axios.$post(store.state.api.indexData, {})
      // console.log(data)
      return {
        
      }
    },
    data() {
      return {
        dayIdx: 0,
      }
    },
    methods: {
      planScroll(e){
        let planEle = document.getElementById('plan')
        for (let i = 0; i < 12; i++) {
          let iOft = document.getElementById(i).offsetTop
          if (planEle.scrollTop > iOft - planEle.offsetTop - 100 && planEle.scrollTop < iOft - planEle.offsetTop - 20) {
            this.dayIdx = i
          }
        }
        // console.log(e.target.scrollTop)
      },
      intoView(idx) {
        this.dayIdx = idx
        let idxOft = document.getElementById(idx).offsetTop, planEle = document.getElementById('plan')
        planEle.scrollTop = idxOft - planEle.offsetTop - 30
      },
    }
  }
</script>

<style lang='stylus' scoped>
  .main{
    padding-top 70px
    .yx-container{
      width 1200px
      margin 0 auto 50px
      .plan{
        width 1200px
        height 1000px
        background #fff
        overflow-y auto
        display flex
        margin-bottom 30px
        .day{
          width 100px
          height 100%
          background #0062B5
          padding-top 20px
          box-sizing border-box
          p{
            margin-bottom 0
            height 50px
            text-align center
            line-height 50px
            color #D8E5F0
            cursor pointer
          }
          .active{
            background #FCDB00
            color #000
          }
        }
        .plan-info{
          width 1100px
          height 100%
          overflow-y auto
          padding 30px 60px
          box-sizing border-box
          .plan-detail{
            margin-bottom 50px
            >span{
              display inline-block
              padding 12px 22px
              background:rgba(252,219,0,1);
              color #fff
              font-size:22px;
              margin-bottom 30px
            }
            div{
              display flex
              justify-content center
              .img{
                width:386px;
                height:258px;
                background-image url(../../static/login.png)
                background-repeat norepeat
                background-size 100% 100%
              }
              span{
                margin-left 30px
                font-size 14px
                color #444
                line-height:34px;
              }
            }
          }
        }
      }
    }
  }
</style>

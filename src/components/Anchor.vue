<template>
  <div class="main">
    <div style="height:10px"></div>
    <div class="info-fa">
      <div style="width:1200px;margin:0 auto 20px">游学 > <span style="color:#17368D">澳大利亚新西兰世界名校探访</span></div>
      <div class="info-cld" v-if="!formBol">
        <div class="a">阿凡达是个岁的法国</div>
        <div class="b">
          <div class="tips">澳大利亚新西兰世界名校探访<p>澳新五大TOP名校深入考察+三大经典文化浸泡游学项目</p></div>
        </div>
        <div class="c">
          <div class="c-info">出发城市：<span>上海</span></div>
          <div class="c-info">途径城市：<span>墨尔本、悉尼、惠灵顿、基督城、阿德莱德、堪培拉</span></div>
          <div class="c-info">行程天数：<span>12天</span></div>
          <div class="c-info">报名截止时间：<span>2020年2月24日 19：00</span></div>
          <div class="c-info">价格：<span style="color:#fcdb00;font-size:18px">￥39000</span></div>
          <div class="c-info">咨询电话：<span>400-344-899</span></div>
          <div class="btn" @click="formBol = true">报名参加</div>
        </div>
      </div>
      <div class="form" v-else>
        <v-form ref="form" lazy-validation @submit.prevent="submit">
          <v-card-title class="headline">请填写报名表单</v-card-title>
          <div class="inputCon">
            <v-text-field
              :rules="[
            v => !!v || '姓名不能为空'
          ]"
              v-model="formData.userName"
              placeholder="姓名"
              style="width:500px;margin-right:30px"
            ></v-text-field>
            <v-text-field
              :rules="rules.numb"
              v-model="formData.phone"
              type='number'
              placeholder="手机号"
              style="width:500px"
            ></v-text-field>
          </div>
          <div class="inputCon">
            <v-text-field
              v-model="formData.email"
              type='text'
              placeholder="邮箱"
              style="width:500px;margin-right:30px"
            ></v-text-field>
            <v-text-field
              v-model="formData.count"
              type='text'
              placeholder="参加人数"
              style="width:500px"
            ></v-text-field>
          </div>
          <div class="inputCon">
            <v-text-field
              v-model="formData.unitName"
              type='text'
              placeholder="单位名称"
              style="width:500px;margin-right:30px"
            ></v-text-field>
            <v-text-field
              v-model="formData.zhiwei"
              type='text'
              placeholder="职位"
              style="width:500px"
            ></v-text-field>
          </div>
          <div class="btnG">
            <div @click="formBol = false" class="Fbtn">返回</div>
            <button type="submit" class="Fbtn sub">提交</button>
          </div>
        </v-form>
      </div>
    </div>
    <div class="yx-container">
      <div class="type-tit">项目介绍</div>
      <div class="desc">
        <p v-for="item in 50">项目介绍</p>
      </div>
      <div class="type-tit">行程安排</div>
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
      <div class="yx-tips">
        <div class="tabs">
          <span :class="{'active': !tabsIdx}" @click="tabsIdx = 0">签证须知</span>
          <span :class="{'active': tabsIdx}" @click="tabsIdx = 1">常见问题</span>
        </div>
        <div class="tips-detail">
          <p v-for="item in 50">签证须知</p>
        </div>
      </div>
      <div class="type-tit">其他游学推荐</div>
      <div class="other">
        <div class="items" v-for="item in 2">
          <img src="../../static/login.png" alt="">
          <div class="other-info">
            <div>美国百年贵族私立中学—马杜菲学院暑期官方项目</div>
            <span>洛杉矶微留学体验ESL课程|语言提升|名校参访|寄宿家庭洛杉矶微留学体验ESL课程|语言提升|名校参访|寄宿家庭</span>
            <p>￥390 <span>报名参加</span></p>
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
        formBol: false,
        rules:{
          numb:[
            v => (/^1[2345789]\d{9}$/.test(v)) || '请输入正确手机号',
          ]
        },
        tabsIdx: 0,
        dayIdx: 0,
        formData: {
          userName: '',
          phone: '',
          unitName: '',
          email: '',
          count: '',
          zhiwei: '',
        }
      }
    },
    created() {
      
    },
    computed:{
    },


    mounted() {
      
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
      async submit() {
        let the = this
        try {
          if (the.$refs.form.validate()) {
            
          }
          
        } catch (error) {
          throw error
        }
      },
    }
  }
</script>

<style lang='stylus' scoped>
  .main{
    padding-top 70px
    .info-fa{
      background #ffffff
      padding 20px 0
      .form{
        width 1200px
        height 450px
        margin 0 auto
        background #F7F7F7
        padding 30px 30px
        input{
          background #fff
        }
        .inputCon{
          display flex
          justify-content space-between
        }
        .btnG{
          display flex
          justify-content flex-end
          margin-top 70px
          .sub{
            margin-left 30px
            background #0062B5 !important
            color #fff !important
          }
          .Fbtn{
            width:350px;
            height:45px;
            background:rgba(241,241,241,1);
            border-radius:2px;
            font-size 16px
            cursor pointer
            display flex
            justify-content center
            align-items center
            color #222
          }
        }
      }
      .info-cld{
        width 1200px
        height 450px
        margin 0 auto
        background-image url(../../static/login.png)
        background-repeat norepeat
        background-size 100% 100%
        position relative
        .a{
          position absolute
          top 30px
          left 30px
          color #fff
          font-size 18px
        }
        .b{
          width 800px
          height 256px
          position absolute
          bottom 0px
          left 0px
          background linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))
          .tips{
            font-size:24px;
            font-weight:400;
            color:rgba(247,247,247,1);
            position absolute
            bottom 30px
            left 30px
            p{
              font-size 14px
              margin-bottom 0
            }
          }
        }
        .c{
          width 400px
          height 450px
          position absolute
          top 0px
          right 0px
          background rgba(38,46,53,.9)
          padding 30px 20px
          box-sizing border-box
          .c-info{
            width 100%
            color #ffffff
            display flex
            justify-content flex-end
            margin-bottom 25px
            span{
              display inline-block
              width 206px
              margin-left 30px
            }
          }
          .btn{
            width 100%
            height 45px
            background:rgba(0,98,181,1);
            border-radius:2px;
            color #fff
            font-size:16px;
            text-align center
            line-height 45px
            margin-top 60px
            cursor pointer
          }
        }
      }
    }
    .yx-container{
      width 1200px
      margin 0 auto 50px
      .type-tit{
        height 80px
        line-height 80px
        padding-left 16px
        color #444
        font-size:20px;
      }
      .desc{
        width 1200px
        height 560px
        background #fff
        overflow-y auto
        padding 30px
      }
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
      .yx-tips{
        width 1200px
        .tabs{
          height 40px
          display flex;
          justify-content flex-start
          .active{
            color #000
            background #FCDB00
          }
          span{
            display flex;
            justify-content center
            align-items center
            cursor pointer
            width 156px
            height 100%
            margin-right 5px
            background #F1EFF2
            color #828282
          }
        }
        .tips-detail{
          width 1200px
          height 400px
          background #fff
          overflow-y auto
          padding 30px
        }
      }
      .other{
        width 1200px
        display flex
        justify-content space-between
        .items{
          height 100%
          width 580px
          background #fff
          img{
            width 100%
            height 328px
          }
          .other-info{
            padding 26px
            div{
              font-size 24px
              color #222
              margin-bottom 18px
            }
            >span{
              font-size 14px
              color #888
            }
            p{
              color #FF5521
              font-size 26px
              display flex
              justify-content space-between
              margin-bottom 0
              margin-top 20px
              span{
                display flex
                justify-content center
                align-items center
                width:80px;
                height:30px;
                border:1px solid rgba(252, 198, 65, 1);
                font-size 12px
                color #FCC641
                cursor pointer
              }
            }
          }
        }
      }
    }
  }
</style>

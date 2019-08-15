<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">编辑地址</h2>
        <!-- <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div> -->
      </div>
      <div class="login_content">
        <form @submit.prevent="submit">
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="text"  placeholder="请输入收货人姓名" v-model="name">
            </section>
            <!-- <section class="login_verification" v-model="sex">
              <span style="color:#666">请选择性别</span>
              <label><input @click="getRadioVal" name="sex" type="radio" value="男" style="width:1.2rem;height:1.2rem;margin-left:2rem"></label>
              <span>男</span>
              <label><input @click="getRadioVal"  name="sex" type="radio" value="女" style="width:1.2rem;height:1.2rem;margin-left:1.2rem"></label>
              <span>女</span>
            </section> -->
            <section class="login_verification_1">
               <input type="text"  placeholder="详细地址" v-model="address">
            </section>
            <section class="login_verification">
               <input type="number" maxlength="11" placeholder="手机号" v-model="phone">
            </section>

          </div>
        
          <button class="login_submit">添加</button>
        </form>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>

    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
  </section>
</template>

<script>
  import { Radio } from 'mint-ui';
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import {reqSmsLogin, reqPwdLogin} from '../../api'
  export default {
    data () {
      return {
        value1:'',
        loginWay: true, // true代表短信登陆, false代表密码
        phone: '', // 手机号
        adress:'', // 
        name: '', // 用户名
        alertText: '', // 提示文本
        alertShow: false, // 是否显示警告框
      }
    },
    created() {
    this._init()
    },
    methods: {
      _init(){
        var data = this.$route.query;
        // console.log(data);
        // console.log(data.item)
        var item = JSON.parse(data.item)
        console.log(item)
        this.name = item.firstname + item.name;
        this.address = item.address
        this.phone = item.phone
      },
      showAlert(alertText) {
        this.alertShow = true
        this.alertText = alertText
      },
      // 异步登陆
      async submit () {
      //   let result
        // 前台表单验证
        // if(this.loginWay) {  // 短信登陆
        //   const {rightPhone, phone} = this
        //   if(!this.rightPhone) {
        //     // 手机号不正确
        //     this.showAlert('手机号不正确')
        //     return
        //   }
        //   // else if(!/^\d{6}$/.test(code)) {
        //   //   // 验证必须是6位数字
        //   //   this.showAlert('验证必须是6位数字')
        //   //   return
        //   // }
        //   // 发送ajax请求短信登陆
        //   result = await reqSmsLogin(phone, code)
        // } 
        // // else {// 密码登陆
        // //   const {name, pwd} = this
        // //   if(!this.name) {
        // //     // 用户名必须指定
        // //     this.showAlert('用户名必须指定')
        // //     return
        // //   } else if(!this.pwd) {
        // //     // 密码必须指定
        // //     this.showAlert('密码必须指定')
        // //     return
        // //   } 
        //   // else if(!this.captcha) {
        //   //   // 验证码必须指定
        //   //   this.showAlert('验证码必须指定')
        //   //   return
        //   // }
        //   // 发送ajax请求密码登陆
        //   result = await reqPwdLogin({name, pwd})
        // }

        // // 停止计时
        // if(this.computeTime) {
        //   this.computeTime = 0
        //   clearInterval(this.intervalId)
        //   this.intervalId = undefined
        // }

        // 根据结果数据处理
        // if(result.code===0) {
        //   const user = result.data
        //   // 将user保存到vuex的state
        //   this.$store.dispatch('recordUser', user)
        //   // 去个人中心界面
        //   this.$router.replace('/profile')
        // } else {
        //   // 显示新的图片验证码
        //   this.getCaptcha()
        //   // 显示警告提示
        //   const msg = result.msg
        //   this.showAlert(msg)
        // }
        let _this = this;
        if(this.name ===''|| this.address ==='' ||this.phone ===''){
          this.showAlert("收货人信息不能为空")
        }else{
          this.showAlert(this.name + ","  +this.address + "," +this.phone);
        }
        
      
        // console.log();
      },
      //关闭警告框
      closeTip () {
        this.alertShow = false
        this.alertText = ''
      },
      // 获取一个新的图片验证码
    },

    components: {
      AlertTip,
      // Radio
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 25px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
            
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
      .login_verification_1
            position relative
            margin-top 1rem
            height 48px
            font-size 14px
            background #fff    
</style>
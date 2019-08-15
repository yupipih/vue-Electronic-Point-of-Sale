<template>
  <section class="profile">
    <HeaderTop title="我的地址"/>
    <section class="profile-number">
    </section>
    <section class="profile_my_order  border-1px">
      <!-- 我的订单 -->
      
        <ul class="my_order_div">
          <li class="li_style"  v-for="(item,index) in list" :key="index" :content="item" :index="index" @delete="handleDelete" ref="demoList" >
            <span class="left" @click="pitch_on(item)">
            <span style="float:left;margin-right:1rem"><a style="font-weight:600;color:#333">{{item.firstname}}</a>&nbsp;{{item.name}}</span>
            <span>{{item.phone}}</span>
            <br>
            <span style="margin-top:1rem;font-size:0.8rem">{{item.address}}</span>
            </span>
            <span class="right">
                  <img src="./write.png" style="width:22px;height:22px;float:left;" @click="edit(item)">
                  <img src="./delete.png" style="width:22px;height:22px;float:left;margin-left:0.5rem;"  @click="handleDelete">
            </span>
          </li>
        </ul>
      
      <br><br>
      <section class="profile_my_order border-1px">
        <mt-field label="username" placeholder="Input username" v-model="username"></mt-field>
        <mt-field label="email" placeholder="Input email" type="email" v-model="email"></mt-field>
      <mt-button type="default" style="width: 100%" @click="add_address">新增地址</mt-button>
      </section>
    

    </section>
    <br><br>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import { MessageBox, Toast } from 'mint-ui'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  export default {
    data(){
      return{
        list:[{
          firstname: '黄',
          name: '女士',
          phone: '13800138000',
          address: '广东省梅州市梅江区梅江四路100号'
        },
        {
          firstname: '赵',
          name: '女士',
          phone: '13800138000',
          address: '广东省梅州市梅江区梅江四路100号1101广东省梅州市梅江区梅江四路100号1101'
        }]
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      add_address () {
      //  MessageBox.prompt('Please tell me your name').then(({ value, action }) => 
      //   {
      //       // 请求退出
      //       // this.$store.dispatch('logout')
      //       Toast('完成')
      //     },
      //     action => {
      //       console.log('点击了取消')
      //     }
      //   );
      // var d = {
      //         firstname: '',
      //         name: '',
      //         phone: '',
      //         address: ''
      //       };
      //       this.list.push(d);
      //       setTimeout(() => {
      //         this.$refs.demoList.setCurrentRow(d);
      //       }, 10);
       this.$router.push('/Login')
      },
      edit (item) {
       console.log(item);
       this.$router.push({path: '/edit', query: {item:JSON.stringify(item)}})

      },
      handleDelete(index){  //接收子组件传过来的index 进行删除
          this.list.splice(index,1)
      },
      pitch_on (item){
        // console.log(item);
        // this.$router.push({path: '/search', query: {address:item}})
        localStorage.setItem("item",JSON.stringify(item));
        this.$router.push({path: '/search'})
      }
    },

    components: {
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .profile //我的
    width 100%
    overflow hidden
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .profile-number
      margin-top 45.5px
      .profile-link
        clearFix()
        position relative
        display block
        background #02a774
        padding 20px 10px
        .profile_image
          float left
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          vertical-align top
          .icon-person
            background #e4e4e4
            font-size 62px
        .user-info
          float left
          margin-top 8px
          margin-left 15px
          p
            font-weight: 700
            font-size 18px
            color #fff
            &.user-info-top
              padding-bottom 8px
            .user-icon
              display inline-block
              margin-left -15px
              margin-right 5px
              width 20px
              height 20px
              .icon-mobile
                font-size 30px
                vertical-align text-top
            .icon-mobile-number
              font-size 14px
              color #fff
        .arrow
          width 12px
          height 12px
          position absolute
          right 15px
          top 40%
          .icon-jiantou1
            color #fff
            font-size 5px
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      width 100%
      background #fff
      overflow hidden
      .info_data_list
        clearFix()
        .info_data_link
          float left
          width 33%
          text-align center
          border-right 1px solid #f1f1f1
          .info_data_top
            display block
            width 100%
            font-size 14px
            color #333
            padding 15px 5px 10px
            span
              display inline-block
              font-size 30px
              color #f90
              font-weight 700
              line-height 30px
          .info_data_bottom
            display inline-block
            font-size 14px
            color #666
            font-weight 400
            padding-bottom 10px
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color #ff5f3e
        .info_data_link:nth-of-type(3)
          border 0
          .info_data_top
            span
              color #6ac20b
    .profile_my_order
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .my_order
        display flex
        align-items center
        padding-left 15px
        >span
          display flex
          align-items center
          width 20px
          height 20px
          >.iconfont
            margin-left -10px
            font-size 30px
          .icon-order-s
            color #02a774
          .icon-jifen
            color #ff5f3e
          .icon-vip
            color #f90
          .icon-fuwu
            color #02a774
        .my_order_div
          width 100%
          border-bottom 1px solid #f1f1f1
          padding 12px 10px 12px 0
          font-size 16px
          color #333
          display flex
          justify-content space-between
          span
            display block
          // .my_order_icon
          //  border 1px solid green
          //  float left
          //  margin-left 1rem
      .left
          border 0px solid red
          font-size 1.0rem
          width 70%
          height 3.0rem
          float left
      .right
          border 0px solid green
          width 15%
          height 1.6rem
          float left
          margin-left 1.4rem
    .li_style{
         border-bottom 1px solid #f1f1f1
         padding 18px 10px 12px 18px
         width 100%
         height 2.8rem
         font-size 16px
         color #333
      }    
</style>
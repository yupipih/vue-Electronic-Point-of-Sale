<style scoped>
  .btn1{
    border:1px solid rgb(61, 226, 11);
     width:4rem;
     height:1.8rem;
     font-size:.5rem;
     margin-top:.5rem;
     border-radius: .3rem;
     background-color: rgba(255,255,255,0.5)
     }
  .btn2{
   border:1px solid #d8625c;
   width:4rem;
   height:1.8rem;
   color: #d8625c;
   font-size:.5rem;
   /* margin-left:.8rem; */
   border-radius: .3rem;
   background-color: rgba(255,255,255,0.5)
   }
   .ddlist{
    border:0px solid #d8625c;
    width: 100%; 
   }
   .meal{
     border:0px solid #00ff00;
     width:60%;
     float: left;
     line-height:1.6rem;
   }
   .amount{
     border:0px solid #d8625c;
     width:15%;
     margin-right: 1rem;
     float: left;
     line-height:1.6rem;
   }
   .price{
     border:0px solid #d8625c;
     width:15%;
     margin-right: 0.5rem;
     float: left;
     line-height:1.6rem;
   }
   .address{
     border: 1px solid #00ff00;
   }
</style>
<template>
  <section class="search">
  <HeaderTop title="订单详情"/>
  <div class="ratingsWrapper" ref="ratingsWrapper">
    <div class="ratings-content">
      <div class="divider"></div>
        <div class="evaluation">
        <div class="classify">
          <span style="font-size:16px;color:rgb(255,153,0);line-height:24px">收货人</span>
          <span style="font-size:15px;color:black;line-height:26px;margin-left:2rem">
            <span style="font-size:16px;color:rgb(255,153,0);line-height:18px">陈</span>
            <span style="font-size:16px;color:#333;line-height:16px">女士</span>
          </span>
          <br>
          <span style="font-size:16px;color:rgb(255,153,0);line-height:18px">收货地址</span>
          <span style="font-size:15px;color:black;line-height:1.8rem;color:#333;margin-left:1.0rem">广东省梅州市梅江区</span>
        </div>
    
      </div>
      <div class="evel-list">
          <ul>
            <span class="evel">订单列表&nbsp;&nbsp;<i class="iconfont icon-jiantou1"></i></span>
            <li class="evel" v-for="(order,index) in orderlist" :key="index" :content="order" :index="index">
              <div class="avatar">
                <img src="https://i.loli.net/2019/06/05/5cf78119df67993775.png" width="28" height="28">
              </div>
              <div class="ddlist">
                <div class="meal">{{order.name}}</div>
                <div class="amount">*{{order.count}}</div>
                <div class="price">￥{{order.price}}</div>
              </div>         
            </li>

            <li class="evel">
              <div class="avatar">
                <img src="https://i.loli.net/2019/06/24/5d1076e83272e60613.png" width="22" height="22">
              </div>
              <div class="ddlist">
                <div class="meal">合计</div>
                <div class="amount" style="margin-left:3.6rem">￥{{totalPrice}}</div>
              </div>         
            </li>      
          </ul>
      </div>  
    </div>
  </div>
  </div>
  </section>
    
</template>

<script>
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopCart from '../../components/AccountCart/AccountCart.vue'
  export default {
    data (){
     return{
        totalPrice:'19.9',
        address:'',
        orderlist:[
        {
          name:'皮蛋瘦肉粥',
          count:'2',
          price:'19.9'
        }]
     }
    },
    created() {
    this._init()
    },
    methods:{
       _init(){
      
        },
        cancel (){
          localStorage.removeItem("list");
          this.orderlist = [],
          this.$router.push({path: '/'})

        }
    },
    components: {
      HeaderTop,
      ShopCart,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.ratingsWrapper
  position: absolute
  top:44px
  bottom: 0
  left: 0
  width: 100%
  height 86%
  overflow: hidden
  overflow-y auto
.ratings-content
  .info
    display flex
    .mark
      flex 0 0 138px
      margin 18px 0
      border-right 1px solid rgba(7,17,27,0.1)
      text-align center
      .num
        font-size 24px
        color rgb(255,153,0)
        line-height 28px
      .text
        padding 6px 0 8px 0
        font-size 12px
        color rgb(7,17,27)
        line-height 12px
      .contrast
        font-size 10px
        color rgb(7,17,27)
        line-height 10px
        margin-bottom 6px
    .stars
      padding 18px 24px
      .serviceScore,.foodScore,.deliveryTime
        display flex
        margin-bottom 8px
        .text
          font-size 12px
          color rgb(7,17,27)
          line-height 18px
          margin-right 12px
        .num
          font-size 12px
          line-height 18px
          color rgb(255,153,0)
          padding-left 12px
      .deliveryTime
        margin-bottom 0
        .time
          font-size 12px
          color rgb(147,153,159)
          line-height 18px
  .evaluation
    padding 18px 0
    position relative
    .classify
      padding-bottom 12px
      margin 0 18px
      border-bottom 1px solid rgba(7,17,27,0.1)
      .item
        display inline-block
        font-size 12px
        padding 8px 12px
        line-height 16px
        background rgba(0,160,220,0.2)
        color rgb(77,85,95)
        margin-right 8px
        .count
          font-size 8px
          padding-left 2px
        &.active
          color white
          background rgb(0,169,220)
        &.bad
          background rgba(77,85,93,0.2)
        &.badActive
          background #4d555d
    .switch
      font-size 12px
      width 100%
      padding 12px 0 12px 18px
      color rgb(147,153,159)
      border-bottom 0px solid rgba(7,17,27,0.1)
      .icon-check_circle
        font-size 24px
        vertical-align middle
        &.on
          color #00c850

  .evel-list
    .evel
      display flex
      padding 12px 0
      margin 0 18px
      border-bottom 1px solid rgba(7,17,27,0.1)
      .avatar
        flex 0 0 28px
        margin-right 12px
        img
          border-radius 50%
      .content
        flex 1
        .user
          font-size 10px
          color rgb(7,17,27)
          line-height 12px
          .rateTime
            position absolute
            font-weight 200
            right 18px
            color rgb(147,153,159)
        .star-wrapper
          font-size 0
          padding-top 4px
          margin-bottom 6px
          .star
            display inline-block
          .deliveryTime
            font-size 10px
            padding-left 6px
            font-weight 200
            color rgb(147,153,159)
        .text
          font-size 12px
          color rgb(7,17,27)
          line-height 18px
        .recommend
          padding-top 4px
          .icon
            font-size 12px
            color rgb(0,160,220)
            line-height 16px
          .dish
            display inline-block
            font-size 9px
            color rgb(147,153,159)
            line-height 16px
            border 1px solid rgba(7,17,27,0.1)
            padding 2px 6px
            margin-right 8px
            white-space normal
            margin-top 4px
</style>
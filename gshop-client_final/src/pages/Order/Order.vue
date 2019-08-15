<template>
  <section class="order">
    <HeaderTop title="历史订单" style="width:100%;height:7%;border:0px solid red"/>
    <section id="order_no_login" >
         <div class="seller-wrapper" ref="sellerWrapper">
          <div class="seller-content"> 
            <div class="divider"></div>
              <ul class="info-list" v-for="(item,index) in HisList" :key="index" :content="item" :index="index">
                <li class="info" @click="checkdetail(item)">
                  <img src="https://i.loli.net/2019/06/05/5cf785b89ff2810370.jpg" style="width:2rem;height:2rem;float:left;margin-top:.8rem">
                   <div class="txtbox">
                    <div class="ddrq">{{item.date}} <i class="iconfont icon-jiantou1"></i></div> 
                    <div class="dish">
                      <span style="float:left;width:12rem;height:1.4rem;overflow:hidden">{{item.state}}</span>
                      <span style="float:left;font-weight:600;margin-left:3.4rem">￥{{item.price}}</span>
                    </div>
                  </div>
                </li>
                <div class="divider"></div>
              </ul>
            </div>
            
            
          </div>
        </div>

    </section>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/HeaderTop/MainHeaderTop.vue'
  export default {
    data() {
      return{
        HisList:[
        {
          date:'2019年6月17日',
          state:'皮蛋瘦肉粥套餐等两件商品',
          price:'19.9'
        },
        {
          date:'2019年3月17日',
          state:'皮蛋瘦肉粥等三件商品皮蛋瘦肉粥等三件商品皮蛋瘦肉粥等三件商品',
          price:'24.9'
        },
        {
          date:'2019年1月15日',
          state:'猪肉玉米饺、红枣山药糙米粥',
          price:'22'
        }]
      }
    },
    components: {
      HeaderTop
    },
    methods: {
      checkdetail (item){
        console.log(item.date);
       this.$router.push({path: '/Hisdetail', query: {date:item.date}})

      }
    }
  }
</script>


<style lang="stylus" scoped>
.order{
  width:100%;
  height:100%;
}
 
.order_no_login{
  border:1px solid blue;
  width:100%;
  background-color:#ffffff;
}

.seller-wrapper{
  border:0px solid red;
  background-color:#f3f5f7;
  position:absolute;
  top:48px;
  bottom:0;
  left:0;
  width:100%;
  height:88%;
  overflow:hidden;
  overflow-y:auto;
}

.info{
  border:0px solid blue;
  width:100%
  height:4.85rem;
  padding:0 12px;
  margin:12px 0;
  background-color:#ffffff;
  border-bottom:1px solid rgba(7,17,27,0.1);
  border-top:1px solid rgba(7,17,27,0.1);     
}
.txtbox{
   border:0px solid blue;
   margin-left:2.6rem;
   margin-top .8rem
}  
.ddrq{
  width:18.9rem;
  font-size:18px;
  line-height:1.8rem;
  color:#2f2f2f;
  border-bottom:1px solid rgba(7,17,27,0.1);
}
.dish{
  // border:1px solid blue;
  font-size:14px;
  line-height:1.6rem;  
}

</style>
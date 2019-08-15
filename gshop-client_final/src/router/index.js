/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


// import MSite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Address from '../pages/Address/Address.vue'
import Page from '../pages/Errorpage/Errorpage.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
// import orderList from '../pages/Shop/ShopInfo/orderList.vue'
import Edit from '../pages/Address/editAddress.vue'
import Hisdetail from '../pages/Order/Hisdetail.vue'
import Adadministration from '../pages/Address/Adadministration.vue'
// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      // meta: {
      //   showFooter: true
      // }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Hisdetail',
      component: Hisdetail,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/errorpage',
      component: Page,
    },
    {
      path:'/address',
      component: Address,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Adadministration',
      component: Adadministration,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/edit',
      component: Edit,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      // meta: {
      //   keepAlive: true,
      //   scrollTopPosition: 0
      // },
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods,
          meta: {
            keepAlive: true,
            scrollTopPosition: 0
          },
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }, 
        
      ]
    },
  ]
})
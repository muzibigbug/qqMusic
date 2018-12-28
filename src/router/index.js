import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/home',
      component: () =>import('@/pages/index/index'),
      children:[
        {
          path:'home',
          component:() => import('@/pages/home/home')
        },
        {
          path:'rank',
          component:() => import('@/pages/rank/rank')
        },
        {
          path:'search',
          component:() => import('@/pages/search/search')
        }
      ]
    },
    {
      path:'/rankItem',
      name:'rankItem',
      component:() => import('@/pages/rank/rank_item')
    },
    {
      path:'/swiper_item/:id',
      component:() => import('@/pages/swiper_item/swiper_item')
    },
    {
      path:'/hot_item/:name',
      name:'hot_item',
      component:() => import('@/pages/home/hot_item')
    },
    {
      path:'/lyric/:id',
      name:'lyric',
      component:() => import('@/pages/home/borad_lyric')
    }
  ]
})

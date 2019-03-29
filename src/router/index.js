import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Home from '@/views/home'
import Jigouguanli from '@/views/jigouguanli'
import Guanliyuanguanli from '@/views/guanliyuanguanli'
import Wenzhangguanli from '@/views/wenzhangguanli'
import Shangchuanwenzhang from '@/views/shangchuanwenzhang'
import Yishiguanli from '@/views/yishiguanli'
import Jgmokuaigl from '@/views/jgmokuaigl'
import Tianjimokuai from '@/views/tianjimokuai'
import Wenzhanglxtj from '@/views/wenzhanglxtj'
import Jigouwztj from '@/views/jigouwztj'
import Jgksbumen from '@/views/jgksbumen'
import Jgmktj from '@/views/jgmktj'
import Jggwtj from '@/views/jggwtj'
import Jigoucpgl from '@/views/jigoucpgl'
import Yuuyuedd from '@/views/yuuyuedd'
import Dangdangl from '@/views/dangdangl'
import Yqxdd from '@/views/yqxdd';

Vue.use(Router)

export default new Router({
  routes: [{
    name: 'home',
    path: '/',
    component: Home,
    children: [{
      name: 'jigouguanli',
      path: '/jigouguanli',
      component: Jigouguanli
    },
    {
      name: 'guanliyuanguanli',
      path: '/guanliyuanguanli',
      component: Guanliyuanguanli
    },
    {
      name: 'wenzhangguanli',
      path: '/wenzhangguanli',
      component: Wenzhangguanli
    },
    {
      name: 'yishiguanli',
      path: '/yishiguanli',
      component: Yishiguanli
    },
    {
      name: 'jgmokuaigl',
      path: '/jgmokuaigl',
      component: Jgmokuaigl
    },
    {
      name: 'jgksbumen',
      path: '/jgksbumen',
      component: Jgksbumen
    },
    {
      name: 'jigoucpgl',
      path: '/jigoucpgl',
      component: Jigoucpgl
    },
    {
      name: 'yuuyuedd',
      path: '/yuuyuedd',
      component: Yuuyuedd
    },
    {
      name: 'dangdangl',
      path: '/dangdangl',
      component: Dangdangl
    },
    {
      name: 'yqxdd',
      path: '/yqxdd',
      component: Yqxdd
    }

    ]
  },

  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'shangchuanwenzhang',
    path: '/shangchuanwenzhang',
    component: Shangchuanwenzhang
  },
  {
    name: 'tianjimokuai',
    path: '/tianjimokuai',
    component: Tianjimokuai
  },
  {
    name: 'wenzhanglxtj',
    path: '/wenzhanglxtj',
    component: Wenzhanglxtj
  },
  {
    name: 'jigouwztj',
    path: '/jigouwztj',
    component: Jigouwztj
  },
  {
    name: 'jgmktj',
    path: '/jgmktj',
    component: Jgmktj
  }, 
  {
    name: 'jggwtj',
    path: '/jggwtj',
    component: Jggwtj
  },
  ]
})

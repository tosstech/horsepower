import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Main from '@/components/Main'
import LineList from '@/components/mobi/LineList'
import Content from '@/components/mobi/Content'
import LineCont from '@/components/mobi/LineCont'
import TeamList from '@/components/mobi/TeamList'
import TagList from '@/components/mobi/TagList'
import Sns from '@/components/mobi/Sns'
import Store from '@/components/mobi/Store'
import User from '@/components/mobi/User'
import UserLogin from '@/components/mobi/UserLogin'
import LoginPwd from '@/components/mobi/LoginPwd'
import LoginMobi from '@/components/mobi/LoginMobi'
import TripMap from '@/components/mobi/TripMap'
import TagPlay from '@/components/mobi/TagPlay'
import TagRest from '@/components/mobi/TagRest'
import TagHotel from '@/components/mobi/TagHotel'






const routes=[
  {
    path:'/Main',
    component:Main,
    children:[
      {
        path:'LineList',
        name:'LineList',
        component:LineList,
      },
      {
        path:'TagList',
        name:'TagList',
        component:TagList,
      },
      {
        path:'TagPlay',
        name:'TagPlay',
        component:TagPlay,
      },
      {
        path:'TagRest',
        name:'TagRest',
        component:TagRest,
      },
      {
        path:'TagHotel',
        name:'TagHotel',
        component:TagHotel,
      },
      {
        path:'Sns',
        name:'Sns',
        component:Sns,
      },
      {
        path:'Store',
        name:'Store',
        component:Store,
      },
      {
        path:'User',
        name:'User',
        component:User,
      },
      
    ]
  },
  {
    path:'/UserLogin',
    name:'UserLogin',
    component:UserLogin,
    children:[
      {
        path:'LoginPwd',
        name:'LoginPwd',
        component:LoginPwd,
      },
      {
        path:'LoginMobi',
        name:'LoginMobi',
        component:LoginMobi,
      }
    ]
  },
  {
    path:'/Content',
    name:'Content',
    component:Content,
    children:[
      {
        path:'LineCont',
        name:'LineCont',
        component:LineCont,
      },
      {
        path:'TeamList',
        name:'TeamList',
        component:TeamList,
      },
    ]
  },
  {
    path:'/TripMap',
    name:'TripMap',
    component:TripMap,
  },
  {
    path:'',
    redirect:"Main/LineList"
  }
]

const router = new VueRouter(
  {
    routes,
  }
)

export default router
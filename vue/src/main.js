// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VCharts from 'v-charts'
import {Button,Input,Row,Col,Menu,Carousel,Timeline,Icon,Avatar,Badge,Tag,message,notification,Modal,Tabs,Anchor,} from 'ant-design-vue'

import "@/style/main.less"

import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


import ImgBox from '@/components/element/ImgBox'
import CountTime from '@/components/element/CountTime'
import CarLogo from '@/components/element/CarLogo'
import ExButton from '@/components/element/ExButton'

import Header from '@/components/mobi/Header'
import Footer from '@/components/mobi/Footer'
import Content from '@/components/mobi/Content'
import LineList from '@/components/mobi/LineList'
import LineCont from "@/components/mobi/LineCont"
import TeamList from "@/components/mobi/TeamList"
import TagList from '@/components/mobi/TagList'
import Sns from '@/components/mobi/Sns'
import Store from '@/components/mobi/Store'
import User from '@/components/mobi/User'
import UserLogin from "@/components/mobi/UserLogin"
import LoginPwd from "@/components/mobi/LoginPwd"
import LoginMobi from "@/components/mobi/LoginMobi"
import RecomHotel from "@/components/mobi/RecomHotel"
import RecomRest from "@/components/mobi/RecomRest"
import LineListBt from "@/components/mobi/LineListBt"
import LineContBt from "@/components/mobi/LineContBt"
import TripMap from "@/components/mobi/TripMap"
import TagPlay from "@/components/mobi/TagPlay"
import TagRest from "@/components/mobi/TagRest"
import TagHotel from "@/components/mobi/TagHotel"



Vue.config.productionTip = false

Vue.use(VCharts);
Vue.use(Button);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Carousel);
Vue.use(Timeline);
Vue.use(Icon);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(Tag);
Vue.use(Modal);
Vue.use(Tabs);
Vue.use(Anchor);
Vue.use(message);
Vue.use(notification);


Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$confirm = Modal.confirm;



Vue.component('ImgBox',ImgBox);
Vue.component('CountTime',CountTime);
Vue.component('CarLogo',CarLogo);
Vue.component('ExButton',ExButton);

Vue.component('Header',Header);
Vue.component('Footer',Footer);
Vue.component('Content',Content);
Vue.component('LineList',LineList);
Vue.component('LineCont',LineCont);
Vue.component('TeamList',TeamList);
Vue.component('TagList',TagList);
Vue.component('Sns',Sns);
Vue.component('Store',Store);
Vue.component('User',User);
Vue.component('UserLogin',UserLogin);
Vue.component('LoginPwd',LoginPwd);
Vue.component('LoginMobi',LoginMobi);
Vue.component('RecomHotel',RecomHotel);
Vue.component('RecomRest',RecomRest);
Vue.component('LineListBt',LineListBt);
Vue.component('LineContBt',LineContBt);
Vue.component('TripMap',TripMap);
Vue.component('TagPlay',TagPlay);
Vue.component('TagRest',TagRest);
Vue.component('TagHotel',TagHotel);




import VueAMap from 'vue-amap';


 
VueAMap.initAMapApiLoader({
  key: '08505b50d264f323e56e1c364fdf3eb0',
  plugin: [
    'AMap.Autocomplete', 
    'AMap.PlaceSearch', 
    'AMap.Scale', 
    'AMap.OverView', 
    'AMap.ToolBar', 
    'AMap.MapType', 
    'AMap.PolyEditor', 
    'AMap.CircleEditor',
    'Geolocation',
  ],
  v: '1.4.4'
});

Vue.use(VueAMap);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



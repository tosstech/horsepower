<template>
    <div id="trip_map" ref="trip_map">
        <div class="map_inner" :class="{open:isOpen,close:isClose}">
            <div class="map" ref="map">
                <a-row type="flex" class="map_search">
                    <a-col class="map_search_bt" style="color:#FFF" @click='back'>
                        <icon-font type='iconback'></icon-font>
                    </a-col>
                    <a-col class="map_search_box">
                        <el-amap-search-box 
                            class="search-box" 
                            :search-option="searchOption" 
                            :on-search-result="onSearchResult">
                        </el-amap-search-box>           
                    </a-col>
                    <a-col class="map_search_bt" style="color:#da414b">
                        <icon-font type='icontuding'></icon-font>
                    </a-col>
                </a-row>
                 <el-amap class="amap-box" :zoom="zoom" :plugin="plugin" :center="center"></el-amap>
            </div>
            <div :class="{bt_open:openOff,bt_open_sos:openOn}" @click="bt_open" >
                <icon-font type="iconkey"></icon-font>
            </div>
            <div class="map_op">
                <a-row type='flex'>
                    <a-col :span="6" @click="clickParking">
                        <div class="map_op_item">
                            <icon-font type='iconparking'></icon-font>
                            <div :class="{trip_map_swich:sParking}"></div>
                        </div>
                        <div>集合点</div>
                    </a-col>
                    <a-col :span="6" @click="clickMember">
                        <div class="map_op_item">
                            <icon-font type='iconmember'></icon-font>
                            <div :class="{trip_map_swich:sMember}"></div>
                        </div>
                        <div>附近会员</div>
                    </a-col>
                    <a-col :span="6">
                        <div class="map_op_item" @click="clickScenic">
                            <icon-font type='iconscenic'></icon-font>
                            <div :class="{trip_map_swich:sScenic}"></div>
                        </div>
                        <div>游玩</div>
                    </a-col>
                    <a-col :span="6">
                        <div class="map_op_item" @click="clickHelp">
                            <icon-font type='iconhelp'></icon-font>
                            <div :class="{trip_map_swich:sHelp}"></div>
                        </div>
                        <div>服务</div>
                    </a-col>
                </a-row>
            </div> 
            <div class="map_op" style="padding-bottom:2em">
                <a-row type='flex'>
                    <a-col :span="6" >
                        <div class="map_op_item" @click="clickRest">
                            <icon-font type='iconrest'></icon-font>
                            <div :class="{trip_map_swich:sRest}"></div>
                        </div>
                        <div>美食</div>
                    </a-col>
                    <a-col :span="6">
                        <div class="map_op_item" @click="clickHotel">
                            <icon-font type='iconbed'></icon-font>
                            <div :class="{trip_map_swich:sHotle}"></div>
                        </div>
                        <div>住宿</div>
                    </a-col>
                    <a-col :span="6">
                        <div class="map_op_item" @click="clickShop">
                            <icon-font type='iconshop'></icon-font>
                            <div :class="{trip_map_swich:sShop}"></div>
                        </div>
                        <div>商店</div>
                    </a-col>
                    <a-col :span="6" @click="sosClick" :class="{bt_sos:sosOff,bt_sos_on:sosOn}">
                        <div class="map_op_item">
                            <icon-font type='iconsos'></icon-font>
                        </div>
                        <div>救援</div>
                    </a-col>
                </a-row>
            </div>                                                                       
        </div>
    </div>
</template>

<script>
import { Icon } from 'ant-design-vue';
import Globel from "@/components/globel/Globel"
let iconUrl = Globel.iconfont
    const IconFont = Icon.createFromIconfontCN({
    scriptUrl: iconUrl ,
});

import {AMapManager} from 'vue-amap'
let amapManager = new AMapManager()

export default {
    components: {
        IconFont,
    },
    
    data(){
        let self = this;
        return{
            
            center: [121.539693,31.126667],//地图中心点坐标
            zoom:16,//初始化地图显示层级
            searchOption: { city: '全国',citylimit: true},
            markers: [
                [121.59996, 31.197646],
                [121.40018, 31.197622],
                [121.69991, 31.207649]
            ],
            plugin: [{
            pName: 'Geolocation',
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    self.lng = result.position.lng;
                    self.lat = result.position.lat;
                    self.center = [self.lng, self.lat];
                    self.loaded = true;
                    self.$nextTick();
                  }
                });
              }
            }
          }],
            
            count:1,
            isOpen:false,
            isClose:false,
            sosOn:false,
            sosOff:true,
            openOn:false,
            openOff:true,
            sosCount:1,
            warningIcon:require(`../../assets/warning.gif`),
            sParking:false,
            cParking:1,
            sMember:false,
            cMember:1,
            sScenic:false,
            cScenic:1,
            sHelp:false,
            cHelp:1,
            sRest:false,
            cRest:1,
            sHotle:false,
            cHotle:1,
            sShop:false,
            cShop:1,
        }
    },
    methods:{
        addMarker: function() {
          let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
          let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
          this.markers.push([lng, lat]);
        },
        onSearchResult(pois) {
          let latSum = 0;
          let lngSum = 0;
          if (pois.length > 0) {
            pois.forEach(poi => {
              let {lng, lat} = poi;
              lngSum += lng;
              latSum += lat;
              this.markers.push([poi.lng, poi.lat]);
            });
            let center = {
              lng: lngSum / pois.length,
              lat: latSum / pois.length
            };
            this.mapCenter = [center.lng, center.lat];
          }
        },
        back(){
            this.$router.push('/Main/LineList');
        },
        fullscreen(){
            let w = document.documentElement.clientWidth;
            let h = document.documentElement.clientHeight;
            this.$refs.trip_map.style.width = w + 'px' ;
            this.$refs.trip_map.style.height = h + 'px' ;
            this.$refs.map.style.width = w + 'px' ;
            this.$refs.map.style.height = h + 'px' ;
        },
        clickParking(){
            this.cParking ++;
            this.sParking = ! this.sParking
        },
        clickMember(){
            this.cMember ++;
            this.sMember = ! this.sMember
        },
        clickScenic(){
            this.cScenic ++;
            this.sScenic = ! this.sScenic
        },
        clickHelp(){
            this.cHelp ++;
            this.sHelp = ! this.sHelp
        },
        clickRest(){
            this.cRest ++;
            this.sRest = ! this.sRest;
        },
        clickHotel(){
            this.cHotle ++;
            this.sHotle = ! this.sHotle;
        },
        clickShop(){
            this.cShop ++;
            this.sShop = ! this.sShop;
        },
        sosClick(){
            let soscount = this.sosCount ++;
            if(soscount%2==0){
                this.$confirm({
                    content: h => <div style="color:#da414b;padding-top:0.5em;">
                                    关闭救援模式
                                </div>,
                    icon : 'alert',
                    onOk:()=> {
                        this.sosOn= ! this.sosOn;
                        this.openOn = ! this.openOn;
                        this.openOff = ! this.openOff;
                        this.$message.destroy()
                    },
                    okButtonProps: {
                        style: { background: '#0e3159', },
                    },                                                                              
                    okText: '确定',
                    cancelText: '取消',
                    onCancel() {
                    console.log('Cancel');
                    },
                });
            }
            else {
                this.$confirm({
                    content: h => <div style="color:#da414b;padding-top:0.5em;">
                                    开启救援模式
                                </div>,
                    icon : 'alert',
                    onOk:()=> {
                        this.sosOn= ! this.sosOn;
                        this.openOn = ! this.openOn;
                        this.openOff = ! this.openOff;
                        this.$message.config({
                            top: `70px`,
                            duration:0,
                        });
                        this.$message.info(h =>{
                            return h('div',[
                                h('img', {attrs: {'class':'warning_img',src: this.warningIcon,},},),
                                h('span',{attrs: {'class':'warning_text',},},'已开启救援模式')
                            ])
                        },)
                    },
                    okButtonProps: {
                        style: { background: '#0e3159', },
                    },                                                                              
                    okText: '确定',
                    cancelText: '取消',
                    onCancel() {
                    console.log('Cancel');
                    },
                });
            }
            
        },
        bt_open(){
            let count = this.count++
            if(count%2==0){
                this.isOpen = false;
                this.isClose = true;
            }
            else{
                
                this.isOpen = true;
                this.isClose = false;
            }
            
        }
    },
    mounted(){
        this.fullscreen();
    }
}
</script>
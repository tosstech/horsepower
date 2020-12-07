<template>
  <div id="tag_rest">
      <li v-for="item in pro" :key="item.index" >
          <div class="tag_item" ref="ImgPic">
            <img-box v-bind:imginfo="pro" ref="imgurl"></img-box>
            <div class="tag_title">
              <div class="tag_title_text">{{item.pro_name}}</div>
              <div class="tag_item_list">
              <li>
                <img :src="restPro[0].url"/>
                <div class="tag_room_price">
                  <span>￥</span>
                  <span>{{restPro[0].price}}</span>
                  <span>元</span>
                </div>
              </li>
              <li>
                <img :src="restPro[1].url"/>
                <div class="tag_room_price">
                  <span>￥</span>
                  <span>{{restPro[1].price}}</span>
                  <span>元</span>
                </div>
              </li>
              <li>
                <img :src="restPro[2].url"/>
                <div class="tag_room_price">
                  <span>￥</span>
                  <span>{{restPro[2].price}}</span>
                  <span>元</span>
                </div>
              </li>
              <li class="tag_room_num">
                <span>+</span>
                <span>10</span>
              </li>
              <div style="clear:both"></div>
            </div>
          </div>
        </div>
      </li>
      <div style="clear:both"></div>
      <div class="copyright">
            <icon-font type='iconlogo'></icon-font>
            <div>Copyrighy © Horsepower</div>
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

export default {
  components: {
        IconFont,
    },
    data(){
        return{
          pro:[],
          restInfo:[
            {name:'龙门客栈',num:232,star:1,card:234,photo:545},
            {name:'悦来民宿',num:5652,star:3,card:544,photo:1545},
            {name:'高升客栈',num:2562,star:5,card:214,photo:645},
            {name:'有间客栈',num:2232,star:4,card:234,photo:7545},
            {name:'云和月民宿',num:32,star:5,card:234,photo:545},
          ],  
          restPro:[
            {id:1,price:89,url:require(`@/assets/restaurant_1.jpg`)},
            {id:1,price:189,url:require(`@/assets/restaurant_2.jpg`)},
            {id:1,price:189,url:require(`@/assets/restaurant_3.jpg`)},
            /*
            {id:2,price:79,url:require(`@/assets/room_5.jpg`)},
            {id:2,price:89,url:require(`@/assets/room_6.jpg`)},
            {id:2,price:99,url:require(`@/assets/room_7.jpg`)},
            */
          ],
        }
    },
    methods:{
      ImgList(){
            for (let i=0;i<3;i++) {
                let pic = {}
                pic.url = require(`@/assets/rest_${i+1}.jpg`)
                let img = new Image();
                img.src= pic.url
                pic.pro_name = this.restInfo[i].name;
                pic.num = this.restInfo[i].num;
                pic.star = this.restInfo[i].star;
                pic.card = this.restInfo[i].card;
                pic.photo = this.restInfo[i].photo;
                this.pro.push(pic);
            }
        },
      ImgSize(){
            let length = this.pro.length;
            let w = this.$refs.ImgPic[0].offsetWidth
            w = w 
            let h = w * 0.6
            for (let i=0;i<length;i++){
                this.$refs.imgurl[i].ImgPic(i,w,h);
            }
      },
    },
    created(){
      this.ImgList();
    },
    mounted(){
      this.$nextTick(()=>{this.ImgSize()});
    },
}
</script>
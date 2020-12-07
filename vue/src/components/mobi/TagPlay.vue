<template>
  <div id="tag_play">
      <li v-for="item in pro" :key="item.index" ref="ImgPic">
          <div class="tag_item">
            <img-box v-bind:imginfo="pro" ref="imgurl"></img-box>
            <div class="tag_title">
              <div class="tag_title_text">{{item.pro_name}}</div>
              <div class="recomand_star">
                <icon-font v-for="i in item.star" :key="i" type='iconstar'></icon-font>
              </div>
              <div style="clear:both"></div>
              <div class="tag_lab">
                <a-row type='flex' justify="space-between">
                  <a-col :span='8'>
                    <icon-font type='icongrassfull' style="color:rgb(117, 192, 119);"></icon-font>
                    <div class="tag_lab_txt">
                      <span>{{item.num}}</span>
                    </div>
                  </a-col>
                  <a-col :span='8' style="text-align:center">
                    <div style="display:inline-block">
                      <icon-font type='iconweibiaoti1' style="color:#da414b"></icon-font>
                      <div class="tag_lab_txt">
                        <span>{{item.card}}</span>
                      </div>
                    </div>
                  </a-col>
                  <a-col :span='8'>
                    <div style="float:right"> 
                      <icon-font type='iconxiangji'></icon-font>
                      <div class="tag_lab_txt">
                        <span>{{item.photo}}</span>
                      </div>
                    </div>
                  </a-col>
                </a-row>
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
          tagInfo:[
            {name:'蜜月必打卡浪漫热气球看绚丽七彩丹霞',num:232,star:1,card:234,photo:545},
            {name:'鸣沙山骆驼骑行',num:5652,star:3,card:544,photo:1545},
            {name:'朝拜莫高窟',num:2562,star:5,card:214,photo:645},
            {name:'穿越时空《大梦敦煌》',num:2232,star:4,card:234,photo:7545},
            {name:'沙漠明珠月牙泉',num:32,star:5,card:234,photo:545},
            {name:'嘉峪关落日',num:4232,star:2,card:234,photo:545},
            {name:'雅丹魔鬼城',num:2352,star:3,card:234,photo:545},
          ]  
        }
    },
    methods:{
      ImgList(){
            for (let i=0;i<7;i++) {
                let pic = {}
                pic.url = require(`@/assets/play_${i+1}.jpg`)
                let img = new Image();
                img.src= pic.url
                pic.pro_name = this.tagInfo[i].name;
                pic.num = this.tagInfo[i].num;
                pic.star = this.tagInfo[i].star;
                pic.card = this.tagInfo[i].card;
                pic.photo = this.tagInfo[i].photo;
                this.pro.push(pic);
            }
        },
      ImgSize(){
            let length = this.pro.length;
            let w = this.$refs.ImgPic[0].offsetWidth
            w = w 
            let h = w * 0.8
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
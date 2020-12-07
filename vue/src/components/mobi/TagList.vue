<template>
  <div id="tag_list">
      <div class="tag_nav">
        <a-row type='flex' justify="space-between">
          <a-col :span='4' @click="tagPaly">
            <icon-font type='icontag_3'></icon-font>
            <div>嗨~游玩</div>
          </a-col>
          <a-col :span='4' @click="tagHotel">
            <icon-font type='icontag_1'></icon-font>
            <div>民宿客栈</div>
          </a-col>
          <a-col :span='4' @click="tagRest">
            <icon-font type='icontag_2'></icon-font>
            <div>特色美食</div>
          </a-col>
          <a-col :span='4'>
            <icon-font type='icontag_4'></icon-font>
            <div>土特产</div>
          </a-col>
        </a-row>
      </div>
      <li v-for="item in pro" :key="item.index" ref="ImgPic">
          <div class="tag_item">
            <img-box v-bind:imginfo="pro" ref="imgurl"></img-box>
            <div class="tag_num">
              <icon-font type='icongrassfull'></icon-font>
              <span>{{item.num}}</span>
            </div>
          </div>
          <div class="tag_title"><h1>{{item.pro_name}}</h1></div>
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
            {name:'塔克拉玛干',num:232},
            {name:'雪乡',num:5652},
            {name:'色达',num:2562},
            {name:'额济纳',num:2232},
            {name:'嘉峪关',num:32},
            {name:'九寨沟',num:4232},
            {name:'德令哈',num:2352},
          ]  
        }
    },
    methods:{
      ImgList(){
            for (let i=0;i<7;i++) {
                let pic = {}
                pic.url = require(`@/assets/line_${i+1}.jpg`)
                let img = new Image();
                img.src= pic.url
                pic.pro_name = this.tagInfo[i].name;
                pic.num = this.tagInfo[i].num;
                this.pro.push(pic);
            }
        },
      ImgSize(){
            let length = this.pro.length;
            let w = this.$refs.ImgPic[0].offsetWidth
            w = w 
            let h = w * 1.5
            for (let i=0;i<length;i++){
                this.$refs.imgurl[i].ImgPic(i,w,h);
            }
      },
      tagPaly(){
        this.$router.push('/Main/TagPlay')
      },
      tagRest(){
        this.$router.push('/Main/TagRest')
      },
      tagHotel(){
        this.$router.push('/Main/TagHotel')
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
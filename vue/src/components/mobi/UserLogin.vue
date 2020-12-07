<template>
  <div id="user_login">
    <div class="bg" v-for="item in ImgBox" :key="item.index" 
           :style="{width:ImgBoxW+'px',height:ImgBoxH+'px'}"> 
      <img :style="{width:item.ImgW+'px',
        height:item.ImgH+'px',
        marginTop:item.ImgT+'px',
        marginLeft:item.ImgL+'px'}" 
        :src="item.url"/>
    </div>
    <div class="mask" :style="{width:ImgBoxW+'px',height:ImgBoxH+'px'}"></div>
    <div class="login">
      <img src="@/assets/logo.png"/>
      <div class="login_list">
        <a-row type='flex'>
          <a-col flex="40px">
            <div class="login_list_item" ref="LoginMobi"  @click="LoginMobi">
              <icon-font type="iconmobi"/>
            </div>
            <div class="login_list_item" ref="LoginPwd" @click="LoginPwd">
              <icon-font type="iconpin"/>
            </div>
          </a-col>
          <a-col flex="1">
            <router-view></router-view>
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

export default {
  components: {
        IconFont,
    },
    data(){
        return{
            ImgBox:[],
            ImgBoxW:'',
            ImgBoxH:'',
        }
    },
    methods:{
        LoginPwd(){
          this.$router.push('/UserLogin/LoginPwd')
          this.$refs.LoginPwd.style.border = "1px solid #20272e"
          this.$refs.LoginMobi.style.border = "rgba(255,255,255,0.8)"
        },
        LoginMobi(){
          this.$router.push('/UserLogin/LoginMobi')
          this.$refs.LoginPwd.style.border = "rgba(255,255,255,0.8)"
          this.$refs.LoginMobi.style.border = "1px solid #20272e"
        },
        ImgPic(){
            let ImgBoxW = document.documentElement.clientWidth;
            let ImgBoxH = document.documentElement.clientHeight;
            for (let i=0;i<1;i++) {
                let pic = {}
                pic.url = require(`@/assets/userbg_${i+1}.jpg`)
                let img = new Image();
                img.src= pic.url
                let ImgW = 2560;
                let ImgH = 1600;
                let ImgL = 0;
                let ImgT = 0;
                let com = ImgBoxW/ImgW;
                if(ImgH*com>=ImgBoxH){  
                    ImgH = ImgH*ImgBoxW/ImgW;
                    ImgW = ImgBoxW;
                    ImgT = (ImgBoxH-ImgH)/2;
                }else{
                    ImgW = ImgW*ImgBoxH/ImgH; 
                    ImgH = ImgBoxH;
                    ImgL = (ImgBoxW-ImgW)/2;
                }
                pic.ImgW = ImgW;
                pic.ImgH = ImgH;
                pic.ImgL = ImgL;
                pic.ImgT = ImgT
                this.ImgBox.push(pic);
                this.ImgBoxW = ImgBoxW;
                this.ImgBoxH = ImgBoxH;
            }
        },
        WinSize(){
            let ImgBoxW = document.documentElement.clientWidth;
            let ImgBoxH = document.documentElement.clientHeight;
            if (ImgBoxW<669){
              ImgBoxH = 0.5 * ImgBoxH
            }
            else{
              ImgBoxH = ImgBoxH
            }
            let length = this.ImgBox.length;
            for (let i=0;i<length;i++){
                let pic = {}
                pic.url = this.ImgBox[i].url;
                let img = new Image();
                img.src= pic.url
                let ImgW = img.width;
                let ImgH = img.height;
                let ImgL = 0;
                let ImgT = 0;
                let com = ImgBoxW/ImgW;
                if(ImgH*com>=ImgBoxH){  
                    ImgH = ImgH*ImgBoxW/ImgW;
                    ImgW = ImgBoxW;
                    ImgT = (ImgBoxH-ImgH)/2;
                }else{
                    ImgW = ImgW*ImgBoxH/ImgH; 
                    ImgH = ImgBoxH;
                    ImgL = (ImgBoxW-ImgW)/2;
                }
                pic.ImgW = ImgW;
                pic.ImgH = ImgH;
                pic.ImgL = ImgL;
                pic.ImgT = ImgT
                this.ImgBox[i]=pic;
                this.ImgBoxW = ImgBoxW;
                this.ImgBoxH = ImgBoxH;
          }
        }
    },
    created(){
        this.ImgPic();
    },
    mounted(){
      let _this = this;
      window.onresize =()=>{
        _this.WinSize()
      }
      this.LoginMobi();
    }
}
</script>



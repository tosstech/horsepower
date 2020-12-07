<template>
    <div id="Recomand">
        <div id="recom_rest">
            <div class="img_scroll">
                <div class="img_scroll_inner" ref='img_scroll_inner' :style="{width:navWidth+'px'}">
                    <li v-for="item in restaurant" :key="item.index" ref="ImgPic">
                        <img-box v-bind:imginfo="restaurant" ref="imgurl"></img-box>
                        <div class="recomand_title"> 
                            {{item.name}}
                            <div class="recomand_star">
                                 <icon-font v-for="i in item.star" :key="i" type='iconstar'></icon-font>
                            </div>
                        </div>
                    </li>
                    <div style="clear:both"></div>
                </div>
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
            navWidth:'',
            restaurant:[
                {url:(require('@/assets/restaurant_1.jpg')),name:'很好吃',star:3},
                {url:(require('@/assets/restaurant_2.jpg')),name:'非常好吃',star:4},
                {url:(require('@/assets/restaurant_3.jpg')),name:'超级好吃',star:5},
            ]
        }
    },
    methods:{
        nav_width(){
            let nav_sum = 0;
            let nav_li = this.$refs.img_scroll_inner.getElementsByTagName('li');
            let w = document.documentElement.clientWidth * 0.97;
            let li_w = 0.4 * w
            let li_gap = 0.05 * w 
            let length = this.restaurant.length;
            this.navWidth = length * (li_w + li_gap) ;
            for (let i=0;i<length;i++){
                this.$refs.ImgPic[i].style.marginRight=li_gap+'px';
            }
        },
        RestimgSize(){
            let length = this.restaurant.length;
            let w = document.documentElement.clientWidth * 0.97;
            let li_w = 0.4 * w
            let li_gap = 0.05 * w 
            let h = li_w * 1.05
            for (let i=0;i<length;i++){
                this.$refs.imgurl[i].ImgPic(i,li_w,h);
            }
        }
    },

    mounted(){
        this.$nextTick(()=>{this.RestimgSize()});
        window.addEventListener("resize", this.RestimgSize);
        this.nav_width();
    }
}
</script>
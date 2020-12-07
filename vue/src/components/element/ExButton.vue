<template>
    <div id='exbuttom'>
        
        <transition name='bt-top'>
            <div class="bt_top bt_set rounded" v-show='bt_top'>
                <div class="bt_icon">
                    <icon-font type='iconadd'></icon-font>
                </div>
            </div>
        </transition>
        
        <transition name='bt-left'>
            <div class="bt_left bt_set rounded" v-show='bt_left'>
                <div class="bt_icon">
                    <icon-font type='iconmap'></icon-font>
                </div>
            </div>
        </transition>

        <div class="bt_right main_bt_set rounded" @click="btExtent">
            <div class="main_bt_icon">
                <icon-font type='iconmeter'></icon-font>
            </div>
        </div>

        <transition name='bt-down'>
            <div class="bt_down bt_set rounded" v-show='bt_down'>
                <div class="bt_icon">
                    
                </div>
            </div>
        </transition>

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
           bt_top:false,
           bt_left:false,
           bt_down:false,
           count : 1,
        }
    },
    methods:{
        btExtent(){
            this.count++
            this.bt_top = !this.bt_top;
            this.bt_left = !this.bt_left;
        }  
    },
}
</script>
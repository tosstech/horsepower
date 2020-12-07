<template>
    <div id="header">
        <div class="header_top">
            <a-row type="flex" align="middle">
                <a-col flex="60px">
                    <div class="location"><icon-font type="iconzuobiao"></icon-font>武汉</div>
                </a-col>
                <a-col flex="1">
                    <a-input  class="search" :placeholder='search_key' v-model="search">
                        <icon-font slot="suffix"  type='iconsousuo'/>
                    </a-input>
                </a-col>
            </a-row>
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
            search_key: "青海湖环线",
            search: ""
        }
    },
}
</script>

<style scoped>
.location >>> .anticon {
  color: #da414b;
  font-size: 1.4em;
  height: 25px;
  line-height: 25px;
  vertical-align:-4px;
  
}
.search >>> .anticon {
  color: #0e3159 !important;
  font-size: 1.2em !important;
}
</style>
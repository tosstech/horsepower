<template>
  <div id="login_mobile">
    <li>
      <a-input ref="user_name_input" placeholder="用户名/手机号码" v-model="user_name" @focus="clearUser()">
          <icon-font slot="prefix"  type='iconuser'/>
      </a-input>
    </li>
    <li>
      <a-input ref="user_code_input" class="login_code" placeholder="验证码" v-model="user_code" @focus="clearCode()">
          <icon-font slot="prefix"  type='iconyanzhengma'/>
          <a-button slot="addonAfter">{{send_code}}</a-button>
      </a-input>
    </li>
    <li class="login_info">{{login_info}}</li>
    <li>
      <a-button>登录</a-button>
    </li>
    <div class="interface">
        <a-row class="iconlist" type='flex' justify="space-between">
          <a-col :flex='1'><icon-font type="iconweixin"/></a-col>
          <a-col :flex='1'><icon-font type="iconweibo"/></a-col>
          <a-col :flex='1'><icon-font type="iconQQ"/></a-col>
          <a-col :flex='1'><icon-font type="icondouyin"/></a-col>
          <a-col :flex='1'><icon-font type="iconxiaohongshu"/></a-col>
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
            user_name:'',
            user_code:'',
            send_code:'发送',
            login_info: '',
        }
    },
    methods:{
      clearUser(){
        this.user_name = '';
      },
      clearCode(){
        this.user_code = '';
      },
    },
    mounted(){
      
    }
}
</script>

<style scoped>
#login_mobile >>> .anticon {
  color: #000;
  opacity: 0.4;
}
</style>
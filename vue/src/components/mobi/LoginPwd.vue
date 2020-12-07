<template>
  <div id="login_pwd">
    <li>
      <a-input ref="user_name_input" placeholder="用户名/手机号码" v-model="user_name" @focus="clearUser()">
          <icon-font slot="prefix"  type='iconuser'/>
      </a-input>
    </li>
    <li>
      <a-input ref="user_code_pwd" class="login_code" placeholder="输入密码" v-model="user_pwd" @focus="clearPwd()">
          <icon-font slot="prefix"  type='iconmima2'/>
      </a-input>
    </li>
    <li class="login_info">{{login_info}}</li>
    <li>
      <a-button>登录</a-button>
    </li>
    <li class="forget">
      <icon-font type="iconyuechi2"/><span>找回密码</span>
    </li>
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
            user_pwd:'',
            login_info: '',
        }
    },
    methods:{
      clearUser(){
        this.user_name = '';
      },
      clearPwd(){
        this.user_pwd = '';
      },
    },
    mounted(){
      
    }
}
</script>

<style scoped>
#login_pwd >>> .anticon {
  color: #000;
  opacity: 0.4;
}

.forget >>> .anticon {
  color: #FFF !important;
  font-size: 20px;
  opacity: 1 !important;
  padding-right: 5px;
}
</style>
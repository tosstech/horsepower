<template>
  <div id='footer'>
    <div class="foot_top">
      <div class="foot_top_inner_left"></div>
      <div class="foot_top_inner_right"></div>
    </div>
    <div class="foot_bottom">
      <a-row type="flex">
        <a-col :flex="1"  @click="LineList">
          <icon-font :type='foot[0].icon'/>
          <div class="foot_text">{{foot[0].name}}</div>
        </a-col>
        <a-col :flex="1" @click="TagList">
          <icon-font :type='foot[1].icon'/>
          <div class="foot_text">{{foot[1].name}}</div>
        </a-col>
        <a-col :flex="1"  @click="Sns">
          <icon-font :type='foot[2].icon'/>
          <div class="foot_text">{{foot[2].name}}</div>
        </a-col>
        <a-col :flex="1" @click="Store">
          <icon-font :type='foot[3].icon'/>
          <div class="foot_text">{{foot[3].name}}</div>
        </a-col>
        <a-col :flex="1"  @click="User">
          <icon-font :type='foot[4].icon'/>
          <div class="foot_text">{{foot[4].name}}</div>
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
      foot:[
        {icon:"iconhp_b_1",name:"路线"},
        {icon:"iconhp_b_2",name:"目的地"},
        {icon:"iconhp_b_3",name:"自驾圈"},
        {icon:"iconhp_b_4",name:"商城"},
        {icon:"iconhp_b_5",name:"我的"},
      ],
    }
  },
  methods:{
    LineList(){
      this.$router.push('/Main/LineList')
    },
    TagList(){
      this.$router.push('/Main/TagList')
    },
    Sns(){
      this.$router.push('/Main/Sns')
    },
    Store(){
      this.$router.push('/Main/Store')
    },
    User(){
      this.$router.push('/UserLogin/LoginMobi')
    },
    bt_url(){
      Object.assign(this.$data, this.$options.data())
      let url = this.$route.name
      switch(url){
        case 'LineList' : this.foot[0].icon = 'iconhp_b_1_on';
        break
        case 'TagList' : this.foot[1].icon = 'iconhp_b_2_on';
        break
        case 'Sns' : this.foot[2].icon = 'iconhp_b_3_on';
        break
        case 'Store' : this.foot[3].icon = 'iconhp_b_4_on';
        break
        case 'UserLogin' : this.foot[4].icon = 'iconhp_b_5_on';
        break
      }
    },
  },
  mounted(){
    this.bt_url()
  },
  watch:{
    '$route' : 'bt_url'
  }
}
</script>




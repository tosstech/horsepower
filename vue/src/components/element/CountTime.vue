<template>
    <div class="Date">
        <span>{{d}}</span>
        <span>天</span>
        <span>{{h}}</span>
        <span>:</span>
        <span>{{m}}</span>
        <span>:</span>
        <span>{{s}}</span>
        <span></span>
    </div>
</template>

<script>
export default {
  name: 'count-time',
  props:['timeEnd'],
  data() {
    return {
      d: '',
      h: '',
      m: '',
      s: '',
    }
  },
  created() {
    this.countTime()
  },
  methods: {
    countTime: function() {
      //获取当前时间
      var date = new Date()
      var now = date.getTime()
      //设置截止时间
      
      var endDate = new Date(this.timeEnd)
      var end = endDate.getTime()
      //时间差
      var leftTime = end - now
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24)//天数我没用到，暂且写上
        this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
        this.m = Math.floor((leftTime / 1000 / 60) % 60)
        this.s = Math.floor((leftTime / 1000) % 60)
      }
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000)
    },
  },
}
</script>
<template>
  <div id="line_list">
    <div class="line_nav">
      <div class="line_nav_inner">
        <div class="line_nav_content" ref="line_nav_content" :style="{width:navWidth+'px'}">   
          <li v-for="item in navItem" :key="item.index">{{item}}</li>
        </div>
      </div>
    </div>

    <div class="line_content">
      <ul>
        <li v-for="item in pro" :key="item.index" ref="ImgPic">
          <div class="line_cover" @click="LineCont">
            <img-box v-bind:imginfo="pro" ref="imgurl"></img-box>
            <div class="line_title"><h1>{{item.pro_name}}</h1></div>
          </div>

          <div class="line_team" @click="TeamList">
            <div class="line_team_leader">
              <a-badge>
                <icon-font slot="count" type='iconhat'/>
                <a-avatar style="background:#ababab" :src="leaderIcon" />
              </a-badge>
              <div>{{leaderName}}</div>
            </div>
            <div class="line_team_member">
              <div class="line_team_icon">
                <a-avatar style="background:#ababab" :src="memberIcon[0]" />
                <a-avatar style="background:#ababab" :src="memberIcon[1]" />
                <a-avatar style="background:#ababab" :src="memberIcon[2]" />
                <a-avatar style="background:#ababab" :src="memberIcon[3]" />
              </div>
              <div class="team_member_data">已参与<span>{{memberNum}}</span>人 / MAX<span>{{memberMax}}</span>人</div>
            </div>
            <div style="clear:both"></div>
          </div> 

          <div class="line_info" @click="LineCont">
            <div class="line_info_trip">
              <li class="line_sale">
                <span v-for="item in lineSale" :key='item.index'>{{item}}</span>
              </li>
              <li>
                <icon-font type='iconroad'/>
                里程:<span>{{lineInfoMile[0]}}</span>公里
              </li>
              <li>
                <icon-font type='icondate'/>
                行程:<span>{{lineInfoDay[0]}}</span>天
              </li>
              <li class="line_info_place">
                <icon-font type='icontarget'/>
                出发地点:
                <span>{{lineInfoPlace[0].prov}}</span>
                <span>{{lineInfoPlace[0].city}}</span>
                <span>{{lineInfoPlace[0].dist}}</span>
              </li>
            </div>
            <div class="line_info_group">
              <ve-gauge ref="runTimes_creditChart" :data="chartData" :settings="chartSettings" width='100px' ></ve-gauge>
            </div>
            <div style="clear:both"></div>
          </div>

          <div class="line_time" @click="LineCont">
            <li class="line_time_set">
              <div>{{lineTimeSent}}</div>
              <div class="line_time_text">出发时间</div>
            </li>
            <li class="line_time_icon">
              <icon-font type='iconwheel'/>
            </li>
            <li class="line_time_end">
              <div><count-time v-bind:timeEnd ="lineTimeEnd"></count-time></div>
              <div class="line_time_text">组团截止时间</div>
            </li>
            <div style="clear:both"></div>
          </div>

          <div class="line_value" @click="LineCont">
            <a-row type='flex' align="bottom">
              <a-col :flex='2' class="line_price">
                <span>￥</span>
                <span class="line_price_num">{{linePrice}}</span>
                <span>起</span>
              </a-col>
              <a-col :flex='3' class="line_sate">
                <icon-font type='icongrassfull' style="color:#75c077" />
                <span class="line_sate_num">{{lineGrass}}</span>
                <span style="margin-right:1em">种草</span>
                <icon-font type='iconphotoicon' style="color:#0e3159" />
                <span class="line_sate_num">{{lineCard}}</span>
                <span>打卡</span>
              </a-col>
            </a-row>
          </div>
          <div style="clear:both"></div>
        </li>
      </ul>
    </div>

    <div class="line_op">
      <LineListBt></LineListBt>
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
        this.chartSettings = {
          dataName: {
            'member': ''
          },
          dataType:{
            'member' : 'percent'
          },
          seriesMap: {
            'member': {
              min: 0,
              max: 1,
              radius: '100%',
              center: ['50%', '50px'],
              startAngle:200,
              endAngle:-20,
              splitNumber:100,
              itemStyle: { color: 'none' ,},

              axisLine: {
                lineStyle: {
                  color: [['', '#0e3159'],[1, '#ececec']],
                  width: 10,
                  shadowColor: '#fff',
                  shadowBlur: 10
                }
              }, /**轴线**/

              axisTick: {
                length:20,
                lineStyle: {
                  color: 'none',
                  shadowColor: '#fff',
                  shadowBlur: 10
                }
              }, /**刻度**/

              axisLabel: {
                textStyle: {
                  fontWeight: 'bolder',
                  color: 'none',
                  shadowColor: 'none',
                  shadowBlur: 10
                },
                formatter: function(v){
                  switch (v + '') {
                    case '0': return 'Min';
                    case '1': return 'Max';
                  }
                }
              },/**刻度标签**/

              splitLine: {
                length:0,
                lineStyle: {
                  width:3,
                  color: 'blue',
                  shadowColor: 'none',
                  shadowBlur: 10
                }
              },

              title: {
                offsetCenter: [0, '20px'],
                textStyle: {
                  color: '#da414b',
                  shadowColor: 'none',
                  shadowBlur: 10,
                  fontSize: 11,
                }
              },

              detail: {
                backgroundColor: '',
                borderWidth: 0,
                borderColor: 'none',
                shadowColor: 'none',
                shadowBlur: 5,
                offsetCenter: [0, '-5px'],
                textStyle: {
                  fontWeight: 'bolder',
                  color: '#0e3159',
                  fontSize: 20,
                }
              },

              pointer: {
                width:12,
                color:'yellow',
                shadowColor: 'pink',
                shadowBlur: 5,
                show:'none',
              },/**指针**/

            },
            'min': {
              min: 0,
              max: 1,
              center: ['50%', '50px'],
              radius: '70%',
              startAngle:200,
              endAngle:-20,
              splitNumber:100,
              itemStyle: { color: 'none' ,},

              axisLine: {
                lineStyle: {
                  color: [['', '#da414b'],[1, 'none']],
                  width: 2,
                  shadowColor: '#fff',
                  shadowBlur: 10
                }
              }, /**轴线**/

              axisTick: {
                length:20,
                lineStyle: {
                  color: 'none',
                  shadowColor: '#fff',
                  shadowBlur: 10
                }
              }, /**刻度**/

              axisLabel: {
                textStyle: {
                  fontWeight: 'bolder',
                  color: 'none',
                  shadowColor: 'none',
                  shadowBlur: 10
                },
                formatter: function(v){
                  switch (v + '') {
                    case '0': return 'Min';
                    case '1': return 'Max';
                  }
                }
              },/**刻度标签**/

              splitLine: {
                length:0,
                lineStyle: {
                  width:3,
                  color: 'blue',
                  shadowColor: 'none',
                  shadowBlur: 10
                }
              },

              title: {
                offsetCenter: [0, '-30%'],
                textStyle: {
                  color: '#20272e',
                  shadowColor: 'none',
                  shadowBlur: 10
                }
              },

              pointer: {
                width:12,
                color:'yellow',
                shadowColor: 'pink',
                shadowBlur: 5,
                show:'none',
              },/**指针**/

            }
          }
        }
        return{
            navWidth : '',
            navItem : ['正在热拼','长江严选','华中','华东','华南','华北','西南','西北','东北','港澳台','国际自驾'],
            pro : [],
            leaderIcon : require('@/assets/member_default.png'), 
            leaderName : "团长用户名",
            memberNum : 5,
            memberMin : 8,
            memberMax : 10,
            memberIcon : [
              require('@/assets/member_1.jpg'),
              require('@/assets/member_2.jpg'),
              require('@/assets/member_3.jpg'),
              require('@/assets/member_4.jpg'),
            ],
            chartData: {
              columns: ['type', 'value'],
              rows: [
                  { type: 'member', value: '', },
                  { type: 'min', value: 6, }
                ]
            },
            lineInfoMile:[1280],
            lineInfoDay:[6],
            lineInfoPlace:[{prov:'湖北',city:'武汉',dist:'江岸' }],
            lineSale:['热门线路','长江严选'],
            lineTimeSent:'2020-12-22 8:00:00',
            lineTimeEnd:'2020-12-12 8:00:00',
            linePrice:'3688',
            lineCard:'167',
            lineGrass:'1468',
        }
    },
    methods:{
      nav_width(){
          let nav_sum = 0;
          let nav_li = this.$refs.line_nav_content.getElementsByTagName('li');
          Array.prototype.slice.call(nav_li).forEach(li => {
            //获取每个li的宽，并追加到数组中
            nav_sum = nav_sum+li.clientWidth+14;
          });
          this.navWidth = nav_sum - 7
      },
      ImgList(){
            for (let i=0;i<7;i++) {
                let pic = {}
                pic.url = require(`@/assets/line_${i+1}.jpg`)
                let img = new Image();
                img.src= pic.url
                pic.pro_name = "我是"+i+"号路线";
                this.pro.push(pic);
            }
        },
        ImgSize(){
            let length = this.pro.length;
            let w = this.$refs.ImgPic[0].offsetWidth
            w = w 
            let h = w * 0.4
            for (let i=0;i<length;i++){
                this.$refs.imgurl[i].ImgPic(i,w,h);
            }
        },
        MemberData(){
          let m_value = this.memberNum;
          let m_max = this.memberMax;
          let m_min = this.memberMin;
          let m_percent = m_value/m_max;
          let m_min_p = m_min/m_max;
          this.chartData.rows[0].value = m_percent;
          this.chartSettings.dataName.member = '最小成团'+m_min+'人'; 
          this.chartSettings.seriesMap.member.axisLine.lineStyle.color[0][0] = m_percent;
          this.chartSettings.seriesMap.min.axisLine.lineStyle.color[0][0] = m_min_p;
        },
        TeamList(){
          this.$router.push('/Content/TeamList')
        },
        LineCont(){
          this.$router.push('/Content/LineCont')
        }
    },
    created(){
        this.ImgList();
    },
    mounted(){
      this.$nextTick(()=>{this.ImgSize()});
      window.addEventListener("resize", this.ImgSize);
      this.nav_width();
      this.MemberData();
    },
}
</script>

<style scoped>
#line_list >>> .anticon {
  font-size: 20px;
  top:3px;
  right: 9px;
  
}

.line_info_trip >>> .anticon {
  font-size: 14px !important;
  color: #da414b !important;
  vertical-align : -3px !important;
}

.line_time_icon >>> .anticon {
  font-size: 3em !important;
}

</style>
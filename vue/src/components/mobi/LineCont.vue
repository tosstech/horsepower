<template>
    <div id='line_cont'>
        <div class="line_head">
            <div class="line_head_top" ref="head_fixed" v-show="head_fixed">
                <a-row type="flex" justify="space-between">
                    <a-col :span='12'>
                        <div class="head_top_bt" @click="back">
                            <icon-font type="iconback"></icon-font>
                        </div>
                    </a-col>
                    <a-col :span='12'>
                        <div class="head_top_bt" style="float:right">
                            <icon-font type="iconmessage"></icon-font>
                        </div>
                    </a-col>
                </a-row>
            </div>
            <div class="line_head_scroll" ref="head_scroll" v-show="head_scroll">
                <a-row type='flex'>
                    <a-col flex='1em'>
                        <icon-font type="iconback" @click="back">
                    </icon-font></a-col>
                    <a-col flex='1'>
                        <div  class="head_title">{{titleName}}</div>
                    </a-col>
                    <a-col flex='1em'>
                        <icon-font type="iconmessage"></icon-font>
                    </a-col>
                </a-row>
            </div>
        </div>

        <a-carousel :after-change="onChange" effect="fade" autoplay >
            <div v-for="item in ImgBox" :key="item.index" 
                :style="{width:ImgBoxW+'px',height:ImgBoxH+'px'}"> 
                    <img :style="{width:item.ImgW+'px',
                    height:item.ImgH+'px',
                    marginTop:item.ImgT+'px',
                    marginLeft:item.ImgL+'px'}" 
                    :src="item.url"/>
            </div>
        </a-carousel>

        <div class="line_leader">
            <a-row type='flex' align="bottom">
                <a-col :flex='2'>
                    <div class="line_team_leader">
                        <a-avatar style="background:#ababab;border:1px solid #FFF" :size="48" :src="leaderIcon" />
                        <span>{{leaderName}}</span>
                    </div>
                </a-col>
                <a-col :fle='3' class="line_grass">
                    <icon-font type='icongrassfull' style="color:#75c077" />
                    <span>{{lineGrass}}</span>
                    <span>种草</span>
                </a-col>
            </a-row>
        </div>

        <div id="line_dis" class="line_dis">
            <div class="line_dis_lab">
                <span v-for="item in lineSale" :key='item.index'>{{item}}</span>
            </div>
            <div class="line_dis_title">
                <a-row type='flex'>
                    <a-col flex='1'>
                        <div class="title_name">{{titleName}}</div>
                    </a-col>
                    <a-col flex='70px'>
                        <icon-font type='iconphotobt'/>
                        <div style="font-size:0.8em">打卡相册</div>
                    </a-col>
                </a-row>
            </div>

            <div class="line_dis_cont">{{LineCont}}</div>

            <div class="line_user_lab">
                <a-tag v-for="item in UserLab" :key="item.index" :color="item.color">{{item.lab}}</a-tag>
            </div>

            <div class="line_member">
                <div class="line_title">
                    <a-row align="bottom">
                        <a-col :span='16'>
                            <div class="line_title_text">
                                <icon-font type='iconlineTeam' />
                                <span style="margin-right:0.5em">团队成员</span>
                                <span>( {{memberNum}}</span>
                                <span>/</span>
                                <span style="color:#da414b">{{memberMax}}</span>
                                <span style="color:#da414b">Max</span>
                                <span>)</span>
                            </div>
                        </a-col>
                        <a-col :span='8'>
                            <div class="line_title_bt">
                                <icon-font :class="[trun? 't_left':'t_down' ]" type='iconlineOpen' @click="MemberList" />
                            </div>
                        </a-col>
                    </a-row>
                </div>
                <div class="line_member_list" ref="line_member_list">
                    <a-row justify="space-between">
                        <a-col :span="4" v-for="item in memberItem" :key='item.index'>
                            <a-avatar style="background:#ababab;border:1px solid #ececec" 
                            :src="item.icon" :size="42"  />
                            <div class="user_name">{{item.user}}</div>
                        </a-col>
                    </a-row>
                </div>
            </div>

            

        </div>

        <div id="grid" class="grid">
            <div class="grid_top"></div>
            <div class="grid_middle"></div>
            <div class="grid_bottom"></div>
        </div>

        <div class="line_car">
            <div class="line_title_text">
                <icon-font type='iconlineCar' />
                <span style="margin-right:0.5em">车辆信息</span>
            </div>
            <div class="line_car_list">
                <li>
                    <a-row type="flex" v-for="item in carInfo" :key="item.index">
                        <a-col :span='4' class="car_icon">
                            <icon-font :type='item.icon' :style="{color:item.colorNO}" />
                        </a-col>
                        <a-col :span='3'>
                            <car-logo v-bind:carLogo="item.carLogo "></car-logo>
                        </a-col>
                        <a-col :span='7' class="car_modle">{{item.modle}}</a-col>
                        <a-col :span='5'>{{item.num}}</a-col>
                        <a-col :span='3'>{{item.person}}人</a-col>
                        <a-col :span='2' class="cert_bt"><icon-font type='iconcert' @click="showModal(item.num)" /></a-col>
                        <a-modal 
                            v-model="visible" 
                            :ok-button-props="{ props: { disabled: true } }"
                            :cancel-button-props="{ props: { disabled: true } }"
                        >
                            <div class="modal_car_cert">
                                <div class='modal_car_num'>{{carCert.carNum}}</div>
                                <p>车辆类型:<span></span></p>
                                <p>使用性质:<span></span></p>
                                <p>所有人:<span></span></p>
                                <p>住址:<span></span></p>
                                <p>品牌型号:<span></span></p>
                                <p>发动机号码:<span></span></p>
                                <p>车辆识别代号:<span></span></p>
                                <p>注册日期:<span></span></p>
                                <p>发证日期:<span></span></p>
                                <p>核定载人数:<span></span></p>
                                <p>档案编号:<span></span></p>
                                <p>整备质量:<span></span></p>
                                <p>总质量:<span></span></p>
                                <p>核定载质量:<span></span></p>
                                <p>外廓尺寸:<span></span></p>
                                <p>准牵引总质量:<span></span></p>
                                <p>备注:<span></span></p>
                                <p>检验记录:<span></span></p>
                            </div>
                        </a-modal>
                    </a-row>
                </li>
            </div>

            <div id="line_car_park" class="line_car_park">
                <a-row type='flex'>
                    <a-col flex='2.5em'><icon-font type='iconpark'  /></a-col>
                    <a-col flex='1' class="car_park_info">
                        <div>{{parkTime}}</div>
                        <div>{{parkAdd}}</div>
                    </a-col>
                </a-row>
            </div>
        </div>

        <div id="line_trip" class="line_trip">
            <h2>自驾行程</h2>
            <a-tabs>
                <a-tab-pane v-for="item in tripInfo" :key="item.tripTime">
                    <div class="line_trip_bar" slot="tab">
                        <li>
                            <div class="trip_target">{{item.tripTarget}}</div>
                            <div class="trip_time">{{item.tripTime}}</div>
                        </li>
                    </div>
                    <div class="line_trip_content">
                        <div class="quill">
                            <p>(从富文本编辑器Vue-Quill-Editor服务端调用数据，此处前端临时模拟数据)</p>
                            <p>
                                驾驶车往武当山景区，换乘景区环保车至南岩停车场， 徒步登山，沿途游览张三丰祖师朝拜殿——榔梅祠。
                            </p>
                            <img src='@/assets/trip_1.jpg'/>
                            <p>
                                爬山上金顶约须2小时可到达，沿途欣赏武当山美景感受玄天上帝修真图，体验修真过程，还可以参观武当珍果榔梅仙果朝拜榔梅真人和武当武术祖师张三丰，天下驰名的黄龙洞，求黄龙洞眼药，游人界和天界的分界线朝天宫景点。
                            </p>
                            <img src='@/assets/trip_2.jpg'/>
                            <p>    
                                途径一.二三天门到海拔1612米天柱峰，体会到“会当临绝顶，一览众山小”的胜景；抵达金顶景区后，体验 “会当临绝顶，一览众山小”的胜景；参观太和宫、转运殿、皇经堂、紫禁城和世界最大、最壮观的金殿。
                            </p>
                            <img src='@/assets/trip_3.jpg'/>
                            <p>
                                徒步下山。后游览36岩中,最漂亮的一岩——南岩。
                            </p>
                            <img src='@/assets/trip_4.jpg'/>
                            <p>晚餐品尝武当养生素斋</p>
                        </div>
                        <div class="line_trip_recom">
                            <h2>马力推荐</h2>
                            <RecomHotel></RecomHotel>
                            <div style="margin-top:1em"></div>
                            <RecomRest></RecomRest>
                        </div>
                    </div>
                </a-tab-pane>
            </a-tabs> 
        </div> 

        <div class="line_notice">
            <div class="line_notice_inner">
                <h3>注意事项</h3>
                <p>
                    沙漠自驾有陷车风险，请带上工兵铲，牵引绳
                </p>
                <p>
                    昼夜温差大，注意保暖，紫外线强，带好防晒霜
                </p>
                <p>
                    尊重当地少数民族风俗习惯
                </p>
            </div>
        </div>

        <div class="line_pay">
            <h3>费用说明</h3>
            <p>拼团价格按成功拼团实际人数平摊</p>
            <p>预付款按成团最小人数收费，成团后结余资金系统自动原路返回资金</p>
            <p>5人参团，2900元/人</p>
            <p>5-10人参团，2600元/人</p>
            <p>10人参团，2400元/人</p>
            <p>整车加入，1800元/人</p>
            <p>整车由车主自己负责拼人</p>
            <p>离拼团截止时间大于3天可免费取消订单，离拼团时间小于3天，收取5%的违约金</p>
            <p>拼团成功团费不退，因有临时原因不能成行，可找人替代</p>
        </div>

        <div class="copyright">
            <icon-font type='iconlogo'></icon-font>
            <div>Copyrighy © Horsepower</div>
        </div>

        <div class="line_bottom">
            <div class="line_bottom_info">
                <a-row>
                    <a-col :span='12'>
                        <span style="color: #0e3159">Min:</span>
                        <span>{{lineInfo.min}}</span>
                        <span><icon-font type="iconuser"></icon-font></span>
                        <span>{{lineInfo.person}}</span>
                        <span style="color: #da414b">Max:</span>
                        <span>{{lineInfo.max}}</span>
                    </a-col>
                    <a-col :span='12' class="line_tiem_end">
                        <count-time v-bind:timeEnd ="lineTimeEnd"></count-time>
                    </a-col>
                </a-row>
                
            </div>
            <div class='line_bottom_bt'>
                <a-row>
                    <a-col :span='3'>
                        <icon-font type='iconshare'></icon-font>
                        <div>分享</div>
                    </a-col>
                    <a-col :span='3'>
                        <icon-font type='icongrassfull' 
                                   :class="[fill? 'grass_full':'grass_empt' ]"
                                   @click="btGrass">
                        </icon-font>
                        <div>种草</div>
                    </a-col>
                    <a-col :span='9'>
                        <a-button class="bt_car">
                            <div class="line_price">
                                <span>￥</span>
                                <span class="price_num">{{lineInfo.car}}</span>
                                <span>元/人</span>
                            </div>
                            <div class="line_class">整车入团</div>
                        </a-button>
                    </a-col>
                    <a-col :span='9'>
                        <a-button class="bt_member">
                            <div class="line_price">
                                <span>￥</span>
                                <span class="price_num">{{lineInfo.member}}</span>
                                <span>元/人</span>
                            </div>
                            <div class="line_class">个人入团</div>
                        </a-button>
                    </a-col>
                </a-row>
            </div>

        </div>

        <div class="line_cont_op">
            <LineContBt></LineContBt>
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
            leaderIcon : require('@/assets/member_default.png'), 
            leaderName : "团长用户名",
            lineGrass : 126,
            lineSale : ['热门线路','长江严选'],
            titleName : '我是0号路线我是0号路线我是号路线我是号路线我是0号路线',
            LineCont : '线路简介，线路简介，线路简介，线路简介，线路简介，线路简介，线路简介，线路简介，线路简介，线路简介，',
            UserLab : [
                    {lab:'好闺蜜',color:'red'},
                    {lab:'逛吃打卡',color:'blue'},
                    {lab:'初冬胡杨林',color:'orange'},
                    {lab:'烤骆驼',color:'pink'},
                    {lab:'全程跟拍',color:'purple'},
                ],
            memberNum : 5,
            memberMax : 10,
            memberItem : [
                {icon:require('@/assets/member_1.jpg'),user:'大大大很大很大'},
                {icon:require('@/assets/member_2.jpg'),user:'小小小'},
                {icon:require('@/assets/member_3.jpg'),user:'大大大'},
                {icon:require('@/assets/member_4.jpg'),user:'小小小'},
                {icon:require('@/assets/member_1.jpg'),user:'大大大'},
                {icon:require('@/assets/member_2.jpg'),user:'小小小'},
                {icon:require('@/assets/member_3.jpg'),user:'大大大'},
                {icon:require('@/assets/member_4.jpg'),user:'小小小'},
            ],
            count : 1,
            trun : false,
            carInfo:[
                {icon:'iconcar_class_1',carLogo:'57',color:'red',colorNO:'',modle:'帕萨特380tsi',num:'鄂A88888',person:4},
                {icon:'iconcar_class_2',carLogo:'58',color:'orange',colorNO:'',modle:'jeep robin',num:'鄂A66666',person:7},
                {icon:'iconcar_class_3',carLogo:'59',color:'yellow',colorNO:'',modle:'奔驰v260',num:'鄂A88888',person:7},
                {icon:'iconcar_class_4',carLogo:'60',color:'green',colorNO:'',modle:'阿迪雅Snoic 700SL',num:'鄂A88888',person:4},
                {icon:'iconcar_class_5',carLogo:'61',color:'blue',colorNO:'',modle:'帕萨特380tsi',num:'鄂A88888',person:4},
                {icon:'iconcar_class_2',carLogo:'62',color:'purple',colorNO:'',modle:'jeep robin',num:'鄂A88888',person:7},
                {icon:'iconcar_class_3',carLogo:'63',color:'pink',colorNO:'',modle:'奔驰v260',num:'鄂A88888',person:7},
                {icon:'iconcar_class_4',carLogo:'64',color:'white',colorNO:'',modle:'阿迪雅Snoic 700SL',num:'鄂A88888',person:4},
            ],
            parkTime:'2020/12/24 8:30',
            parkAdd:'湖北省 武汉市 江岸区 某小区门口',
            visible: false,
            carCert:{carNum:'',},
            mode: 'top',
            tripInfo:[
                {tripTarget:'武当山',tripTime:'12-01'},
                {tripTarget:'西安',tripTime:'12-02'},
                {tripTarget:'扶风',tripTime:'12-03'},
                {tripTarget:'敦煌',tripTime:'12-04'},
                {tripTarget:'张掖',tripTime:'12-05'},
                {tripTarget:'哈密',tripTime:'12-06'},
                {tripTarget:'那然色布斯台音布拉格',tripTime:'12-07'},
                ],
            restaurant:[
                {

                }
            ],
            lineTimeEnd:'2020-12-12 8:00:00',
            fill:false,
            grass_count:0,
            lineInfo:{min:5,person:8,max:20,car:'1800',member:'2600'},
            head_fixed:true,
            head_scroll:false,
        }
    },
    methods:{
        onChange(a, b, c) {},
        initial(){
            window.scrollTo(0, 0);
        },
        back(){
            this.$router.push('/Main/LineList');
        },
        headListener(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop > 150){
                this.head_fixed = false;
                this.head_scroll = true;
                let op = (scrollTop - 150 )/ 30
                if(op<0.9){
                    this.$refs.head_scroll.style.opacity = op;
                }
                else{
                    this.$refs.head_scroll.style.opacity = 0.9;
                } 
            }else if (scrollTop < 150) {
                this.head_fixed = true;
                this.head_scroll = false;
                let op = (150 - scrollTop)/ 30;
                if(op<0.6){
                    this.$refs.head_fixed.style.opacity = op;
                }
                else{
                    this.$refs.head_fixed.style.opacity = 0.6;
                } 
            }
        },
        callback(val) {
            console.log(val);
        },                                                              
        showModal(car_num) {
            this.visible = true;
            this.carCert.carNum= car_num
        },
        btGrass(){
            this.count++
            this.fill = !this.fill
        },
        CarColor(){
            let sum = this.carInfo.length
            for(let i=0;i<sum;i++){
                let color = this.carInfo[i].color;
                switch(color){
                    case 'red' : this.carInfo[i].colorNO = '#DA4453';break
                    case 'orange' : this.carInfo[i].colorNO = '#FC6E51';break
                    case 'yellow' : this.carInfo[i].colorNO = '#FFCE54';break
                    case 'green' : this.carInfo[i].colorNO = '#48CFAD';break
                    case 'blue' : this.carInfo[i].colorNO = '#4FC1E9';break
                    case 'purple' : this.carInfo[i].colorNO = '#AC92EC';break
                    case 'pink' : this.carInfo[i].colorNO = '#EC87C0';break
                    case 'white' : this.carInfo[i].colorNO = '#FFFFFF';break
                    case 'grey' : this.carInfo[i].colorNO = '#E6E9ED';break
                    case 'black' : this.carInfo[i].colorNO = '#434A54';break
                    case 'golden' : this.carInfo[i].colorNO = '#F5DEB3';break
                    case 'brown' : this.carInfo[i].colorNO = '#8B4513';break
                }
            }
        },
        MemberList(){
            if(this.count%2==0){
                this.$refs.line_member_list.style.overflow = 'auto'
                this.$refs.line_member_list.style.height = 'auto'
            }else{
                this.$refs.line_member_list.style.overflow = 'hidden'
                this.$refs.line_member_list.style.height = 65+'px'
            }
            this.count++
            this.trun = !this.trun
        },
        ImgPic(){
            let ImgBoxW = document.documentElement.clientWidth;
            let ImgBoxH = document.documentElement.clientHeight;
            ImgBoxH = 0.7 * ImgBoxH
            for (let i=0;i<4;i++) {
                let pic = {}
                pic.url = require(`@/assets/line_c_${i+1}.jpg`)
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
            ImgBoxH = 0.7 * ImgBoxH
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
      this.CarColor();
      window.addEventListener('scroll', this.headListener)
     
    },
    destroyed(){
        window.removeEventListener('scroll', this.headListener)
    },
}
</script>

<style scoped>

#line_cont >>> button{
    background: #0e3159;
}
</style>
 
<template>
    <div class="car_logo">
        <icon-font :type='LogList'></icon-font>
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
    name: 'car_logo',
    props:['carLogo'],
    data(){
        return{
            LogList:'null',
        }
    },
    methods:{
        LogoList(){
            let car_logo = this.carLogo;
            switch(car_logo){
                case '1' : this.LogList = 'iconHonda' ; break
                case '2' : this.LogList = 'iconNissan' ; break
                case '3' : this.LogList = 'iconJeep' ; break
                case '4' : this.LogList = 'iconLamborghini' ; break
                case '5' : this.LogList = 'iconMaxus' ; break
                case '6' : this.LogList = 'iconBentley' ; break
                case '7' : this.LogList = 'iconChrysler' ; break
                case '8' : this.LogList = 'iconRollsRoyce' ; break
                case '9' : this.LogList = 'iconSoueast' ; break
                case '10' : this.LogList = 'iconHongQi' ; break
                case '11' : this.LogList = 'iconRoewe' ; break
                case '12' : this.LogList = 'iconVolvo' ; break
                case '13' : this.LogList = 'iconSubaru' ; break
                case '14' : this.LogList = 'iconGwm' ; break
                case '15' : this.LogList = 'iconBugatti' ; break
                case '16' : this.LogList = 'iconMg' ; break
                case '17' : this.LogList = 'iconFoton' ; break
                case '18' : this.LogList = 'iconBeijing' ; break
                case '19' : this.LogList = 'iconKia' ; break
                case '20' : this.LogList = 'iconCitroen' ; break
                case '21' : this.LogList = 'iconLexus' ; break
                case '22' : this.LogList = 'iconWuling' ; break
                case '23' : this.LogList = 'iconSuzuki' ; break
                case '24' : this.LogList = 'iconToyota' ; break
                case '25' : this.LogList = 'iconByd' ; break
                case '26' : this.LogList = 'iconBaojun' ; break
                case '27' : this.LogList = 'iconVenucia' ; break
                case '28' : this.LogList = 'iconCitroen' ; break
                case '29' : this.LogList = 'iconJaguar' ; break
                case '30' : this.LogList = 'iconAcura' ; break
                case '31' : this.LogList = 'iconBrilliance' ; break
                case '32' : this.LogList = 'iconFaw' ; break
                case '33' : this.LogList = 'iconjmc' ; break
                case '34' : this.LogList = 'iconFiat' ; break
                case '35' : this.LogList = 'iconHyundai' ; break
                case '36' : this.LogList = 'iconMitsubishi' ; break
                case '37' : this.LogList = 'iconLandRover' ; break
                case '38' : this.LogList = 'iconMazda' ; break
                case '39' : this.LogList = 'iconGeely' ; break
                case '40' : this.LogList = 'iconVolkswagen' ; break
                case '41' : this.LogList = 'iconDfac' ; break
                case '42' : this.LogList = 'iconFord' ; break
                case '43' : this.LogList = 'iconHaima' ; break
                case '44' : this.LogList = 'iconSkoda' ; break
                case '45' : this.LogList = 'iconMaserati' ; break
                case '46' : this.LogList = 'iconBenz' ; break
                case '47' : this.LogList = 'iconBmw' ; break
                case '48' : this.LogList = 'iconLincoln' ; break
                case '49' : this.LogList = 'iconChery' ; break
                case '50' : this.LogList = 'iconInfiniti' ; break
                case '51' : this.LogList = 'iconChevrolet' ; break
                case '52' : this.LogList = 'iconAstonMartin' ; break
                case '53' : this.LogList = 'iconPorsche' ; break
                case '54' : this.LogList = 'iconAodi' ; break
                case '55' : this.LogList = 'iconPeugeot' ; break
                case '56' : this.LogList = 'iconBuick' ; break
                case '57' : this.LogList = 'iconTesla' ; break
                case '58' : this.LogList = 'iconNio' ; break
                case '59' : this.LogList = 'iconLifan' ; break
                case '60' : this.LogList = 'iconChangan' ; break
                case '61' : this.LogList = 'iconCadillac' ; break
                case '62' : this.LogList = 'iconDodge' ; break
                case '63' : this.LogList = 'iconHummer' ; break
                case '64' : this.LogList = 'iconFerrari' ; break
            }
        }
    },
    mounted(){
      this.LogoList();
    }
}
</script>
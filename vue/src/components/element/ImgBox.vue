<template>
    <div class="ImgBox" ref="ImgBox" :style="{width:ImgBoxW+'px',height:ImgBoxH+'px'}">
        <img :style="{width:ImgBox.ImgW+'px',
        height:ImgBox.ImgH+'px',
        marginTop:ImgBox.ImgT+'px',
        marginLeft:ImgBox.ImgL+'px'}" 
        :src="ImgBox.url"/>
    </div>
</template>

<script>
export default {
    name:"img-box",
    props:['imginfo'],
    data(){
        return{
            ImgBox:{},
            ImgBoxW:'',
            ImgBoxH:''
        }
    },
    methods:{
        ImgPic(i,w,h){
            let pic = {}
            pic.url = this.imginfo[i].url
            let ImgBoxW = w
            let ImgBoxH = h
            this.ImgBoxW = ImgBoxW
            this.ImgBoxH = ImgBoxH
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
            pic.ImgT = ImgT;
            this.ImgBox = pic


        },
    },
}
</script>
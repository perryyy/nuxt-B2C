<template>
    <div class="product">
        <div class="top">
            <!-- <homeheader /> -->
            <component :is="nowHeader"/>
        </div>
        <div class="bottom">
            <productTotal />
        </div>
    </div>
</template>
<script>
import homeheader from '../../components/home/homeHeader.vue';
import carousel from '../../components/productCom/carousel.vue';
import productTotal from '../../components/home/productTotal.vue';

export default{
    components:{
        homeheader,
        productTotal,
        carousel
    },
    data(){
        return{
            nowHeader:'homeheader'
        }
    },
    created(){
        let isMobile = this.$store.state.setting.isMobile;
        if(isMobile===false){
            this.nowHeader='homeheader';
        }
        else{
            this.nowHeader='carousel';
        }
    }
}
</script>
<style scoped>
    .top,.bottom{
        margin-top: 8%;
    }
</style>
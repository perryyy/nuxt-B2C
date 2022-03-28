<template>
    <div class="home">
        <div class="header">
            <!-- <pageheader /> -->
            <component :is="nowHeader" />
        </div>
        <div class="bottom">
            <div class="nav" v-if="!isMobile"><menunav /></div>
            <div class="main"><nuxt-child/> </div>
        </div>
    </div>
</template>
<script>
import pageheader from '../components/layout/pageheader.vue';
import mobileHeader from '../components/layout/mob/mobileHeader.vue';
import menunav from '../components/layout/menunav.vue'
export default {
    components:{
        pageheader,
        menunav,
        mobileHeader
    },
    name: "default",
    data(){
        return{
            isMobile:false,
            nowHeader:'pageheader'
        }
    },
    mounted(){
        let isMobile = localStorage.getItem('device');
        if(isMobile==='pc端'){
            this.isMobile=false;
            this.nowHeader='pageheader';
            this.$store.dispatch('setting/setdevice',false);
        }
        else{
            this.isMobile=true;
            this.nowHeader='mobileHeader';
            this.$store.dispatch('setting/setdevice',true);
        }
    }
}
</script>
<style scoped>
    .bottom{
        display: flex;
    }
    .nav{
        width: 30%;
        padding-left: 10%;
    }
    .main{
        width: 70%;
    }
    .header{
        position: sticky;
        top:0;
        z-index: 2;
    }
    @media (max-width: 415px) {
        .main{
            width: 100%;
        }
    }
</style>
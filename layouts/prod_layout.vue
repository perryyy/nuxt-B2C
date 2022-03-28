<template>
    <div class="home">
        <div class="header">
              <component :is="nowHeader" />
        </div>
        <div class="bottom">
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
    name: "prod_layout",
    data(){
        return{
            nowHeader:'pageheader'
        }
    },
    mounted(){
        let isMobile = localStorage.getItem('device');
        if(isMobile==='pc端'){
            this.nowHeader='pageheader';
        }
        else{
            this.nowHeader='mobileHeader';
        }
    }
}
</script>
<style scoped>
    .bottom{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .main{
        display: flex;
        width: inherit;
        justify-content: center;
        align-items: center;
    }
    .header{
        position: sticky;
        top:0;
        z-index: 2;
    }
    .home{
        width: 100%;
    }
</style>
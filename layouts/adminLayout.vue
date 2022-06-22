<template>
    <div class="home">
        <div class="nav">
            <adminNav />
        </div>
        <div class="bottom">
            <div class="header">
                <adminHeader />
            </div>
            <div class="main">
                <nuxt-child/>
            </div>
        </div>
    </div>
</template>
<script>
import adminHeader from '../components/layout/admin/pageheader.vue';
import adminNav from '../components/layout/admin/menunav.vue'
export default {
    components:{
        adminHeader,
        adminNav
    },
    name: "adminLayout"
}
</script>
<style scoped>
    .home{
        display: flex;
    }
    .bottom{
        display: flex;
        flex-direction: column;
        height: 100%;
        flex-grow: 1;
    }
    .nav{
        min-width: 14%;
        height: 100vh;
    }
    .main{
        background-color: 	#F0F0F0;
    }
    .header{
        height: 10%;
        border-bottom: 1px solid #DCDFE6;
    }
</style>
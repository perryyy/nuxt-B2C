<template>
    <div class="member">
        <div class="container">
            <el-button @click="logout">登出</el-button>
            <div class="member_main">
            <el-tabs type="border-card" :stretch='true'>
                <el-tab-pane label="個人資訊"><memberdata /></el-tab-pane>
                <el-tab-pane label="訂單">
                    <component :is="nowOrderData"/>
                </el-tab-pane>
            </el-tabs>
            </div>
        </div>
    </div>
</template>
<script>
import memberdata from '../components/member/member.vue';
import mobOrderData from '../components/order/mobile/mob_order.vue';
import orderdata from '../components/order/order.vue';
export default {
    layout:'prod_layout',
    data(){
        return{
            nowOrderData:'orderdata'
        }
    },
    components:{
        memberdata,
        orderdata,
        mobOrderData
    },
    methods:{
        logout(){
            let data = {email:'',username:'',password:'',auth:'none'};
            this.$store.dispatch('member/setdata',data);
            this.$router.push("/Login");
            // localStorage.removeItem('username');
            // localStorage.removeItem('password');
            // localStorage.removeItem('device');
        }
    },
    created(){
        let token = this.$store.state.member.token;
        if(token===''){
            this.$router.push('/Login');
        }
        let isMobile = this.$store.state.setting.isMobile;
        if(isMobile===false){
            this.nowOrderData='orderdata';
        }
        else{
            this.nowOrderData='mobOrderData';
        }
    }
}
</script>
<style scoped>
    .member{
        width: 90vw;
        margin-top: 2%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .member_main{
        margin-top: 2%;
    }
</style>
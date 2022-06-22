<template>
    <div class="member">
        <div class="container">
            <el-button @click="logout">登出</el-button>
            <el-button @click="back" v-if="nowMemberdata==='changePsw'">回上頁</el-button>
            <div class="member_main">
            <el-tabs type="border-card" :stretch='true'>
                <el-tab-pane label="個人資訊"><component :is="nowMemberdata" @changeCom="changeCom"/></el-tab-pane>
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
import changePsw from '../components/member/changePsw.vue';
import mobOrderData from '../components/order/mobile/mob_order.vue';
import orderdata from '../components/order/order.vue';

export default {
    layout:'prod_layout',
    data(){
        return{
            nowOrderData:'orderdata',
            nowMemberdata:'memberdata'
        }
    },
    components:{
        memberdata,
        orderdata,
        mobOrderData,
        changePsw
    },
    methods:{
        logout(){
            let data = {email:'',username:'',password:'',auth:'none'};
            this.$store.dispatch('member/setdata',data);
            this.$router.push("/Login");
        },
        changeCom(){
            this.nowMemberdata='changePsw';
        },
        back(){
            this.nowMemberdata='memberdata';
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
        let data ={mid:this.$store.state.member.mid}
        this.$store.dispatch('order/getTotal',this.$store.state.member.mid);
    }
}
</script>
<style scoped>
    .member{
        width: 90vw;
        margin-top: 1%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .member_main{
        margin-top: 1%;
        margin-bottom: 2%;
    }
    /deep/ .el-tabs__nav{
        z-index:0;
    }
</style>
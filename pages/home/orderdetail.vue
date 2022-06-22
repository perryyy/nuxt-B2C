<template>
    <div class="orderdetail">
        <div class="prod_details">
            <component :is="now_prod"/>
        </div>
        <div class="order_details">
            <component :is="now_order"/>    
        </div>
    </div>
</template>
<script>
import order_details from '../../components/order/order_details.vue';
import prod_details from '../../components/order/prod_details.vue';
import mob_order_details from '../../components/order/mobile/mob_order_details.vue';
import mob_prod_details from '../../components/order/mobile/mob_prod_details.vue';
export default {
    layout:'prod_layout',
    data(){
        return{
            now_prod:'prod_details',
            now_order:'order_details'
        }
    },
    components:{
        order_details,
        prod_details,
        mob_order_details,
        mob_prod_details
    },
    created(){
        let token = this.$store.state.member.token;
        if(token===''){
            this.$router.push('/Login');
        }
        let isMobile = this.$store.state.setting.isMobile;
        if(isMobile===false){
            this.now_prod='prod_details';
            this.now_order='order_details';
        }
        else{
            this.now_prod='mob_prod_details';
            this.now_order='mob_order_details';
        }
    },
}
</script>
<style scoped>
    .orderdetail{
        width: 100vw;
        max-width: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 2%;
    }
    .prod_details,.order_details{
        margin-top: 1%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
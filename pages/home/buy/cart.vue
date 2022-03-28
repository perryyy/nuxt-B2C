<template>
    <div class="buycart">
        <div class="carts">
            <!-- <ordercart /> -->
            <component :is="nowcart" />
        </div>
        <div class="details">
            <cartdetail />
        </div>
    </div>
</template>
<script>
import ordercart from '../../../components/cart/ordercart.vue';
import mob_orderCart from '../../../components/cart/mob/mob_orderCart.vue';
import cartdetail from '../../../components/cart/cartdetails.vue';
export default {
    components:{
        ordercart,
        cartdetail,
        mob_orderCart
    },
    data(){
        return{
            nowcart:'ordercart'
        }
    },
    created(){
        let token = this.$store.state.member.token;
        if(token===''){
            this.$router.push('/Login');
        }
        let isMobile = this.$store.state.setting.isMobile;
        if(isMobile===false){
            this.nowcart='ordercart';
        }
        else{
            this.nowcart='mob_orderCart';
        }
    }
}
</script>
<style scoped>
    .carts{
        width: 100%;
        margin-top: 3%;
    }
    .details{
        width: 100%;
        margin-top: 3%;
    }
</style>
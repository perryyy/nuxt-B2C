<template>
    <div class="other">
        <div class="title">推薦餐點</div>
        <div class="other_product">
            <card :products="products" />
        </div>
    </div>
</template>
<script>
import card from './card.vue';
export default {
    components:{
        card
    },
    created(){
        this.$store.dispatch('product/getrandom');
    },
    data(){
        return{
        }
    },
    computed:{
        products(){
            return this.$store.state.product.RandomProduct
        }
    }
}
</script>
<style scoped>
    .other{
        width: 100%;
    }
    .title{
        width: 100%;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
    }
    .other_product{
        margin-top: 3%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-left: 10%;
    }
    .card{
        width: 30%;
        margin-right: 2%;
    }
    @media (max-width: 415px) {
        .other_product{
           display: flex;
           flex-direction: column;
           width: 100%;
           align-items: center;
           margin: 3% 0 0 0;
        }
    }
</style>
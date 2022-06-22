<template>
    <div class="buy">
        <div class="steps">
                <el-steps :active="active" finish-status="success" align-center>
                <el-step title="購物車"></el-step>
                <el-step title="填寫資料"></el-step>
                <el-step title="完成訂單"></el-step>
                </el-steps>
            <el-button style="margin-top: 12px;" @click="next" v-if="visible">下一步</el-button>
        </div>
        <nuxt-child/> 
        <!-- <div class="carts">
            <ordercart />
        </div>
        <div class="details">
            <cartdetail />
        </div> -->
    </div>
</template>
<script>
// import ordercart from '../../components/cart/ordercart.vue'
// import cartdetail from '../../components/cart/cartdetails.vue'
export default{
    layout:'prod_layout',
    data() {
      return {
        visible:false
      };
    },
    created(){
        this.$router.push('/home/buy/cart')
    },
    methods: {
    },
    computed:{
        active(){
            return this.$store.state.setting.active;
        }
    }
}
</script>
<style scoped>
    .buy{
        padding: 40px;
        width: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
    }
    .steps{
        width: 100%;
        padding: 0 30%;
    }
    .carts{
        width: 100%;
        margin-top: 3%;
    }
    .details{
        width: 100%;
        margin-top: 3%;
    }
    @media (max-width: 415px) {
        .steps{
            padding: 0 10%;
        }
        .buy{
            padding: 20px;
        }
    }
</style>

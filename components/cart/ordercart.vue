<template>
    <div class="ordercart">
        <div class="card">
            <div class="title">購物車 ({{length}}件) <i class="el-icon-share"></i></div>
            <div class="list"><cardlist /></div>
            <div class="promotion">
                <div class="promotion_top">
                    <div class="promotion_left">上有更多精彩優惠等著你！目前未享用：</div>
                    <div class="promotion_right" @click="continueShopping">繼續選購</div>
                </div>
                <div class="promotion_bottom">
                    <div class="bottom_wrap">
                    <div ><p class="tag"> 優惠促銷</p></div>
                    <div class="msgarea"><p class="rolemsg">一般會員滿488免運</p><p class="green" v-if="totalAmt<488">再買NT＄{{balance}}即可免運</p></div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</template>
<script>
import {  mapGetters } from 'vuex';
import cardlist from './cartlist.vue'
export default {
    data(){
        return{
            length:1,
        }
    },
    methods:{
        continueShopping(){
            this.$router.push('/home/products')
        }
    },
    components:{
        cardlist
    },
    computed:{
        ...mapGetters({
            totalAmt: 'cart/totalAmt'
        }),
        balance(){
            return 488-this.totalAmt
        }
    }
}
</script>
<style scoped>
    .ordercart{
        width: 100%;
        /* padding: 0 40px; */
    }
    .card{
    }
    .title{
        width: 100%;
        background-color: #e4e2e2;
        font-size: 20px;
        text-align: left;
        line-height: 20px;
        padding: 16px;
        font-weight: 600;
    }
    .promotion{
        width: 100%;
        padding: 40px;
        display: flex;
        flex-direction: column;
        text-align: left;
        border-top: 1px solid #e4e2e2;
    }
    .promotion_top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-weight: 600;
    }
    .promotion_right{
        text-decoration:underline;
        cursor: pointer;
    }
    .promotion_bottom{
        width: 100%;
        font-weight: 600;
        margin-top: 1%;
    }
    .tag{
        background-color: #e4e2e2;
        font-size: 14px;
        line-height: 14px;
        padding: 4px 20px;
        width: 100px;
        /* width: 100%; */
    }
    .promotionmsg{
        margin-left: 10%;
        width: 100%;
    }
    .msgarea{
        display: flex;
        margin-left: 2%;
        width: 90%;
    }
    .green{
        color: lightgreen;
    }
    .bottom_wrap{
        width: 100%;
        display: flex;
    }
    .rolemsg{
        margin-right: 1%;
    }
</style>

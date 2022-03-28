<template>
    <div class="mob_ordercart">
        <div class="card">
            <div class="title">購物車 ({{length}}件) <i class="el-icon-share"></i></div>
            <div class="list"><item :data="cart"/></div>
            <div class="promotion">
                <div class="promotion_top">
                </div>
                <div class="promotion_bottom">
                    <div class="bottom_wrap">
                    <div ><p class="tag"> 優惠促銷</p></div>
                    <div class="msgarea"><p class="rolemsg">一般會員滿488免運</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import item from '../../order/mobile/orderItem.vue';
export default{
    data(){
        return{
            length:1,
        }
    },
    components:{
        item
    },
    computed:{
        cart(){
            return this.$store.state.cart.carts
        },
    }
}
</script>
<style scoped>
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
        padding: 10px;
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
        margin-top: 3%;
    }
    .tag{
        background-color: rgb(203, 240, 203);
        font-size: 10px;
        line-height: 14px;
        padding: 4px 10px;
        width: 100px;
        text-align: center;
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
        font-size: 10px;
        line-height: 14px;
        align-items: center;
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
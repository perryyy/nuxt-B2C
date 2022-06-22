<template>
    <div class="item">
        <div  v-for="(item,index) in prod_details" :key="index" class="border-bottom">
            <div class="item_header">
                <div class="item_img">
                     <img :src="'data:image/jpg;base64,'+item.img" width="60" height="60" />
                </div>
                <div class="item_main">
                    <div class="item_title">{{item.name}}</div>
                    <div class="item_price">NT＄{{item.price-item.sale}}</div>
                </div>
                <div class="item_cancel"  @click="removeitem(item)">
                    <i class="el-icon-close" ></i>
                </div>
            </div>
            <div class="item_body">
            </div>
            <div class="item_footer">
                <div class="item_qty">
                    <el-input-number size="mini" v-model="num" @change="handleChange" :min="1" :max="item.qty" label="描述文字"></el-input-number>
                </div>
                <div class="item_subtotal">NT＄{{item.price-item.sale *item.nowqty}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import {  mapGetters } from 'vuex';
export default {
    props:{
    },
    data(){
        return{
            fakeimg:'https://fakeimg.pl/60x60/',
            qty:1,
            num: 1
        }
    },
    computed:{
        ...mapGetters({
            prod_details: 'cart/AllCarts'
        }),
        subtotal(){
            let amt =0;
            for(let i =0; i<this.prod_details.length;i++){
                amt+=((this.prod_details[i].price-this.prod_details[i].sale)*this.prod_details[i].nowqty)
            }
            return amt
        },
        nowImg(){
            return 'https://fakeimg.pl/60x60/'
        }
    },
    methods:{
        removeitem(item){
            this.$store.dispatch('cart/removeCart',item.cid);
        },
        handleChange(){
        }
    }
}
</script>
<style scoped>
    .item{
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
    .item_title{
        padding-left: 4%;
        font-size: 16px;
        line-height: 16px;
        text-align: left;
        font-weight: 600;
        height: 80%;
    }
    .item_header{
        width: 100%;
        display: flex;
        align-items: start;
    }
    .item_body{
        width: 100%;
        padding: 0 10px;
        font-size: 12px;
        line-height: 12px;
        /* margin-top: 2%; */
    }
    .item_price{
        padding-left: 4%;
        text-align: left;
        font-size: 14px;
        line-height: 16px;
        margin-top: 5%;
    }
    .item_footer{
        width: 100%;
        padding: 0 10px 0 0;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        line-height: 12px;
        margin-top: 2%;
    }
    .border-bottom{
        padding-bottom: 10px;
        margin-top: 5%;
    }
    .item_qty,.item_subtotal{
        font-size: 14px;
        line-height: 14px;
    }
    .item_img{
        width: 20%;
    }
    .item_main{
        width: 72%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
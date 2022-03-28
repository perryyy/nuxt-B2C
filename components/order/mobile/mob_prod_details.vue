<template>
    <div class="mob_prod_details">
        <div class="card">
            <div class="title">合計：NT＄{{total}}</div>
            <div class="item"><item :data="orderlist"/></div>
            <div class="total">
                <div class="subtotal between"><p>小計：</p><p>NT＄{{subtotal}}</p></div>
                <div class="sale between"><p>折抵購物金：</p><p>-NT＄{{sale}} 購物金</p></div>
                <div class="freight between"><p>運費：</p><p></p>NT＄{{freight}}</div>
                <div class="sum between"><p>合計({{orderlist.length}}件)：</p><p>NT＄{{total}}</p> </div>
            </div>
            <div class="shopping">
                <el-button type="info" style="width:'100%'" @click.native="addcart"><i class="el-icon-shopping-cart-2" ></i> 再次加入購物車</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import item from './item.vue'
export default {
    data(){
        return{
            freight:60,
            sale:100
        }
    },
    components:{
        item
    },
    methods:{
        addcart(){
            let data=[];
            let orderlist =this.$store.state.order.orderList;
            for(let i =0; i<orderlist.length;i++){
                let cartName =orderlist[i].prodname;
                let cartprice =orderlist[i].price;
                let cartsale =0;
                let datatmp={itemname:cartName,itemprice:cartprice,itemsale:cartsale,itemqty:1,img:'https://fakeimg.pl/60x60/'};
                data.push(datatmp);
            }
            this.$store.dispatch('cart/addCarts',data);
        }
    },
    computed:{
        orderlist(){
            return this.$store.state.order.orderList
        },
        subtotal(){
            let t =0;
            var data =this.$store.state.order.orderList;
            for(let i =0;i<data.length;i++){
                t+=data[i].price
            }
            return t
        },
        total(){
            return this.subtotal+this.freight-this.sale
        }
    }
}
</script>
<style scoped>
    .mob_prod_details{
        margin-top: 5px;
        width: 100%;
        padding: 10px;
    }
    .title{
        padding: 10px;
        font-weight: 600;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }
    .shopping{
        width: 100%;
        padding: 10px;
    }
    /deep/.el-button{
        width: 100%;
        padding: 8px 20px;
        font-weight: 700;
    }
    .total{
        width: 100%;
        padding: 20px;
        font-size: 12px;
        line-height: 12px;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }
    .sum{
        font-weight: 600;
    }
    .between{
        display: flex;
        justify-content: space-between;
    }
</style>
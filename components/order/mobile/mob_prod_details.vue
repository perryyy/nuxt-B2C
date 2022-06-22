<template>
    <div class="mob_prod_details">
        <div class="card">
            <div class="title">合計：NT＄{{total}}</div>
            <div class="item"><item /></div>
            <div class="total">
                <div class="subtotal between"><p>小計：</p><p>NT＄{{subtotal}}</p></div>
                <div class="sale between"><p>折抵購物金：</p><p>-NT＄{{sale}} 購物金</p></div>
                <div class="freight between"><p>運費：</p><p></p>NT＄{{freight}}</div>
                <div class="sum between"><p>合計({{prod_details.length}}件)：</p><p>NT＄{{total}}</p> </div>
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
        }
    },
    components:{
        item
    },
    methods:{
        addcart(){
            let data=[];
            for(let i =0; i<this.prod_details.length;i++){
                let pid = this.prod_details[i].pid;
                let mid = this.mid;
                let qty = this.prod_details[i].prod_qty;
                let datatmp={pid:pid,mid:mid,qty:qty};
                data.push(datatmp);
            }
            let MID = {MID:this.mid} ;
            const result =Object.assign(data,MID);
            this.$store.dispatch('cart/addCarts',data);
            this.$message({
                message: '新增成功',
                type: 'success'
            });
        }
    },
    computed:{
        orderlist(){
            return this.$store.state.order.orderList
        },
        subtotal(){
            const sum = this.prod_details.reduce((a, b) => {
                return a + (b.prod_price-b.prod_sale )* b.prod_qty;
                }, 0)
            return sum;
        },
        total(){
             return this.$store.state.order.order_m[0].total
        },
        prod_details(){
            return this.$store.state.orderdetails.orderdetails
        },
        sale(){
            return this.$store.state.order.order_m[0].discount
        },
        freight(){
            return this.$store.state.order.order_m[0].freight
        },
        mid(){
            return this.$store.state.member.mid
        },
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
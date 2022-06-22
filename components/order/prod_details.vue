<template>
    <div class="prod_details">
        <div class="back_btn">
            <el-button @click="back">回上頁</el-button>
            <el-button type="danger" plain v-if="orderstatus==='N'" @click="canccelbuy">取消訂單</el-button>
        </div>
        <div class="card">
            <div class="card_top">
               <div class="total">合計:NT ＄ {{total}}</div> 
               <div class="cart">購物車（{{prod_details.length}}件）</div> 
            </div>
            <div class="card_main">
                <div class="table_area">
                    <el-table
                    :data="prod_details"
                    style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="商品資料"
                        width="80">
                        <template slot-scope="scope">
                           <img :src="'data:image/jpg;base64,'+scope.row.img" min-width="60" height="60" />
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="prod_name"
                        label=""
                        width="260"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="prod_sale"
                        label="優惠"
                        width="180"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="prod_price"
                        label="單件價格">
                    </el-table-column>
                    <el-table-column
                        prop="prod_qty"
                        label="數量">
                    </el-table-column>
                    <el-table-column
                        label="小計"
                        align="center">    
                        <template slot-scope="scope">
                            <p>{{(scope.row.prod_price-scope.row.prod_sale)*scope.row.prod_qty}}</p>
                        </template>
                    </el-table-column>
                    </el-table>
                </div>
                <div class="total_area">
                    <div class="subtotal"><p>小計：</p>NT＄{{subtotal}}</div>
                    <div class="sale"><p>折抵購物金</p>-NT＄{{sale}} 購物金</div>
                    <div class="freight"><p>運費：</p>NT＄{{freight}}</div>
                    <div class="order_total"><p>合計：</p>NT＄{{total}}</div>
                </div>
            </div>
            <div class="card_bottom">
                <el-button type="info" class="cart_btn" @click="addcart"><i class="el-icon-shopping-cart-2"></i> 再次加到購物車</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        back(){
            this.$router.push('/member');
        },
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
        },
        canccelbuy(){
            this.$store.dispatch('order/cancelPurchase',this.oid);
            this.$router.push('/member');
        }
    },
    computed:{
        prod_details(){
            return this.$store.state.orderdetails.orderdetails
        },
        img(){
            return "https://fakeimg.pl/60x60/"
        },
        total(){
            return this.$store.state.order.order_m[0].total
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
        subtotal(){
            const sum = this.prod_details.reduce((a, b) => {
                return a + (b.prod_price-b.prod_sale )* b.prod_qty;
                }, 0)
            return sum;
        },
        orderstatus(){
            return this.$store.state.order.order_m[0].order_status;
        },
        oid(){
            return this.$store.state.order.order_m[0].oid
        }
    }
}
</script>
<style scoped>
    .prod_details{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .back_btn{
        width: 100%;
        display: flex;
        justify-content: start;
        padding-left: 8%;
        margin-bottom: 1%;
    }
    .card{
        width: 1000px;
        padding: 20px;
    }
    .total,.cart{
        font-size: 16px;
        margin: 5px;
        font-weight: 600;
    }
    .card_top{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 2%;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }
    .card_bottom{
        border-top: 1px solid rgba(0,0,0,.125);
        display: flex;
        justify-content: end;
        padding: 2% 6% 0 0;
    }
    .cart_btn{
        font-weight: 600;
    }
    .total_area{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: flex-end;
        margin-top: 2%;
        padding: 0 6%;
    }
    .subtotal,.sale,.freight,.order_total{
        width: 40%;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
    .order_total{
        font-weight: 700;
    }
    /deep/.el-table th.el-table__cell>.cell{
        color: black;
    }
</style>
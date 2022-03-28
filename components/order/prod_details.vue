<template>
    <div class="prod_details">
        <div class="back_btn">
            <el-button @click="back">回上頁</el-button>
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
                           <img :src="scope.row.img" min-width="60" height="60" />
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label=""
                        width="260"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="sale"
                        label="優惠"
                        width="180"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        label="單件價格">
                    </el-table-column>
                    <el-table-column
                        prop="qty"
                        label="數量">
                    </el-table-column>
                    <el-table-column
                        label="小計"
                        align="center">    
                        <template slot-scope="scope">
                            <p>{{(scope.row.price-scope.row.sale)*scope.row.qty}}</p>
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
            total:0,
            sale:0,
            freight:0,
            subtotal:0,
            prod_details:[
                {name:'里肌總匯',sale:0,price:45,qty:1,img:'https://fakeimg.pl/60x60/'},
                {name:'厚切牛肉堡',sale:20,price:70,qty:1,img:'https://fakeimg.pl/60x60/'},
            ]
        }
    },
    created(){
        const sum = this.prod_details.reduce((a, b) => {
            return a + (b.price-b.sale )* b.qty;
        }, 0)
        this.subtotal=sum;
        this.total=sum-this.sale-this.freight;

    },
    methods:{
        back(){
            this.$router.push('/member');
        },
        addcart(){
            let data=[];
            for(let i =0; i<this.prod_details.length;i++){
                let cartName =this.prod_details[i].name;
                let cartprice =this.prod_details[i].price;
                let cartsale =this.prod_details[i].sale;
                let datatmp={itemname:cartName,itemprice:cartprice,itemsale:cartsale,itemqty:1,img:'https://fakeimg.pl/60x60/'};
                data.push(datatmp);
            }
            // let data=[{itemname:cartName,itemprice:cartNowprice}];
            console.log(data);
            this.$store.dispatch('cart/addCarts',data);
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
<template>
    <div class="inputdata">
        <div class="inputdata_top">
            <div class="border">
                <div class="title">合計：NT＄{{finallyAmt}}</div>
                <div class="cart_length">購物車（{{cartslength}}件）</div>

            </div>
        </div>
        <div class="inputdata_main">
          <inputdata_main />
        </div>
        <div class="inputdata_bottom border">
            <div class="backcart">
                <span @click="backcart">
                    <i class="el-icon-arrow-left"></i>返回購物車
                </span>
            </div>
            <div class="commitbtn" @click="gocheckout">
                  <el-button type="success" style="width:'100%'">提交訂單</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import {  mapGetters } from 'vuex';
import inputdata_main from '../../../components/order/inputdata_main.vue'
export default{
    methods:{
        backcart(){
            this.$store.dispatch('setting/reduceactive');
            this.$router.push('/home/buy/cart')
        },
        gocheckout(){
            // this.$store.dispatch('setting/addactive');
            // this.$store.dispatch('cart/clearCart');

            // data {購物車,總額,訂單_運費,訂單明細}
            // let newCart =[];
            // let order =[];
            // let customer=[];
            // let deliver=[];
            // let pay=[];
            // newCart.push({pid:this.cart[0].pid,did:this.cart[0].did,nowqty:this.cart[0].nowqty});
            // order.push({total:this.subtotal,freight:this.freight,order_notes:this.order_notes});
            // pay.push({pay_method:this.pay_method});
            // customer.push({customer_name:this.customer_name,customer_phone:this.customer_phone});
            // deliver.push({deliver_name:this.deliver_name,deliver_methods:this.deliver_methods,deliver_address:this.deliver_address,deliver_phone:this.deliver_phone,deliver_phone:this.deliver_phone});
            // let data ={carts:newCart,order:order,pay:pay,customer:customer,deliver:deliver,pay:pay}

            // let order=[];
            // order.push({pid:this.cart[0].pid,mid:this.mid,total:this.subtotal});
            let order=[];
            order.push({
                mid:this.mid,
                total:this.subtotal,
                customer_name:this.customer_name,
                customer_phone:this.customer_phone,
                deliver_name:this.deliver_name,
                deliver_methods:this.deliver_methods,
                deliver_address:this.deliver_address,
                deliver_phone:this.deliver_phone,
                pay_method:this.pay_method,
                order_remark:this.order_notes,
                discount:0,
                freight:this.freight,
                additional_fee:0
            })
            let orderdetails=[];
            let cartID =[];
            for(let i = 0; i<this.cart.length;i++){
                orderdetails.push({
                    pid:this.cart[i].pid,
                    Prod_name:this.cart[i].name,
                    Prod_qty:this.cart[i].nowqty,
                    Prod_price:this.cart[i].price,
                    Prod_sale:this.cart[i].sale,
                    Prod_DID:this.cart[i].did,
                })
                cartID.push({cid:this.cart[i].cid})
            }
            let data ={order:order,orderdetails:orderdetails,cartID:cartID}
            console.log(data);
            this.$store.dispatch('cart/buy',data);
            this.$message({
                message: '交易成功，祝您購物愉快',
                type: 'success'
            });
            this.$router.push('/member');
            // this.$router.push('/home/products')
        }
    },
    components:{
        inputdata_main
    },
    computed:{
        finallyAmt(){
            return this.$store.state.cart.finallytotal;
        },
        ...mapGetters({
            cartslength: 'cart/cartslength',
            subtotal: 'cart/totalAmt',
            cart: 'cart/AllCarts',
            freight: 'cart/freight',
        }),
        pay_method(){
            return this.$store.state.order.pay_method;
        },
        customer_name(){
            return this.$store.state.member.username;
        },
        customer_phone(){
            return this.$store.state.member.phonenumber;
        },
        deliver_name(){
            return this.$store.state.order.username;
        },
        deliver_methods(){
            return this.$store.state.order.delivermethods;
        },
        deliver_address(){
            return this.$store.state.order.location;
        },
        deliver_phone(){
            return this.$store.state.order.phone;
        },
        order_notes(){
            return this.$store.state.order.notes;
        },
        mid(){
            return this.$store.state.member.mid;
        }
    },
    created(){
        let token = this.$store.state.member.token;
        if(token===''){
            this.$router.push('/Login');
        }
    }
}
</script>
<style scoped>
    .inputdata{
        width: 100%;
        margin-top: 3%;
        padding: 0 10%; 
    }
    .inputdata_top{
        font-weight: 600;
        /* padding: 0 10%; */
    }
    .border{
        padding: 20px 0;
    }
    .inputdata_bottom{
        padding: 20px;
        width: 100%;
        display: flex;
        align-items: center;
    }
    .backcart{
        width: 50%;
        text-align: left;
        color: #337ab7;
        cursor: pointer;
        font-weight: 600;
    }
    .commitbtn{
        text-align: right;
        width: 50%;
    }
    /deep/.el-button{
        width: 80%;
    }
    @media screen and (max-width: 415px){
        .inputdata{
            padding: 0;
        }
    }
</style>
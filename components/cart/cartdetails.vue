<template>
    <div class="cartdetail">
        <div class="paymethods">
            <div class="card">
                <div class="title">
                    選擇送貨或付款方式
                </div>
                <div class="content">
                    <div class="delivermethods">
                        <span class="content_title">送餐方式：</span>
                        <select class="form-control"  v-model="delivermethods" @change="changeLocation">
                            <option v-for="(item,index) in Delivery " :key="item.PID" >{{item.name}}</option>
                        </select>
                    </div>
                    <div class="location">
                        <span class="content_title">送餐地點：</span>
                        <select class="form-control"v-model="location">
                            <option value="店家">店家</option>
                            <option value="目前所在地" v-if="delivermethods=='商家外送'">目前所在地</option>
                        </select>
                    </div>
                    <div class="paymethod">
                        <span class="content_title">付款方式：</span>
                        <select class="form-control"  v-model="paymethod">
                              <option value="行動支付">行動支付</option>
                              <option value="現金" v-if="delivermethods=='買家自取'">現金</option>
                        </select> 
                    </div>
                </div>
            </div>
        </div>
        <div class="orderdetails">
            <div class="card">
                <div class="title">訂單資訊</div>
                <div class="content">
                    <div class="subtotal between"><span>小計：</span><p>{{subtotal}}</p></div>
                    <div class="freight between"><span>運費：</span><p>{{freight}}</p></div>
                    <div class="fee between"><span>附加費：</span><p>{{fee}}</p></div>
                    <el-divider></el-divider>
                    <div class="total">
                        <div class="amt between">
                            <span>合計：</span><p>NT${{total}}</p>
                        </div>
                        <div class="checkout">
                            <el-button type="success" style="width:'100%'" v-if="cartlen" @click="gocheckout()">前往結帳</el-button>
                            <el-button type="success" style="width:'100%'" v-else @click="continueShopping()">繼續選購</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {  mapGetters } from 'vuex';
export default{
    data(){
        return{
            location:'店家',
            delivermethods:'買家自取',
            paymethod:'現金',
            fee:0,
            recommendisShow:false,
            discountisShow:false,
            inputDiscount:'',
            inputRecommend:''
        }
    },
    methods:{
        continueShopping(){
            this.$router.push('/home/products')
        },
        gocheckout(){
            this.$store.dispatch('setting/addactive');
            this.$store.dispatch('cart/setfinallytotal',this.total);
            this.$store.commit('order/setPaymethod',this.paymethod);
            this.$store.commit('order/setLocation',this.location);
            this.$store.commit('order/setDelivermethods',this.delivermethods);
            this.$router.push('/home/buy/inputdata');
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        changeLocation(){
            if(this.delivermethods=='買家自取'){
                this.location="店家";
            }
            else if(this.delivermethods=='商家外送'){
                this.location="目前所在地";
                this.paymethod="行動支付";
            }
        }
    },
    watch:{
    },
    computed:{
        ...mapGetters({
            subtotal: 'cart/totalAmt',
            cartlen: 'cart/cartslength'
        }),
        freight(){
            if(this.delivermethods=='商家外送'){
                if (this.subtotal >= 488){
                    return 0
                }
                else{
                    return 60
                }
            }
            else{
                return 0
            }
        },
        Delivery(){
            return this.$store.state.param.Delivery
        },
        total(){
            return this.subtotal+this.freight+this.fee
        },
    },
    created(){
        this.$store.dispatch('param/getDelivery',{category:'送餐方式'});
    }
}
</script>
<style scoped>
    .cartdetail{
        width: 100%;
        padding: 0 ;
        display: flex;
    }
    .paymethods{
        width: 60%;
        padding: 0 2% 0 0;
    }
    .orderdetails{
        width: 40%;
    }
    .card{
    }
    .title{
        border-bottom: 1px solid #e4e2e2;
        font-weight: 600;
        background-color: #e4e2e2;
        font-size: 20px;
        text-align: left;
        line-height: 20px;
        padding: 16px;
    }
    .content{
        padding:  40px;
        text-align: left;
        width: 100%;
    }
    .location{
        width: 100%;
    }
    /deep/.el-select{
        width: 80%;
    }
    .paymethod,.location{
        width: 100%;
        margin-top: 2%;
    }
    .msg{
        width: 100%;
        text-align: left;
        padding:0 40px 40px 40px;
    }
    .form-control{
        margin-top:2%;
    }
    .between{
        display: flex;
        justify-content: space-between;
        font-weight: 600;
    }
    /deep/.el-button{
        width: 100%;
    }
    .checkout{
        margin-top: 2%;
    }
    .sale{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .code{
        font-weight: 600;
        text-decoration:underline;
        color: cornflowerblue;
        cursor: pointer;
    }
    .recommend{
        margin-top: 3%;
    }
    .code_input{
        margin-top: 1%;
        display: flex;
    }
    .Apply{
        width: 50%;
        margin-left: 2%;
    }
    @media (max-width: 415px) {
        .paymethods{
            width: 100%;
            padding: 0;
        }
        .orderdetails{
            width: 100%;
            margin-top: 2%;
        }
        .cartdetail{
            display: flex;
            flex-direction: column;
            padding: 0;
            align-items: center;
        }
    }
</style>
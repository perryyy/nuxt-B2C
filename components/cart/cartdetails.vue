<template>
    <div class="cartdetail">
        <div class="paymethods">
            <div class="card">
                <div class="title">
                    選擇送貨或付款方式
                </div>
                <div class="content">
                    <div class="location">
                        <span class="content_title">送餐地點：</span>
                        <select class="form-control"v-model="location">
                            <option value="台灣">台灣</option>
                        </select>
                    </div>
                    <div class="delivermethods">
                        <span class="content_title">送餐方式：</span>
                        <select class="form-control"  v-model="delivermethods">
                              <option value="買家自取">買家自取</option>
                              <option value="商家外送">商家外送</option>

                        </select>
                    </div>
                    <div class="paymethod">
                        <span class="content_title">付款方式：</span>
                        <select class="form-control"  v-model="paymethod">
                              <option value="信用卡">信用卡</option>
                              <option value="現金">現金</option>
                        </select>
                    </div>
                </div>
                <div class="msg">
                    <div class="content_title">請注意：</div>
                    <div class="msg1">{{msg1}}</div>
                    <div class="msg2">{{msg2}}</div>
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
                    <div class="sale">
                        <div class="discount">
                            <span class="code" @click="discountisShow=true">優惠代碼</span>
                            <div class="code_input" v-if="discountisShow">
                                <el-input v-model="inputDiscount" placeholder="请输入内容"></el-input>  <el-button type="info" plain class="Apply">套用</el-button>
                            </div>
                        </div>
                        <div class="recommend">
                            <span class="code" @click="recommendisShow=true">推薦代碼</span>
                            <div class="code_input" v-if="recommendisShow">
                                <el-input v-model="inputRecommend" placeholder="请输入内容"></el-input>  <el-button type="info" plain class="Apply">套用</el-button>
                            </div>
                        </div>
                    </div>
                    <el-divider></el-divider>
                    <div class="total">
                        <div class="amt between">
                            <span>合計：</span><p>NT${{total}}</p>
                        </div>
                        <div class="checkout">
                            <el-button type="success" style="width:'100%'" @click="gocheckout()">前往結帳</el-button>
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
            location:'台灣',
            delivermethods:'買家自取',
            paymethod:'信用卡',
            msg1:'1.未完成刷卡請勿切換視窗或者瀏覽器，避免結帳失敗。',
            msg2:'',
            // freight:60,
            fee:0,
            recommendisShow:false,
            discountisShow:false,
            inputDiscount:'',
            inputRecommend:''
        }
    },
    methods:{
        test(){
            let data ={location:this.location,delivermethods:this.delivermethods,paymethod:this.paymethod};
            console.log(data);
        },
        gocheckout(){
            this.$store.dispatch('setting/addactive');
            this.$store.dispatch('cart/setfinallytotal',this.total);
            this.$router.push('/home/buy/inputdata');
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

    },
    watch:{
        delivermethods(newv,oldv){
            if (newv==="全家便利取貨付款"){
                this.msg1="1. 購買一雙鞋以上會超過全家運送規定體積，請選宅配，否則視情況拆鞋盒後寄出";
                this.msg2="2. 收件者名稱必須要是本人全名同身分證，否則無法取貨"
            }
            else{
                this.msg1='1.未完成刷卡請勿切換視窗或者瀏覽器，避免結帳失敗。',
                this.msg2='2.若購買後商品退換貨，將由系統做信用卡退刷'
            }
        }
    },
    computed:{
        ...mapGetters({
            subtotal: 'cart/totalAmt'
        }),
        total(){
            return this.subtotal+this.freight+this.fee
        },
        freight(){
            if (this.subtotal >= 488){
                return 0
            }
            else{
                return 60
            }
        }
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
    .delivermethods,.paymethod{
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
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
            this.$store.dispatch('setting/addactive');
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
            cartslength: 'cart/cartslength'
        })
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
        width: 50%;
    }
    /deep/.el-button{
        width: 80%;
    }
</style>
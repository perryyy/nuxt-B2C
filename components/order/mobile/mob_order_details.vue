<template>
    <div class="mob_order_details">
        <div class="card">
            <div class="order">
                <div class="title">訂單資訊</div>
                <div class="orderNo d-flex"><p>訂單號碼：</p>{{order_oid}}</div>
                <div class="orderDate d-flex"><p>訂單日期：</p>{{order_date}}</div>
                <div class="orderStatus d-flex"><p>訂單狀態：</p>{{order_status}}</div>
            </div>
            <div class="buyer">
                <div class="title">顧客資訊</div>
                <div class="buyerName d-flex"><p>名稱：</p>{{customer_name}}</div>
                <div class="BuyerPhone d-flex"><p>電話號碼：</p>{{customer_phone}}</div>
            </div>
            <div class="deliver">
                <div class="title">送貨資訊</div>
                <div class="deliverName d-flex"><p>收件人名稱：</p>{{deliver_name}}</div>
                <div class="deliverPhone d-flex"><p>收件人電話號碼：</p>{{deliver_phone}}</div>
                <div class="deliverMethod d-flex"><p>送貨方式：</p>{{deliver_methods}}</div>
                <div class="deliverStatus d-flex"><p>送貨狀態：</p>{{deliver_status}}</div>
            </div>
            <div class="pay">
                <div class="title">付款資訊</div>
                <div class="payMethod d-flex"><p>付款方式：</p>{{pay_methods}}</div>
                <div class="payStatus d-flex"><p>付款狀態：</p>{{pay_status}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from "moment"
export default {
    data(){
        return{
        }
    },
    computed:{
        customer_name(){
            return this.$store.state.order.order_m[0].customer_name
        },
        customer_phone(){
            return this.$store.state.order.order_m[0].customer_phone
        },
        deliver_name(){
            return this.$store.state.order.order_m[0].deliver_name
        },
        deliver_phone(){
            return this.$store.state.order.order_m[0].deliver_phone
        },
        deliver_address(){
            return this.$store.state.order.order_m[0].deliver_address
        },
        deliver_methods(){
            return this.$store.state.order.order_m[0].deliver_methods
        },
        deliver_status(){
            if(this.$store.state.order.order_m[0].deliver_status == "N")
            {
                return "未完成"
            }
            else{
                return "已完成"
            }
        },
        order_oid(){
            return this.$store.state.order.order_m[0].oid
        },
        order_date(){
            
            return moment(this.$store.state.order.order_m[0].order_date).format('YYYY-MM-DD')
        },
        order_status(){
            if(this.$store.state.order.order_m[0].order_status == "N")
            {
                return "未完成"
            }
            else{
                return "已完成"
            }
        },
        pay_methods(){
            return this.$store.state.order.order_m[0].pay_method
        },
        pay_status(){
            if(this.$store.state.order.order_m[0].pay_status == "N")
            {
                return "未完成"
            }
            else{
                return "已完成"
            }
        },
    }
}
</script>
<style scoped>
    .mob_order_details{
        margin-top: 5px;
        width: 100%;
        padding: 10px;
    }
    .order,.buyer,.deliver,.pay{
        padding: 10px;
        border-bottom: 1px solid rgba(0,0,0,.125);
        font-size: 14px;
        line-height: 18px;
    }
    .title{
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 10px;
    }
    .d-flex p{
        width: 40%;
    }
</style>
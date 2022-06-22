<template>
    <div class="order_Details">
        <div class="">
            <div class="detail">
            <div class="orderdata">
                <div class="title">訂單資訊</div>
                <div class="orderid content_flex"><p class="content_title">訂單號碼：</p><p>{{order_oid}}</p></div>
                <div class="orderdate content_flex"><p class="content_title">訂單日期：</p><p>{{order_date}}</p> </div>
                <div class="orderstatus content_flex"><p class="content_title">訂單狀態：</p><p>{{order_status}}</p></div>
            </div>
            <div class="buyerdata">
                <div class="title">顧客資訊</div>
                <div class="buyername content_flex"><p class="content_title">名稱：</p><p>{{customer_name}}</p></div>
                <div class="buyerphone content_flex"><p class="content_title">電話號碼：</p><p>{{customer_phone}}</p></div>
            </div>
            <div class="deliverdata">
                <div class="title">送貨資訊</div>
                <div class="delivername content_flex"><p class="content_title">收件人姓名：</p><p>{{deliver_name}}</p></div>
                <div class="deliverphone content_flex"><p class="content_title">收件人電話號碼：</p><p>{{deliver_phone}}</p></div>
                <div class="delivermethod content_flex"><p class="content_title">送貨方式：</p><p>{{deliver_methods}}</p></div>
                <div class="deliverstatus content_flex"><p class="content_title">送貨狀態：</p><p>{{deliver_status}}</p></div>
            </div>
            <div class="paydata">
                <div class="title">付款資訊</div>
                <div class="paymethod content_flex"><p class="content_title">付款方式：</p><p>{{pay_methods}}</p></div>
                <div class="paystatus content_flex"><p class="content_title">付款狀態：</p><p>{{pay_status}}</p></div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
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
    .order_Details{
        width: 100%;
        padding: 0 8%;
        margin-left: 2%;
    }
    .orderdata,.buyerdata,.deliverdata,.paydata{
        min-width: 50%;
        font-size: 12px;
        margin-top: 20px;
        padding-left: 2%;
    }
    .detail{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .title{
        font-size: 16px;
        font-weight: 800;
        margin-bottom: 4%;
    }
    .content_flex{
        display: flex;
        line-height: 12px;
        font-weight: 600;
    }
    .content_title{
        width: 40%;
    }
</style>
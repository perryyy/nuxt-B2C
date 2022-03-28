<template>
    <div class="order_details">
        <div class="card">
            <div class="detail">
            <div class="orderdata">
                <div class="title">訂單資訊</div>
                <div class="orderid content_flex"><p class="content_title">訂單號碼：</p><p>{{orderdata[0].id}}</p></div>
                <div class="orderdate content_flex"><p class="content_title">訂單日期：</p><p>{{orderdata[0].date}}</p> </div>
                <div class="orderstatus content_flex"><p class="content_title">訂單狀態：</p><p>{{orderdata[0].status}}</p></div>
            </div>
            <div class="buyerdata">
                <div class="title">顧客資訊</div>
                <div class="buyername content_flex"><p class="content_title">名稱：</p><p>{{buyerdata[0].name}}</p></div>
                <div class="buyerphone content_flex"><p class="content_title">電話號碼：</p><p>{{buyerdata[0].phone}}</p></div>
            </div>
            <div class="deliverdata">
                <div class="title">送貨資訊</div>
                <div class="delivername content_flex"><p class="content_title">收件人姓名：</p><p>{{deliverdata[0].name}}</p></div>
                <div class="deliverphone content_flex"><p class="content_title">收件人電話號碼：</p><p>{{deliverdata[0].phone}}</p></div>
                <div class="delivermethod content_flex"><p class="content_title">送貨方式：</p><p>{{deliverdata[0].method}}</p></div>
                <div class="deliverstatus content_flex"><p class="content_title">送貨狀態：</p><p>{{deliverdata[0].status}}</p></div>
            </div>
            <div class="paydata">
                <div class="title">付款資訊</div>
                <div class="paymethod content_flex"><p class="content_title">付款方式：</p><p>{{paydata[0].method}}</p></div>
                <div class="paystatus content_flex"><p class="content_title">付款狀態：</p><p>{{paydata[0].status}}</p></div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            orderdata:[{id:13564,date:'2022-03-12',status:'已完成'}],
            buyerdata:[{name:'Perry',phone:'0945789456'}],
            deliverdata:[{name:'Perry',phone:'0945789456',method:'實體商店取貨',status:'已取貨'}],
            paydata:[{method:'實體商店付款',status:'已付款'}],
        }
    }
}
</script>
<style scoped>
    .order_details{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card{
        width: 1000px;
        padding:0 20px;
        display: flex;
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
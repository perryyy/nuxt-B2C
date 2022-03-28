<template>
    <div class="mob_order_details">
        <div class="card">
            <div class="order">
                <div class="title">訂單資訊</div>
                <div class="orderNo d-flex"><p>訂單號碼：</p>{{order.No}}</div>
                <div class="orderDate d-flex"><p>訂單日期：</p>{{order.Date}}</div>
                <div class="orderStatus d-flex"><p>訂單狀態：</p>{{order.Status}}</div>
            </div>
            <div class="buyer">
                <div class="title">顧客資訊</div>
                <div class="buyerName d-flex"><p>名稱：</p>{{buyer.Name}}</div>
                <div class="BuyerPhone d-flex"><p>電話號碼：</p>{{buyer.Phone}}</div>
            </div>
            <div class="deliver">
                <div class="title">送貨資訊</div>
                <div class="deliverName d-flex"><p>收件人名稱：</p>{{deliver.Name}}</div>
                <div class="deliverPhone d-flex"><p>收件人電話號碼：</p>{{deliver.Phone}}</div>
                <div class="deliverMethod d-flex"><p>送貨方式：</p>{{deliver.Method}}</div>
                <div class="deliverStatus d-flex"><p>送貨狀態：</p>{{deliver.Status}}</div>
            </div>
            <div class="pay">
                <div class="title">付款資訊</div>
                <div class="payMethod d-flex"><p>付款方式：</p>{{pay.Method}}</div>
                <div class="payStatus d-flex"><p>付款狀態：</p>{{pay.Status}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            order:{No:'123456789',Date:'2022-03-21',Status:'已完成'},
            buyer:{Name:'何先生',Phone:'0397844523'},
            deliver:{Name:'何先生',Phone:'0397844523',Method:'實體商店取貨',Status:'已完成'},
            pay:{Method:'實體商店付款',Status:'已完成'},
        }
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
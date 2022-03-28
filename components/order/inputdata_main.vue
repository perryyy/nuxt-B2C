<template>
    <div class="inputdata_main">
            <div class="inputdata_main_left">
                <div class="memberdata"><memberdata/></div>
                <div class="orderdata"><orderdata/></div>
            </div>
            <div class="inputdata_main_right">
                <div class="deliverdata"><deliverdata/></div>
                <div class="paydata"><paydata/></div>
                <div class="invoicedata"><invoicedata/></div>
            </div>
        </div>
</template>
<script>
import memberdata from '../cart/component/memberdata.vue';
import orderdata from '../cart/component/orderdata.vue';
import deliverdata from '../cart/component/deliverdata.vue';
import paydata from '../cart/component/paydata.vue';
import invoicedata from '../cart/component/invoicedata.vue';

export default{
    components:{
        memberdata,
        orderdata,
        deliverdata,
        paydata,
        invoicedata
    }
}
</script>
<style scoped>
    .inputdata_main{
        width: 100%;
        padding: 20px 0;
        display: flex;
    }
    .inputdata_main_left,.inputdata_main_right{
        width: 50%;
    }
    .orderdata,.paydata,.invoicedata{
        margin-top: 2%;
    }
    @media (max-width: 415px) {
        .inputdata_main{
            display: flex;
            flex-direction: column;
        }
        .inputdata_main_left,.inputdata_main_right{
            width: 100%;
        }
        .deliverdata{
            margin-top: 2%;
        }
    }
</style>
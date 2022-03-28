<template>
    <div class="item">
        <div  v-for="(item,index) in data" :key="index" class="border-bottom">
            <div class="item_header">
                <div class="item_img">
                    <img :src="fakeimg" alt="">
                </div>
                <div class="item_title">{{item.prodname}}</div>
            </div>
            <div class="item_body">
                <div class="item_price">NT＄{{item.price}}</div>
            </div>
            <div class="item_footer">
                <div class="item_qty">數量：{{qty}}</div>
                <div class="item_subtotal">NT＄{{item.price *qty}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data:Array
    },
    data(){
        return{
            fakeimg:'https://fakeimg.pl/40x40/',
            qty:1
        }
    },
    created(){
        console.log(this.data)
    }
}
</script>
<style scoped>
    .item{
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
    .item_title{
        padding-left: 2%;
        font-size: 12px;
        line-height: 12px;
    }
    .item_header{
        width: 100%;
        display: flex;
        align-items: start;
    }
    .item_body{
        width: 100%;
        padding: 0 10px;
        font-size: 12px;
        line-height: 12px;
        margin-top: 2%;
    }
    .item_price{
        text-align: right;
    }
    .item_footer{
        width: 100%;
        padding: 0 10px 0 0;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        line-height: 12px;
        margin-top: 2%;
    }
    .border-bottom{
        padding-bottom: 10px;
        margin-top: 5px;
    }
</style>
<template>
    <div class="item">
        <div  v-for="(item,index) in NowData" :key="index" class="border-bottom">
            <div class="img_title"> 
                <div class="item_header">
                    <div class="item_img">
                        <img :src="'data:image/jpg;base64,'+item.img" width="60" height="60" />
                    </div>
                </div>
                <div class="item_body">
                    <div class="item_title">{{item.prod_name}}</div>
                    <div class="item_price">NT＄{{item.prod_price}}</div>
                </div>
            </div>
            <div class="item_footer">
                <div class="item_qty">數量：{{item.prod_qty}}</div>
                <div class="item_subtotal">NT＄{{item.prod_price *item.prod_qty}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        // NowData:Object
    },
    data(){
        return{
            fakeimg:'https://fakeimg.pl/40x40/',
            qty:1
        }
    },
    created(){
        console.log(this.NowData)
    },
    computed:{
        NowData(){
             return this.$store.state.orderdetails.orderdetails
        },
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
        font-size: 16px;
        line-height: 18px;
        font-weight: 600;
        color:#8E8E8E ;
    }
    .item_header{
        width: 20%;
        display: flex;
        align-items: start;
    }
    .item_body{
        width: 100%;
        padding: 0 10px;
        margin-top: 1%;
        padding-left: 4%;
    }
    .item_price{
        text-align: left;
        font-size: 12px;
        line-height: 14px;
        margin-top: 2%;
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
        display: flex;
        flex-direction: column;
    }
    .img_title{
        display: flex;
    }
</style>
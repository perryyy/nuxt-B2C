<template>
    <div class="product">
        <div class="product_top">
            <div class="prod_img">
                <div class="top"> 
                    <img src="https://fakeimg.pl/400x400/">     
                </div>
                <div class="middle">
                    <el-carousel :interval="4000" type="card" height="200px">
                        <el-carousel-item v-for="item in 6" :key="item">
                            <h3 class="medium">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>

            <div class="prod_conent">
                <div class="item_name item">
                    <div>{{name}}</div>
                    <!-- <div class="star">
                    <vue-star  color="#F05654">
                        <i class="el-icon-star-on" slot="icon"></i>
                    </vue-star>
                    </div> -->
                </div>
                <div class="item_price item">
                    <div class="font " :class="{price:sale}">NT＄{{price}}</div>
                    <div class="font " v-if="sale">NT＄{{price - sale}}</div>
                </div>
                <div class="item_size item">
                    
                </div>
                <div class="item_qty item">
                    <el-input-number v-model="num" size="medium" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                </div>
                <div class="btn_cart item" v-if="auth==='user'">
                    <el-button type="info" @click="addCart">加到購物車</el-button>
                </div>
                <div class="item_desc item">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="餐點描述" name="1">
                            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="營養標示" name="2">
                            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
        <div class="product_bottom">
            <other />
        </div>


    </div>
</template>
<script>
import other from '../../components/productCom/otherProduct.vue';
export default {
    layout:'prod_layout',
    computed:{
        name(){
            return this.$store.state.product.name
        },
        price(){
            return this.$store.state.product.price
        },
        sale(){
            return this.$store.state.product.sale
        },
        auth(){
            return this.$store.state.member.auth
        }
    },
    data(){
        return{
            num:0,
            activeNames: ['1']
        }
    },
    methods:{
        handleChange(value) {
            console.log(value);
        },
        addCart(){
            let cartName =this.$store.state.product.name;
            let cartprice =this.$store.state.product.price;
            let cartsale =this.$store.state.product.sale;
            let cartNowprice =cartprice-cartsale;
            // let data = {itemname:cartName,itemprice:cartNowprice};
            let data = {itemname:cartName,itemprice:cartprice,itemsale:cartsale,itemqty:1,img:'https://fakeimg.pl/60x60/'};
            console.log(data);
            this.$store.dispatch('cart/addCart',data);
        }
    },
    components:{
        other
    }

}
</script>
<style scoped>
    .product{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .product_top{
        margin-top: 5%;
        margin-left: 10%;
        padding: 0 120px;
        max-width: 1200px;
        display: flex;
    }
    .prod_img{
        display: flex;
        flex-direction: column;
    }
    .prod_conent{
        padding-left: 5%;
        min-width: 50%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        width: 100vw;
    }
    .item{
        width: 100%;
    }
    .item_name{
        font-size: 24px;
        font-weight: 600;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .item_price{
        margin-top: 5%;
        color: rgb(168, 168, 168);
        font-weight: 700;
        display: flex;
    }
    .item_size{
        color: rgb(168, 168, 168);
        font-size: 16px;
        margin-top: 3%;
    }
    .item_qty{
        margin-top: 5%;
    }
    .btn_cart{
        margin-top: 5%;
    }
    /deep/.el-button--info{
        width: 100%;
    }
    .item_desc{
        margin-top: 3%;
    }
    .middle{
        margin-top: 3%;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .price{
        text-decoration:line-through;
    }
    .font{
        text-align: center;
        font-size: 16px;
        margin-right: 4%;
    }
    .product_bottom{
        margin-top: 5%;
    }
    .star{
        margin-top: -6%;
    }
    @media (max-width: 415px) {
        .product_top{
           display: flex;
           flex-direction: column;
           min-width: 100%;
           align-items: center;
           margin: 3% 0 0 0;
           padding: 0;
        }
        .prod_conent{
           margin: 0;
           padding: 0 10px;
        }
        .star{
            padding-left: -6%;
        }
    }
</style>
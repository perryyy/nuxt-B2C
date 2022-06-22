<template>
    <div class="product">
        <div class="product_top">
            <div class="prod_img">
                <div class="top"> 
                     <el-skeleton style="width: 400px" :loading="loading" animated>
                        <template slot="template">
                            <el-skeleton-item
                            variant="image"
                            style="width: 400px; height: 400px;"
                            />
                        </template>
                        <template>
                            <img :src="'data:image/jpg;base64,'+ this.nowImg" height="400" width="400" >
                        </template>
                     </el-skeleton>  
                </div>
                <div class="middle">
                     <el-skeleton  :loading="loading" animated>
                        <template slot="template">
                            <el-skeleton-item
                            variant="image"
                            style="width: 200px; height: 200px;"
                            />
                        </template>
                        <template >
                            <div style="display:flex">
                                <div v-for="(item,i) in product.img" class="image" @click="test(item)">
                                    <img :src="'data:image/jpg;base64,'+item" class="img_size">
                                </div>
                            </div>
                        </template>
                     </el-skeleton>                      
                </div>
            </div>

            <div class="prod_conent">
                <div class="item_name item">
                    <div>{{product.name}}</div>
                </div>
                <div class="item_price item">
                    <div class="font " :class="{price:product.sale}">NT＄{{product.price}}</div>
                    <div class="font " v-if="product.sale">NT＄{{product.price - product.sale}}</div>
                </div>
                <div class="item_size item"  v-if="product.qty>0">
                    目前還剩 {{product.qty}}個 ！！
                </div>
                <div class="item_qty item">
                    <el-input-number v-model="num" size="medium"  :min="1" :max="product.qty" label="描述文字"></el-input-number>
                </div>
                <div class="btn_cart item" v-if="auth==='user'">
                    <el-button type="info" @click="addCart" v-if="product.qty>0">加到購物車</el-button>
                    <el-button type="info" disabled v-else>補貨中</el-button>
                </div>
                <div class="item_desc item">
                    <el-collapse v-model="activeNames">
                        <el-collapse-item title="餐點描述" name="1">
                            <div class="description">{{product.description}}</div>                          
                        </el-collapse-item>
                        <el-collapse-item title="營養標示" name="2">
                            <div class="description">控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                            <div class="description">页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
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
import {getDetails} from '@/plugins/api';
import other from '../../components/productCom/otherProduct.vue';
export default {
    layout:'prod_layout',
    computed:{
        auth(){
            return this.$store.state.member.auth
        },
        product(){
            this.nowImg=this.$store.state.product.product.img[0]
            return this.$store.state.product.product
        },
        loading(){
            return this.$store.state.product.loading
        },
    },
    data(){
        return{
            num:0,
            activeNames: ['1','2'],
            // product:[],
            // loading:false,
            nowImg:''
        }
    },
    methods:{
        addCart(){
            let data ={pid:this.$store.state.product.product.pid,mid:this.$store.state.member.mid}
            this.$store.dispatch('cart/addCart',data);
            this.$store.dispatch('cart/getCart',{mid:this.$store.state.member.mid});
        },
        test(x){
            this.nowImg=x;
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
    .img_area{
        width: 100%;
        display: flex;
    }
    .image{
        width: 30%;
        margin: 0 1%;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
    }
    .image:hover{
        transform: translateY(-10px);
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
    }
    .img_size{
        height: 100%;
        width: 100%;
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
        margin-bottom: -1%;
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
        margin-top: 5%;
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
    .description{
        padding: 0 10px;
    }
    .thumbnail{
        height: 200px;
        width: 200px;
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
           margin: 2% 0 0 0;
           padding: 0 10px;
        }
        .star{
            padding-left: -6%;
        }
        .prod_img{
            padding: 2%;
        }
        .thumbnail{
            height: 100px;
            width: 200px;
        }
    }
</style>
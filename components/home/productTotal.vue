<template>
    <div class="productTotal">
        <card :products="products" />  
        <div class="pagination">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="totalproducts.length"
            :page-size="pagesize"
            @current-change="handlenowpage"
            :current-page="nowpage"
            >
            </el-pagination> 
        </div>
    </div>
</template>
<script>
import card from '../productCom/card.vue';
export default {
    layout:'default',
    data(){
        return{
        }
    },
    methods:{
        handlenowpage(x){
            this.$store.dispatch('setting/changenowpage',x);
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    },
    components:{
        card
    },
    created(){
        this.$store.dispatch('product/getProduct');
        
    },
    computed:{
        products(){
            return this.$store.state.product.products.slice(
                this.pagesize * this.nowpage -  this.pagesize,
                this.pagesize * this.nowpage
            );
        },
        pagesize(){
            return this.$store.state.setting.pagesize
        },
        nowpage(){
            return this.$store.state.setting.nowpage
        },
        totalproducts(){
            return this.$store.state.product.products
        }
    }
}
</script>
<style scoped>
    .productTotal{
        display: flex;
        margin-top: 3%;
        flex-wrap: wrap;
    }
    
    .pagination{
        width: 100%;
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pagination li{
        background-color: white;
    }
</style>
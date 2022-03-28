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
            // totalproducts:[
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 黑色',price:1880,sale:200},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 蘋果綠',price:1880,sale:300},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:0},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:0},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:240},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 黑色',price:1880,sale:200},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 蘋果綠',price:1880,sale:300},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:0},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:0},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:240},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 黑色',price:1880,sale:200},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 蘋果綠',price:1880,sale:300},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:0},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:0},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:240},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 黑色',price:1880,sale:200},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 蘋果綠',price:1880,sale:300},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:0},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:0},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 珍珠粉',price:1880,sale:240},
            
            // ],
            // products:[]
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
    computed:{
        products(){
            this.pageSize * this.page - this.pageSize, this.pageSize * this.page
            return this.$store.state.product.products.slice(
                this.$store.state.setting.pagesize * this.$store.state.setting.nowpage -  this.$store.state.setting.pagesize,
                this.$store.state.setting.pagesize * this.$store.state.setting.nowpage
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
<template>
    <div class="cardlist">
       <el-table
        :data="prod_details"
        style="width: 100%">
        <el-table-column
            label="商品資料"
            width="80">
            <template slot-scope="scope">
                <img :src="scope.row.img" min-width="60" height="60" />
            </template>
        </el-table-column>
        <el-table-column
            prop="itemname"
            label=""
            width="260"
            align="center">
        </el-table-column>
        <el-table-column
            prop="itemsale"
            label="優惠"
            width="180"
            align="center">
        </el-table-column>
        <el-table-column
            prop="itemprice"
            label="單件價格"
            align="center">
        </el-table-column>
        <el-table-column
            prop="itemqty"
            label="數量"
            align="center">
        </el-table-column>
        <el-table-column
            label="小計"
            align="center">    
            <template slot-scope="scope">
                <span class="little"  @click="goLink(scope.row)">{{(scope.row.itemprice-scope.row.itemsale)*scope.row.itemqty}}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="操作"
            align="center">    
            <template slot-scope="scope">
               <i class="el-icon-circle-close close-icon" @click="removeitem(scope.$index)"></i>
            </template>
        </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // prod_details:[
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 黑色',sale:0,price:1880,qty:1,img:'https://fakeimg.pl/60x60/'},
            //     {name:'nike new essntl clctn dj7669 010  女款 帽T 蘋果綠',sale:20,price:1880,qty:1,img:'https://fakeimg.pl/60x60/'},
            // ]
        }
    },
    methods:{
        handleClick(x){
            console.log(x);
            this.$router.push('/home/orderdetail')
        },
        removeitem(a){
            console.log(a);
            this.$store.dispatch('cart/removeCart',a);
        },
        goLink(x){
            console.log(x);
        },
    },
    created(){
        console.log(this.prod_details)
    },
    computed:{
        prod_details(){
            return this.$store.state.cart.carts
        },
        subtotal(){
            return (this.scope.row.itemprice-this.scope.row.itemsale)*this.scope.row.itemqty
        }
    }
}
</script>
<style scoped>
    .cardlist{
        padding: 0 40px;
    }
    .close-icon{
        cursor: pointer;
    }
    .little{
    }
</style>
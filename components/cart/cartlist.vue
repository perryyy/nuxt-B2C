<template>
    <div class="cardlist">
       <el-table
        :data="prod_details"
        style="width: 100%">
        <el-table-column
            label="商品資料"
            width="80">
            <template slot-scope="scope">
                <img :src="'data:image/jpg;base64,'+scope.row.img" min-width="60" height="60" />
            </template>
        </el-table-column>
        <el-table-column
            prop="name"
            label=""
            width="260"
            align="center">
        </el-table-column>
        <el-table-column
            prop="sale"
            label="優惠"
            width="180"
            align="center">
        </el-table-column>
        <el-table-column
            prop="price"
            label="單件價格"
            align="center">
        </el-table-column>
        <el-table-column
            prop="nowqty"
            label="數量"
            align="center">
        </el-table-column>
        <el-table-column
            label="小計"
            align="center">    
            <template slot-scope="scope">
                <span class="little"  @click="goLink(scope.row)">{{(scope.row.price-scope.row.sale)*scope.row.nowqty}}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="操作"
            align="center">    
            <template slot-scope="scope">
               <i class="el-icon-circle-close close-icon" @click="removeitem(scope.row)"></i>
            </template>
        </el-table-column>
        </el-table>
    </div>
</template>
<script>
import {  mapGetters } from 'vuex';
export default {
    data() {
        return {
        }
    },
    methods:{
        handleClick(x){
            console.log(x);
            this.$router.push('/home/orderdetail')
        },
        removeitem(a){
            console.log(a);
            this.$store.dispatch('cart/removeCart',a.cid);
        },
        goLink(x){
            console.log(x);
        },
    },
    computed:{
        ...mapGetters({
            prod_details: 'cart/AllCarts'
        }),
        subtotal(){
            let amt =0;
            for(let i =0; i<this.prod_details.length;i++){
                amt+=((this.prod_details[i].price-this.prod_details[i].sale)*this.prod_details[i].nowqty)
            }
            console.log(1,amt)
            return amt
        },
        nowImg(){
            return 'https://fakeimg.pl/60x60/'
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
<template>
    <div class="homeheader">
        <div class="title">{{title}}</div>
        <div class="sort">
            <el-select v-model="selectsort" placeholder="商品排序" @change="orderby(selectsort,title)">
                <el-option
                v-for="item in sortoptions"
                :key="item.value"
                :label="item.name"
                :value="item.spare">
                </el-option>
            </el-select>
        </div>
        <div class="count">
            <el-select v-model="selectcount" placeholder="每頁顯示6個"  @change="handleselect">
                <el-option
                v-for="item in countoptions"
                :key="item.value"
                :label="item.name"
                :value="Number(item.spare)">
                </el-option>
            </el-select>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selectsort: '',
            selectcount: '',
        }
    },
    created(){
        this.$store.dispatch('param/getProdSort',{category:'商品排序'});
        this.$store.dispatch('param/getPageShow',{category:'每頁顯示'});
    },
    computed:{
        title(){
            return this.$store.state.setting.title;
        },
        sortoptions(){
            return this.$store.state.param.productSort;
        },
        countoptions(){
            return this.$store.state.param.PageShow;
        }
    },
    methods:{
        handleselect(){
            this.$store.dispatch('setting/changepagesize',this.selectcount);
        },
        orderby(x,y){
            console.log(x,y)
            let data ={Category:y,orderby:x};
            if(y!='所有餐點' && y!='超優惠組合' && x!=''){
                this.$store.dispatch('product/exception',data);
            }
            else if(x==''&&y=='超優惠組合'){
                  this.$store.dispatch('product/getProductCategory',y);
            }
            else if(x==''&&y==''){

            }
            else{
                this.$store.dispatch('product/productorderby',x);
            }
        }
    }
}
</script>
<style scoped>
    .homeheader{
        display: flex;
        width: 100%;
    }
    .title{
        width: 50%;
        height: 40px;
        line-height: 40px;
        font-weight: 800;
        font-size: 24px;
    }
    .sort{
        margin-right: 1%;
    }
</style>
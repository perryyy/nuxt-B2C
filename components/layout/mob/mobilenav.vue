<template>
    <div class="mobilenav">
        <ul>
            <li class="all_prod" @click="getAllProduct()">所有餐點</li>
            <li class="sales">超優惠組合</li>
        </ul>
        <div class="title">分類</div>
        <div class="category">
            <ul>
                <li v-for="(item,index) in categoryItem" :key="index" class="category_item" @click="changetitle(item.name)">{{item.name}}</li>
            </ul>
        </div>
        <div class="brand">
            <ul>
                <li v-for="(item,index) in foodItem" :key="index" class="brandItem_item" @click="changetitle(item.name)">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        changetitle(x){
            this.$store.dispatch('product/getProductCategory',x);
            this.$store.dispatch('setting/changeTitle',x);
        },
        getAllProduct(){
            this.$store.dispatch('product/getProduct');
        }
    },
    computed:{
        categoryItem(){
            return this.$store.state.param.category
        },
        foodItem(){
            return this.$store.state.param.Foods
        },
    },
    created(){
        this.$store.dispatch('param/getCategory',{category:'種類'});
        this.$store.dispatch('param/getFood',{category:'熱門點心'});
    },
}
</script>
<style scoped>
    .mobilenav{
        font-weight: 600;
        color: #696969;
    }
    .all_prod{
        border-bottom: 1px solid  #ADADAD;
        padding: 4px;
    }
    .sales{
        padding: 4px;
    }
    .brandItem_item,.category_item{
        list-style: none;
        text-align: left;
        margin-bottom: 1%;
        border-bottom: 1px solid  #ADADAD;
        padding: 4px;
    }
    .category_item:hover,.brandItem_item:hover{
        background-color: #e0dede;
    }
    ul{
       padding: 4px;
        margin:0;
        text-align: left;
        list-style-type: none;
    }
    .category,.brand{
    }
    .title{
        background-color:#e0dede;
        padding: 0 4px;
        color: #8d8c8c; 
    }
</style>
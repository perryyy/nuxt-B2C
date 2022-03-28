<template>
    <div class="mobilenav">
        <ul>
            <li class="all_prod">所有餐點</li>
            <li class="sales">超優惠組合</li>
        </ul>
        <div class="title">分類</div>
        <div class="category">
            <ul>
                <li v-for="(item,index) in categoryItem" :key="index" class="category_item" @click="changetitle(item)">{{item}}</li>
            </ul>
        </div>
        <div class="brand">
            <ul>
                <li v-for="(item,index) in brandItem" :key="index" class="brandItem_item" @click="changetitle(item)">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
data(){
        return{
            categoryItem:['漢堡','蛋餅','捲餅','總匯三明治','麵類','吐司、厚片','美味小點'],
            brandItem:['厚切牛肉蛋堡','薯餅蛋餅','醬燒雞總匯','果醬厚片','鐵板麵','蔥抓餅加蛋','熱狗']
        }
    },
    methods:{
        changetitle(x){
            this.$store.dispatch('setting/changeTitle',x);
        }
    }
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
    ul{
       padding: 4px;
        margin:0;
        text-align: left;
        list-style-type: none;
    }
    .category,.brand{
        /* color:#ADADAD; */
    }
    .title{
        background-color:#e0dede;
        padding: 0 4px;
        color: #8d8c8c; 
    }
</style>
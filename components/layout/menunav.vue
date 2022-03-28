<template>
    <div class="menunav">
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
    .menunav{
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-bottom: 10%;
    }
    .title{
        /* min-height: 20%; */
        font-size: 20px;
        font-weight: 800;
        padding-top: 80px;
    }

    .brandItem_item{
       font-weight: 400;
       -webkit-font-smoothing: antialiased;
    }
    li{
        list-style: none;
        text-align: left;
        margin: 20% 0 0 0;
        font-weight: 600;
        font-size: 14px;
    }
    ul{
        padding:0;
        margin:0;
        text-align: left;
        list-style-type: none;
    }
    .category_item:hover,.brandItem_item:hover{
        color:	#ADADAD;
    }
</style>
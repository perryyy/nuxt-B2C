<template>
    <div class="admprod">
        <div class="prod_edit">
            <div class="title">商品編輯</div>
            <div class="content">
                <div class="left">
                    <div class="img"><img src="https://fakeimg.pl/480x400/"></div>
                </div>
                <div class="right">
                    <div class="top">
                        <div class="name item">
                            <span class="item_title">商品名稱：</span>
                            <el-input v-model="name" placeholder="請輸入內容"></el-input>
                        </div>
                        <div class="price item">
                            <span class="item_title">商品價格：</span>
                            <el-input v-model="price" placeholder="請輸入價格"></el-input>
                        </div>
                        <div class="sale item">
                            <span class="item_title">商品折扣：</span>
                            <el-input v-model="sale" placeholder="請輸入折扣"></el-input>
                        </div>
                        <div class="qty item">
                            <span class="item_title">商品數量：</span>
                            <el-input v-model="qty"  placeholder="請輸入數量"></el-input>
                        </div>
                    </div>
                    <div class="bottom">
                        <el-button @click="back">回上頁</el-button>
                        <el-button type="primary" @click="additem">新增</el-button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    middlemare:'metaTitle',
    meta:{title:'新增商品'},
    name:'prod_edit',
    data(){
        return{
            qty:1,
            name:'',
            price:'',
            sale:''
        }
    },
    methods:{
        back(){
            this.$router.push('/admin/admhome/product/prod_list');
        },
        additem(){
            let data={name:this.name,price:this.price,sale:this.sale};
            this.$store.dispatch('product/adddata',data);
            this.$message({
                message: '新增成功!!',
                type: 'success'
            });
            this.$router.push('/admin/admhome/product/prod_list');
        }
    },
    
}
</script>
<style scoped>
    .admprod{
        padding: 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
    }
    .title{
        font-weight: 600;
    }
    .content{
        display: flex;
        width: 100%;
        padding: 20px;
    }
    .left{
        width: 50%;
    }
    .right{
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .top{
        padding-top: 10%;
        width: 100%;
        height: 85%;
    }
    .item{
        margin-bottom: 3%;
        display: flex;
        align-items: center;
        width: 100%;
    }
    .item_title{
        width: 20%;
    }
</style>
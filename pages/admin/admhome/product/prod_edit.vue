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
                            <el-input v-model="name" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="price item">
                            <span class="item_title">商品價格：</span>
                            <el-input v-model="price" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="sale item">
                            <span class="item_title">商品折扣：</span>
                            <el-input v-model="sale" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="qty item">
                            <span class="item_title">商品數量：</span>
                            <el-input v-model="qty" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="bottom">
                        <el-button @click="back">回上頁</el-button>
                        <el-button type="primary" @click="editdata">修改</el-button>
                        <el-button type="danger"@click="dialogVisible = true">刪除</el-button>
                    </div>
                    <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%">
                        <span>確定要刪除嗎？</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="remove">確 定</el-button>
                        </span>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    middlemare:'metaTitle',
    meta:{title:'商品編輯'},
    name:'prod_edit',
    data(){
        return{
            qty:1,
            dialogVisible: false
        }
    },
    mounted(){
        this.getData(this.$route.params.index);
    },
    methods:{
        getData(x){
            this.$store.dispatch('product/getdata',x);
        },
        editdata(){
            let data = {name:this.name,price:this.price,sale:this.sale,index:this.$route.params.index}
            this.$store.dispatch('product/editdata',data);
            this.$router.push('/admin/admhome/product/prod_list');
        },
        back(){
            this.$router.push('/admin/admhome/product/prod_list');
        },
        remove(){
            this.dialogVisible=false;
            this.$store.dispatch('product/removedata',this.$route.params.index);
            this.$router.push('/admin/admhome/product/prod_list');
        }
    },
    computed:{
        name:{
            get(){
                return this.$store.state.product.name
            },
            set (val){
                this.$store.commit('product/setname',val)
            }
        },
        price:{
            get(){
                return this.$store.state.product.price
            },
            set (val){
                this.$store.commit('product/setprice',val)
            }
        },
        sale:{
            get(){
                return this.$store.state.product.sale
            },
            set (val){
                this.$store.commit('product/setsale',val)
            }
        }
    }
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
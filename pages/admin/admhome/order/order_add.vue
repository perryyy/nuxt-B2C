<template>
    <div class="order_add">
        <div class="title">新增會員</div>
        <div class="content">
            <el-form label-width="80px">
            <el-form-item label="商品名稱">
                <el-input v-model="prodname"></el-input>
            </el-form-item>
            <el-form-item label="價錢">
                <el-input v-model="price"></el-input>
            </el-form-item>
            <el-form-item label="買家">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="訂單狀態">
                <el-select v-model="status" placeholder="請選擇訂單狀態" style="width:'100%'">
                    <el-option label="已完成" value="已完成"></el-option>
                    <el-option label="未完成" value="未完成"></el-option>
                </el-select>
            </el-form-item>
            </el-form>
        </div>
        <div class="btn">
            <el-button plain @click.native="back()">回上頁</el-button>
            <el-button type="primary" @click.native="addorder()">新增</el-button>
        </div>
    </div>
</template>
<script>
export default{
    middlemare:'metaTitle',
    meta:{title:'新增訂單'},
    data(){
        return{
            prodname:'',
            price:0,
            username:'',
            status:'',
        }
    },
    methods:{
        back(){
            this.$router.push('/admin/admhome/order/order_list')
        },
        addorder(){
            let data = {prodname:this.prodname,price:this.price,username:this.username,status:this.status};
            console.log(data);
            this.$store.dispatch('order/addorder',data);
            this.$router.push('/admin/admhome/order/order_list');
        }
    }
}
</script>
<style scoped>
    .order_add{
        min-height: 82vh;
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
    /deep/.el-form,/deep/.el-select{
        width: 100%;
    }
    /deep/.el-form-item__label{
        text-align: left;
    }
</style>
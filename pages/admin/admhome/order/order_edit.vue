<template>
    <div class="order_edit">
        <div class="title">訂單編輯</div>
        <div class="content">
            <el-form  label-width="80px">
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
            <el-button type="primary" @click.native="editdata()">修改</el-button>
            <el-button type="danger" @click="dialogVisible = true">刪除</el-button>
        </div>
         <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
                <span>確定要刪除嗎？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click.native="remove()">確 定</el-button>
                </span>
        </el-dialog>
    </div>
</template>
<script>
export default{
    middlemare:'metaTitle',
    meta:{title:'訂單編輯'},
    data(){
        return{
            dialogVisible: false
            // username: '',
            // password: '',
            // email: '',
            // auth:''
        }
    },
    mounted(){
        this.getData(this.$route.params.index);
    },
    methods:{
        back(){
            this.$router.push('/admin/admhome/order/order_list')
        },
        getData(x){
            this.$store.dispatch('order/getdata',x);
        },
        editdata(){
            let data = {prodname:this.prodname,price:this.price,username:this.username,status:this.status,index:this.$route.params.index};
            this.$store.dispatch('order/editdata',data);
            this.$router.push('/admin/admhome/order/order_list');
        },
        remove(){
            this.dialogVisible=false;
            this.$store.dispatch('order/removedata',this.$route.params.index);
            this.$router.push('/admin/admhome/order/order_list');
        }
    },
    computed:{
        prodname:{
            get(){
                return this.$store.state.order.prodname
            },
            set (val){
                this.$store.commit('order/setprodname',val)
            }
        },
        price:{
            get(){
                return this.$store.state.order.price
            },
            set (val){
                this.$store.commit('order/setprice',val)
            }
        },
        username:{
            get(){
                return this.$store.state.order.username
            },
            set (val){
                this.$store.commit('order/setusername',val)
            }
        },
        status:{
            get(){
                return this.$store.state.order.status
            },
            set (val){
                this.$store.commit('order/setstatus',val)
            }
        }
    }
}
</script>
<style scoped>
    .order_edit{
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
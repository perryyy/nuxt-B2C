<template>
    <div class="order_list">
        <div class="header">
            <div class="title" @click="GetAllItem">
                目前訂單
            </div>
            <div class="search">
                <el-input placeholder="請輸入内容" v-model.trim="keyword" class="input-with-select" @keyup.enter.native="search()">
                    <el-button slot="append" icon="el-icon-search" @click.native="search()"></el-button>
                </el-input>
            </div>
        </div>
        <div class="content">
            <el-table
            :data="AdmorderList"
            style="width: 100%">
            <el-table-column
            type="index"
            align="center">
            </el-table-column>
            <el-table-column
            prop="buyer"
            label="買家"
            align="center">
            </el-table-column>
            <el-table-column
            prop="total"
            label="價錢"
            align="center">
            </el-table-column>
            <el-table-column
            prop="order_time"
            label="訂單時間"
            align="center">
            </el-table-column>
            <el-table-column label="操作"
            align="center">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="GetDetails(scope.row)">詳細</el-button>
                <el-button
                size="mini"
                type="primary"
                @click="accept(scope.row)">接單</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="refuse(scope.row)">拒絕</el-button>
            </template>
            </el-table-column>
        </el-table>
        </div>
    </div>
</template>
<script>
export default{
    middlemare:'metaTitle',
    meta:{title:'訂單管理'},
    data(){
        return{
            keyword:''
        }
    },
    created(){
        let token = this.$store.state.member.token;
        // if(token!='Admin'){
        //     this.$router.push('/Login');
        // }
        this.$store.dispatch('admOrder/getCurrentOrder');
    },
    computed:{
        AdmorderList(){
            return this.$store.state.admOrder.AdmOrder
        }
    },
    methods:{
        GetDetails(x){
            console.log(x);
            this.$store.dispatch('orderdetails/getData',x.oid);
            this.$store.dispatch('order/getOrderSingle',x.oid);
            this.$router.push('/admin/admhome/currentOrder/order_details')
        },
        accept(x){
            this.$store.dispatch('admOrder/Accept',x);
        },
        refuse(x){
            this.$store.dispatch('admOrder/Refuse',x);
        },
        GetAllItem(){
            this.$store.dispatch('admOrder/getCurrentOrder');
        },
        search(){
            if(this.keyword.length>0){
                this.$store.dispatch('admOrder/searchitem',this.keyword);
            }
            else{
                this.$store.dispatch('admOrder/getCurrentOrder');
            }
        }
    }
}
</script>
<style scoped>
    .order_list{
        padding: 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
        min-height: 83vh;
    }
    .title{
        font-weight: 600;
        display: flex;
        align-items: center;
    }
    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }   
</style>
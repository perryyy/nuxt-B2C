<template>
    <div class="order_list">
        <div class="header">
            <div class="title" @click="GetAllItem">
                歷史訂單
            </div>
            <div class="search">
                <el-input placeholder="請輸入内容" v-model="keyword" class="input-with-select" @keyup.enter.native="search()">
                    <el-button slot="append" icon="el-icon-search" @click.native="search()"></el-button>
                </el-input>
            </div>
        </div>
        <div class="content">
            <el-table
            :data="AdmorderList"
            style="width:99.9%">
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
            label="總價"
            align="center">
            </el-table-column>
            <el-table-column
            prop="order_time"
            label="訂單時間"
            align="center">
            </el-table-column>
            <el-table-column
            prop="order_status"
            label="訂單狀態"
            align="center"
            :formatter="statusFormat">
            </el-table-column>
            <el-table-column label="操作"
            align="center">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="GetDetails(scope.row)">詳細</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handledelete(scope.row)">刪除</el-button>
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
        this.$store.dispatch('admOrder/getHistoryOrder');
    },
    computed:{
        AdmorderList(){
            return this.$store.state.admOrder.AdmOrder
        }
    },
    methods:{
        GetDetails(x){
            console.log(x);
            this.$store.commit('admOrder/setOID',x);
            this.$store.dispatch('orderdetails/getData',x.oid);
            this.$store.dispatch('order/getOrderSingle',x.oid);
            this.$router.push('/admin/admhome/order/order_details')
        },
        handledelete(x){
            this.$store.dispatch('admOrder/removeHistoryOrder',x);
        },
        GetAllItem(){
            this.$store.dispatch('admOrder/getHistoryOrder');
        },
        search(){
            if(this.keyword.length>0){
                this.$store.dispatch('admOrder/searchHistoryOrder',this.keyword);
            }
            else{
                this.$store.dispatch('admOrder/getHistoryOrder');
            }
        },
        statusFormat(row,col,order_status){
            if(order_status == "N")
            {
                return "未完成"
            }
            else{
                return "已完成"

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
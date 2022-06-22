<template>
    <div class="order">
        <el-table
        :data="orderData"
        highlight-current-row
        style="width: 100%">
        <el-table-column
            type="index"
            label="訂單編號"
            width="100"
            >
        </el-table-column>
        <el-table-column
            prop="order_date"
            :formatter="dateFormat"
            label="訂單日期"
            >
        </el-table-column>
        <el-table-column
            prop="total"
            label="合計">
        </el-table-column>
        <el-table-column
            prop="order_status"
            label="訂單狀態"
            :formatter="statusFormat">
        </el-table-column>
         <el-table-column
            fixed="right"
            label="操作"
        >
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row.oid)" type="text" size="small">查看</el-button>
        </template>
        </el-table-column>
        </el-table>
    </div>
</template>
<script>
import moment from 'moment';
export default {
    data() {
        return {

        }
    },
    methods:{
        handleClick(x){
            this.$store.dispatch('orderdetails/getData',x);
            this.$store.dispatch('order/getOrderSingle',x);
            this.$router.push('/home/orderdetail')
        },
        dateFormat(order_date){
            return moment(order_date).format('YYYY-MM-DD')
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
    },
    computed:{
        mid(){
            return this.$store.state.member.mid;
        },
        orderData(){
            return this.$store.state.order.orderList;
        },
    },
    created(){
        this.$store.dispatch('order/getOrder',this.mid)
    }
}
</script>
<style scoped>
    .order{
        padding: 0 20px;
    }
    /deep/.el-table__fixed-right{
        z-index: 0;
    }
</style>
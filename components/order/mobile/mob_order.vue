<template>
    <div class="order">
        <el-table
        :data="orderData"
        highlight-current-row
        style="width: 99.9%"
        @row-click="rowClick" >
        <el-table-column
            type="index"
            label="#"
            width="30"
            >
        </el-table-column>
        <el-table-column
            prop="order_date"
            :formatter="dateFormat"
            width="110"
            label="訂單日期"
            >
        </el-table-column>
        <el-table-column
            prop="total"
            width="70"
            label="合計">
        </el-table-column>
        <el-table-column
            prop="order_status"
            label="訂單狀態"
            :formatter="statusFormat">
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
        },
        rowClick(row, column, event){
            // console.log(row, column, event)
            this.$store.dispatch('orderdetails/getData',row.oid);
            this.$store.dispatch('order/getOrderSingle',row.oid);
            this.$router.push('/home/orderdetail')
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
</style>

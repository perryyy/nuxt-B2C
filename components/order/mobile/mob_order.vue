<template>
    <div class="mob_order">
         <el-table
        :data="orderData"
        style="width: 100%">
        <el-table-column
            prop="orderId"
            label="訂單編號"
            align="center"
            >
        </el-table-column>
        <el-table-column
            prop="totol"
            label="合計"
            align="center">
        </el-table-column>
        <el-table-column
            prop="orderstatus"
            label="狀態"
            align="center">
        </el-table-column>
         <el-table-column
            label="操作"
            align="center"
        >
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
        </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            orderData:[
                {orderId:123456,orderdate:'2022/03/11',totol:75,orderstatus:'已完成'}
            ]
        }
    },
    methods:{
        handleClick(x){
            console.log(x);
            this.$router.push('/home/orderdetail')
        }
    }
}
</script>
<style scoped>
    .order{
        padding: 0 20px;
    }
</style>

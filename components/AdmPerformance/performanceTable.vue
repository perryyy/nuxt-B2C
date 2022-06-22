<template>
    <div class="performanceTable">
        <el-table
        :data="tableData"
        style="width: 80%"
        :default-sort = "{prop: 'total', order: 'descending'}"
        sum-text="總計"
        show-summary
         :summary-method="getSummaries">
        <el-table-column
        type="index"
        width="50">
        </el-table-column>
        <el-table-column
            prop="name"
            label="商品名稱"
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            prop="category"
            label="種類"
            sortable
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            prop="qty"
            label="銷售數量"
            sortable
            align="center">
        </el-table-column>
         <el-table-column
            prop="price"
            label="商品單價(元)"
            width="180"
            sortable
            align="center">
        </el-table-column>
         <el-table-column
            prop="total"
            label="總銷售額(元)"
            width="180"
            sortable
            align="center">
        </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    middlemare:'metaTitle',
    meta:{title:'業績分析'},
    data(){
        return{
        }
    },
    computed:{
        tableData(){
            return this.$store.state.performance.performanceList
        }
    },
    methods:{
        getSummaries (param) {
            const { columns, data } = param
            const sums = []
            columns.forEach((column, index) => {
            if (index === 0) {
            sums[index] = '總計'
            } else if (index === 5 ) {
            const values = data.map(item => Number(item[column.property]))
            if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!isNaN(value)) {
                return prev + curr
                } else {
                return prev
                }
            }, 0)
            } else {
            sums[index] = 'N/A'
            }
            } else {
            sums[index] = '--'
            }
            })
            return sums
            }
    }
}
</script>
<style scoped>
    .performanceTable{
    }
    /deep/.el-table{
        margin: auto;
    }
</style>
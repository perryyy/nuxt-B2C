<template>
    <div class="performance_list">
         <div class="header">
            <div class="title" >
                業績查詢
            </div>
        </div>
        <div class="content">
            <el-collapse v-model="activeNames">
                <el-collapse-item title="條件查詢" name="1">
                    <div class="select_area">
                        <div class="item">
                            <el-radio v-model="radio" label="month">月份查詢</el-radio>
                            <el-date-picker
                            v-model="month"
                            format="yyyy/MM/dd"
                            value-format="yyyy-MM-dd"
                            style="width:40%"
                            type="monthrange"
                            align="right"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始月份"
                            end-placeholder="结束月份"
                            :picker-options="monthOptions">
                            </el-date-picker>
                        </div>
                        <div class="item">
                            <el-radio v-model="radio" label="interval">區間查詢</el-radio>
                            <el-date-picker
                            style="width:40%"
                            format="yyyy/MM/dd"
                            value-format="yyyy-MM-dd"
                            v-model="interval"
                            type="daterange"
                            align="right"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="intervalOptions">
                            </el-date-picker>
                        </div>
                        <el-button type="primary" plain class="GoSelect" size="small" @click.native="Serach()">查詢</el-button>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="查詢結果" name="2">
                   <performanceTable />
                    <el-button type="primary" class="print" @click="exportExcel">匯出Excel</el-button>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>
<script>
import FileSaver from 'file-saver';
import XLSX from 'xlsx';
import performanceTable from '@/components/AdmPerformance/performanceTable'
export default {
    middlemare:'metaTitle',
    meta:{title:'業績查詢'},
    data(){
        return{
            activeNames: ['1'],
            radio: 'month',
            month:'',
            interval: '',
            intervalOptions: {
            shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近一个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近三个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
                }
            }]
            },
            monthOptions: {
                shortcuts: [{
                    text: '本月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date(end.getFullYear(),end.getMonth(), 1);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '今年至今',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date(new Date().getFullYear(), 0);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近六个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setMonth(start.getMonth() - 6);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
        }
    },
    methods: {
        Serach(){

            if (this.radio==='month'){
                if(this.month==''){
                    this.$message.error('請確實填寫搜尋條件');
                }
                else{
                    this.$store.dispatch('performance/getPergormance',this.month)
                    //關閉查詢條件 展開查詢結果
                    this.activeNames=['2']
                }
            }
            else{
                if(this.interval==''){
                    this.$message.error('請確實填寫搜尋條件');
                }
                else{
                    this.$store.dispatch('performance/getPergormance',this.interval)
                    //關閉查詢條件 展開查詢結果
                    this.activeNames=['2']
                }
            }
        },
        exportExcel() {
            require.ensure([], () => {
                const { export_json_to_excel } = require('@/static/js/export2Excel');   
                const now_filename = 'test';
                const filterVal = ['name', 'category', 'qty','price','total'];
                const now_header = ['商品名稱', '種類', '銷售數量', '商品單價(元)','總銷售額(元)'];
                let list = JSON.parse(JSON.stringify(this.$store.state.performance.performanceList));
                const tabledata=this.formatJson(filterVal, list);
                export_json_to_excel(now_header, tabledata,now_filename);  
            })
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]))
        }
    },
    components:{
        performanceTable
    }
}
</script>
<style scoped>
    .performance_list{
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
    .content{
        margin-top: 2%;
    }
    .select_area{
        display: flex;
        flex-direction: column;
        padding: 0 2%;
    }
    .item{
        margin-bottom: 1%;
        width: 100%;
    }
    .GoSelect{
        margin-top: 2%;
        width: 10%;
    }
    .print{
        margin-left: 10%;
        margin-top: 2%;
    }
    /deep/.el-collapse-item__content{
        width: 100%;
    }
</style>
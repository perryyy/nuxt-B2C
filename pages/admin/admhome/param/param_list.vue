<template>
    <div class="param_list">
        <div class="header">
            <div class="title" @click="GetAllItem">
                參數管理
                <el-button plain size="mini" class="ms-3" @click.native="addparam">新增</el-button>
            </div>
            <div class="search">
                 <el-select v-model="category" placeholder="種類搜尋" @change="sortcategory">
                    <el-option
                    v-for="item in CategoryGroup"
                    :key="item.category"
                    :label="item.category"
                    :value="item.category">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="main">
            <el-table
                ref="singleTable"
                :data="tableData"
                highlight-current-row
                @current-change="handleCurrentChange"
                style="width: 99.9%">
                <el-table-column
                type="index"
                width="50">
                </el-table-column>
                <el-table-column
                property="category"
                label="種類">
                </el-table-column>
                <el-table-column
                property="name"
                label="名稱">
                </el-table-column>
                <el-table-column
                property="spare"
                label="value"
                align="center">
                </el-table-column>
                <el-table-column
                property="status"
                label="是否啟用"
                align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.row.pid)">編輯</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row.pid)">刪除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>

export default{
    middlemare:'metaTitle',
    meta:{title:'參數管理'},
    data(){
        return{
            category:''
        }
    },
    methods:{
        sortcategory(){
            this.$store.dispatch('param/getCategoryCondition',{category:this.category});
        },
        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
        },
        handleCurrentChange(val) {
            this.currentRow = val;
        },
        addparam(){
            this.$router.push('/admin/admhome/param/param_add');
        },
        handleEdit(x){
            this.$store.dispatch('param/getParamsDetails',x);
            this.$router.push({name:'admin-admhome-param-param_edit'})
        },
        handleDelete(x){
            let data = {pid:x};
            this.$store.dispatch('param/removeData',data);
        },
        GetAllItem(){
            this.$store.dispatch('param/getCategoryGroupBy');
            this.$store.dispatch('param/getAllparam');
        }
    },
    created(){
        this.$store.dispatch('param/getCategoryGroupBy');
        this.$store.dispatch('param/getAllparam');
    },
    computed:{
        CategoryGroup(){
            return this.$store.state.param.CategoryGroup
        },
        tableData(){
            return this.$store.state.param.AllParam
        }
    }
    
}
</script>
<style scoped>
    .param_list{
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
        cursor: pointer;
    }
    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }  
</style>
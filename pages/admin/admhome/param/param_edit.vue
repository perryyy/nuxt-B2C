<template>
    <div class="param_edit">
        <div class="title">參數編輯</div>
        <div class="content">
            <el-form  label-width="120px">
            <el-form-item label="種類">
               <el-select v-model="category" placeholder="種類搜尋">
                    <el-option
                    v-for="item in CategoryGroup"
                    :key="item.category"
                    :label="item.category"
                    :value="item.category">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="名稱">
                <el-input v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="value">
                <el-input v-model="value" placeholder="請輸入值，可為空" style="width:100%"></el-input>
            </el-form-item>
            <el-form-item label="參數是否啟用">
                <el-select v-model="status" placeholder="請輸入狀態" style="width:100%">
                    <el-option value="Y">是</el-option>
                    <el-option value="N">否</el-option>
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
    meta:{title:'參數編輯'},
    data(){
        return{
            dialogVisible: false
        }
    },
    methods:{
        back(){
            this.$router.push('/admin/admhome/param/param_list')
        },
        editdata(){
            let nowstatus;
            if(this.status=="是"){
                nowstatus='Y'
            }
            else{
                nowstatus='N'
            }
            let data = {category:this.category,name:this.name,value:this.value,status:nowstatus,pid:this.pid};
            this.$store.dispatch('param/editData',data);
            this.$router.push('/admin/admhome/param/param_list')
        },
        remove(){
            this.dialogVisible=false;
            let data = {pid:this.pid};
            this.$store.dispatch('param/removeData',data);
            this.$router.push('/admin/admhome/param/param_list');
        }
    },
    computed:{
        category:{
            get(){
                return this.$store.state.param.nowParam.category
            },
            set (val){
                this.$store.commit('param/setcategory',val)
            }
        },
        name:{
            get(){
                return this.$store.state.param.nowParam.name
            },
            set (val){
                this.$store.commit('param/setname',val)
            }
        },
        value:{
            get(){
                return this.$store.state.param.nowParam.value
            },
            set (val){
                this.$store.commit('param/setvalue',val)
            }
        },
        pid:{
            get(){
                return this.$store.state.param.nowParam.pid
            },
            set (val){
                this.$store.commit('param/setpid',val)
            }
        },
        status:{
            get(){
                if(this.$store.state.param.nowParam.status == "N")
                {
                    return "否"
                }
                else{
                    return "是"
                }
            },
            set (val){
                this.$store.commit('param/setstatus',val)
            }
        },
        CategoryGroup(){
            return this.$store.state.param.CategoryGroup
        },
    }
}
</script>
<style scoped>
    .param_edit{
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
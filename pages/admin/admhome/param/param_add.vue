<template>
    <div class="param_add">
        <div class="title">新增參數</div>
        <div class="content">
            <el-form  :model="ruleForm" label-width="120px" :rules="rules" ref="ruleForm">
            <el-form-item label="種類" prop="category">
                <el-select v-model="ruleForm.category" placeholder="種類搜尋">
                    <el-option
                    v-for="item in CategoryGroup"
                    :key="item.category"
                    :label="item.category"
                    :value="item.category">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="名稱" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="value" prop="value">
                <el-input v-model="ruleForm.value"></el-input>
            </el-form-item>
            <el-form-item label="是否啟用" prop="status">
                <el-select v-model="ruleForm.status" placeholder="請輸入狀態" style="width:100%">
                    <el-option value="是">是</el-option>
                    <el-option value="否">否</el-option>
                </el-select>
                {{this.ruleForm.status}}
            </el-form-item>
            </el-form>
        </div>
        <div class="btn">
            <el-button plain @click.native="back()">回上頁</el-button>
            <el-button type="primary" @click.native="addparam('ruleForm')">新增</el-button>
        </div>
    </div>
</template>
<script>
// import {addParam} from '@/plugins/api';
import {API} from '@/plugins/axios';
export default{
    middlemare:'metaTitle',
    meta:{title:'參數新增'},
    data(){
        return{
            ruleForm:{
                category: '',
                name: '',
                value: '',
                status:'',
            },
            rules: {
                category: [
                    { required: true, message: '種類欄位不能為空', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '名稱欄位不能為空', trigger: 'blur' },
                    { min: 2, max: 8, message: '長度需在2-8之間', trigger: 'blur' },
                ],
                status: [
                    { required: true, message: '是否啟用欄位不能為空', trigger: 'change' }
                ],
            }
        }
    },
    created(){
        this.$store.dispatch('param/getCategoryGroupBy');
    },
    methods:{
        back(){
            this.$router.push('/admin/admhome/param/param_list')
        },
        addparam(formName){
            // let nowstatus;
            this.ruleForm.status = (this.ruleForm.status=="是") ? "Y" :"N"
            // if(this.ruleForm.status="是"){
            //     this.ruleForm.status='Y'
            // }
            // else{
            //     this.ruleForm.status='N'
            // }
            // let data = {category:this.category,name:this.name,value:this.value,status:nowstatus};
            // this.ruleForm.status=nowstatus;
            this.$refs[formName].validate((valid) => {
            if (valid) {
            //    addParam(this.ruleForm)
            // console.log(this.ruleForm)
               API('post','param',this.ruleForm)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.status==='success'){
                        this.$message({
                            showClose: true,
                            message:'新增成功'
                        });
                        this.$router.push('/admin/admhome/param/param_list');
                    }
                    else{
                        this.$message.error('新增失敗');
                    }
                })
            } else {
                this.$message.error('請確實填寫欄位');
                return false;
            }
            });
        },
    },
    computed:{
        CategoryGroup(){
            return this.$store.state.param.CategoryGroup
        },
    }
}
</script>
<style scoped>
    .param_add{
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
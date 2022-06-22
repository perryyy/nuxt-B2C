<template>
    <div class="member_add">
        <div class="title">新增會員</div>
        <div class="content">
            <el-form :model="ruleForm" label-width="120px" :rules="rules" ref="ruleForm">
            <el-form-item label="姓名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密碼" prop="password">
                <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="電子信箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="電話號碼" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="性別" prop="sex">
                <el-select v-model="ruleForm.sex" placeholder="請輸入性別" style="width:100%">
                    <el-option value="男">男</el-option>
                    <el-option value="女">女</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="生日"  prop="birth">
                <el-date-picker value-format="yyyy-MM-dd" placeholder="請輸入生日" v-model="ruleForm.birth" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="權限" prop="auth">
                <el-select v-model="ruleForm.auth" placeholder="請選擇會員權限" style="width:'100%'">
                    <el-option label="會員" value="user"></el-option>
                    <el-option label="管理員" value="Admin"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="帳號開始日期" prop="startdate">
                <el-date-picker value-format="yyyy-MM-dd" placeholder="請輸入日期" v-model="ruleForm.startdate" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="帳號終止日期" prop="enddate">
                <el-date-picker value-format="yyyy-MM-dd" placeholder="請輸入日期" v-model="ruleForm.enddate" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="帳號是否啟用" prop="status">
                <el-select v-model="ruleForm.status" placeholder="請輸入狀態" style="width:100%">
                    <el-option value="是">是</el-option>
                    <el-option value="否">否</el-option>
                </el-select>
            </el-form-item>
            </el-form>
        </div>
        <div class="btn">
            <el-button plain @click.native="back()">回上頁</el-button>
            <el-button type="primary" @click.native="adduser('ruleForm')">新增</el-button>
        </div>
    </div>
</template>
<script>
// import {AdmAddMember} from '@/plugins/api';
import {API} from '@/plugins/axios';
export default{
    middlemare:'metaTitle',
    meta:{title:'會員新增'},
    data(){
        return{
            ruleForm:{
                username: '',
                password: '',
                email: '',
                phone:'',
                auth:'',
                sex:'',
                birth:'',
                startdate:'',
                enddate:'',
                status:'',
            },
            rules: {
                username: [
                    { required: true, message: '姓名不能為空', trigger: 'blur' },
                    { min: 2, max: 10, message: '長度需在2-10之間', trigger: 'blur' },
                    {
                        required: true,
                        pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9.·-]+$/,
                        message: '姓名不支持特殊字符',
                        trigger: 'blur'
                    }
                ],
                password: [
                    {required: true, message: "密碼不能為空", trigger: 'blur'},
                    {min: 6, max: 10, message: "密碼6-10位", trigger: 'blur'}
                ],
                email: [
                    { required: true, message: '電子信箱不能為空', trigger: 'blur' },
                    { type: 'email', message: '請輸入正確的電子信箱', trigger: ['blur', 'change'] }
                ],
                sex: [
                    { required: true, message: '性別欄位不能為空', trigger: 'blur' },
                ],
                birth: [
                    { required: true, message: '請選擇日期', trigger: 'change' }
                ],
                auth: [
                    { required: true, message: '權限欄位不能為空', trigger: 'blur' },
                ],
                startdate: [
                    { required: true, message: '請選擇日期', trigger: 'change' }
                ],
                enddate: [
                    { required: true, message: '請選擇日期', trigger: 'change' }
                ],
                status: [
                    { required: true, message: '是否啟用欄位不能為空', trigger: 'change' }
                ],
                phone: [
                    { required: true, message: '請輸入手機號碼', trigger: 'blur' },
                    {
                     validator: function (rule, value, callback) {
                            var MobileRegex = /[0-9]{10}$/;
                            if (!MobileRegex.test(value)) {
                                callback(new Error('手機號碼格式不正確！'))
                            } else {
                                callback();
                            }
                        }, trigger: ['blur', 'change']
                    }
                ],
            }
        }
    },
    methods:{
        back(){
            this.$router.push('/admin/admhome/member/member_list')
        },
        adduser(formName){
            let nowstatus;
            if(this.ruleForm.status=="是"){
                nowstatus='Y'
            }
            else{
                nowstatus='N'
            }
            // let data = {username:this.username,password:this.password,email:this.email,auth:this.auth,sex:this.sex,birth:this.birth,btime:null,buser:0,mid:this.mid,startdate:this.startdate,enddate:this.enddate,status:nowstatus};
            this.ruleForm.status=nowstatus;
            this.$refs[formName].validate((valid) => {
            if (valid) {
                // AdmAddMember(this.ruleForm)
                 API('post','AdmMember',this.ruleForm)
                .then(res=>{
                    if(res.data.status==='success'){
                        this.$message({
                            showClose: true,
                            message:'新增成功'
                        });
                        this.$router.push('/admin/admhome/member/member_list');
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
            
        }
    }
}
</script>
<style scoped>
    .member_add{
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
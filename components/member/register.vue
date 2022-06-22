<template>
    <div class="memberRegister">
        <div class="title">       
            <h4>註冊帳號</h4>
            <el-divider></el-divider>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="left">
            <el-form-item label="用戶名稱" prop="username">
                <el-input v-model.trim="ruleForm.username" placeholder="請輸入用戶名稱"></el-input>
            </el-form-item>
            <el-form-item label="電子郵件" prop="email">
                <el-input v-model.trim="ruleForm.email" placeholder="請輸入電子郵件"></el-input>
            </el-form-item>
            <el-form-item label="電話號碼" prop="phone">
                <el-input v-model.trim="ruleForm.phone" placeholder="請輸入電話號碼"></el-input>
            </el-form-item>
            <el-form-item label="密碼" prop="password">
                <el-input v-model.trim="ruleForm.password" placeholder="請輸入密碼" show-password></el-input>
            </el-form-item>
            <el-form-item label="性別" prop="sex">
                <el-select v-model="ruleForm.sex" placeholder="請輸入性別" style="width:100%">
                    <el-option value="男">男</el-option>
                    <el-option value="女">女</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="生日" prop="birth">
               <el-date-picker value-format="yyyy-MM-dd" placeholder="請輸入生日" v-model="ruleForm.birth" style="width: 100%;"></el-date-picker>
            </el-form-item>
        </el-form>
        <div class="register_btn register_input">
            <el-button type="primary" style="width:100%" @click="register('ruleForm')">註冊</el-button>
        </div>
    </div>
</template>
<script>
import {addUser} from '@/plugins/api';
export default {
    data(){
        return{
            ruleForm:{
                username:'',
                email:'',
                password:'',
                sex:'',
                birth:'',
                phone:''
            },
            rules:{
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
         register(formName) {
            this.ruleForm.auth='user';
            this.ruleForm.btime='2022-04-01 16:59:10.507';
            this.ruleForm.buser=0;
            this.$refs[formName].validate((valid) => {
            if (valid) {
                 addUser(this.ruleForm)
                .then(res=>{
                    if(res.data.status==='success'){
                        this.$message({
                            showClose: true,
                            message:'註冊成功'
                        });
                        //清空欄位資料
                        this.$refs[formName].resetFields();
                        this.$emit('goLogin');
                    }
                    else{
                        this.$message.error('註冊失敗');
                    }
                })
            } else {
                this.$message.error('請確實填寫欄位');
                return false;
            }
            });
           
        },
    },

}
</script>
<style scoped>
    .memberRegister{
        width: 100%;
        min-width: 600px;
        padding:0 40px;
    }
    .title{
        text-align: center;
        margin-top: 2%;
    }
    .register_input{
        margin-bottom: 2%;
    }
    .register_btn{
        margin-top: 5%;
    }
    /deep/.el-divider--horizontal{
        margin: 16px 0;
    }
    @media (max-width: 415px) {
        .memberRegister{
            min-width: 300px;
            padding:0 20px;
        }
    }
</style>
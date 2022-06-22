<template>
    <div class="memberdata">
        <div class="border">
            <div class="title">顧客資料</div>
            <div class="content">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm mt-2" label-position="left">
                    <el-form-item label="顧客名稱" prop="username">
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="電子信箱" prop="email">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="電話號碼" prop="phonenumber">
                        <el-input v-model="ruleForm.phonenumber"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import {getUserDetails} from '@/plugins/api';
import {API} from '@/plugins/axios';
export default {
    data(){
        return{
            ruleForm:{
                username:'',
                email:'',
                phonenumber:'',
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
                email: [
                    { required: true, message: '電子信箱不能為空', trigger: 'blur' },
                    { type: 'email', message: '請輸入正確的電子信箱', trigger: ['blur', 'change'] }
                ],
                phonenumber: [
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
    mounted(){
         API('get',`member/${this.$store.state.member.member.mid}`).then((res)=>{
            this.ruleForm.username = res.data.username;
            this.ruleForm.email=res.data.email;
            this.ruleForm.phonenumber=res.data.phone;
        })
    },
    computed:{

    }
}
</script>
<style scoped>
    .memberdata{
        padding: 0 10px;
    }
    .title{
        width: 100%;
        background-color: #e4e2e2;
        font-size: 16px;
        text-align: left;
        line-height: 16px;
        padding: 10px;
        font-weight: 600;
    }
    .content{
        padding:20px;
        text-align: left;
    }
    .form-control{
        margin-top: 1%;
    }
    .username,.usermail,.userphone{
        margin-top: 2%;
    }
    @media screen and (max-width: 415px){
        .memberdata{
            padding: 0;
        }
    }
</style>
<template>
    <div class="memberRegister">
        <div class="title">       
            <h4>註冊帳號</h4>
            <el-divider></el-divider>
        </div>
        <div class="username register_input">
            <el-input v-model="username" placeholder="請輸入用戶名稱"></el-input>
        </div>
        <div class="email register_input">
            <el-input v-model="email" placeholder="請輸入電子郵件"></el-input>
        </div>
        <div class="password register_input">
            <el-input v-model="password" placeholder="請輸入密碼"></el-input>
        </div>
        <div class="sex register_input">
            <el-select v-model="sex" placeholder="請輸入性別" style="width:100%">
                <el-option value="男">男</el-option>
                <el-option value="女">女</el-option>
            </el-select>
        </div>
        <div class="birth register_input">
            <el-date-picker placeholder="請輸入生日" v-model="birth" style="width: 100%;"></el-date-picker>
        </div>
        <div class="register_btn register_input">
            <el-button type="primary" style="width:100%" @click="register">註冊</el-button>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            email:'',
            password:'',
            sex:'',
            birth:'',
        }
    },
    methods:{
        register() {
            this.$message({
                showClose: true,
                message:'註冊成功'
                });
        },
    }
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
        }
    }
</style>
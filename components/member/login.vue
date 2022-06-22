<template>
    <div class="memberLogin">
        <div class="title">
            <h4>登入</h4>
            <el-divider></el-divider>
        </div>
        <div class="username login_input">
            <el-input v-model.trim="email" placeholder="請輸入電子郵件"></el-input>
        </div>
        <div class="password login_input">
            <el-input v-model.trim="password" placeholder="請輸入密碼" show-password></el-input>
        </div>
        <div class="remember login_input">
            <el-checkbox v-model="checked">Remember Me</el-checkbox>
        </div>
        <div class="loginBtn login_input">
            <el-button type="primary" style="width:100%" @click="login">登入</el-button>
        </div>
        <div class="forgetpsw login_input">
            <el-button type="success" style="width:100%" @click="goForgetPSW">忘記密碼？</el-button>
        </div>
    </div>
</template>
<script>
const Base64 = require("js-base64").Base64;
export default {
    layout:'prod_layout',
    data(){
        return{
            checked:false,
            email:'',
            password:''
        }
    },
    mounted(){
        let username = localStorage.getItem("userId");
        if(username){
            this.email=localStorage.getItem("userId");
            this.password=Base64.decode(localStorage.getItem("password"));
            this.checked=true;
        }
    },
    methods:{
        login(){
            if (this.checked) {
                let password = Base64.encode(this.password); // base64加密
                localStorage.setItem("userId", this.email);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("userId");
                localStorage.removeItem("password");
            }
            localStorage.setItem('username', 'perry');
            let data={username:this.email,password:this.password};
            this.$axios.post('https://localhost:44377/api/Login/',data)
            .then(res=>{
                if(res.data.status=='success'){
                    if(res.data.data.token){
                        localStorage.setItem("token",'Bearer '+res.data.data.token);
                    }
                    if(res.data.data.auth=='Admin'){
                        this.$store.dispatch('member/setdata',res.data.data);
                        this.$router.push("/admin/admhome");
                    }
                    else{
                        this.$store.dispatch('member/setdata',res.data.data);
                        this.$store.commit('member/setUserdata',res.data.data);
                        this.$store.commit('order/setUserdata',res.data.data);
                        this.$router.push("/home/products");
                    }
                }     
                else{
                    this.$message.error('登入失敗，帳號或密碼可能有誤');
                    this.$router.push("/login");
                }
            })
        },
        goForgetPSW(){
            this.$router.push('/forgotPsw');
        }
    }
}
</script>
<style scoped>
    .memberLogin{
        width: 100%;
        min-width: 600px;
        padding:0 40px;
    }
    .title{
        text-align: center;
        margin-top: 2%;
    }
    .login_input{
        margin-bottom: 4%;
    }
    /deep/.el-divider--horizontal{
        margin: 16px 0;
    }
    @media (max-width: 415px) {
        .memberLogin{
            min-width: 300px;
            padding:0 20px;
        }
    }
</style>
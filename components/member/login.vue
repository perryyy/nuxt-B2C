<template>
    <div class="memberLogin">
        <div class="title">
            <h4>登入</h4>
            <el-divider></el-divider>
        </div>
        <div class="username login_input">
            <el-input v-model="email" placeholder="請輸入電子郵件"></el-input>
        </div>
        <div class="password login_input">
            <el-input v-model="password" placeholder="請輸入密碼"></el-input>
        </div>
        <div class="remember login_input">
            <el-checkbox v-model="checked">Remember Me</el-checkbox>
        </div>
        <div class="loginBtn login_input">
            <el-button type="primary" style="width:100%" @click="login">登入</el-button>
        </div>
        <div class="forgetpsw login_input">
            <el-button type="success" style="width:100%">忘記密碼？</el-button>
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
            // this.$store.dispatch('MemberData/setUsername',username);
            localStorage.setItem('username', 'perry');
            // this.$router.push("/home/products");

            if(this.email==="123456"&&this.password==="123456"){
                let data = {email:this.email,username:'Perry',password:this.password,auth:'user',token:'123456'};
                this.$store.dispatch('member/setdata',data);
                this.$router.push("/home/products");
            }
            else if(this.email==="Admin"&&this.password==="Admin"){
                let data = {email:this.email,username:'Admin',password:this.password,auth:'Admin',token:'Admin'};
                this.$store.dispatch('member/setdata',data);
                this.$router.push("/admin/admhome");
            }
            else{
                this.$router.push("/login");
            }
        },
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
            padding:0 40px;
        }
    }
</style>
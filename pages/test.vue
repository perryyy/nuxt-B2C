<template>
    <div class="test">
        <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="left">
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
        <button @click="Register()">Register</button>
        <button @click="con()">test</button>
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
        }
    },
    methods:{
        async con(){
            let res = await this.$axios.get('https://localhost:44377/api/param');
                console.log(res)
            if(res.status===200){
                let result = await this.$axios.get('https://localhost:44377/api/member');
                console.log(result)
            }
        },
        async Register(){
            this.ruleForm.auth='user';
            this.ruleForm.btime='2022-04-01 16:59:10.507';
            this.ruleForm.buser=0;
            let res = await addUser(this.ruleForm);
            console.log(res)
            if(res.data.status==='success'){
                let data={username:this.ruleForm.username,password:this.ruleForm.password};
                await this.$axios.post('https://localhost:44377/api/Login/',data)
                .then(res=>{
                    if(res.data.data.auth=='Admin'){
                        this.$store.dispatch('member/setdata',res.data.data);
                        this.$router.push("/admin/admhome");
                    }
                    else if(res.data.data.auth=='user'){
                        this.$store.dispatch('member/setdata',res.data.data);
                        this.$store.commit('member/setUserdata',res.data.data);
                        this.$store.commit('order/setUserdata',res.data.data);
                        this.$router.push("/home/products");
                    }
                    else{
                        this.$message.error('登入失敗，帳號或密碼可能有誤');
                        this.$router.push("/login");
                    }
                })
            }
        }

    }
}
</script>
<style scoped>

</style>
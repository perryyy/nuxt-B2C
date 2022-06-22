<template>
    <div class="forgetPsw">
        <div class="card">
            <div class="title">忘記密碼</div>
            <div class="content">
                <el-form>
                    <el-form-item label="會員名稱：">
                        <el-input v-model="username"></el-input>
                    </el-form-item>
                    <el-form-item label="會員電子信箱：">
                        <el-input v-model="email"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="tips">
                ✔ 新密碼會發送至電子信箱,若登入成功後請盡快修改！
            </div>
            <div class="btns">
                <el-button @click.native="back">回上頁</el-button>
                <el-button type="success" @click.native="commit()">提交</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import {forgetPsw} from '@/plugins/api';
export default{
    layout:"prod_layout",
    data(){
        return{
            username:'',
            email:''
        }
    },
    methods:{
        back(){
            this.$router.push('/login')
        },
        commit(){
            let data ={username:this.username,email:this.email};
            forgetPsw(data).then(res=>{
                if(res.data.status==='success'){
                    this.$message({
                    message: res.data.msg,
                    type: 'success'
                    });
                    this.$router.push('/login')
                }
                else{
                    this.$message.error(res.data.msg);
                }
            })
        }
    }
}
</script>
<style scoped>
    .forgetPsw{
        height: 100%;
        width: 100vw;
        padding:0 10%;
    }
    .card{
        padding:3% 5% 5% 5%;
        margin-top: 10%;
    }
    .btns{
        margin-top: 3%;
    }
    .title{
        font-weight: 600;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 24px;
    }
    .content{
        margin-top: 2%;
    }
</style>
<template>
    <div class="member_add">
        <div class="title">新增會員</div>
        <div class="content">
            <el-form  label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密碼">
                <el-input v-model="password"></el-input>
            </el-form-item>
            <el-form-item label="電子信箱">
                <el-input v-model="email"></el-input>
            </el-form-item>
            <el-form-item label="權限">
                <el-select v-model="auth" placeholder="請選擇會員權限" style="width:'100%'">
                    <el-option label="會員" value="user"></el-option>
                    <el-option label="管理員" value="member"></el-option>
                </el-select>
            </el-form-item>
            </el-form>
        </div>
        <div class="btn">
            <el-button plain @click.native="back()">回上頁</el-button>
            <el-button type="primary" @click.native="adduser()">新增</el-button>
        </div>
    </div>
</template>
<script>
export default{
    middlemare:'metaTitle',
    meta:{title:'會員新增'},
    data(){
        return{
            username: '',
            password: '',
            email: '',
            auth:''
        }
    },
    methods:{
        back(){
            this.$router.push('/admin/admhome/member/member_list')
        },
        adduser(){
            let data = {email:this.email,username:this.username,password:this.password,auth:this.auth};
            console.log(data);
            this.$store.dispatch('member/adduser',data);
            this.$router.push('/admin/admhome/member/member_list');
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
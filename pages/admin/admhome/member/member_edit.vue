<template>
    <div class="member_add">
        <div class="title">會員編輯</div>
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
                    <el-option label="管理員" value="Admin"></el-option>
                </el-select>
            </el-form-item>
            </el-form>
        </div>
        <div class="btn">
            <el-button plain @click.native="back()">回上頁</el-button>
            <el-button type="primary" @click.native="editdata()">修改</el-button>
            <el-button type="danger" @click="dialogVisible = true">刪除</el-button>
        </div>
         <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
                <span>確定要刪除嗎？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click.native="remove()">確 定</el-button>
                </span>
        </el-dialog>
    </div>
</template>
<script>
export default{
    middlemare:'metaTitle',
    meta:{title:'會員編輯'},
    data(){
        return{
            dialogVisible: false
            // username: '',
            // password: '',
            // email: '',
            // auth:''
        }
    },
    mounted(){
        this.getData(this.$route.params.index);
    },
    methods:{
        back(){
            this.$router.push('/admin/admhome/member/member_list')
        },
        getData(x){
            this.$store.dispatch('member/getdata',x);
        },
        editdata(){
            let data = {email:this.email,username:this.username,password:this.password,auth:this.auth,index:this.$route.params.index};
            this.$store.dispatch('member/editdata',data);
            this.$router.push('/admin/admhome/member/member_list');
        },
        remove(){
            this.dialogVisible=false;
            this.$store.dispatch('member/removedata',this.$route.params.index);
            this.$router.push('/admin/admhome/member/member_list');
        }
    },
    computed:{
        username:{
            get(){
                return this.$store.state.member.username
            },
            set (val){
                this.$store.commit('member/setusername',val)
            }
        },
        password:{
            get(){
                return this.$store.state.member.password
            },
            set (val){
                this.$store.commit('member/setpassword',val)
            }
        },
        email:{
            get(){
                return this.$store.state.member.email
            },
            set (val){
                this.$store.commit('member/setemail',val)
            }
        },
        auth:{
            get(){
                return this.$store.state.member.auth
            },
            set (val){
                this.$store.commit('member/setauth',val)
            }
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
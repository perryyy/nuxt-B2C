<template>
    <div class="member_add">
        <div class="title">會員編輯</div>
        <div class="content">
            <el-form  label-width="120px">
            <el-form-item label="姓名">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <!-- <el-form-item label="密碼">
                <el-input v-model="password"></el-input>
            </el-form-item> -->
            <el-form-item label="電子信箱">
                <el-input v-model="email"></el-input>
            </el-form-item>
            <el-form-item label="性別">
                <el-select v-model="sex" placeholder="請輸入性別" style="width:100%">
                    <el-option value="男">男</el-option>
                    <el-option value="女">女</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker value-format="yyyy-MM-dd" placeholder="請輸入生日" v-model="birth" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="權限">
                <el-select v-model="auth" placeholder="請選擇會員權限" style="width:'100%'">
                    <el-option label="會員" value="user"></el-option>
                    <el-option label="管理員" value="Admin"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="帳號開始日期">
                <el-date-picker value-format="yyyy-MM-dd" placeholder="請輸入日期" v-model="startdate" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="帳號終止日期">
                <el-date-picker value-format="yyyy-MM-dd" placeholder="請輸入日期" v-model="enddate" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="帳號是否啟用">
                <el-select v-model="status" placeholder="請輸入狀態" style="width:100%">
                    <el-option value="是">是</el-option>
                    <el-option value="否">否</el-option>
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
    methods:{
        back(){
            this.$router.push('/admin/admhome/member/member_list')
        },
        getData(x){
            this.$store.dispatch('member/getdata',x);
        },
        editdata(){
            let nowstatus;
            if(this.status=="是"){
                nowstatus='Y'
            }
            else{
                nowstatus='N'
            }
            let data = {username:this.username,password:this.password,email:this.email,auth:this.auth,sex:this.sex,birth:this.birth,btime:'0001-01-01T00:00:00',buser:0,mid:this.mid,startdate:this.startdate,enddate:this.enddate,status:nowstatus};
            this.$store.dispatch('member/editData',data);
            this.$router.push('/admin/admhome/member/member_list');
        },
        remove(){
            this.dialogVisible=false;
            let data = {mid:this.mid};
            // this.$store.dispatch('member/removedata',this.$route.params.index);
            this.$store.dispatch('member/removedata',data);
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
        // password:{
        //     get(){
        //         return this.$store.state.member.password
        //     },
        //     set (val){
        //         this.$store.commit('member/setpassword',val)
        //     }
        // },
        email:{
            get(){
                return this.$store.state.member.email
            },
            set (val){
                this.$store.commit('member/setemail',val)
            }
        },
        sex:{
            get(){
                return this.$store.state.member.sex
            },
            set (val){
                this.$store.commit('member/setsex',val)
            }
        },
        birth:{
            get(){
                return this.$store.state.member.birth
            },
            set (val){
                this.$store.commit('member/setbirth',val)
            }
        },
        auth:{
            get(){
                return this.$store.state.member.auth
            },
            set (val){
                this.$store.commit('member/setauth',val)
            }
        },
        mid:{
            get(){
                return this.$store.state.member.mid
            },
            set (val){
                this.$store.commit('member/setmid',val)
            }
        },
        startdate:{
            get(){
                return this.$store.state.member.startdate
            },
            set (val){
                this.$store.commit('member/setstartdate',val)
            }
        },
        enddate:{
            get(){
                return this.$store.state.member.enddate
            },
            set (val){
                this.$store.commit('member/setenddate',val)
            }
        },
        status:{
            get(){
                return this.$store.state.member.status
            },
            set (val){
                this.$store.commit('member/setstatus',val)
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
<template>
    <div class="memberdata">
        <div class="top">
            <div class="left">
                <div class="vip_level">
                    <div class="icon"><i class="el-icon-user-solid"></i> {{member.username}} <span class="badge badge-pill badge-warning">一般會員</span></div>
                    <div class="target">
                        <div class="content">
                            <p class="upgrade"><i class="el-icon-medal-1"></i>升級到銀卡</p>
                            <span class="codition">2個月內累積消費額達NT＄888 即可升級</span>
                        </div>
                        <div class="role">
                            <el-link type="primary" :underline="false">查看會員等級資料</el-link>
                        </div>
                    </div>
                </div>
                <div class="consumption">
                    <div class="edit_title"><i class="el-icon-medal-1"></i> 兩個月內累積消費額</div>
                    <div class="amount">
                        <div class="now_amt">NT $ {{now_amt}}</div>
                        <div class="target_amt" v-if="now_amt<=888">差NT $ {{target_amt-now_amt}}升級</div>
                    </div>
                    <el-progress color="#ffc107" :percentage=percentage  style="width:100%" class="progress_area"></el-progress>

                </div>
            </div>
            <div class="right">
                <div class="edit_memberdata">
                    <div class="icon"><i class="el-icon-edit"></i><span class="edit_title"> 編輯會員資料</span></div>
                    <el-form label-width="80px" label-position="left" class="dataform" :model="member" :rules="rules" ref="ruleForm">
                        <el-form-item label="姓名" prop="username">
                            <el-input v-model.trim="member.username"></el-input>
                        </el-form-item>
                        <el-form-item label="電郵" prop="email">
                            <el-input v-model.trim="member.email"></el-input>
                        </el-form-item>
                        <el-form-item label="手機號碼" prop="phone">
                            <el-input v-model.trim="member.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="性別" prop="sex">
                            <el-select v-model="member.sex" placeholder="請輸入性別" style="width:100%">
                                <el-option value="男">男</el-option>
                                <el-option value="女">女</el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="生日" prop="birth">
                            <el-date-picker value-format="yyyy-MM-dd" placeholder="請輸入生日" v-model="member.birth" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-form>
                   
                </div>
            </div>
        </div>
        <div class="bottom">
              <el-button type="info" size="medium" @click="saveChange('ruleForm')">儲存</el-button>
              <el-button type="success" size="medium" @click="changePsw()">修改密碼</el-button>
        </div>
    </div>
</template>
<script>
import {getUserDetails} from '@/plugins/api';
import {API} from '@/plugins/axios';
export default {
    data(){
        return{
            target_amt:888,
            member:[],
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
    mounted(){
        this.member=this.$store.state.member.member
        API('get',`Member/${this.$store.state.member.member.mid}`).then((res)=>{
           this.member = Object.assign({}, res.data);
        })
    },
    computed:{
        percentage(){
            let res = Number(((this.now_amt / this.target_amt)*100).toFixed(2));
            if (res >= 100){
                res =100
            }
            return res
        },
        mid:{
            get(){
                return this.$store.state.member.mid
            },
            set (val){
                this.$store.commit('member/setmid',val)
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
        now_amt(){
            return this.$store.state.order.memberOrder
        },
    },
    methods:{
        saveChange(formName){
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$store.dispatch('member/editData',this.member);
                this.$message({
                    message: '修改成功！',
                    type: 'success'
                });
            } else {
                his.$message.error('請確實填寫欄位');
                return false;
            }
            });
        },
        changePsw(){
            this.$emit('changeCom');
        }
    }
}
</script>
<style scoped>
    .memberdata{
        padding: 0 20px;
    }
    .top{
        display: flex;
        flex-direction: column;
    }
    .left{
        display: flex;
    }
    .vip_level,.consumption{
        width: 50%;
        padding: 0 20px; 
        margin-top: 2%;
    }
    .bottom{
        width: 100%;
        display: flex;
        justify-content: start;
    }
    .badge{
        color: white;
    }
    .target{
        margin-top: 2%;
        padding: 10px;
        background-color: #f8f8f8
    }
    .content{
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
    }
    .upgrade{
        color: #999999;
        font-weight: 700;
        font-size: 14px;
        width: 20%;
        margin:0;
        line-height: 14px;
    }
    .codition{
        color: #333333;
        font-size: 14px;
        line-height: 14px;
    }
    .role{
        margin-top: 2%;
        color: #337ab7;
    }
    .edit_memberdata{
        margin-top: 3%;
    }
    .edit_title{
        font-size: 18px;
        color: #5b5b5b;
        font-weight: 600;
    }
    .icon{
        font-size: 20px;
        color: #5b5b5b;
        font-weight: 600;
    }
    .dataform{
        margin-top: 3%;
    }
    .amount{
        margin-top: 2%;
        padding-right: 1%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }
    .target_amt{
        color: #999999;
    }
    .progress_area{
        margin-top: 2%;
    }
    /deep/.el-progress-bar{
        padding: 0;
        margin: 0;
    }
    /deep/.el-progress__text{
        margin-top: 10px;
    }
    @media (max-width: 415px) {
        .left{
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .right{
            margin-top: 2%;
        }
        .content{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        .upgrade{
            width: 100%;
            margin-bottom: 4%;
        }
        .vip_level,.consumption{
            padding: 0 5px; 
            margin-top: 4%;
            width: 100%;
        }
        .memberdata{
            padding: 0 ;
        }
    }
</style>
<template>
    <div class="memberdata">
        <div class="top">
            <div class="left">
                <div class="vip_level">
                    <div class="icon"><i class="el-icon-user-solid"></i> {{username}} <span class="badge badge-pill badge-warning">一般會員</span></div>
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
                <div class="edit_memberdata">
                    <div class="icon"><i class="el-icon-edit"></i><span class="edit_title"> 編輯會員資料</span></div>
                    <el-form label-width="80px" label-position="left" class="dataform">
                        <el-form-item label="姓名">
                            <el-input v-model="username"></el-input>
                        </el-form-item>
                        <el-form-item label="電郵">
                            <el-input v-model="email"></el-input>
                        </el-form-item>
                        <el-form-item label="手機號碼">
                            <el-input v-model="phone"></el-input>
                        </el-form-item>
                        <el-form-item label="密碼">
                            <el-input v-model="password"></el-input>
                        </el-form-item>
                        <el-form-item label="性別">
                            <el-input v-model="sex"></el-input>
                        </el-form-item>
                        <el-form-item label="生日">
                            <el-input v-model="birth"></el-input>
                        </el-form-item>
                    </el-form>
                   
                </div>
            </div>
            <div class="right">
                <div class="edit_title"><i class="el-icon-medal-1"></i> 兩個月內累積消費額</div>
                <div class="amount">
                    <div class="now_amt">NT $ {{now_amt}}</div>
                    <div class="target_amt">差NT $ {{target_amt-now_amt}}升級</div>
                </div>
                <el-progress color="#ffc107" :percentage=percentage  style="width:100%" class="progress_area"></el-progress>

            </div>
        </div>
        <div class="bottom">
              <el-button type="info" size="medium">儲存</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            phone:'',
            sex:'',
            birth:'',
            now_amt:85,
            target_amt:888
        }
    },
    computed:{
        percentage(){
            let res = Number(((this.now_amt / this.target_amt)*100).toFixed(2));
            return res
        },
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
    }
}
</script>
<style scoped>
    .memberdata{
        padding: 0 20px;
    }
    .top{
        display: flex;
    }
    .left,.right{
        width: 50%;
        padding: 0 20px;
    }
    .bottom{
        width: 100%;
        display: flex;
        justify-content: end;
        /* padding-right: 2%; */
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
        margin-top: 6%;
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
        margin-top: 4%;
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
    @media (max-width: 415px) {
        .left,.right{
            width: 100%;
        }
        .top{
            display: flex;
            flex-direction: column;
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
    }
</style>
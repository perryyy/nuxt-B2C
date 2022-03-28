<template>
    <div class="memberdata">
        <div class="border">
            <div class="title">顧客資料</div>
            <div class="content">
                <div class="username">
                    <span class="spantitle">顧客名稱</span>
                    <input type="text" class="form-control" placeholder="Username" v-model="username">
                </div>
                <div class="usermail">
                    <span class="spantitle">電子信箱</span>
                    <input type="text" class="form-control" placeholder="Email" v-model="email">
                </div>
                <div class="userphone">
                    <span class="spantitle">電話號碼</span>
                    <input type="text" class="form-control" placeholder="Phone" v-model="phonenumber">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email:'perry@gmail.com'
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
        phonenumber:{
            get(){
                return this.$store.state.member.phonenumber
            },
            set (val){
                this.$store.commit('member/setphonenumber',val)
            }
        }, 
    }
}
</script>
<style scoped>
    .memberdata{
        padding: 0 10px;
    }
    .title{
        width: 100%;
        background-color: #e4e2e2;
        font-size: 16px;
        text-align: left;
        line-height: 16px;
        padding: 10px;
        font-weight: 600;
    }
    .content{
        padding:20px;
        text-align: left;
    }
    .form-control{
        margin-top: 1%;
    }
    .username,.usermail,.userphone{
        margin-top: 2%;
    }
</style>
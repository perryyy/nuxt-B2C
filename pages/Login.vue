<template>
    <div class="login">
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" :stretch='true'>
            <el-tab-pane label="註冊會員" name="register"><memberRegister /></el-tab-pane>
            <el-tab-pane label="會員登入" name="login"><memberLogin /></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import memberRegister from '../components/member/register.vue';
import memberLogin from '../components/member/login.vue';
export default {
    layout:"prod_layout",
    data() {
      return {
        activeName: 'login'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        memberRegister,
        memberLogin
    }
}
</script>
<style scoped>
    .login{
        margin-top: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
    @media (max-width: 415px) {
        .login{
            margin-top: 12%;
        }
    }
</style>
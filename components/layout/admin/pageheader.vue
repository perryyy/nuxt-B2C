<template>
    <div class="pageheader">
        <div class="left">
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <!-- <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item> -->
            <el-breadcrumb-item v-for="(item,index) in routerData":key="index" :to="item.path" >{{item.meta.title||item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="right">
            <el-dropdown>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" ></el-avatar>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">登出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default{
    methods:{
        logout(){
            let data = {email:'',username:'',password:'',auth:'none'};
            this.$store.dispatch('member/setdata',data);
            this.$router.push("/Login");
            // localStorage.removeItem('username');
            // localStorage.removeItem('password');
            localStorage.removeItem('device');
        }
    },
    data(){
        return{
            routerData:[]
        }
    },
    mounted(){
        this.routerData=this.$route.matched;
    },
    watch:{
        $route(){
            this.routerData=this.$route.matched;
        }
    }
}
</script>
<style scoped>
    .pageheader{
        width: 100%;
        padding:  20px;
        height: 11vh;
        background-color: 	#F0F0F0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
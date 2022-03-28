<template>
    <div class="menunav">
        <div class="top">
            <span>Backstage</span>
            <el-divider></el-divider>
        </div>
        <div class="bottom">
            <el-menu class="el-menu-vertical-demo menu" :collapse="IsCollapse" :collapse-transition='false'>
                <el-menu-item index="1" @click="$router.push('/admin/admhome/admMember')">
                    <i class="el-icon-user menu-item" ></i>
                    <span slot="title" class="menu-item">會員管理</span>
                </el-menu-item>
                <el-menu-item index="2"  @click="$router.push('/admin/admhome/admProd')">
                    <i class="el-icon-present menu-item"></i>
                    <span slot="title" class="menu-item">商品管理</span>
                </el-menu-item>
                <el-menu-item index="3"  @click="$router.push('/admin/admhome/admOrder')">
                    <i class="el-icon-copy-document menu-item"></i>
                    <span slot="title" class="menu-item">訂單管理</span>
                </el-menu-item>
                <el-menu-item index="4"  >
                    <i class="el-icon-tickets menu-item"></i>
                    <span slot="title" class="menu-item">顧客建議</span>
                </el-menu-item>
            </el-menu>
        </div>


    </div>
</template>
<script>
export default{
    data(){
        return{
            IsCollapse:false
        }
    }
}
</script>
<style scoped>
    .menunav{
        min-height: 100vh;
        width: 100%;
    }
    /deep/.el-menu{
        /* height: 100vh; */
        /* padding: 0 20px; */
    }
    .menu-item{
        color:	#6C6C6C;
    }
    .top{
        text-align: center;
        padding-top: 12%;
        height: 10%;
    }
</style>
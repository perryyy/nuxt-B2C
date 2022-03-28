<template>
    <div class="admhome">
       <nuxt-child/> 
    </div>
</template>
<script>
export default{
    layout: "adminLayout",
    middlemare:'metaTitle',
    meta:{title:'管理員首頁'},
    created(){
        let token = this.$store.state.member.token;
        if(token!='Admin'){
            this.$router.push('/Login');
        }
        this.$router.push('/admin/admhome/admMember')
    },
}
</script>
<style scoped>

</style>
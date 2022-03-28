<template>
    <div class="admmember">
         <nuxt-child/> 
    </div>
</template>
<script>
export default {
    created(){
        this.$router.push('/admin/admhome/member/member_list')
    }
}
</script>
<style scoped>
    .admmember{
        padding: 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
    }
</style>
<template>
    <div class="adm_performance">
      <nuxt-child/> 
    </div>
</template>
<script>
export default {
    created(){
        this.$router.push('/admin/admhome/performance/performance_list')
    }
}
</script>
<style scoped>
    .adm_performance{
        padding: 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
    }
   
</style>
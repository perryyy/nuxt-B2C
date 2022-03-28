<template>
    <div class="adm_prod">
      <nuxt-child/> 
    </div>
</template>
<script>
export default {
    created(){
        this.$router.push('/admin/admhome/product/prod_list')
    }
}
</script>
<style scoped>
    .admprod{
        padding: 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
    }
   
</style>
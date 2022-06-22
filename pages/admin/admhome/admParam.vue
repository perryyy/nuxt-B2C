<template>
    <div class="admparam">
         <nuxt-child/> 
    </div>
</template>
<script>
export default {
    created(){
        this.$router.push('/admin/admhome/param/param_list')
    }
}
</script>
<style scoped>
    .admparam{
        padding: 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
    }
</style>
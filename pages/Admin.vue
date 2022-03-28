<template>
    <div class="admin">
        <nuxt-child/> 
    </div>
</template>
<script>
export default {
    layout:'adminLayout',
    created(){
        this.$router.push('/admin/admhome')
    },
}
</script>
<style scoped>

</style>
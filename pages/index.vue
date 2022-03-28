<template>
    <div class="home">
        <nuxt-child/> 
    </div>
</template>
<script>
export default {
    created(){
        this.$router.push('/home/products')
    },
}
</script>
<style scoped>

</style>
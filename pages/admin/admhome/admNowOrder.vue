<template>
    <div class="currentOrder">
        <nuxt-child/> 
    </div>
</template>
<script>
export default{
    created(){
        this.$router.push('/admin/admhome/currentOrder/order_list')
    }
}
</script>
<style scoped>
    .currentOrder{
        padding: 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
    }
</style>
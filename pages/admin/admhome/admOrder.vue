<template>
    <div class="admorder">
        <nuxt-child/> 
    </div>
</template>
<script>
export default {
    created(){
        this.$router.push('/admin/admhome/order/order_list')
    }
}
</script>
<style scoped>
    .admorder{
        padding: 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
    }
</style>
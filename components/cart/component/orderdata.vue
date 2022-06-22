<template>
    <div class="orderdata">
        <div class="border">
            <div class="title">訂單備註</div>
            <div class="content">
                <textarea class="form-control" rows="10" placeholder="有什麼想跟賣家說的嗎？" v-model="notes"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        notes:{
            get () {
                return this.$store.state.order.notes
            },
            set (value) {
                this.$store.commit('order/setNotes', value)
            }
        }
    }
}
</script>
<style scoped>
    .orderdata{
        padding: 0 10px;
    }
    .title{
        width: 100%;
        background-color: #e4e2e2;
        font-size: 16px;
        text-align: left;
        line-height: 16px;
        padding: 10px;
        font-weight: 600;
    }
    .content{
        padding:20px;
        text-align: left;
    }
    @media screen and (max-width: 415px){
        .orderdata{
            padding: 0;
        }
    }
</style>
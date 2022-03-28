<template>
    <div class="orderdata">
        <div class="border">
            <div class="title">訂單備註</div>
            <div class="content">
                <textarea class="form-control" rows="3" placeholder="有什麼想跟賣家說的嗎？"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
export default {

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
</style>
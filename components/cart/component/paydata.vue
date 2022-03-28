<template>
    <div class="paydata">
        <div class="border">
            <div class="title">
                <span>付款資料</span> 
                <span>附加費：NT＄7</span> 
            </div>
            <div class="content">
               <span>以選擇的付款方式：請於30分鐘內匯款</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .paydata{
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
        display: flex;
        justify-content: space-between;
    }
    .content{
        padding:20px;
        text-align: left;
        font-weight: 600;
        font-size: 12px;

    }
</style>
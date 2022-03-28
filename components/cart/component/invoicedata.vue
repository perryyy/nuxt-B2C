<template>
    <div class="invoicedata">
        <div class="border">
            <div class="title">索取資料</div>
            <div class="content">
               <div class="invoicetype">
                   <span class="content_title">發票類型</span>
                    <select class="form-control">
                        <option>雲端發票</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
               </div>
               <div class="invoicecarrier">
                   <span class="content_title">載具類型</span>
                    <select class="form-control" >
                        <option>會員載具(發票資訊會寄到您的電郵)</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .invoicedata{
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
        display: flex;
    }
    .invoicetype,.invoicecarrier{
        width: 50%;
        margin: 0 2%;
    }
    .content_title{
        font-size: 12px;
        font-weight: 600;
    }
</style>
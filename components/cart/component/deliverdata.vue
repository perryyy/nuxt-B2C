<template>
    <div class="deliverdata">
        <div class="border">
            <div class="title"><span>送餐資料</span><span>運費：NT＄{{freight}}</span></div>
            <div class="content">
               <div class="check">
                  <span class="check_msg">以選擇的送貨方式：於買家指定地點送餐</span>
                  <el-checkbox v-model="checked">收件人資料與顧客資料相同</el-checkbox>
               </div>
               <div class="username">
                   <span >收件人姓名</span>
                   <input type="text" class="form-control">
               </div>
               <div class="userphone">
                   <span >收件人電話號碼</span>
                   <input type="text" class="form-control">
               </div>
               <el-divider></el-divider>
               <div class="store">
                    <span>選擇地點</span>
                    <el-button type="info">搜尋地點</el-button>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
import {  mapGetters } from 'vuex';
export default {
    data(){
        return{
            checked:false
        }
    },
    computed:{
        ...mapGetters({
            subtotal: 'cart/totalAmt'
        }),
        freight(){
            if (this.subtotal >= 488){
                return 0
            }
            else{
                return 60
            }
        }
    }
}
</script>
<style scoped>
    .deliverdata{
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
    }
    .check{
        font-size: 12px;
        display: flex;
        flex-direction: column;
    }
    .check_msg{
        width: 100%;
        margin: 5px 0;
        font-weight: 600;
    }
    .form-control{
        margin-top: 1%;
    }
    .username,.userphone{
        margin-top: 2%;
        font-size: 12px;
    }
    .store{
        font-size: 12px;
        display: flex;
        flex-direction: column;
        font-weight: 600;
    }
    .store /deep/.el-button{
        width: 100%;
        margin-top: 2%;
    }
</style>
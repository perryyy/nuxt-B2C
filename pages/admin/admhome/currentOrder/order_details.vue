<template>
    <div class="order_details">
        <div class="header">
            <div class="title" >
                訂單明細
            </div>
        </div>
        <div class="main">
            <div class="Product">
                <productList />
                <el-divider></el-divider>
            </div>
            <div class="Details">
                <orderDetails />
                <el-divider></el-divider>
            </div>
            <div class="btns">
                <el-button @click="back">回上頁</el-button>
                <el-button @click.native="accept()" type="primary">接單</el-button>
                <el-button @click.native="refuse()" type="danger">拒絕</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import productList from '@/components/AdmOrder/productList';
import orderDetails from '@/components/AdmOrder/orderDetails';
export default{
    middlemare:'metaTitle',
    meta:{title:'訂單明細'},
    data(){
        return{
            
        }
    },
    created(){
       
    },
    computed:{
       
    },
    methods:{
        back(){
            this.$router.push('/admin/admhome/currentOrder/order_list')
        },
        accept(){
            this.$store.dispatch('admOrder/Accept',this.$store.state.admOrder.AdmOrder[0]);
            this.$router.push('/admin/admhome/currentOrder/order_list')
        },
        refuse(){
            console.log(this.$store.state.admOrder.AdmOrder[0])
            this.$store.dispatch('admOrder/Refuse',this.$store.state.admOrder.AdmOrder[0]);
            this.$router.push('/admin/admhome/currentOrder/order_list')
        },
    },
    components:{
        productList,
        orderDetails
    }
}
</script>
<style scoped>
    .order_details{
        padding: 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
        min-height: 83vh;
    }
    .title{
        font-weight: 600;
        display: flex;
        align-items: center;
    }
    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }   
    .main{
        display: flex;
        flex-direction: column;
    }
    .Product,.Details{
        width: 100%;
    }
    .btns{
        width: 90%;
        margin-right: 10%;
        text-align: right;
    }
</style>
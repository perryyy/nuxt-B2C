<template>
    <div class="prod_card">
        <div class="card" v-for="(item,index) in products" :key="index" @click="goProd(item)">
            <div class="top">
                <img :src="'data:image/jpg;base64,'+item.img" :height="height" :width="width" alt="這裡是商品圖片">
                <div class="sold_out" v-if="item.qty<1"><span><el-tag type="info">售完</el-tag></span></div>
            </div>
            <div class="bottom">
                <div class="font prod_name">{{item.name}}</div>
                <div class="font prod_price" :class="{price:item.sale}">NT＄{{item.price}}</div>
                <div class="font prod_price" v-if="item.sale">NT＄{{item.price - item.sale}}</div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    data(){
        return{
            height:300,
            width:250
        }
    },
    created(){
        let isMobile = this.$store.state.setting.isMobile;
        if(isMobile===false){
            this.height=300;
            this.width=250;
        }
        else{
            this.height=120;
            this.width=120;
        }
    },
    props:{
        products:Array
    },
    methods:{
        goProd(x){
            this.$store.commit('product/setLoading');
            this.$axios.get(`https://localhost:44377/api/product/${x.pid}`).then(res=>{
                this.$store.commit('product/reflasgProduct',res.data);
                this.$router.push("/home/product");
            })
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    }

}
</script>
<style scoped>
    .prod_card{
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: left; 
        cursor: pointer;
        width: 100%;
    }
    .card{
        padding: 2%;
        min-width: 28%;
        max-width: 28%;
        margin:0 1%;
        border: none;
        position: relative;
        word-break: break-all;
    }
    .font{
        text-align: center;
        font-size: 14px;
        letter-spacing: 0.5px;
    }
    .prod_price{
        font-weight: 500;
        color: gray;
    }
    .price{
        text-decoration:line-through;
    }
    .bottom{
        margin-top: 4%;
    }
    .top{
    }
    .sold_out{
        position: absolute;
        bottom: 95px;
        right: 25px;
        z-index: 100;
    }
    /deep/.el-tag--info{
        background-color: black;
        color: white;
        font-weight: 700;
        border: none;
    }
    @media (max-width: 415px) {
        .card{
            min-width: 48%;
            max-width: 48%;
        }
        .sold_out{
            bottom: 75px;
            right: 40px;
        }
    }
</style>
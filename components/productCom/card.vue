<template>
    <div class="prod_card">
        <div class="card" v-for="(item,index) in products" :key="index" @click="goProd(item)">
            <div class="top">
                <img :src="image">
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
            image:'https://fakeimg.pl/250x300/'
        }
    },
    created(){
        let isMobile = this.$store.state.setting.isMobile;
        if(isMobile===false){
            this.image='https://fakeimg.pl/250x300/'
        }
        else{
            this.image='https://fakeimg.pl/120x120/'
        }
    },
    props:{
        products:Array
    },
    methods:{
        goProd(x){
            console.log(x);
            this.$store.dispatch('product/changeproduct',x);
            this.$router.push("/home/product");
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
    @media (max-width: 415px) {
        .card{
            min-width: 48%;
            max-width: 48%;
        }
    }
</style>
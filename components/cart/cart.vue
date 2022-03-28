<template>
    <div class="cartarea">
        <div class="cart_list" v-for="(item,index) in carts" :key="index">
            <div class="item_deatil" >
                <div class="img">
                    <img src="https://fakeimg.pl/60x60/">
                </div>
                <div class="item" >
                    <div class="item_name">
                        {{carts[index].itemname}}
                    </div>
                    <div class="item_price">
                        NT＄ {{carts[index].itemprice-carts[index].itemsale}}
                    
                    </div>       
                </div>
                <div class="cancel">
                    <i class="el-icon-circle-close" @click="removercart(index)"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        // item_name(){
        //     return this.$store.state.cart.carts[0].itemname
        // },
        // item_price(){
        //     return this.$store.state.cart.carts[0].itemprice
        // }
    },
    data(){
        return{
            itemname:'123456'
        }
    },
    props:{
        carts:Array
    },
    created(){
        console.log(this.carts)
    },
    methods:{
        removercart(x){
            console.log(x);
            this.$store.dispatch('cart/removeCart',x);
        }
    },
    
}
</script>
<style scoped>
.cartarea{
    width: 100%;
    border-top: solid 1px #dddddd;
    border-bottom: solid 1px #dddddd;
    padding:20px 0 20px  20px;
    /* max-height: 70vh; */
    margin-bottom: 20%;
}
.img{
    width: 25%;
    display: flex;
    text-align: center;
    align-items: center;
}
.item{
    /* width: 60%; */
}
.item_name,.item_price{
    width: 100%;
    color: black;
    line-height: 18px;
    font-size: 12px;
    margin-bottom: 1%;
}
.item_deatil{
    width: 100%;
    display: flex;
}
.item_price{
    font-weight: 600;
}
.cart_list{
    width: 100%;
    display: flex;
    margin-top: 4%;
    height: inherit;
}
.cancel{
    margin-left: 4%;
    cursor: pointer;
}
</style>

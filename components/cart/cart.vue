<template>
    <div class="cartarea">
        <div  v-for="(item,index) in carts" :key="index">
            <div class="cart_list" v-for="(content,i) in item.pid" :key="i">
                <div class="item_deatil" >
                    <div class="img">
                        <img :src="'data:image/jpg;base64,'+content.img" class="img_size">
                    </div>
                    <div class="item" >
                        <div class="item_name">
                            {{content.name}}
                        </div>
                        <div class="item_price">
                            NT＄ {{content.price-content.sale}}
                        </div>       
                    </div>
                    <div class="qty">
                        Ｘ{{item.qty}}
                    </div>
                    <div class="cancel">
                        <i class="el-icon-circle-close" @click="removercart(item.cid)"></i>
                    </div>
                </div>
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
    props:{
        carts:Array
    },
    created(){
        console.log(1,this.carts)
    },
    methods:{
        removercart(x){
            console.log(x);
            this.$store.dispatch('cart/removeCart',x);
        }
    },
    computed:{
    }
    
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
    width: 50%;
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
    cursor: pointer;
    display: flex;
    text-align: center;
    align-items: center;
}
.qty{
    width: 15%;
    display: flex;
    text-align: center;
    align-items: center;
}
.img_size{
    width: 60px;
    height: 60px;
}
</style>

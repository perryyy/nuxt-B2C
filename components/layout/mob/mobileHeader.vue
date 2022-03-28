<template>
    <div class="mobileHeader">
        <div class="bar" @click="drawer = true" >
            <i class="el-icon-s-unfold"></i>
        </div>
        <div class="search">
            <i class="el-icon-search" @click="Searchdrawer = true"></i>
        </div>
        <div class="title" @click="home">Perry</div>
        <div class="cart" v-if="auth==='user'" @click="Cartdrawer = true">
            <el-badge :value="storeCart.length" :max="5" class="item" v-if="storeCart.length">
                <i class="el-icon-goods"></i> 
            </el-badge>    
            <div v-else>
                <i class="el-icon-goods"></i> 
            </div>
        </div>
        <div class="user" v-if="auth==='user'" @click="$router.push('/member')"><i class="el-icon-user"></i></div>
        <div class="home" v-if="auth==='none'" @click="$router.push('/login')"><i class="el-icon-s-home"></i></div>
        <div class="Searchdrawer">
            <el-drawer
            title=""
            :visible.sync="Searchdrawer"
            :modal-append-to-body='false'
            :append-to-body="true"
            :direction="Searchdirection">
                <prettyinput @changeType='changeType'/>
            </el-drawer>
        </div>
        <div class="menudrawer">
            <el-drawer
            :size="size"
            :with-header="false"
            :visible.sync="drawer"
            :direction="direction"
            :modal-append-to-body='false'
            :append-to-body="true">
            <mobilenav />
            </el-drawer>
        </div>
        <div class="Cartdrawer">
            <el-drawer
            :size="size"
            title="購物車"
            :visible.sync="Cartdrawer"
            :modal-append-to-body='false'
            :append-to-body="true"
            :direction="Cartdirection">
            <div v-if="storeCart.length===0" class="cart_item cartisnull">您的購物車是空的</div>
            <div v-else class="cart_item"><cart :carts="storeCart"/></div>
            <div class="buy_btn_area" v-if="storeCart.length!=0"><el-button type="info" class="buy_btn" @click="buy(storeCart)">前往結帳</el-button></div>
            </el-drawer>
        </div>
    </div>
</template>
<script>
import prettyinput from '../preetyinput.vue';
import mobilenav from './mobilenav.vue';
import cart from '../../cart/mob/mobilecart.vue';
export default {
    data(){
        return{
            Searchdrawer: false,
            Searchdirection: 'ttb',
            drawer: false,
            direction: 'ltr',
            Cartdrawer: false,
            Cartdirection: 'rtl',
            size:'60%'
        }
    },
    components:{
        prettyinput,
        mobilenav,
        cart
    },
    methods:{
        changeType(z){
            this.Searchdrawer=z;
        },
        home(){
            this.$router.push('/home/products');
            this.$store.dispatch('product/allitem');
        },
        buy(a){
            console.log(a);
            this.$router.push('/home/buy')
        },
    },
    computed:{
        storeCart(){
            return this.$store.state.cart.carts
        },
        auth(){
            return this.$store.state.member.auth
        }
    }
}
</script>
<style scoped>
    .mobileHeader{
        display: flex;
        width: 100%;
        background-color: lightgray;
        min-height: 6vh;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }
    .bar{
        font-size: 24px;
        color: white;
        width: 8%;
    }
    .cart{
        font-size: 24px;
        color: white;
        width: 8%;
        text-align: right;
    }
    .home{
        font-size: 24px;
        color: white;
        width: 8%;
        text-align: right;
    }
    .user{
        font-size: 24px;
        color: white;
        width: 8%;
        text-align: right;
    }
    .search{
        font-size: 22px;
        color: white;
        width: 8%;
    }
    .title{
        font-weight: 700;
        color: white;
        text-align: center;
        font-size: 22px;
        width: 60%;
        font-style: italic;
    }
    .buy_btn_area{
        width: 100%;
        position: fixed;
        bottom: 0;
        padding:10px;
    }
    .buy_btn{
        width: 56%;
        font-weight: 600;
    }
    /deep/.el-drawer__header{
        margin-bottom: 12px;
        font-weight: 700;
        padding-left: 10px;
    }
    .cartisnull{
        padding: 10px;
    }
</style>
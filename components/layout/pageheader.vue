<template>
    <div class="pageheader">
        <div class="container d-flex justify-content-between">
            <div class="header_left">
                <div class="logo" @click="home">
                    <i class="el-icon-eleme"></i>
                </div>
                <div class="all" @click="changetitle('所有餐點')">
                    所有餐點
                </div>
                <div class="discount" @click="changetitle('超優惠組合')">
                    超優惠組合
                </div>
            </div>
            <div class="header_right">
                <div class="search"  @click="Searchdrawer = true"><i class="el-icon-search" ></i></div>
                <div class="cart" v-if="auth==='user'" @click="Cartdrawer = true">
                    <el-badge :value="storeCart.length" :max="5" class="item" v-if="storeCart.length">
                        <i class="el-icon-goods"></i> 
                    </el-badge>    
                    <div v-else>
                        <i class="el-icon-goods"></i> 
                    </div>
                </div>
                <div class="user" v-if="auth==='user'" @click="$router.push('/member')"><i class="el-icon-user"></i> </div>
                <div class="user" v-if="auth==='none'" @click="$router.push('/login')"><i class="el-icon-s-home"></i> </div>
            </div>
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
            <div class="Cartdrawer">
                <el-drawer
                title="購物車"
                :visible.sync="Cartdrawer"
                :modal-append-to-body='false'
                :append-to-body="true"
                :direction="Cartdirection">
                <div v-if="storeCart.length===0" class="cart_item">您的購物車是空的</div>
                <div v-else class="cart_item"><cart :carts="storeCart"/></div>
                <div class="buy_btn_area" v-if="storeCart.length!=0"><el-button type="info" class="buy_btn" @click="buy(storeCart)">前往結帳</el-button></div>
                </el-drawer>
            </div>
        </div>
    </div>
</template>
<script>
import prettyinput from './preetyinput.vue';
import cart from '../cart/cart.vue';
export default{
    data(){
        return{
            Searchdrawer: false,
            Searchdirection: 'ttb',
            Cartdrawer: false,
            Cartdirection: 'rtl',
        }
    },
    components:{
        prettyinput,
        cart
    },
    methods:{
        changetitle(x){
            this.$store.dispatch('setting/changeTitle',x);
            this.$store.dispatch('product/allitem');
        },
        buy(a){
            console.log(a);
            this.$router.push('/home/buy')
        },
        changeType(z){
            this.Searchdrawer=z;
        },
        home(){
            this.$router.push('/home/products');
            this.$store.dispatch('product/allitem');
        }
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
    .pageheader{
        width: auto;
        background-color: lightgray;
        min-height: 8vh;
    }
    .el-icon-eleme{
        width: 50px;
        height: 50px;
        color: white;
        display: flex;
        justify-content: center; 
        align-items: center; 
        font-size: 24px;
    }
    .header_left{
        display: flex;
        width: 50%;
    }
    .all,.discount{
        color: white;
        display: flex;
        justify-content: center; 
        align-items: center; 
        font-size: 16px;
        width: 20%;
        cursor: pointer;
    }
    .all:hover,.discount:hover,.search:hover,.cart:hover,.user:hover{
        color:	lightgoldenrodyellow;
    }
    .header_right{
        display: flex;
        justify-content: end;
        width: 50%;
    }
    .cart,.user,.search{
        color: white;
        display: flex;
        justify-content: center; 
        align-items: center; 
        font-size: 24px;
        width: 8%;
        cursor: pointer;
    }
    .Searchdrawer /deep/.el-drawer__header,.Searchdrawer /deep/.el-drawer__body{
        padding: 0 200px ;
        z-index: 200;

    }
    .Cartdrawer /deep/.el-drawer__header{
        font-size: 26px;
        font-weight: 700;
        border-bottom: solid 1px #dddddd;
        padding-bottom: 16px;
    }
    .cart_item{
        padding: 0 16px;
        max-height: 75vh;
        overflow: auto;
        overflow-x:hidden;
    }
    .buy_btn_area{
        width: 100%;
        position: fixed;
        bottom: 0;
        padding:20px 30px;
    }
    .buy_btn{
        width: 28%;
        font-weight: 600;
    }
    /deep/.el-drawer__header{
        font-weight: 600;
        font-size: 30px;
        margin-bottom:0;
        padding: 20px;
    }
    .logo{
        cursor: pointer;
    }
    @media screen and (max-width: 415px){
        .pageheader{
            width: 100vw;
        }
    }
</style>
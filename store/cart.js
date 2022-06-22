import {getCart,AddCart,RemoveCart,AddOrder,AddCarts} from  '../plugins/api';
import {API} from '@/plugins/axios';
export const state = () =>({
    carts:[],
    finallytotal:0
});

export const actions ={
    setfinallytotal({commit},data){
        commit('Setfinallytotal',data);
    },
    clearCart({commit}){
        commit('ClearCart');
    },
    //API
    getCart({commit},data){
        API('get','Cart',data).then((res)=>{
            commit('SetCart',res.data);
        })
    },
    addCart({commit},data){
        API('post','Cart',data).then((res)=>{
            commit('ReflashCart',res.data);
        })
    },
    removeCart({commit},data){
        API('delete',`Cart/${data}`).then((res)=>{
            commit('ReflashCart',res);
        })
    },
    buy({commit},data){
        API('post','order',data).then((res)=>{
            commit('ReflashCart',res.data);
        })
    },
    addCarts({commit},data){
        API('post',`Cart/AddCarts?MID=${data.MID}`,data).then((res)=>{
            commit('ReflashCart',res.data);
        })
    },
};

export const mutations ={
    AddCarts(state,data){
        for(let i=0;i<data.length;i++){
            state.carts.push(data[i]);
        }
    },
    AddCart(state,data){       
            state.carts.push(data);
    },
    RemoveCart(state,data){
        state.carts.splice(data,1);
    },
    Setfinallytotal(state,data){
        state.finallytotal=data;
    },
    ClearCart(state){
        state.carts=[];
    },
    //API
    SetCart(state,data){
        state.carts=data;
    },
    ReflashCart(state,data){
        state.carts=data.data;
    }
};

export const getters ={
    totalAmt: (state) => {
       let amt =0;
       for(let i =0 ; i< state.carts.length;i++){
            amt += ((state.carts[i].pid[0].price - state.carts[i].pid[0].sale)*state.carts[i].qty)
       }
        return amt
    },
    cartslength: (state) =>{
        let len=0
        for(let i=0;i<state.carts.length;i++){
            len+=state.carts[i].qty
        }
        return len
    },
    AllCarts: (state) =>{
        let newArr=[];
            let nowCarts =state.carts;  
            for (let i =0; i<nowCarts.length;i++){
                for(let j =0; j<nowCarts[i].pid.length;j++){
                    nowCarts[i].pid[j].nowqty=nowCarts[i].qty
                    nowCarts[i].pid[j].cid=nowCarts[i].cid
                }
                newArr.push(nowCarts[i].pid)
            }
            var firstClean = [].concat.apply([], newArr);
            var SecClean =[].concat.apply([], firstClean);
            return SecClean
    },
    freight:()=>{
        if (getters.totalAmt >= 488){
            return 0
        }
        else{
            return 60
        }
    }
};
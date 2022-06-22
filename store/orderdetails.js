import {getOrderDetails} from '@/plugins/api';
import {API} from '@/plugins/axios';
export const state = () =>({
    orderdetails:[]
});

export const actions ={
    getData({commit},data){
        API('get',`Orderdetails/${data}`).then((res)=>{
            commit('ReflashOrderDetails',res.data)
        })
    },
};

export const mutations ={
    ReflashOrderDetails(state,data){
        state.orderdetails=data;
    },
};

export const getters ={
    
};
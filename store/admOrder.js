import {AdmGetOrder,AdmAccept,AdmRefuse,AdmGetHistoryOrder,AdmRemoveHistoryOrder,AdmSearchOrder,AdmSearchHistoryOrder} from '@/plugins/api';
import {API} from '@/plugins/axios';
export const state = () =>({
    AdmOrder:[],
    NowOID:0
});

export const actions ={
    getCurrentOrder({commit}){
        API('get','AdmCurrentOrder').then((res)=>{
            commit('setData',res.data);
        })
    },
    Accept({commit},data){
        API('put',`AdmCurrentOrder/${data.oid}`,data.oid).then((res)=>{
            commit('setData',res.data);
        })
    },
    Refuse({commit},data){
        API('delete',`AdmCurrentOrder/${data.oid}`).then((res)=>{
            commit('setData',res.data);
        })
    },
    getHistoryOrder({commit}){
        API('get','AdmOrder').then((res)=>{
            commit('setData',res.data);
        })
    },
    async removeHistoryOrder({commit},data){
        await API('delete',`AdmOrder/${data.oid}`).then((res)=>{
            commit('setData',res.data);
        })
        await API('get','AdmOrder').then((res)=>{
            commit('setData',res.data);
        })
    },
    searchitem({commit},data){
        API('get',`AdmCurrentOrder/?name=${data}`).then((res)=>{
            commit('setData',res.data);
        })
    },
    searchHistoryOrder({commit},data){
        API('get',`AdmOrder/?name=${data}`).then((res)=>{
            commit('setData',res.data);
        })
    },
};

export const mutations ={
    setData(state,data){
        state.AdmOrder=data
    },
    setOID(state,data){
        state.NowOID=data.oid
    },
};

export const getters ={
    
};
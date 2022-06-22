import {getSort,getCategoryGroup,getAllParam,GetParam,EditParam,removeParam} from '../plugins/api';
import {API} from '@/plugins/axios';
export const state = () =>({
   productSort:[],
   PageShow:[],
   category:[],
   Foods:[],
   headerItem:[],
   Delivery:[],
   CategoryGroup:[],
   AllParam:[],
   nowParam:[]
});

export const actions ={
    getProdSort({commit},data){
        getSort(data).then(res=>{
            commit('setSort',res.data);
        })
    },
    getPageShow({commit},data){
        getSort(data).then(res=>{
            commit('setPage',res.data);
        })
    },
    getCategory({commit},data){
        getSort(data).then(res=>{
            commit('setCategory',res.data);
        })
    },
    getFood({commit},data){
        getSort(data).then(res=>{
            commit('setFood',res.data);
        })
    },
    getHeader({commit},data){
        getSort(data).then(res=>{
            commit('setHeader',res.data);
        })
    },
    getDelivery({commit},data){
        getSort(data).then(res=>{
            commit('setDelivery',res.data);
        })
    },
    getCategoryGroupBy({commit}){
        getCategoryGroup().then(res=>{
            commit('setGroup',res.data);
        })
    },    
    getAllparam({commit}){
        getAllParam().then(res=>{
            commit('setAllParam',res.data);
        })
    },
    getCategoryCondition({commit},data){
        getSort(data).then(res=>{
            commit('setAllParam',res.data);
        })
    },
    getParamsDetails({commit},data){
        GetParam(data).then(res=>{
            commit('setNowParam',res.data);
        })
    },
    async editData({commit},data){
        await API('put',`param/${data.pid}`,data).then((res)=>{
            commit('setAllParam',res.data.data)
        })
        await  API('get','param').then((res)=>{
            commit('setAllParam',res.data)
        })
    },
    async removeData({commit},data){
        await API('delete',`param/${data.pid}`).then((res)=>{
            commit('setAllParam',res.data.data)
        })
        await  API('get','param').then((res)=>{
            commit('setAllParam',res.data)
        })
    }
};

export const mutations ={
    setSort(state,data){
       state.productSort=data;
    },
    setPage(state,data){
        state.PageShow=data;
    },
    setCategory(state,data){
        state.category=data;
    },
    setFood(state,data){
        state.Foods=data;
    },
    setHeader(state,data){
        state.headerItem=data;
    },
    setDelivery(state,data){
        state.Delivery=data;
    },
    setGroup(state,data){
        state.CategoryGroup=data;
    },
    setAllParam(state,data){
        state.AllParam=data;
    },
    setNowParam(state,data){
        state.nowParam=data;
    },
    setcategory(state,val){
        state.nowParam.category=val;
    },
    setname(state,val){
        state.nowParam.name=val;
    },
    setvalue(state,val){
        state.nowParam.value=val;
    },
    setstatus(state,val){
        state.nowParam.status=val;
    },
};

export const getters ={
  
};
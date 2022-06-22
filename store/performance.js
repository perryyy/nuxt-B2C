import {GetPerformance} from '../plugins/api';
import {API} from '@/plugins/axios';
export const state = () =>({
   performanceList:[],
});

export const actions ={
    getPergormance({commit},data){
        API('get',`Performance/?Btime=${data[0]}&Etime=${data[1]}`).then((res)=>{
            commit('setPergormance',res.data)
        })
    },

};

export const mutations ={
    setPergormance(state,data){
       state.performanceList=data.data;
    }
};

export const getters ={
  
};
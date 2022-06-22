import {getProduct,getProductC,getProductS,getProductE,orderby,addProduct,editProduct,removeProduct,getDetails,getRandomProd,postimg} from '../plugins/api';
import {API} from '@/plugins/axios';
export const state = () =>({
    pid:0,
    name:'',
    price:0,
    sale:0,
    qty:0,
    img:'',
    description:'',
    category:'',
    key_word:'',
    products:[],
    productsBak:[],
    RandomProduct:[],
    product:[],
    loading:true
});

export const actions ={
    //test
    sentImg({commit},data){
        postimg(data).then(res=>{
            console.log(res.data)
        })
    },
    changeproduct({commit},item){
        commit('Changeproduct',item)
    },
    searchitem({commit},data){
        getProductS(data).then(res=>{
            commit('Searchitem',res.data)
        })
    },
    allitem({commit}){
        commit('Allitem')
    },
    getdata({commit},data){
        commit('Getdata',data)
    },
    editdata({commit},data){
        editProduct(data).then(res=>{
            commit('Changeproduct',res.data)
        })
    },
    async removedata({commit},data){
        await API('delete',`Product/${data.pid}`).then((res)=>{
            commit('Removedata',res.data)
        })
        await API('get','Product').then((res)=>{
            commit('GetProduct',res.data)
        })
    },
    getProduct({commit}){
        API('get','Product').then((res)=>{
            commit('GetProduct',res.data)
        })
    },
    getProdDetails({commit},data){
        new Promise((resolve, reject) => {
            getDetails(data).then(res=>{
                console.log(res.data)
                commit('Changeproduct',res.data)
                resolve();
            })
        })
    },
    getProdDetail({commit},data){
        new Promise((resolve, reject) => {
            getDetails(data).then(res=>{
                commit('reflasgProduct',res.data)
                resolve();
            })
        })
    },
    getProductCategory({commit},data){
        getProductC(data).then(res=>{
            commit('GetProductCategory',res.data)
        })
    },
    productorderby({commit},data){
        orderby(data).then(res=>{
            commit('GetProduct',res.data) 
        })
    },
    exception({commit},data){
        getProductE(data).then(res=>{
            commit('GetProduct',res.data) 
        })
    },
    getrandom({commit}){
        getRandomProd().then(res=>{
            commit('SetRandomProduct',res.data) 
        })
    }
};

export const mutations ={
    GetProduct(state ,data){
        state.products=data;
        state.productsBak=data;
    },
    GetProductCategory(state ,data){
        state.products=data;
    },
    Changeproduct(state,item){
        state.product=item;
    },
    Searchitem(state,data){
        state.products=state.productsBak;
        state.products=data;
    },
    reflasgProduct(state,data){
        state.product=data;
        state.loading=false;
    },
    Allitem(state){
        state.products=state.productsBak;
    },
    Getdata(state,data){
        state.name=state.products[data].name
        state.price=state.products[data].price
        state.sale=state.products[data].sale
    },
    Editdata(state,data){
        let i = data.index;
        state.products[i].name=data.name;
        state.products[i].price=data.price;
        state.products[i].sale=data.sale;
    },
    Removedata(state,data){
        state.products=data;
        state.productsBak=data;
    },
    Adddata(state,data){
        state.products.push(data)
    },
    setname(state,val){
        state.name=val;
    },
    setprice(state,val){
        state.price=val;
    },
    setsale(state,val){
        state.sale=val;
    },
    setdescription(state,val){
        state.description=val;
    },
    setcategory(state,val){
        state.category=val;
    },
    setpid(state,val){
        state.pid=val;
    },
    setimg(state,val){
        state.img=val;
    },
    SetRandomProduct(state,val){
        state.RandomProduct=val;
    },
    setLoading(state){
        state.loading=true;
    }
};

export const getters ={
};
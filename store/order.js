export const state = () =>({
    orderList:[
        {prodname:'里肌總匯',price:45,username:'Perry',status:'已完成'},
        {prodname:'厚切牛肉堡',price:70,username:'Mark',status:'未完成'},
    ],
    orderListBak:[
        {prodname:'里肌總匯',price:45,username:'Perry',status:'已完成'},
        {prodname:'厚切牛肉堡',price:70,username:'Mark',status:'未完成'},
    ],
    prodname:'',
    price:0,
    username:'',
    status:'',
    key_word:'',
});
export const actions ={
    setdata({commit},data){
        commit('Setdata',data)
    },
    addorder({commit},data){
        commit('Addorder',data)
    },
    getdata({commit},data){
        commit('Getdata',data)
    },
    editdata({commit},data){
        commit('Editdata',data)
    },
    removedata({commit},data){
        commit('Removedata',data)
    },
    searchitem({commit},data){
        commit('Searchitem',data)
    },
    allitem({commit}){
        commit('Allitem')
    },
};

export const mutations ={
    Setdata(state,data){
        state.prodname=data.prodname,
        state.price=data.price,
        state.username=data.username,
        state.status=data.status
    },
    Addorder(state,data){
        state.orderList.push(data);
    },
    Getdata(state,data){
        state.prodname=state.orderList[data].prodname
        state.price=state.orderList[data].price
        state.username=state.orderList[data].username
        state.status=state.orderList[data].status
    },
    Editdata(state,data){
        let i = data.index;
        state.orderList[i].prodname=data.prodname;
        state.orderList[i].price=data.price;
        state.orderList[i].username=data.username;
        state.orderList[i].status=data.status;
    },
    Removedata(state,data){
        state.orderList.splice(data,1)
    },
    Allitem(state){
        state.orderList=state.orderListBak;
    },
    Searchitem(state,data){
        state.key_word=data;
        state.orderList=state.orderListBak;
        state.orderList=state.orderList.filter(item=>item.prodname.toLowerCase().match(data));
    },
    setprodname(state,val){
        state.prodname=val;
    },
    setprice(state,val){
        state.price=val;
    },
    setusername(state,val){
        state.username=val;
    },
    setstatus(state,val){
        state.status=val;
    }
};

export const getters ={
    
};
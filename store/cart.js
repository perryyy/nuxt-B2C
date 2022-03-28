export const state = () =>({
    carts:[ ],
    finallytotal:0
    // example
    // [ {itemname:cartName,itemprice:cartprice,itemsale:cartsale,itemqty:0,img:'https://fakeimg.pl/60x60/'}]
});

export const actions ={
    addCarts({commit},data){
        commit('AddCarts',data);
    },
    addCart({commit},data){
        commit('AddCart',data);
    },
    removeCart({commit},data){
        commit('RemoveCart',data);
    },
    setfinallytotal({commit},data){
        commit('Setfinallytotal',data);
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
    }
};

export const getters ={
    totalAmt: (state) => {
        let amtTmp=0
        for(let i=0;i<state.carts.length;i++){
            amtTmp+=(state.carts[i].itemprice- state.carts[i].itemsale)*state.carts[i].itemqty
        }
        return amtTmp
    },
    cartslength: (state) =>{
        return state.carts.length
    }
};
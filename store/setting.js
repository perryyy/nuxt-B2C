export const state = () =>({
    title:'所有餐點',
    pagesize:6,
    nowpage:1,
    active:1,
    isMobile:false
});

export const actions ={
    changeTitle({commit},newTitle){
        commit('ChangeTitle',newTitle)
    },
    changepagesize({commit},data){
        commit('Changepagesize',data)
    },
    changenowpage({commit},data){
        commit('Changenowpage',data)
    },
    addactive({commit}){
        commit('Addactive')
    },
    reduceactive({commit}){
        commit('Reduceactive')
    },
    setdevice({commit},data){
        commit('Setdevice',data)
    },
};

export const mutations ={
    ChangeTitle(state,newTitle){
        state.title=newTitle
    },
    Changepagesize(state,data){
        state.pagesize=data;
        state.nowpage=1
    },
    Changenowpage(state,data){
        state.nowpage=data;
    },
    Addactive(state){
        state.active=state.active+1
    },
    Reduceactive(state){
        state.active=state.active-1
    },
    Setdevice(state,data){
        state.isMobile=data
    }
};

export const getters ={
    
};
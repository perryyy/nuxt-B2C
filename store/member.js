export const state = () =>({
    username:'',
    password:'',
    phonenumber:'',
    email:'',
    auth:'none',
    token:'',
    key_word:'',
    // Admin user none
    memberList:[
        {email:'perry@abc.com',username:'Perry',password:'Perry',auth:'user'},
        {email:'Admin@abc.com',username:'Admin',password:'Admin',auth:'Admin'},
    ],
    memberListBak:[
        {email:'perry@abc.com',username:'Perry',password:'Perry',auth:'user'},
        {email:'Admin@abc.com',username:'Admin',password:'Admin',auth:'Admin'},
    ]
});

export const actions ={
    setdata({commit},data){
        commit('Setdata',data)
    },
    adduser({commit},data){
        commit('Adduser',data)
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
        state.username=data.username,
        state.password=data.password,
        state.phonenumber='',
        state.email=data.email,
        state.auth=data.auth,
        state.token=data.token
    },
    Adduser(state,data){
        state.memberList.push(data);
    },
    Getdata(state,data){
        state.username=state.memberList[data].username
        state.password=state.memberList[data].password
        state.email=state.memberList[data].email
        state.auth=state.memberList[data].auth
    },
    Editdata(state,data){
        let i = data.index;
        state.memberList[i].username=data.username;
        state.memberList[i].password=data.password;
        state.memberList[i].email=data.email;
        state.memberList[i].auth=data.auth;
    },
    Removedata(state,data){
        state.memberList.splice(data,1)
    },
    Allitem(state){
        state.memberList=state.memberListBak;
    },
    Searchitem(state,data){
        state.key_word=data;
        state.memberList=state.memberListBak;
        state.memberList=state.memberList.filter(item=>item.username.toLowerCase().match(data));
    },
    setusername(state,val){
        state.username=val;
    },
    setpassword(state,val){
        state.password=val;
    },
    setemail(state,val){
        state.email=val;
    },
    setauth(state,val){
        state.auth=val;
    },
    setphonenumber(state,val){
        state.phonenumber=val;
    }
};

export const getters ={
    
};
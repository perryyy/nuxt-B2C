export default function({redirect,store}){
    if(store.state.username===''||store.state.username===undefined){
        return redirect('/login')
    }
}
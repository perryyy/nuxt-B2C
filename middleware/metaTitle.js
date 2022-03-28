export default({store,route,redicect})=>{
    route.matched.forEach((item,index)=>{
        item.meta.title=route.meta[index].title||''
    })
}
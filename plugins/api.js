import axios from 'axios';

// Login相關的 api
const loginRequest = axios.create({
    baseURL: 'https://localhost:44377/api/Login/'
});
// User相關的 api
const userRequest = axios.create({
    baseURL: 'https://localhost:44377/api/member',
});
// product相關的 api
const productRequest = axios.create({
    baseURL: 'https://localhost:44377/api/product/'
});
// 例外處理的 api
const exceptionRequest = axios.create({
    baseURL: 'https://localhost:44377/api/Exception'
});
// param相關的 api
const paramRequest = axios.create({
    baseURL: 'https://localhost:44377/api/param'
});
// password相關的 api
const passwordRequest = axios.create({
    baseURL: 'https://localhost:44377/api/password'
});
// Adm-member相關的 api
const AdmMemberRequest = axios.create({
    baseURL: 'https://localhost:44377/api/AdmMember'
});
// Cart相關的 api
const CartRequest = axios.create({
    baseURL: 'https://localhost:44377/api/Cart',
});


// Order相關的 api
const OrderRequest = axios.create({
    baseURL: 'https://localhost:44377/api/Order'
});
// OrderDetails相關的 api
const OrderDetailsRequest = axios.create({
    baseURL: 'https://localhost:44377/api/orderdetails'
});

//測試用img相關的 api
const ImgRequest = axios.create({
    baseURL: 'https://localhost:44377/api/img'
});

//Adm-current-order相關的 api
const AdmOrderRequest = axios.create({
    baseURL: 'https://localhost:44377/api/AdmCurrentOrder'
});

//Adm-history-order相關的 api
const AdmHistoryOrderRequest = axios.create({
    baseURL: 'https://localhost:44377/api/AdmOrder'
});

//Performance相關的 api
const PerformanceRequest = axios.create({
    baseURL: 'https://localhost:44377/api/Performance'
});



// User 相關的 api
export const getUser = () => userRequest.get('/');
export const getUserDetails = data => userRequest.get(`/${data.mid}`);;
//會員註冊
export const addUser = data => userRequest.post('/',data);
export const editUser = data => userRequest.put(`/${data.mid}`,data);
export const removeUser = data => userRequest.delete(`/${data.mid}`);
//管理員新增
export const AdmAdd = data => userRequest.post('/admAdd',data);


// product相關的 api
//全部
export const getProduct = () => productRequest.get('/');
//條件搜尋 Condition
export const getProductC = data => productRequest.get(`/?category=${data}`);
//條件搜尋 Search
export const getProductS = data => productRequest.get(`/?name=${data}`);
//排序 
export const orderby = data => productRequest.get(`/?price=${data}`);
//隨機取3筆
export const getRandomProd = () => productRequest.get('/getRandomProduct');
export const getDetails = data => productRequest.get(`/${data.pid}`);
export const addProduct = data => productRequest.post('/',data);
export const editProduct = data => productRequest.put(`/${data.pid}`,data);
export const removeProduct = data => productRequest.delete(`/${data.pid}`);

//排序 + 條件 特別處理
export const getProductE = data => exceptionRequest.get(`/?category=${data.Category}&orderby=${data.orderby}`);
//忘記密碼
export const forgetPsw = data => exceptionRequest.post('/',data);

// Login 相關的 api
export const Login = data => loginRequest.post('/',data);

// Param 相關的 api
export const getSort = data => paramRequest.get(`/?category=${data.category}`);
export const getCategoryGroup = () => paramRequest.get(`/getCategory`);
//拿全部參數
export const getAllParam = () => paramRequest.get('/');
export const addParam = data => paramRequest.post('/',data);
export const GetParam = data => paramRequest.get(`/${data}`);
export const EditParam = data => paramRequest.put(`/${data.pid}`,data);
export const removeParam = data => paramRequest.delete(`/${data.pid}`);


// password 相關的 api
export const valid = data => passwordRequest.post('/',data);
export const updatePSW = data => passwordRequest.put(`/${data.mid}`,data);


// Adm-member 相關的 api
export const AdmGetMember = () => AdmMemberRequest.get('/');
export const AdmGetMemberDetails = data => AdmMemberRequest.get(`/${data.mid}`);
export const AdmAddMember = data => AdmMemberRequest.post('/',data);
export const AdmEditMember = data => AdmMemberRequest.put(`/${data.mid}`,data);
export const AdmRemoveMember = data => AdmMemberRequest.delete(`/${data.mid}`);

// Cart 相關的 api
export const getCart = data => CartRequest.get(`/${data.mid}`);
export const AddCart = data => CartRequest.post('/',data);
export const RemoveCart = data => CartRequest.delete(`/${data}`);
//一次新增多筆
export const AddCarts = data => CartRequest.post(`/AddCarts?MID=${data.mid}`,data);


//order 相關的 api
export const AddOrder = data => OrderRequest.post('/',data);
//依據MID拿訂單
export const getOrder = data => OrderRequest.get(`/${data}`);
//依據OID拿訂單
export const getOrderSingle = data => OrderRequest.get(`/getSingle/${data}`);
//依據MID拿會員至今消費總額
export const getMemberTotal = data => OrderRequest.get(`/getMemberTotal/${data}`);
//取消購買
export const cancelbuy = data => OrderRequest.delete(`/${data}`);

//orderdetails 相關的 api
export const getOrderDetails = data => OrderDetailsRequest.get(`/${data}`);


//測試用img 相關的 api
export const postimg = data => ImgRequest.post('/',data);

//Adm-current-order相關的 api
export const AdmGetOrder = () => AdmOrderRequest.get('/');
export const AdmSearchOrder = data => AdmOrderRequest.get(`/?name=${data}`);
export const AdmAccept = data => AdmOrderRequest.put(`/${data.oid}`,data.oid);
export const AdmRefuse = data => AdmOrderRequest.delete(`/${data.oid}`);


//Adm-History-order相關的 api
export const AdmGetHistoryOrder = () => AdmHistoryOrderRequest.get('/');
export const AdmSearchHistoryOrder = data => AdmHistoryOrderRequest.get(`/?name=${data}`);
export const AdmRemoveHistoryOrder = data => AdmHistoryOrderRequest.delete(`/${data}`);


//Performance相關的 api
export const GetPerformance = data => PerformanceRequest.get(`/?Btime=${data[0]}&Etime=${data[1]}`);
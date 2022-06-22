import axios from "axios";
import {getAuthToken,clearAuthToken} from "@/static/js/util";


axios.defaults.timeout = 100000;
axios.defaults.baseURL = "https://localhost:44377/api/";


/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
        //config.data = JSON.stringify(config.data);
        const token = getAuthToken();
        config.headers = {
            "Content-Type": "application/json",
            "Authorization":`${token}`
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log("請求出錯：", error);
        if(error.response.status===401){
            alert('未登入');
            clearAuthToken();
        }
        if(error.response.status===400){
            console.log(error.response.data)
        }
    }
);

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export const  get=(url, params = {})=> {
    //const resultdata = await axios.post(url, {params:params})
    //return resultdata;
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            
        }).then((response) => {
            //landing(url, params, response.data);
            resolve(response);
        })
            .catch((error) => {
                msag(error);
                reject(error);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export const post=async(url, data)=> {
    //const resultdata = await axios.post(url, data)
    //return resultdata;
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            (response) => {
                //关闭进度条
                resolve(response);
            },
            (err) => {
                msag(err);
                reject(err);
            }
        );
    });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export const patch=async(url, data = {})=> {
    //const resultdata = await axios.patch(url, data)
    //return resultdata;
   return new Promise((resolve, reject) => {
       axios.patch(url, data).then(
           (response) => {
               resolve(response.data);
           },
           (err) => {
               msag(err);
               reject(err);
           }
       );
   });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export const put= async(url, data = {})=> {
    //const resultdata = await axios.put(url, data)
    //return resultdata;
   return new Promise((resolve, reject) => {
       axios.put(url, data).then(
           (response) => {
               resolve(response.data);
           },
           (err) => {
               msag(err);
               reject(err);
           }
       );
   });
}

/**
* 封装delete请求
* @param url
* @param data
* @returns {Promise}
*/

export  const  Delete=async(url, data = {})=> {

    return new Promise((resolve, reject) => {
        axios.delete(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                msag(err);
                reject(err);
            }
        );
    });
}

//统一接口处理，返回数据
export const  API=(fecth, url, param) =>{
    //let _data = "";
    
    return new Promise((resolve, reject) => {
        switch (fecth) {
            case "get":
                 get(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request GET failed.", error);
                        reject(error);
                    });
                break;
            case "post":
                post(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request POST failed.", error);
                        reject(error);
                    });
                break;
            case "put":
                put(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request Put failed.", error);
                        reject(error);
                    });
                break;
            case "delete":
                Delete(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request delete failed.", error);
                        reject(error);
                    });
                break;
            default:
                break;
        }
    });
}

//失败提示
function msag(err) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                alert(err.response.data.error.details);
                break;
            case 401:
                alert("尚未登入,請登入後再進行此操作");
                break;

            case 403:
                alert("沒有此操作權限");
                break;

            case 404:
                alert("無此位置");
                break;

            case 405:
                alert("伺服器拒絕此HTTP方法");
                break;
            case 408:
                alert("請求超時");
                break;

            case 500:
                alert("伺服器出錯");
                break;

            case 501:
                alert("伺服器未完成操作");
                break;

            case 502:
                alert("網路異常");
                break;

            case 503:
                alert("伺服器拒絕此操作");
                break;

            case 504:
                alert("伺服器超時");
                break;

            case 505:
                alert("HTTP版本不支援");
                break;
            default:
        }
    }
}
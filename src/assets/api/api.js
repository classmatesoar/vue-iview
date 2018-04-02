import axios from 'axios';
const
    requestConfig = res => {
        console.log(`请求拦截器requestConfig`, res);
        return res
    },
    requestError = res => {
        console.log(`请求拦截器requestError`, res);
        return Promise.reject(res)
    },
    responseResult = res => {
        console.log(`请求响应器responseResult`, res);
        return res
    },
    responseError = res => {
        console.log(`请求响应器responseError`, res);
        return Promise.reject(res)
    };

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 2500;
axios.interceptors.request.use(requestConfig, requestError);
axios.interceptors.response.use(responseResult, responseError);
export default (url, params, type = 'post') => {
    let returnVal;
    if (url.constructor === Array) {
        console.log('multiple');
        returnVal = axios.all(url);
    } else {
        console.log('single');
        returnVal = axios[type](url, params);
    }
    return returnVal
}

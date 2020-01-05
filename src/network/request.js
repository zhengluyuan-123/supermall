import axios from 'axios'

export function request(config) {
    //创建实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout:5000
    })
    //请求拦截
    instance.interceptors.request.use(config => {
        return config }, error => {
        console.log(error);
        return error
    })
    //相应拦截
    instance.interceptors.response.use(res => {
        return res.data }, error => {
        console.log(error);
        return error
    })
    // 发送真正的网络请求
    return instance(config)
}


import Axios from 'axios';

// 实例配置baseUrl
const axios = Axios.create({
    baseURL: 'https://open.duyiedu.com'
});

// 请求拦截器
axios.interceptors.request.use(config => {
    config.params = {
        ...config.params,
        appkey: 'zzyu_1564402433694'
    }
    return config;
});

// 响应拦截器
axios.interceptors.response.use(res => {
    if (res.status === 200) {
        console.log(res);
        if (res.config.url === "/api/meituan/login") {
            return {
                status: res.data.status,
                msg: res.data.msg,
                data: res.data.data
            }
        }
        return res.data.data;
    }
})

export default axios;
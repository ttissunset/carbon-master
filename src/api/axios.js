import axios from 'axios'
import router from '@/router'
//进度条
import nprogress from 'nprogress'
// 更改默认请求头
axios.defaults.headers["Content-Type"] = "application/json"
// 引入进度条样式
import "nprogress/nprogress.css"

const requests = axios.create({
    baseURL: 'http://43.139.67.87:9998',
    // 请求超时的时间
    timeout: 5000,
})


// 请求拦截器
requests.interceptors.request.use((config) => {
    if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = localStorage.getItem("Authorization");
    }
    nprogress.start()
    return config;
})

//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (error) => {
    console.log(error.response.status)
    if (window.location.href.substring(24, 29) == 'login') {
        if (error.response.status == 500) {
            alert('密码或验证码错误')
            return
        }
    }
    if (error.response.status == 401) {
        var href = window.location.href;
        for (let i = 0; i < href.length; i++) {
            if (href.substring(i, i + 1) === "#") {
                var fatherEnd;
                const fatherStart = i + 2;
                for (let j = i + 2; j < href.length; j++) {
                    if (href.substring(j, j + 1) === "/") {
                        fatherEnd = j;
                    }
                }
                var fatherHref = href.substring(fatherStart, fatherEnd);
                if (fatherHref == 'login') {
                    alert('用户名不存在')
                    return
                } else {
                    alert('您没有此模块的权限')
                    router.push('/dashboard/home')
                    return
                }
            }
        }
    }
    // if()
    return Promise.reject(new Error('fail'))
})

export const getRequest = (url, data) => {
    return requests({
        url,
        method: "get",
        data
    })
}

export const postRequest = (url, data) => {
    return requests({
        url,
        method: "post",
        data
    })
}
export const putRequest = (url, data) => {
    return requests({
        url,
        method: "put",
        data
    })
}
export const deleteRequest = (url, data) => {
    return requests({
        url,
        method: "delete",
        data
    })
}

// 对外暴露
export default {requests, getRequest, postRequest, putRequest, deleteRequest}
import axios,{ InternalAxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
})

request.interceptors.request.use(
    (config:InternalAxiosRequestConfig) => {
        // 发送数据时需要做的处理
        // TODO
        return config
    },error => {
        return Promise.reject(error)
    }
)
request.interceptors.response.use(
    (response) =>{
        if(response.status === 200){
            return Promise.resolve(response.data)
        }else{
            return Promise.reject(response.data)
        }
    },(error) => {
        let message:string = '';
        let status = error.response.status;
        switch(status){
            // 401: 未登录
            // 未登录则跳转登录页面，并携带当前页面的路径
            // 在登录成功后返回当前页面，这一步需要在登录页操作。
            case 401:
                message = '未登录'
                break
            // 403 token过期
            // 登录过期对用户进行提示
            // 清除本地token和清空vuex中token对象
            // 跳转登录页面
            case 403:
                message = '登录过期，请重新登录'
                break
            case 404:
                message = '网络请求不存在'
                break
            case 500:
                message = '账号或者密码错误'
                break
            default:
                message = error.response.data.message
                break
        }
        ElMessage({
            type: 'error',
            message
        })
        return Promise.reject(error)
    }
)

export default request;
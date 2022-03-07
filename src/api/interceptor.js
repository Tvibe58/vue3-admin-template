/**
 * request.js
 * 生成基础axios对象，并对请求和响应做处理
 * 前后端约定接口返回解构规范
 * {
 *    success: true
 *    code:0,
 *    data:{id : 5},
 *    message:""
 * }
 */

import axios from 'axios'
import storage from '../utils/storage'
// import { ElMessage } from 'element-plus'

// 创建一个独立的axios实例
const service = axios.create({
  // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: '/',
  // 配置请求超时时间
  timeout: 10000 // 默认值是 `0` (永不超时)
  // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
  // withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    console.log('发送前', config)
    // 发送请求前做的事
    const tokenKey = config.token || 'token'
    if (!config.options.unAuth) {
      const token = storage.get(tokenKey)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      } else {
        console.error(`${config.url}: 'invalid token and auth required'`)
        return
      }
    }
    return config
  },
  error => {
    console.log('发送后', error)
    // 对请求错误的处理
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 2XX 状态码走这
    // 响应数据
    return response
  },
  error => {
    // 除 2XX 外的状态码都走这
    // 响应错误的处理
    // ElMessage({
    //   message: error.message,
    //   type: 'error',
    //   duration: 3 * 1000
    // })
    return Promise.reject(error)
  }
)
export default service

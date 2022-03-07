/**
 * request.js
 * 通过promise对axios做二次封装，针对用户端参数，做灵活配置
 */
// import { Message, Loading } from 'element-ui'
import { ElMessage } from 'element-plus'
import instance from './interceptor'

/**
 * 核心函数，可通过它处理一切请求数据，并做横向扩展
 * @param {url} 请求地址
 * @param {params} 请求参数
 * @param {options} 请求配置，针对当前本次请求；
 * @param loading 是否显示loading
 * @param mock 本次是否请求mock而非线上
 * @param error 本次是否显示错误
 * @param unAuth 本次是否不加token
 */
function request (url, params, options = { loading: true, mock: false, error: true, unAuth: false }, method) {
  // let loadingInstance
  // 请求前loading
  // if (options.loading) loadingInstance = Loading.service()
  return new Promise((resolve, reject) => {
    console.log('options', options)
    let data = {}
    // get请求使用params字段
    if (method === 'get') data = { params }
    // post请求使用data字段
    if (method === 'post') data = { data: params }
    // 通过mock平台可对局部接口进行mock设置
    // if (options.mock) url = 'http://www.mock.com/mock/xxxx/api'
    instance({
      url,
      method,
      options,
      ...data
    }).then((res) => {
      // 对应响应拦截器2XX状态的返回
      // 此处作用很大，可以扩展很多功能。
      // 比如对接多个后台，数据结构不一致，可做接口适配器
      // 也可对返回日期/金额/数字等统一做集中处理
      if (res && res.success) {
        resolve(res)
      } else {
        // 通过配置可关闭错误提示
        if (options.error) ElMessage.error(res.message)
        console.log('error1', res.message)
        // reject 的数据，可在页面调接口的地方catch到err
        reject(res)
      }
    }).catch((error) => {
      // 对应响应拦截器里的error
      console.log('error2', error)

      if (options.error) {
        if (error.response && error.response.status === 401) {
          ElMessage({
            message: '请先登录',
            type: 'error',
            duration: 5 * 1000
          })
        } else {
          ElMessage({
            message: error.message || '服务器错误，请稍后再试',
            type: 'error',
            duration: 5 * 1000
          })
        }
      }
    }).finally(() => {
      // loadingInstance.close()
    })
  })
}
// 封装GET请求
function get (url, params, options) {
  return request(url, params, options, 'get')
}
// 封装POST请求
function post (url, params, options) {
  return request(url, params, options, 'post')
}
export default {
  get, post
}

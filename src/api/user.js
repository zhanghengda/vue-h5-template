import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: api.Login,
    method: 'post',
    data
  })
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data,
    hideloading: true
  })
}
//提交反馈 post 方法
export function feedback(data) {
  return request({
    url: api.consumerFeedback,
    method: 'post',
    data,
    hideloading: true
  })
}
// 查询产品信息 get 方法
export function getProductQuery(params) {
  console.log(params)
  return request({
    url: api.productQuery,
    method: 'get',
    params,
    hideloading: true
  })
}
// 查询防伪 get 方法
export function baseConfig(params) {
  return request({
    url: api.baseConfig,
    method: 'get',
    params,
    hideloading: true
  })
}
// 查询防伪 get 方法
export function getIdentify(params) {
  return request({
    url: api.identify,
    method: 'get',
    params,
    hideloading: true
  })
}
// 图片路径 get 方法
export function getBaseUrl(params) {
  return request({
    url: api.baseUrl,
    method: 'get',
    params,
    hideloading: true
  })
}
// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: 'get',
    params,
    hideloading: true
  })
}

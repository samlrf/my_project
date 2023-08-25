import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant' // 这个是正确的代码 应该加进去

// 创建axios实例 将来对创建出来的实例 进行自定义配置
// 好处是 不会污染原始axios实例
const instance = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

// 自定义配置 请求/相应 拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 开启loading 禁止背景点击 防止多次无效触发
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner', // 自定义图标 小太阳
    duration: 0 // 不会自动消失 不关就会一直出现
  })

  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status !== 200) {
    Toast(res.message)

    return Promise.reject(res.data)
  } else {
    Toast.clear()
  }
  return res
}, function (error) {
  return Promise.reject(error)
})

// 导出配置好的实例
export default instance

// 封装 axios
import axios from 'axios'
import JSONBig from 'json-bigint'
// 创建一个axios对象 使用{} 的配置项
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/',
  //   headers: {
  //   Authorization: 'Bearer ' + JSON.parse(window.sessionStorage.getItem('xm-toutiao')).token
  //   }
  transformResponse: [(data) => {
    // 处理格式
    if (data) {
      return JSONBig.parse(data)
    }
    return data
  }]
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // config请求配置对象
  // 修改config
  const user = window.sessionStorage.getItem('xm-toutiao')
  if (user) {
    config.headers = {
      Authorization: 'Bearer ' + JSON.parse(user).token
    }
  }
  return config
}, error => {
  // 创建promise对象的方式 new Promise () 结果可能成功也可能失败
  // Promise.resolve()创建一个成功的promise
  // Promise.reject()创建一个失败的promise
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(response => {
  return response
}, (error) => {
  // 做自己 事情 错的时候
  // 如果响应状态码是401拦截到登录页面
  if (error.response && error.response.status === 401) {
  // hash是location提供获取操作地址栏#后的地址的属性
    location.hash = '#/login'
  }
  return Promise.reject(error)
})

export default instance

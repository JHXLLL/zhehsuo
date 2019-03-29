import axios from 'axios'

const httpHelper = {}
// 配置Vue插件
httpHelper.install = function fn (Vue) {
  axios.defaults.baseURL = 'http://zhanglong.org.cn:19090/zheshuokeji-system-web'
  Vue.prototype.$http = axios
}

export default httpHelper
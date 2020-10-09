import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// axios体验
// import axios from 'axios'
// // 配置域名
// axios.defaults.baseURL = "https://m.maizuo.com/";
// axios.interceptors.request.use(function (config) { 
//   config.headers = {
//     "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"16022350652879599478308866","bc":"310100"}',
//     "X-Host": 'mall.film-ticket.film.list'
//   }
//   // 返回配置
//   return config
// }, function (err) { 
//   // 对错误的处理
// })
// axios.get('gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=6098800')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

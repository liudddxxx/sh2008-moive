// 封装axios，添加请求拦截器（2个奇怪的请求头）
import axios from 'axios'

// 设置基础域名（请求地址）
axios.defaults.baseURL = "https://m.maizuo.com/";

// 请求拦截器处理，添加两个请求头
axios.interceptors.request.use(function (config) { 
    let host = "mall.film-ticket.film.list"
    let info = config.headers.info

    if (info == "cinema") { 
        host = "mall.film-ticket.cinema.list"
    }
    if (info == "info") { 
        host = "mall.film-ticket.film.info"
    }
    if (info == "city") { 
        host = "mall.film-ticket.city.list"
    }
    // ...
    if (config.headers.authorization) {
        config.headers = {
            "authorization": config.headers.authorization
        }
    } else { 
        config.headers = {
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"16022350652879599478308866","bc":"310100"}',
            "X-Host": host
        }
    }

    return config
}, function (err) { 
    // 错误处理
})

export default axios
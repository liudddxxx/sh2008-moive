import Vue from 'vue'
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)

// 创建store对象用于存储数据
export default new Vuex.Store({
    state: {
        count: 0,
        city: '地球',
        _token:""
    },
    mutations: {
        add: function (state, step) {
            state.count += step;
        },
        setCity(state,cityName) { 
            state.city = cityName;
        },
        updateToken(state,_token) { 
            state._token = _token;
            localStorage.setItem("_token",_token)
        }
    },
    actions: {
        addAsync(context,step) { 
            setTimeout(() => { 
                context.commit('add',step)
            },3000)
        }
    },
    getters: {
        getCount(state) { 
            return '当前总数是' + state.count
        }
    }
})
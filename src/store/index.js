import Vue from 'vue'
import Vuex from 'vuex'
import cache from '@/utils/cache'
import { getLogin, getUser } from '@/api'

Vue.use(Vuex)

const state = {
    logs: [],
    user: '',
    sidebarStatus: cache.getCookie('sidebarStatus') !== 'false'
}
const getters = {
}
const mutations = {
    SET_LOGS(state, error) {
        state.logs.unshift(error)
    },
    SET_USER(state, val) {
        state.user = val
    },
    SET_LOGOUT(state) {
        state.user = ''
        cache.removeToken()
    },
    SET_SIDEBAR_STATUS(state) {
        let status = !state.sidebarStatus
        state.sidebarStatus = status
        cache.setCookie('sidebarStatus', status)
    }
}
const actions = {
    // 获取登录数据
    async GET_LOGIN_DATA({ commit }, params) {
        return new Promise((resolve, reject) => {
            getLogin(params).then(res => {
                // console.log('login', res)
                if (res && res.token) {
                    cache.setToken(res.token)
                    resolve(res)
                } else {
                    reject(new Error('nothing login data'))
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 获取用户数据
    async GET_USER_DATA({ commit }, token) {
        return new Promise((resolve, reject) => {
            getUser(token).then(res => {
                // console.log('user', res)
                if (res && res.code === 200 && res.data) {
                    commit('SET_USER', res.data)
                    resolve(res.data)
                } else {
                    reject(new Error('nothing user data'))
                }
            }).catch(err => {
                reject(err)
            })
        })
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

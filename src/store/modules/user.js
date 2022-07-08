import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    permissionList: getItem('manager') || {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setPermissionList(state, permissionList) {
      state.permissionList = permissionList
      setItem('manager', permissionList)
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await UserApi.login(payload)
        console.log(response, '123')
        commit('setToken', response.token)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    async getPermissionlist({ commit }) {
      const response = await UserApi.getPermissionList()
      commit('setPermissionList', response)
      console.log('permission', response)
      return response
    }
  }
}

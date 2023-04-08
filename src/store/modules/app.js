const state = {
  userName: '',
  games: [],
  catetorys: []
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_GAME(state, games) {
    state.games = games
  },
  SET_CATETORYS(state, catetorys) {
    state.catetorys = catetorys
  }
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  // 设置name
  setGames({ commit }, games) {
    commit('SET_GAME', games)
  },
  // 设置name
  SET_Catetorys({ commit }, catetorys) {
    commit('SET_CATETORYS', catetorys)
  }
}
export default {
  state,
  mutations,
  actions
}

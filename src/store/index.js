import { createStore } from 'vuex'
import json from '@/data.json';

export default createStore({
  state: { //state값
    data: json
  },
  getters: { //state값 컨트롤
    limit(state) {
      return state.data.length;
    }
  },
  mutations: { //state값 수정
    saveData(state, data) {
      state.data.push(data)
    }
  },
  actions: { //mutations에 작업지시(비동기)
    guide({ commit }, action) {
      let data;
      switch (action.type) {
        case 'insert': data = action.data; break;
        case 'delete': data = 100; break;
      }
      commit('saveData', data)
    }
  },
  modules: {
  }
})

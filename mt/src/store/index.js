import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import api from '@/axios';
export default new Vuex.Store({
  state: {
    position: {
      name: '北京'
    },
    username: ''
  },
  mutations: {
    setPosition(state, val) {
      state.position = val;
    },
    setUserName(state, val) {
      state.username = val;
      // console.log(val);
    }
  },
  actions: {
    setPosition({ commit }) {
      // 异步请求获取当前定位
      return api.getCurPosition().then(res => {
        // console.log(res);
        commit('setPosition', res);
        return res.nearCity;
      });
    }
  },
  modules: {
  }
});

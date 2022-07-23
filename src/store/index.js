import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
//import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainData: [], // хорошим тоном и правильно для js задавать изначально тот тип, который и будет, а не null
  },
  getters: {
    // Очень многие злоупотребляют геттерами даже когда они не нужны, в данном случае, отлично справляется стейт вместо геттеров
  },
  mutations: {
    SET_MAINDATA(state, payload) {
      // По логике тз можно было бы и перезаписывать state.mainData, а не разворачивать в него, но я решил так, потому что это более гибко в дальнейшем
      state.mainData = [...state.mainData, ...payload];
    },
    DELETE_ITEM(state, payload) {
      state.mainData = state.mainData.filter((item) => item._id !== payload);
    },
  },
  actions: {
    async fetchData({ commit }) {
      const data = (await axios.get("/data.json")).data;
      commit("SET_MAINDATA", data);
    },
  },
  modules: {
    // Обычно я делю стейт на сущности, но тут  всего одна сучность, поэтому модули не понадобятся
  },
});

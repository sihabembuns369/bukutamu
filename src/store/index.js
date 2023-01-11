import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate";
const dataState = createPersistedState({
  key: "storeonklas",
  paths: [
    "user",
    "userToken",
  ],
});

import Login from "./Login";

export default new Vuex.Store({
  modules: {
    login: Login,
  },
  state: {
    user: {},
    tokenKlasign: "",
  },
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).map((item) => {
        state[item] = payload[item];
      });
    },
    logoutState(state) {
      state.user = {};
      state.userToken = "";
    },
  },
  actions: {},
  plugins: [dataState],
});

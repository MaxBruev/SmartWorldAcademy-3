import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logError: false,
    login: false,
    errMsg: '',
    user: ''
  },
  mutations: {
    authErr: (state, error) => {
      state.logError = true;
      state.errMsg = error;
    },
    authCorr: (state, user) => {
      state.logError = false;
      state.login = true;
      state.user = user;
    },
    actUser: (state) => {
      firebase.auth().onAuthStateChanged((user) => { state.user = user.email })
    }
  },
  actions: {
  },
  modules: {
  }
})

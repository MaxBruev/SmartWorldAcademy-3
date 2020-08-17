import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logError: false,
    login: false
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
    },
    getUser: (state) => {
      if (localStorage.user) {
        state.user = localStorage.user;
        state.userID = localStorage.userID;
      }
    },
  },
  actions: {
    async logout() {
      await firebase.auth().signOut()
    },
    getLists: async ({state}) => {
      let db = firebase.database();

      await db.ref(`/${state.userID}`).once('value')
          .then((snap) => {
            let value = snap.val();
            let result = [];
            for (let listName in value) {
              result.push({'listName': listName});
            }
            state.lists = result;
            state.activeList = result[0].listName;
          })
          .catch((err) => {
            console.log(err.message);
          })
    },
    openTodo ({dispatch}) {
      dispatch('getLists').then(() => {
        dispatch('getTasks');
      })
    }
  },
  modules: {
  }
})

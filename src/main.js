import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;

firebase.initializeApp(
    {
        apiKey: "AIzaSyD22232lakuBhNe54wYkkdz8EPh8MPCzPw",
        authDomain: "task3-20be6.firebaseapp.com",
        databaseURL: "https://task3-20be6.firebaseio.com",
        projectId: "task3-20be6",
        storageBucket: "task3-20be6.appspot.com",
        messagingSenderId: "693219538784",
        appId: "1:693219538784:web:51b6dac0c4a7efb4945005"
    });

let app;
firebase.auth().onAuthStateChanged(()=> {
    if (!app) {
    app = new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
    }
});


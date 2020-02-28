import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';



Vue.use(VueTextareaAutosize)
Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyD8lXuhfZWSwuLQtMzp_NTwirvbnU8fAx0",
    authDomain: "vue-calendar-38910.firebaseapp.com",
    databaseURL: "https://vue-calendar-38910.firebaseio.com",
    projectId: "vue-calendar-38910",
    storageBucket: "vue-calendar-38910.appspot.com",
    messagingSenderId: "959292338580",
    appId: "1:959292338580:web:526c26923c9f129873df81"
});

export const db = firebase.firestore();



new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
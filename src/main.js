import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Axios from 'axios'
import firebase from 'firebase'
// import * as VueGoogleMaps from "vue2-google-maps";

const firebaseConfig = {
  apiKey: "AIzaSyBUgbvBgTVP8G4wUNYK-6EBMhSyGjsk640",
  authDomain: "ayudapp-f0fe1.firebaseapp.com",
  databaseURL: "https://ayudapp-f0fe1.firebaseio.com",
  projectId: "ayudapp-f0fe1",
  storageBucket: "ayudapp-f0fe1.appspot.com",
  messagingSenderId: "1034829863026",
  appId: "1:1034829863026:web:6d08393c2d7fda068bcaeb",
  measurementId: "G-SL77R27WZC"
};
firebase.initializeApp(firebaseConfig);

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyDEv7a1YjVV1OV5zh2k7GzAEH6dsGcqBC4",
//     libraries: "places" // necessary for places input
//   }
// });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

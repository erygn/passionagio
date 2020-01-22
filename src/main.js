import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import Vuesax from 'vuesax'
import '@fortawesome/fontawesome-free/css/all.css'

import firebase from 'firebase'
import firebaseConfig from "@/config";

firebase.initializeApp(firebaseConfig);

import 'vuesax/dist/vuesax.css' //Vuesax styles
import vuetify from './plugins/vuetify';
Vue.use(Vuesax, {
  // options here
})
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

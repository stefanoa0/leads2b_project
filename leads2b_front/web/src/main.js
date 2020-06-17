import Vue from 'vue';
import App from './App.vue';
import router from "./router";

import './plugins/axios';
import store from './store/store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

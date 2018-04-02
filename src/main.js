// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import api from './assets/api/api';
import router from './router';
import store from './vuex';
import Vuex from 'vuex';
import './assets/less/index.less'
Vue.prototype.$api = api;
Vue.use(Vuex);
Vue.use(iView);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

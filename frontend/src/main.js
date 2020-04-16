import Vue from 'vue';
import App from './App.vue';

import router from './router/index';
import store from './store/index';

import pinDirective from './shared/pin-directive';
import currencyFilter from './shared/currency-filter';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);
Vue.filter('currency', currencyFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';

import App from './App.vue';

Vue.config.productionTip = false

Vue.config.ignoredElements = ['angular-load-image', 'vue-load-image', 'react-load-image', 'javascript-load-image'];

new Vue({
  render: h => h(App),
}).$mount('#app')

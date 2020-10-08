import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'

Vue.use(ElementUI);

Vue.directive('document-click', {
  bind(el, { value }) {
    document.addEventListener('click', value, false);
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

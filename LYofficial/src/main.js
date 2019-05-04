// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import ElementUI from 'element-ui'
Vue.use(vueAxios, axios)
Vue.use(ElementUI)

Vue.prototype.$url = 'https://www.easy-mock.com/mock/5cb44170f69f12350647ac1e/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

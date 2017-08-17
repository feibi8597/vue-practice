// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './App'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

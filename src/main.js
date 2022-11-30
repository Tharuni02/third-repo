import Vue from 'vue'
Vue.config.productionTip = false

//import App from './App'
import Welcome from './Welcome'

import {RouterLink, RouterView} from 'vue-router'
import router from './router'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //components: { App },
  //template: '<App/>'
  components: { Welcome },
  template: '<Welcome/>'
})

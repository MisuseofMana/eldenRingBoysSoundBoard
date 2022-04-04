import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VueRouter from 'vue-router'

import Home from '@/components/views/Home'
import Keagan from '@/components/views/Keagan'
import Jake from '@/components/views/Jake'
import Mauger from '@/components/views/Mauger'
import David from '@/components/views/David'
import Sean from '@/components/views/Sean'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/keagan', component: Keagan },
  { path: '/jake', component: Jake },
  { path: '/mauger', component: Mauger },
  { path: '/david', component: David },
  { path: '/sean', component: Sean },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')

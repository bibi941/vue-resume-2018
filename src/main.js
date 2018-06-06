// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css'

import ParticlesJs from './components/ParticlesJS.vue'
import TopHeader from './components/TopHeader.vue'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { TopHeader, ParticlesJs }
})

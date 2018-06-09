// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import 'normalize.css'
import indexCss from './css/index.css'

// import ParticlesJs from './components/ParticlesJS.vue'
import TopHeader from './components/TopHeader.vue'
import ProjectList from './components/ProjectList.vue'
import SkillList from './components/SkillList.vue'
import UrlLink from './components/UrlLink.vue'
import WorkExperience from './components/WorkExperience.vue'


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    TopHeader,
    ProjectList,
    // ParticlesJs,
    SkillList,
    UrlLink,
    WorkExperience,
  }


})

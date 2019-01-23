import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

Vue.config.productionTip = false

import './assets/css/base.css'//02  公共资源 css本身会全局暴露
import'./assets/js/font' //自执行脚本

import axios from './plugins/axios'; // 安装axios插件
Vue.use(axios);


new Vue({
  router,
  // store,
  render: h => h(App) 
}).$mount('#app')

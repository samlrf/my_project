import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant-ui'
import '@/styles/common.less'
// import { Toast } from 'vant'
// Toast('嘿嘿')

// import Vant from 'vant'
// import 'vant/lib/index.css'
// // 插件安装初始化 内部将所有的vant所有组件导入注册
// Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

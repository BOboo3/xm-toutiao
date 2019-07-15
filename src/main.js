import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 即可 默认会去加载索引文件 index.js index.vue index.json
// 在vue-cli创建的项目中 @的前缀代表的是根路径src目录
import router from '@/router'

import axios from '@/api/axios'

import components from '@/components'

Vue.use(components)
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

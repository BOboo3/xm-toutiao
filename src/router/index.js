// 创建路由对象及配置路由规则 和其他路由配置
import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'

Vue.use(VueRouter)

const router = new VueRouter({
  // 路由规则
  routes: [
    // { path: '/', name: 'home', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '/', name: 'welcome', component: Welcome }
      ] },
    // 路径走到这个位置，证明没有任何程序去处理这个路径
    { path: '*', name: '404', component: NotFound }
  ]
})
export default router

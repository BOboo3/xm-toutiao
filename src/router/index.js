// 创建路由对象及配置路由规则 和其他路由配置
import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import Article from '@/views/article'
import Image from '@/views/image'

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
        { path: '/', name: 'welcome', component: Welcome },
        { path: '/article', name: 'article', component: Article },
        { path: '/image', name: 'image', component: Image }
      ] },
    // 路径走到这个位置，证明没有任何程序去处理这个路径
    { path: '*', name: '404', component: NotFound }
  ]
})

// 注册一个全局的导航守卫
router.beforeEach((to, from, next) => {
  // 如果不去主动触发resolve（next 下一步）会一直等待
  // console.log('ok')
  // 如果是登录页面 放行
  // if (to.path === '/login') return next()
  // 判断登录状态
  // const user = window.sessionStorage.getItem('xm-toutiaao')
  // if (user) {
  //   next()
  // } else {
  //   next('/login')
  // }
  const user = window.sessionStorage.getItem('xm-toutiao')
  if (to.path !== '/login' && !user) return next('/login')
  next()
})

export default router

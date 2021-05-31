import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
 
Vue.use(VueRouter)
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/reg',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "login" */ '../views/Reg.vue')
  },
  {
    path: '/chats',
    name: 'Chats',
    component: () => import(/* webpackChunkName: "login" */ '../views/Chats.vue')
  }
]
 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 
export default router
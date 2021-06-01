import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Founder from '../views/Founder.vue'
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path:'/admin/signUp',
    name:'SignUp',
    component:SignUp
  },
  {
    path:'/admin/login',
    name:'Login',
    component:Login
  },
  {
    path:'/admin/login/founder',
    name:'Founder',
    component:Founder
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

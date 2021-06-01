import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

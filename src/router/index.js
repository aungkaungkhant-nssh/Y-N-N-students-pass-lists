import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import SignUp from '../views/SignUp.vue'
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

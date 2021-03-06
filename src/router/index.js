import { createRouter, createWebHashHistory } from 'vue-router'
import Result from '../views/Result.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Founder from '../views/Founder.vue'
import {auth} from "../firebase/config"
const routes = [
  {
    path: '/',
    name: 'Result',
    component:Result
  },
  {
    path:'/admin/signUp',
    name:'SignUp',
    component:SignUp
  },
  {
    path:'/admin/login',
    name:'Login',
    component:Login,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(!user){
        next();
      }else{
        next({name:'Founder'})
      }
   }
  },
  {
    path:'/admin/login/founder',
    name:'Founder',
    component:Founder,
    beforeEnter(to,from,next){
       let user=auth.currentUser;
       if(user){
         next();
       }else{
         next({name:'Login'})
       }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

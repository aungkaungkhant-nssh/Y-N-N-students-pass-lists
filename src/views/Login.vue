<template>
    <div class="loginSignUpContainer">
        <h2>Login</h2>
        <form @submit.prevent="clickBtn">
                <input type="email" placeholder="enter email" v-model="email">
                <input type="password" placeholder="enter password" v-model="password">
                <div v-if="error" class="error">{{error}}</div>
                <button class="btn">Login</button>
        </form>
    </div>
   
</template>

<script>
import { ref } from '@vue/reactivity'
import login from '../composables/login'
import {useRouter} from "vue-router"
export default {
    setup(){
        let email=ref("");
        let router=useRouter();
        let {error,checkEmailAndPassword}=login();
        let password=ref("");
        let clickBtn=async()=>{
            let res= await  checkEmailAndPassword(email.value,password.value);
            if(res){
                router.push({name:"Founder"})
            }
          
        }
        return{email,password,clickBtn,error}
    }
}
</script>

<style>

</style>
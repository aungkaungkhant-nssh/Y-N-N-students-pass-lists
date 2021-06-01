<template>
    <div class="loginSignUpContainer">
        <h1>Signup</h1>
        <form @submit.prevent="addSubmit">
            <input type="text" placeholder="displayName" v-model="displayName">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <span v-if="error" class="error">{{error}}</span>
            <button class="btn">Sign Up</button>
        </form>
    </div>
 
</template>

<script>
import { ref } from '@vue/reactivity'
import signUp from '../composables/signUp'
export default {
        setup(){
            let {error,createAccount}=signUp();
            let displayName=ref("")
            let email=ref("");
            let password=ref("");
            
            let addSubmit=async()=>{
               let res=await createAccount(displayName.value,email.value,password.value)
              if(res){
                  console.log("hi");
              }
            }
            return{displayName,email,password,addSubmit,error}
        }
}
</script>

<style>
.loginSignUpContainer{
        width: 500px;
        margin: 80px auto;
        background-color: #f9f9f9;
        text-align: center;
        padding: 20px 0px;
        border-radius: 5px;
}
form{
    padding: 5px 48px;
}
input{
    display: block;
    margin: 25px 0px;
    border-radius: 10px;
    width: 100%;
    padding: 10px 8px;
    border: 1px solid #ccc;
   
}
input:focus{
    outline: none;
}
.btn{
    background-color: darkturquoise;
    border: none;
    outline: none;
    padding: 10px 24px;
    margin-top: 5px;
    border-radius: 5px;
    cursor: pointer;
    color: #f0f0f0;
    font-size: 16px;
}
</style>
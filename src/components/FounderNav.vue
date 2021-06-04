<template>
  <nav>
      <h1>Yin Nyein Nge <span class="private">(Private School)</span></h1>
      <div>
           <button class="btn btn-primary" @click="result">Result Page</button>
          <button class="btn" @click="accoutLogout">Logout</button>
      </div>
  </nav>
</template>

<script>
import { auth } from '../firebase/config'
import {useRouter} from 'vue-router'
export default {
    setup(){
        let accoutLogout=async()=>{
           await auth.signOut();
        }
        let router=useRouter();
        let result=()=>{
            router.push('/')
        }
        return{accoutLogout,result}
    }
}
</script>

<style>
    nav{
        width: 90%;
        margin: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    nav h1{
        font-size: 25px;
        font-weight: bolder;
        letter-spacing: 1px;
        color:#2980b9;
        margin-left: 15px;
    }
    nav .private{
        font-family: 'Dancing Script', cursive;
        color:#2c3e50;
    }
    nav .btn{
        background-color: #e74c3c;
    }
    nav .btn-primary{
        background-color: skyblue;
        margin-right: 15px;
    }
</style>
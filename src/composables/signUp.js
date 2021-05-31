import { ref } from "@vue/reactivity";
import {auth} from '../firebase/config'
let error=ref(null);
let createAccount=async(displayName,email,password)=>{
    try{
        let res=await auth.createUserWithEmailAndPassword(email,password);
        if(!res){
            throw new Error("cannot create account")
        }
        res.user.updateProfile({displayName:displayName}) 
         return res;
   }catch(err){
       error.value=err.message
   }
}
let signUp=()=>{
    return{error,createAccount}
}
export default signUp;
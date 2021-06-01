import { ref } from "@vue/reactivity";
import { auth } from '../firebase/config';
let error=ref("");
let checkEmailAndPassword=async(email,password)=>{
    try{
        let res= await auth.signInWithEmailAndPassword(email,password);
        if(!res){
            throw new Error("cannot login")
        }
        return res; 
    }catch(err){
        error.value=err.message;
    }
  
}

let login=()=>{
    return {error,checkEmailAndPassword}
}
export default login;
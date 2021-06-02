<template>
    <div v-if="user">
          <FounderNav></FounderNav>
          <Mark></Mark>
          <FounderFooter :year="year"></FounderFooter>
          
    </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import FounderFooter from '../components/FounderFooter'
import FounderNav from '../components/FounderNav'
import Mark from '../components/Mark'
import { auth } from '../firebase/config'
export default {
  components: {
    FounderFooter,
    FounderNav, Mark },
    setup(){
        let user=ref(auth.currentUser)
        let year=ref(new Date().getFullYear());
       auth.onAuthStateChanged((_user)=>{
           user.value=_user;
       })
        return{year,user}
    }

}
</script>

<style>

</style>
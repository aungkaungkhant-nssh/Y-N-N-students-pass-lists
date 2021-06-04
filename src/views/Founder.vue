<template>
    <div v-if="user" class="fd">
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
import getUser from '../composables/getUser'
import { watch } from '@vue/runtime-core'
import {useRouter} from 'vue-router'
export default {
  components: {
    FounderFooter,
    FounderNav, Mark },
    setup(){
        let {user}=getUser();
        let router=useRouter();
        let year=ref(new Date().getFullYear());
        watch(user,()=>{
        if(!user.value){
          router.push({name:"Login"})
        }
      })
        return{year,user}
    }

}
</script>

<style>
.fd{
    width: 100%;
}
</style>
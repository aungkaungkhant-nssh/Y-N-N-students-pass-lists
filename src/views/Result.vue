<template>
        <div class="result-container">
           <ResultNavbar></ResultNavbar>
            <StudenMark></StudenMark>
            <FounderFooter></FounderFooter>
        </div>
</template>

<script>

import FounderFooter from '../components/FounderFooter'
import ResultNavbar from '../components/ResultNavbar'
import StudenMark from '../components/StudenMark'

export default {
  components: {
    FounderFooter,
    ResultNavbar,
    StudenMark,
     ResultNavbar },
   
}
</script>

<style>
    .result-container{
        background-color: #fff;
        width: 100%;
        height: 100vh;
        margin-top: -20px;
    }
</style>
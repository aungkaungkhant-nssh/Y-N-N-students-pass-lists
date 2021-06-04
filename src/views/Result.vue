<template>
        <div class="result-container">
           <ResultNavbar></ResultNavbar>
            <StudenMark></StudenMark>
        </div>
</template>

<script>

import ResultNavbar from '../components/ResultNavbar'
import StudenMark from '../components/StudenMark'

export default {
  components: {
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
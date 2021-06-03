<template>
        <div class="result-container">
            <ResultNavbar></ResultNavbar>
            <StudenMark></StudenMark>
        </div>
</template>

<script>
import StudenMark from './StudenMark'
import ResultNavbar from './ResultNavbar'
export default {
  components: {
    StudenMark, ResultNavbar },
   
}
</script>

<style>
    .result-container{
        background-color: #fff;
        width: 100%;
        height: 120vh;
        margin-top: -20px;
    }
</style>
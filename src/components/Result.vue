<template>
        <div class="result-container">
            <ResultNavbar></ResultNavbar>
        </div>
</template>

<script>
import ResultNavbar from './ResultNavbar'
export default {
  components: { ResultNavbar },

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
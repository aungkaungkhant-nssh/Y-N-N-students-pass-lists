<template>
  <div id="nav">
      <Result></Result>
  </div>
  <router-view/>
</template>
<script>
import Result from './components/Result'
export default {
  components: { Result },

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
 
}
</style>

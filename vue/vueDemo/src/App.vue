<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Student/>
    <School/>
    <ref></ref>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import School from './components/School'
import Student from './components/Students'
import Ref from './components/Ref.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    School,
    Student,
    Ref
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

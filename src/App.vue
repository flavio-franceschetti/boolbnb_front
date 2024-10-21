<script>

// App principale di Vue

// Imports
import Navbar from './components/navbar.vue';
import Home from './components/main/Home.vue';

export default{
  components:{
    Navbar,
    Home
  }
}

</script>

<template>
  
  <!-- Navbar -->
  <Navbar></Navbar>

  <!-- Home -->
  <router-view></router-view>
</template>

<style scoped>

</style>

<script>
// App principale di Vue

// Imports
import Navbar from "./components/Navbar.vue";
import Home from "./components/main/Home.vue";
import Footer from "./components/main/Footer.vue";

export default {
  components: {
    Navbar,
    Home,
    Footer,
  },
};
</script>

<template>
  <!-- Navbar -->
  <Navbar></Navbar>

  <!-- Home -->
  <router-view></router-view>

  <!-- Footer -->
   <Footer></Footer>

</template>

<style scoped></style>

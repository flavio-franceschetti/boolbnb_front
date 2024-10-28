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

  <div class="content">
    <!-- Home -->
    <router-view></router-view>
  </div>

  <!-- Footer -->
  <Footer></Footer>
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

.content {
  min-height: calc(100vh - 172px - 92px);
}

.router-view {
  flex-grow: 1; /* Fa espandere il contenuto principale */
}

footer {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;
}
</style>

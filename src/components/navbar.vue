<script>
import Searchbar from "./Searchbar.vue";

export default {
  components: {
    Searchbar,
  },
};
</script>

<template>
  <!-- Container Up -->
  <div
    class="container-fluid text-center d-flex justify-content-between align-items-center p-1"
  >
    <!-- Logo -->
    <div class="logo d-flex align-items-center justify-content-around">
      <div>
        <!-- logo -->
        <img src="../../public/img/logo_bnb.png" alt="" />
        <!-- titolo -->
        <span>Boolbnb</span>
      </div>
    </div>

    <!-- Searcbar -->
    <div class="type d-flex flex-row justify-content-around">
      <div class="d-flex flex-row p-2 gap-3">
        <div class="p-2 radius">Soggiorni</div>
        <div class="p-2 radius">Esperienze</div>
      </div>
    </div>

    <!-- Login -->
    <div class="login d-flex justify-content-around align-items-center">
      <!-- text -->
      <span class="">Affitta con Boolbnb</span>

      <!-- globe -->
      <div>
        <i class="fa-solid fa-globe"></i>
      </div>

      <!-- button login -->
      <div class="radius">
        <a href="http://127.0.0.1:8000/register">
          <i class="fa-solid fa-user-plus"></i
        ></a>
        
        <a href="http://127.0.0.1:8000/login"
          ><i class="fa-solid fa-user"> </i>
        </a>
      </div>
    </div>
  </div>
  <!-- Container Down -->
  <div class="container-fluid d-flex justify-content-around">
    <!-- Searchbar -->
    <Searchbar></Searchbar>
  </div>
</template>

<style scoped>
/* Suddivisione Navbar */

/* Dimensione container per Upper Menu */
.logo,
.type,
.login {
  width: 33%;
}

/* Gestione delle voci di Type */
.radius {
  border-radius: 25px;
}

/* Dimensioni del Logo */
.logo img {
  width: 10%;
}

.logo {
  padding-right: 10%;
}

/* Login padding */
.login {
  padding-left: 100px;
  padding-right: 100px;
}
</style>

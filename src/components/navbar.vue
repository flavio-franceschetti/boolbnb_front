<script>
import card from "./main/card/Card.vue";
import Searchbar from "./Searchbar.vue";

export default {
  name: 'Navbar',
  components: {
    Searchbar,
    card
  },
};
</script>

<template>
  <!-- Container Up -->
  <div class="container-fluid text-center d-flex justify-content-between align-items-center p-1 mt-3 mb-5">
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
    <div>
      <Searchbar></Searchbar>
    </div>

    <!-- Login -->
    <div class="login d-flex justify-content-around align-items-center">
      <!-- text -->
      <a class="" href="">Affitta con Boolbnb</a>

      <!-- globe -->
      <div>
        <a href="http://127.0.0.1:8000/register">
          <i class="fa-solid fa-user-plus"></i>
        </a>
      </div>

      <!-- button login -->
      <div class="radius">
        <a href="http://127.0.0.1:8000/login">
          <i class="fa-solid fa-user"> </i>
        </a>
      </div>
    </div>
  </div>
  <!-- Container Down -->
  <div class="container-fluid d-flex justify-content-around">
  </div>
  <div class="container d-flex">
    <card></card>
    <card></card>
    <card></card>
    <card></card>
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

a {
  text-decoration: none;
  color: black;
}

a > i {
  font-size: 20px;
}

/* Gestione delle voci di Type */
.radius {
  border-radius: 25px;
}

.logo {
  box-sizing: border-box;
}

.logo div {
  display: flex;
  align-items: center;
}

/* Dimensioni del Logo */
.logo img {
  width: 80px;
}

.logo span {
  font-size: 40px;
  font-weight: lighter;
  padding-bottom: 5px;
}

/* Login padding */
.login {
  padding-left: 100px;
  padding-right: 100px;
}
</style>

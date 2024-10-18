<script>
import Card from "./main/card/Card.vue";
import Searchbar from "./Searchbar.vue";

export default {
  name: 'Navbar',
  components: {
    Searchbar,
    Card
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
    <div class="type">
      <Searchbar></Searchbar>
    </div>

    <!-- Login -->
    <div class="login d-flex justify-content-around align-items-center gap-4">

      <!-- globe -->
      <div>
        <a href="http://127.0.0.1:8000/register">
          <i class="fa-solid fa-user-plus"></i>
          <div><span>Register</span></div>
        </a>
      </div>

      <!-- button login -->
      <div class="radius">
        <a href="http://127.0.0.1:8000/login">
          <i class="fa-solid fa-user"> </i>
          <div><span>Login</span></div>
        </a>
      </div>
    </div>
  </div>

</template>

<style scoped>
/* Suddivisione Navbar */

/* Dimensione container per Upper Menu */
.logo,
.type,
.login {
  /* width: 33%; */
  border: 1px solid black;
}

a {
  text-decoration: none;
  color: #28a745;
}

a > i {
  font-size: 28px;
}
a:hover{
  color: green;
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
  /* padding-left: 100px;
  padding-right: 100px; */
}



/* MEDIA Q TABLET */
@media (min-width: 768px) and (max-width: 1048px) {
  span {
    display: none;
  }
}

/* MEDIA Q SMARTPHONE */
@media (min-width: 767px) {}
</style>

<script>
import Card from "./main/card/Card.vue";
import Searchbar from "./Searchbar.vue";

export default {
  name: "Navbar",
  components: {
    Searchbar,
    Card,
  },
};
</script>

<template>
  <!-- Container Up -->
  <div
    class="container-fluid text-center d-flex justify-content-between align-items-center p-1 mt-3 mb-5"
  >
    <!-- Logo -->
    <div class="logo align-items-center justify-content-around">
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
      <div class="dropdown">
        <button
          class="btn btn-success dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-user"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="http://127.0.0.1:8000/register">Register</a></li>
          <li><a class="dropdown-item" href="http://127.0.0.1:8000/login">Login</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>

      <!-- globe -->

    </div>
  </div>
</template>

<style lang="scss" scoped>
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
a:hover {
  color: green;
}

/* Gestione delle voci di Type */
.radius {
  border-radius: 25px;
}

.logo {
  box-sizing: border-box;
  display: flex;
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

@media (min-width: 768px) and (max-width: 1048px) {
  span {
    display: none;
  }
}

/* MEDIA Q SMARTPHONE */
@media (max-width: 767px) {
  .logo {
    display: none;
  }
}
</style>

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
    class="container-lg text-center d-flex justify-content-between align-items-center  mt-3 mb-5"
  >
    <!-- Logo -->
    <div class="logo d-none d-md-block align-items-center justify-content-around">
      <div>
        <!-- logo -->
        <img src="../../public/img/logo_bnb.png" alt="" />
        <!-- titolo -->
        <span class="d-none d-lg-inline">Boolbnb</span>
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
          class="btn green btn-success dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-user"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="http://127.0.0.1:8000/register">Register</a></li>
          <li><a class="dropdown-item" href="http://127.0.0.1:8000/login">Login</a></li>
        </ul>
      </div>

      <!-- globe -->

    </div>
  </div>
</template>

<style lang="scss" scoped>

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

.type{
  flex-grow: 1;
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

.btn {
  width: 3.5rem;
  border-radius: 2em;
}

</style>

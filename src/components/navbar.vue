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
    class="container-lg text-center d-flex justify-content-between align-items-center mt-3 mb-5"
  >
    <!-- Logo -->
    <div
      class="logo d-none d-md-block align-items-center justify-content-around"
    >
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
          <li>
            <a class="dropdown-item" href="http://127.0.0.1:8000/register"
              >Register</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="http://127.0.0.1:8000/login"
              >Login</a
            >
          </li>
        </ul>
      </div>

      <!-- globe -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Use of Scss
@use "../style.scss" as *;
a {
  text-decoration: none;
  color: $green-color;
}

.type {
  // Barra di ricerca
  flex-grow: 1; // Fa si che la barra di ricerca si adatti in proposione al monitor;
}

.logo {
  box-sizing: border-box;
  display: flex;
  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 80px;
  }

  span {
  font-size: 40px;
  font-weight: lighter;
  padding-bottom: 5px;
}
}


.btn {
  width: 3.5rem;
  border-radius: 2em;
}
</style>

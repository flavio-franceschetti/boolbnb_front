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
  <div class="nav-bar">
    <div
      class="container-lg text-center d-flex justify-content-between align-items-center py-3 gap-3"
    >
      <!-- Logo -->
      <div
        class="logo d-none d-md-block align-items-center justify-content-around"
      >
        <div>
          <!-- logo -->
          <router-link :to="{ name: 'home' }"
            ><img src="/img/logo_bnb.png" alt="logo"
          /></router-link>

          <!-- titolo -->
          <span class="d-none d-lg-inline">Boolbnb</span>
        </div>
      </div>

      <!-- Searcbar -->
      <div class="type">
        <Searchbar></Searchbar>
      </div>

      <!-- Login -->
      <div class="login d-flex justify-content-around gap-4">
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Use of Scss
@use "../style.scss" as *;
.nav-bar {
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);
}
a {
  text-decoration: none;
  color: $green-color;
}

.type {
  flex-grow: 1; // Fa si che la barra di ricerca si adatti in proposione al monitor;
}

.logo {
  // Css per il logo
  box-sizing: border-box;
  display: flex;

  div {
    // Allineamento
    display: flex;
    align-items: center;
  }

  img {
    // IMG del logo
    width: 60px;
  }

  span {
    // Titolo dell'App
    font-size: 32px;
    font-weight: lighter;
    padding-bottom: 5px;
  }
}

.radius {
  // Bordi arrotondati per Login Button
  border-radius: 25px;
}

.btn {
  width: 3.5rem;
  border-radius: 2em;
}
</style>

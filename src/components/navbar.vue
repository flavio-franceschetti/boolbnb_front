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
      ><router-link :to="{ name: 'home' }">
        <div>
          <!-- logo -->
          <img src="/img/logo_bnb.png" alt="logo"
          />

          <!-- titolo -->
          <span class=" text-black d-none d-lg-inline">Boolbnb</span>
        </div>
      </router-link>
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
            <!-- <i class="fa-solid fa-user"></i> -->
            <svg class="user-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
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

.user-icon{
  fill: #fff;
  width: 15px;
}
</style>

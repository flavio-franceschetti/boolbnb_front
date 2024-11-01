<script>
import { RouterLink, RouterView } from "vue-router";
import Card from "./card/Card.vue";
import { store } from "../../store";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      apartments: [],
    };
  },
  methods: {
    getApartments() {
      //  Chiamata API per ottenere i dati degli appartamenti
      axios
        .get(store.apiUrl + "apartments")
        .then((response) => {
          this.apartments = response.data.apartments;
          // console.log(this.apartments);
        })
        .catch((error) => {
          console.error("Errore durante la richiesta API:", error);
        });
    },
  },
  mounted() {
    this.getApartments();
  },
};
</script>

<template>
  <!-- Titolo della pagina esposizione -->
  <h1 class="my-5">I nostri appartamenti in evidenza</h1>
  <!-- Container gestito tramite bootstrap grill per il responsive -->
  <div class="container pb-5">
    <div class="row">
      <div
        class="col-lg-4 col-md-5 col-11 col-sm-9 mb-4 d-flex justify-content-center px-3 mx-4 mx-md-0"
        v-for="apartment in apartments"
        :key="apartment.id"
      >
        <Card :apartment="apartment" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style.scss" as *;

h1 {
  text-align: center;
  font-size: 48px;
  font-weight: 300;
  color: #333;
  margin-bottom: 20px;
}

// generale

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

// cards
.apartment-card {
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }
}

.row {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  // dispositivi mobili
  h1 {
    font-size: 36px;
  }

  .apartment-card {
    max-width: 100%;
  }
}
</style>

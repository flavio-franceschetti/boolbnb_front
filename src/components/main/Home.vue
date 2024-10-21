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
  methods: {},
  mounted() {
    // Chiamata API per ottenere i dati degli appartamenti
    axios
      .get(store.apiUrl + "apartments")
      .then((response) => {
        this.apartments = response.data.apartments;
        console.log('dettagli', apartmentDetails);
      })
      .catch((error) => {
        console.error("Errore durante la richiesta API:", error);
      });
  },
};
</script>

<template>
  <!-- Titolo della pagina esposizione -->
  <h1>I nostri appartamenti</h1>

  <!-- Container gestito tramite bootstrap grill per il responsive -->
  <div class="container">
    <div class="row">
      <div
        class="col-lg-3 col-md-6 col-sm-12 col-mb-4 d-flex justify-content-around mb-5 mt-3"
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
  // Titolo della pagina principale
  text-align: center;
  font-size: 40px;
  font-weight: lighter;
  padding-bottom: 5px;
}
</style>

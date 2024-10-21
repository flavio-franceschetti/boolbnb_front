<script>
import Card from "./card/Card.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Card,
  },
  data(){
    return{
      apartments: [],
    }
  },
   mounted() {
    // Chiamata API per ottenere i dati degli appartamenti
    axios
      .get("http://127.0.0.1:8000/api/apartments")
      .then((response) => {
        // Usa una funzione freccia qui
        this.apartments = response.data.apartments; // Assegni i dati degli appartamenti alla variabile
      })
      .catch((error) => {
        // Usa una funzione freccia anche qui
        console.error("Errore durante la richiesta API:", error);
      });
  },
};
</script>

<template>

  <!-- Titolo della pagina esposizione -->
  <h1><i class="fa-solid fa-star" style="color: #FFD43B;"></i> Le Migliori <i class="fa-solid fa-star" style="color: #FFD43B;"></i></h1>

  <!-- Container gestito tramite bootstrap grill per il responsive -->
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12 col-mb-4 d-flex justify-content-around mb-5 mt-3" v-for="apartment in apartments" :key="apartment.id">
        <Card :apartment="apartment"></Card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style.scss" as *;

h1{
    // Titolo della pagina principale
    text-align: center;
    font-size: 40px;
    font-weight: lighter;
    padding-bottom: 5px;
}
</style>

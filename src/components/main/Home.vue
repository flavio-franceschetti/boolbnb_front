<script>
import { RouterLink, RouterView } from "vue-router";
import Card from "./card/card.vue";
import { store } from "../../store";
import axios from "axios";
import ApartmentDetails from "./ApartmentDetails.vue";

export default {
  name: "Home",
  components: {
    Card,
    ApartmentDetails,
  },
  data() {
    return {
      apartments: [],
      apartmentDetails: null,
    };
  },
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
      
      // 
      
      

  },
  methods: {
    getApartmentDetails(apartmentId) {
      // Chiamata API per ottenere i dettagli dell'appartamento selezionato
      console.log(apartmentId);
      this.$router.push("/about");
      
      axios
        .get(store.apiUrl + "apartmentById/" + apartmentId)
        .then((response) => {
          this.apartmentDetails = response.data.apartment; // Assicurati che il percorso sia corretto
          console.log('Appartamento axios', this.apartmentDetails);
          
        
        })


        .catch((error) => {
          console.error("Errore durante la richiesta API:", error);
        });
    },
  },
};
</script>

<template>
  <!-- Titolo della pagina esposizione -->
  <h1>
    <i class="fa-solid fa-star" style="color: #ffd43b"></i> Le Migliori
    <i class="fa-solid fa-star" style="color: #ffd43b"></i>
  </h1>

  <!-- Container gestito tramite bootstrap grill per il responsive -->
  <div class="container">
    <div class="row">
      <div
        class="col-lg-3 col-md-6 col-sm-12 col-mb-4 d-flex justify-content-around mb-5 mt-3"
        v-for="apartment in apartments"
        :key="apartment.id"
        >
      <Card :apartment="apartment" @apartment-selected="getApartmentDetails" />
    
        <!-- Debug -->
      </div>
    </div>
    <!-- Dettagli dell'appartamento -->
    <ApartmentDetails :apartment="apartmentDetails" />
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

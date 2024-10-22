<script>
import { RouterLink, RouterView } from "vue-router";
import Card from "./card/Card.vue";
import { store } from "../../store";
import axios from "axios";

export default {
  name: "SearchDetails",
  components: {
    Card,
  },
  data() {
    return {
      apartments: [], // Lista degli appartamenti
      // Questo è l'indirizzo che arriva dalla pagina home dopo la ricerca
      address: this.$route.query.address || '', 
      distance: this.$route.query.distance || 20, // Distanza predefinita
      rooms: this.$route.query.rooms || 1, // Numero minimo di stanze predefinito
      beds: this.$route.query.beds || 1, // Numero minimo di letti predefinito
      services: this.$route.query.services ? this.$route.query.services.split(',') : [] // Lista dei servizi selezionati
    };
  },
  watch: {
    "$route.query": {
      handler() {
        // Aggiorna le proprietà locali in base ai nuovi parametri di query
        this.address = this.$route.query.address || '';
        this.distance = this.$route.query.distance || 20;
        this.rooms = this.$route.query.rooms || 1;
        this.beds = this.$route.query.beds || 1;
        this.services = this.$route.query.services ? this.$route.query.services.split(',') : [];

        // Chiama l'API con i parametri aggiornati
        this.getApi();
      },
    }
  },
  methods: {
    getApi() {
      // Chiamata API per ottenere i dati degli appartamenti
      axios
        .get(store.apiUrl + "apartmentsByAddress", {
          params: {
            address: this.address,
            distance: this.distance,
            rooms: this.rooms,
            beds: this.beds,
            services: this.services.join(','), // Converte l'array di servizi in una stringa per la chiamata API
          }
        })
        .then((response) => {
          this.apartments = response.data.apartments; // Salva gli appartamenti ottenuti nella variabile
        })
        .catch((error) => {
          console.error("Errore durante la richiesta API:", error);
          // Considera di aggiungere un feedback per l'utente qui in caso di errore
        });
    },
  },
  mounted() {
    // Chiama l'API con l'indirizzo inserito nella ricerca per ottenere gli appartamenti
    this.getApi();
  },
};
</script>

<template>
  <!-- Titolo della pagina esposizione -->
  <h1>Ricerca avanzata</h1>

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

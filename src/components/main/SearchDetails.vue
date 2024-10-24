<script>
import { RouterLink, RouterView } from "vue-router";
import Card from "./card/Card.vue";
import { store } from "../../store";
import Filters from "../Filters.vue";
import axios from "axios";

export default {
  name: "SearchDetails",
  components: {
    Card,
    Filters,
  },
  data() {
    return {
      apartments: [], // Lista degli appartamenti
      address: this.$route.query.address || "",
      distance: Number(this.$route.query.distance) || 20, // Converti in Number
      rooms: Number(this.$route.query.rooms) || 1, // Converti in Number
      beds: Number(this.$route.query.beds) || 1,
      services: this.$route.query.services
        ? this.$route.query.services.split(",")
        : [],
      availableServices: [], // Servizi disponibili
    };
  },
  watch: {
    "$route.query": {
      handler() {
        // Aggiorna le proprietà locali in base ai nuovi parametri di query
        this.address = this.$route.query.address || "";
        this.distance = this.$route.query.distance || 20;
        this.rooms = this.$route.query.rooms || 1;
        this.beds = this.$route.query.beds || 1;
        this.services = this.$route.query.services
          ? this.$route.query.services.split(",")
          : [];

        // Chiama l'API con i parametri aggiornati
        this.getApi();
      },
    },
  },
  methods: {
    getAllServices() {
      axios.get(store.apiUrl + "services").then((response) => {
        this.availableServices = response.data.services;
      });
    },

    applyFilters(newFilters) {
      // Rimuovi i servizi se non ce ne sono
      const services = newFilters.services.length
        ? newFilters.services.join(",")
        : "";
      this.$router.push({
        query: {
          ...this.$route.query,
          distance: Number(newFilters.distance), // Converti in Number
          rooms: Number(newFilters.rooms), // Converti in Number
          beds: Number(newFilters.beds),
          services: services,
        },
      });
    },

    getApi() {
      // Chiamata API per ottenere i dati degli appartamenti
      axios
        .get(store.apiUrl + "apartmentsByAddress", {
          params: {
            address: this.address,
            distance: this.distance,
            rooms: this.rooms,
            beds: this.beds,
            services: this.services.join(","),
          },
        })
        .then((response) => {
          this.apartments = response.data.apartments;
          // Salva gli appartamenti ottenuti nella variabile
        })
        .catch((error) => {
          console.error("Errore durante la richiesta API:", error);
          // Considera di aggiungere un feedback per l'utente qui in caso di errore
        });
    },
    updateQuery(param, value) {
      // Aggiorna i parametri di query nella rotta
      this.$router.push({ query: { ...this.$route.query, [param]: value } });
    },
    searchApartments() {
      this.getApi(); // Chiama l'API per cercare gli appartamenti
    },
  },
  mounted() {
    // Chiama l'API con l'indirizzo inserito nella ricerca per ottenere gli appartamenti
    this.getApi();
    this.getAllServices();
  },
};
</script>

<template>
  <!-- Titolo della pagina esposizione -->
  <h1>Ricerca avanzata</h1>

  <!-- Filtri -->
  <Filters
    :distance="distance"
    :rooms="rooms"
    :beds="beds"
    :services="services"
    :servicesList="availableServices"
    @update-filters="applyFilters"
  />

  <!-- Container per gli appartamenti -->
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
  text-align: center;
  font-size: 40px;
  font-weight: lighter;
  padding-bottom: 5px;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.filters {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.filters label {
  margin: 5px 0;
}
</style>

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
      apartments: [],
      // questo è l'indirizzo che arriva dalla pagina home fatta la ricerca
      address: this.$route.params.address,
    };
  },
  // è una funzionalità che consente di osservare i cambiamenti di un parametro
  watch: {
    // in questo caso osserva se address che riceviamo cambia e se cambia lo salva dentro al parametro passato newAddress
    "$route.params.address"(newAddress) {
      // salviamo newAddress dentro address
      this.address = newAddress;
      // richiamiamo l'api con il nuovo indirizzo
      this.getApi(newAddress);
    },
  },
  methods: {
    getApi(address) {
      // Chiamata API per ottenere i dati degli appartamenti
      axios
        .get(store.apiUrl + "apartmentsByAddress/" + address)
        .then((response) => {
          this.apartments = response.data.apartments;
        })
        .catch((error) => {
          console.error("Errore durante la richiesta API:", error);
        });

      // console.log("dettagli", apartmentDetails);
    },
  },
  mounted() {
    // chiamiamo l'api con l'address inserito nella ricerca per ottenere gli appartamenti
    this.getApi(this.address);
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

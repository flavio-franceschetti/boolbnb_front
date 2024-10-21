<script>
import axios from "axios";
import { store } from "../../store";
export default {
  name: "ApartmentDetails",
  data() {
    return {
      apartment: {},
    };
  },
  methods: {
    getApartmentDetails(apartmentId) {
      // Chiamata API per ottenere i dettagli dell'appartamento selezionato
      axios
        .get(store.apiUrl + "apartmentById/" + apartmentId)
        .then((response) => {
          this.apartment = response.data.apartment; // Assicurati che il percorso sia corretto
          console.log(this.apartment);

          // console.log("Appartamento axios", this.apartmentDetails);
        })
        .catch((error) => {
          console.error("Errore durante la richiesta API:", error);
        });
    },
  },
  mounted() {
    const apartmentId = this.$route.params.id;
    this.getApartmentDetails(apartmentId);
  },
};
</script>

<template>
  <h1>{{ apartment.address }}</h1>
</template>

<style lang="scss" scoped></style>

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
  <!-- <h1>{{ apartment.address }}</h1> -->
  <div class="container">
    <!-- Titolo -->
    <div class="row">
      <div class="col-12 text-center">
        <h1>{{ apartment.title }}</h1>
      </div>
    </div>

    <!-- Immagini -->
    <div class="row">
      <div class="photo-grid">
        <div class="photo large-photo">
          <img
            src="https://www.lombardia.info/wp-content/uploads/sites/112/lago-como-villa.jpg"
            alt=""
          />
          <h3>{{ apartment.address }}</h3>
          <span>{{ apartment.rooms }} Stanze </span>
          <span> {{ apartment.beds }} Letti</span>
        </div>
        <div class="photo small-photo">
          <img
            src="https://www.lombardia.info/wp-content/uploads/sites/112/menaggio-lago-como.jpg"
            alt=""
          />
        </div>
        <div class="photo small-photo">
          <img
            src="https://www.scopriremilano.com/f/italia/milan/guia/lago-como-m.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}

.large-photo {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  height: 100%;
}

.small-photo {
  height: 100%;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>

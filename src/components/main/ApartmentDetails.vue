<script>
import axios from "axios";
import { store } from "../../store";
export default {
  name: "ApartmentDetails",
  data() {
    return {
      imageIndex: 0,
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

    nextImage() {
      this.imageIndex = (this.imageIndex + 1) % this.apartment.images.length;
    },

    prevImage() {
      this.imageIndex =
        (this.imageIndex - 1 + this.apartment.images.length) %
        this.apartment.images.length;
    },
  },
  mounted() {
    const apartmentId = this.$route.params.id;
    this.getApartmentDetails(apartmentId);
  },
};
</script>

<template>
  <div class="container">
    <h1>Appartamento in {{ apartment.address }}</h1>
    <div
      class="contImages"
      v-for="(image, index) in apartment.images"
      :key="index"
    >
      <button @click="prevImage" class="arrow prev">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <img
        :key="index"
        v-show="index === imageIndex"
        :src="image.img_path"
        alt="Appartamento"
        class="img"
      />
      <button @click="nextImage" class="arrow next">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
    <h3>{{ apartment.title }}</h3>
    <div class="info">
      <div class="col">
        <span
          >Stanze: <br />
          <strong>{{ apartment.rooms }}</strong>
        </span>
        <span
          >Letti: <br />
          <strong>{{ apartment.beds }}</strong>
        </span>
        <span
          >bagni: <br />
          <strong>{{ apartment.bathrooms }}</strong>
        </span>
        <span
          >Metri Quadrati: <br />
          <strong>{{ apartment.mq }}</strong>
        </span>
        <span
          >Indirizzo: <br />
          <strong>{{ apartment.address }}</strong>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 40px;
  font-weight: lighter;
  padding-bottom: 5px;
}

.contImages {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 20rem;
  overflow: hidden;

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    color: black;
    font-size: 1.5rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
    z-index: 1;

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }

    &.prev {
      left: 5px;
    }

    &.next {
      right: 5px;
    }
  }

  .img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
}

h3 {
  margin: 2rem 0 2rem 0;
  text-align: center;
  font-weight: lighter;
}

.col {
  display: flex;
  justify-content: center;
}

span {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin: 0.5rem;
  width: 10rem;
  padding: 0.5rem;
}

.info {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10rem;
}
</style>

<script>
import axios from "axios";
import { store } from "../../store";

export default {
  data() {
    return {
      imageIndex: 0,
      apartment: {},
      formSend: false,
      images: [],
      longitude: "",
      latitude: "",
      formData: {
        name: "",
        surname: "",
        email: "",
        content: "",
        apartment_id: "",
      },
      errors: {
        name: "",
        surname: "",
        email: "",
        content: "",
      },
      serviceIcons: {
        "Wi-Fi": "fa-solid fa-wifi", // Wi-Fi
        Piscina: "fa-solid fa-water", // Piscina
        Parcheggio: "fa-solid fa-parking", // Parcheggio
        "Aria Condizionata": "fa-solid fa-wind", // Aria Condizionata
        "TV Satellitare": "fa-solid fa-tv", // TV Satellitare
        Lavatrice: "fa-solid fa-tshirt", // Lavatrice
        Palestra: "fa-solid fa-dumbbell", // Palestra
        Giardino: "fa-solid fa-tree", // Giardino
        Idromassaggio: "fa-solid fa-hot-tub", // Idromassaggio
        Cucina: "fa-solid fa-utensils", // Cucina
      },
    };
  },
  methods: {
    // dettagli dell appartamento selezionato
    getApartmentDetails(apartmentSlug) {
      // Chiamata API per ottenere i dettagli dell'appartamento selezionato
      axios
        .get(store.apiUrl + "apartmentBySlug/" + apartmentSlug)
        .then((response) => {
          this.apartment = response.data.apartment; // Assicurati che il percorso sia corretto
          console.log(this.apartment);
          this.formData.apartment_id = response.data.apartment.id;
          this.longitude = response.data.apartment.longitude;
          this.latitude = response.data.apartment.latitude;
          this.images = response.data.apartment.images;
        })
        .catch((error) => {
          console.error("Errore durante la richiesta API:", error);
        });
    },

    // Funzione per validare i campi del form
    validateForm() {
      this.clearErrors();
      let valid = true;

      // Controllo Nome
      if (this.formData.name && this.formData.name.length > 50) {
        this.errors.name = "Il Nome non può essere più lungo di 50 caratteri.";
        valid = false;
      } else if (this.formData.name && this.formData.name.length < 2) {
        this.errors.name = "Il Nome deve contenere almeno 2 caratteri.";
        valid = false;
      }

      // Controllo Cognome
      if (this.formData.surname && this.formData.surname.length > 50) {
        this.errors.surname =
          "Il Cognome non può essere più lungo di 50 caratteri.";
        valid = false;
      } else if (this.formData.surname && this.formData.surname.length < 2) {
        this.errors.surname = "Il Cognome deve contenere almeno 2 caratteri.";
        valid = false;
      }

      // Controllo Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email) {
        this.errors.email = "Il campo Email è obbligatorio.";
        valid = false;
      } else if (!emailPattern.test(this.formData.email)) {
        this.errors.email = "Inserisci un'email valida.";
        valid = false;
      }

      // Controllo Messaggio
      if (!this.formData.content) {
        this.errors.content = "Il campo Messaggio è obbligatorio.";
        valid = false;
      } else if (this.formData.content.length < 10) {
        this.errors.content =
          "Il Messaggio deve contenere almeno 10 caratteri.";
        valid = false;
      }

      return valid;
    },

    // Funzione per svuotare gli errori
    clearErrors() {
      this.errors = {
        name: "",
        surname: "",
        email: "",
        content: "",
      };
    },

    //metodi della gestione del form
    submitForm() {
      if (this.validateForm()) {
        axios
          .post(store.apiUrl + "contatto", this.formData)
          .then((response) => {
            console.log(response.data, "messaggio inviato con successo");
            this.formSend = true;
          });
      }
    },

    // metodo per creare la mappa
    createMap() {
      axios.get(store.apiUrl + "tomtomKey").then((response) => {
        // console.log(response.data.apiKey);
        // creo una constante dove inserisco la apiKey che prendo dal file config
        const apiKey = response.data.apiKey;
        const latitude = this.latitude;
        const longitude = this.longitude;
        let center = [longitude, latitude];
        // Inizializza la mappa con tt.map che sono comandi della libreria tomtom
        var map = tt.map({
          key: apiKey, // Sostituisci con la tua chiave API
          container: "map", // l'id del contenitore html in cui deve essere inserita la mappa
          center: center, // Coordinate iniziali del centro della visualizzazione della mappa
          zoom: 15, // livello di zoom iniziale della mappa, più è alto più è zoommato
        });

        map.on("load", () => {
          // Aggiungi un marker sulla mappa con tt.maker
          new tt.Marker().setLngLat(center).addTo(map);
        });
      });
    },
  },
  mounted() {
    const apartmentSlug = this.$route.params.slug;
    this.getApartmentDetails(apartmentSlug);
    this.createMap();
  },
};
</script>

<template>
  <div class="container container-top px-4">
    <router-link class="back-arr" :to="{ name: 'home' }">
      <i class="fa-solid fa-arrow-left"></i
    ></router-link>

    <h1>{{ apartment.title }}</h1>
    <div class="row flex-wrap gap-3 justify-content-between">
      <div class="col-12 col-lg-5 align-self-center">
        <div class="info-card">
          <div class="mb-3">
            <h4>Informazioni dell'appartamento</h4>
            <h5>{{ apartment.address }}</h5>
            <div>
              <i class="fa-solid fa-street-view"></i>
              {{ apartment.rooms }} Camere da letto
            </div>
            <div>
              <i class="fa-solid fa-shower"></i>
              {{ apartment.bathrooms }} Bagni/o
            </div>
            <div>
              <i class="fa-solid fa-bed"></i> {{ apartment.beds }} Letti/o
            </div>
            <div>
              <i class="fas fa-th"></i>
              {{ apartment.mq }}m²
            </div>
          </div>
          <div>
            <h4>Servizi disponibili</h4>
            <div v-for="(service, index) in apartment.services" :key="index">
              <div>
                <i
                  :class="
                    serviceIcons[service.name] || 'fa-solid fa-question-circle'
                  "
                ></i>
                {{ service.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 align-self-center">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              v-for="(img, index) in images"
              :key="index"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              :data-bs-slide-to="index"
              class="active"
              aria-current="true"
              :aria-label="('Slide', index)"
            ></button>
          </div>
          <div class="carousel-inner">
            <div
              v-for="(img, index) in images"
              :key="index"
              class="carousel-item active"
            >
              <img :src="img.img_path" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- info and map section -->
  <div class="info-background">
    <div class="container px-4">
      <div class="row d-flex gap-3 justify-content-between">
        <div class="col-12 col-lg-6 align-self-center">
          <div class="mappa" id="map"></div>
        </div>
        <div class="col-12 col-lg-5 align-self-center form-card">
          <div class="form-title">Contatta il proprietario</div>
          <!-- FORM MESSAGGIO -->
          <form @submit.prevent="submitForm">
            <div class="form-floating mb-3">
              <input
                v-model="formData.name"
                type="text"
                class="form-control"
                id="floatingInput"
              />
              <label for="floatingInput">Nome</label>
              <div class="error" v-if="errors.name">{{ errors.name }}</div>
            </div>
            <div class="form-floating mb-3">
              <input
                v-model="formData.surname"
                type="text"
                class="form-control"
                id="floatingInput1"
              />
              <label for="floatingInput1">Cognome</label>
              <div class="error" v-if="errors.surname">
                {{ errors.surname }}
              </div>
            </div>
            <div class="form-floating mb-3">
              <input
                v-model="formData.email"
                type="email"
                class="form-control"
                id="floatingInput2"
              />
              <label for="floatingInput2">Email&ast;</label>
              <div class="error" v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div class="form-floating mb-3">
              <textarea
                v-model="formData.content"
                class="form-control"
                id="floatingTextarea2"
              ></textarea>
              <label for="floatingTextarea2">Messaggio&ast;</label>
              <div class="error" v-if="errors.content">
                {{ errors.content }}
              </div>
            </div>
            <button type="submit" class="btn submit-btn my-2">Invia</button>
            <div
              :class="[
                'form-alert',
                'alert',
                'alert-success',
                { active: formSend },
              ]"
              role="alert"
            >
              Messaggio inviato!
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.back-arr {
  display: inline;
  font-size: 30px;
  margin-bottom: 20px;
  color: #28a745;
}

// general
.container {
  padding: 80px 0;
}

.container-top {
  padding-top: 30px;
}

h1 {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 60px;
}

// crousel
.carousel {
  width: 100%;
}
.carousel-item img {
  width: 100%;
  height: 500px; /* Imposta l'altezza desiderata */
  object-fit: cover; /* Ritaglia l'immagine per riempire il contenitore */
}

.carousel-inner {
  border-radius: 15px;
}

// form

.form-alert {
  display: none;
}

.active {
  display: block;
}

.error {
  color: #cc0000;
  font-size: 12px;
  margin-left: 4px;
}

.submit-btn {
  background-color: #28a745;
  color: #fff;
  margin: 0 auto;
  display: block;
  padding: 8px 40px;
  font-weight: 400;
  margin-top: 30px;
  &:hover {
    background-color: #53b96a;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
}

.form-title {
  font-size: 24px;
  margin-bottom: 24px;
}

.form-card {
  // height: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 25px 20px;
  border-radius: 15px;
  background-color: #fff;
}

.form-floating {
  textarea {
    height: 100px;
    resize: none;
  }
}

// info section

.info-background {
  background-color: #69c17d;
}

// mappa
.mappa {
  width: 100%;
  height: 500px;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

// info card
.info-card {
  display: flex; // Attiva Flexbox
  flex-direction: column; // Organizza i figli in colonna
  justify-content: center; // Centra verticalmente

  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 25px 30px;
  border-radius: 15px;
  background-color: #69c17d;
  color: #fff;
}
</style>

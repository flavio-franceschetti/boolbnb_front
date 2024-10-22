<script>
import axios from "axios";
import { store } from "../store";
import { services } from "@tomtom-international/web-sdk-services";

export default {
  name: "Searchbar",
  data() {
    return {
      servicesList: [],
      address: '',       // Address input
      distance: 20,      // Default distance
      rooms: 1,          // Default rooms
      beds: 1,           // Default beds
      services: [],
    };;
  },
  methods: {
    getServices(){
      axios
      .get(store.apiUrl + "services")
      .then((response) => {
        this.servicesList = response.data.services;
      })
      .catch((error) => {
        console.error("Errore durante la richiesta API:", error);
      });
    },
    searchAddress() {
      this.$router.push({
        name: "searchDetails",
        query: {
          address: this.address,
          distance: this.distance,
          rooms: this.rooms,
          beds: this.beds,
          services: this.services.join(','),
        }
      });
    },
    
    getSearchBox() {
      axios.get(store.apiUrl + "tomtomKey").then((response) => {
        // SEZIONE DELLA SEARCHBOX
        // recuper la chiave dell'api inserita in config
        const apiKey = response.data.apiKey;
        // queste sono le impostazioni della searchBox di tomtom
        let options = {
          searchOptions: {
            key: apiKey, // l' API key
            language: "it-IT", // linguaggio della ricerca
            limit: 10, // numero di risultati visualizzati nel dropdown dei risultati
            countrySet: ["IT"], // Limita la ricerca all'Italia
          },
          autocompleteOptions: {
            key: apiKey,
            language: "it-IT",
            countrySet: ["IT"],
          },
          labels: {
            suggestions: {
              brand: "Brand Suggerito",
              category: "Categoria Suggerita",
            },
            placeholder: "Inserisci l'indirizzo", // placeholder della barra di ricerca
            noResultsMessage: "Nessun risultato trovato", // messaggio quando si inserisce un valore che non viene trovato
          },
        };

        // Creo la serachbox con il costruttore di tomtom tt.plugins.SearchBox
        // tt.services è il servizio di ricerca che tomtom usa per gestire le richieste
        // option è la variabile creata con tutte le opzioni dentro
        let ttSearchBox = new tt.plugins.SearchBox(tt.services, options);

        // Con getSearchBoxHTML mi restituisce il blocco html dove è inserita la searchbox già creata
        let searchBoxHTML = ttSearchBox.getSearchBoxHTML();
        // inserisco la searchbox nel mio div html tramite l append
        document.getElementById("search-box-container").append(searchBoxHTML);

        // Seleziono l'input della search box e gli assegno un 'name'
        let searchInput = document.querySelector("#search-box-container input");
        searchInput.setAttribute("autocomplete", "off"); // aggiungo l'attributo id

        // aggiungiamo l'evento al tasto enter per la ricerca degli appartamenti
        searchInput.addEventListener("keyup", (event) => {
          // event.key restituisce il tasto che viene cliccato, quindi se uguale ad enter esegui il codice
          if (event.key === "Enter") {
            // assegno il valore dell'input search ad address
            this.address = searchInput.value;
            this.searchAddress(this.address);
          }
        });
        // recupero la lente della barra di ricerca
        let svgLens = document.querySelector(
          ".tt-search-box-input-container div svg"
        );
        // aggiungo l'evento al click che fa partire la ricerca
        svgLens.addEventListener("click", (event) => {
          this.address = searchInput.value;
          this.searchAddress();
        });
      });
    },
  },
  mounted() {
    this.getSearchBox();
    this.getServices()
  },
};
</script>

<template>
  <div id="search-box-container"></div>
  <div class=" d-flex mt-2 justify-content-between">
    <div class="d-flex flex-column">
      <label for="distance">Distanza (km):</label>
      <input v-model="distance" id="distance" type="number" placeholder="Distanza massima" />
    </div>
    <div class="d-flex flex-column">
      <label for="rooms">Numero minimo di stanze:</label>
      <input v-model="rooms" id="rooms" type="number" placeholder="Numero di stanze" />
    </div>
    <div class="d-flex flex-column">
      <label for="beds">Numero minimo di letti:</label>
      <input v-model="beds" id="beds" type="number" placeholder="Numero di letti" />
    </div>
  </div>
  <div class="d-flex justify-content-between">
        <div v-for="service in servicesList" :key="service.id">
          <label>
            <input 
              type="checkbox" 
              :value="service.name" 
              v-model="services"  
            />
            {{ service.name }}
          </label>
        </div>
      </div>
  
</template>

<style lang="scss">
@use "../style.scss" as *;

.tt-search-box {
  margin-top: 0;
  .tt-search-box-input-container {
    border-radius: 15px;
  }
}

.tt-search-box-input-container {
  div {
    svg {
      cursor: pointer;
    }
  }
}
</style>

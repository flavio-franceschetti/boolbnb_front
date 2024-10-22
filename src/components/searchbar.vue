<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "Searchbar",
  data() {
    return {
      address: "",
    };
  },
  methods: {
    searchAddress(address) {
      this.$router.push({
        name: "searchDetails",
        params: { address: address },
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
          this.searchAddress(this.address);
        });
      });
    },
  },
  mounted() {
    this.getSearchBox();
  },
};
</script>

<template>
  <div id="search-box-container"></div>
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

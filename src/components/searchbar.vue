<script>
import axios from "axios";

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
  },
  mounted() {
    // SEZIONE DELLA SEARCHBOX
    // recuper la chiave dell'api inserita in config
    const apiKey = "WZySL6v5EXqKQmi7su8ub06dFdayoFto";
    // queste sono le impostazioni della searchBox di tomtom
    let options = {
      searchOptions: {
        key: apiKey, // l' API key
        language: "it-IT", // linguaggio della ricerca
        limit: 10, // numero di risultati visualizzati nel dropdown dei risultati
        countrySet: ["IT"], // Limita la ricerca all'Italia
        //   entityType: "Address", // Mostra solo gli indirizzi
      },
      autocompleteOptions: {
        key: apiKey,
        language: "it-IT",
        countrySet: ["IT"], // Limita i suggerimenti all'Italia
        //   entityType: "Address", // Suggerisce solo indirizzi nel dropdown
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
  },
};
</script>

<template>
  <div id="search-box-container" class="search-bar">
    <!-- <div class="search-item">
      <input type="text" id="destination" placeholder="Cerca destinazioni" />
      <div>
        <button class="search-btn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@use "../style.scss" as *;

// .search-bar {
//   display: flex;
//   align-items: center;
//   border: 1px solid $white-color;
//   border-radius: 50px;
//   width: 90%;
//   height: 3.5rem;
//   margin: 0 auto;
//   background-color: $white-color;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   font-weight: 6px;
// }

// .search-item {
//   width: 100%;
//   height: 100%;
//   position: relative;
//   padding: 10px 15px;
//   display: flex;
//   align-items: center;

//   &:hover,
//   .search-item-last:hover {
//     background-color: gainsboro;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//     border-radius: 50px;
//   }

//   &:hover input,
//   .search-item-last:hover input {
//     background-color: gainsboro;
//   }

//   input {
//     border: none;
//     outline: none;
//     padding: 0 5px;
//     font-size: 14px;
//     width: 100%;
//     padding-right: 50px;
//   }

//   .search-btn {
//     position: absolute;
//     background-color: $green-color;
//     border: none;
//     border-radius: 50%;
//     padding: 10px 15px;
//     cursor: pointer;
//     font-size: 16px;
//     color: $white-color;
//     right: 5px;
//     top: calc(50% - 22px);
//   }

//   .search-btn:hover {
//     background-color: #2c9444;
//   }
// }
</style>

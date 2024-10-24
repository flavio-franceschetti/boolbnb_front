<!-- Searchbar.vue -->

<script>
import axios from "axios";
import { store } from "../store";
import { services } from "@tomtom-international/web-sdk-services";

export default {
  name: "Searchbar",
  data() {
    return {
      address: "", // Address input
    };
  },
  methods: {
    searchAddress() {
      this.$router.push({
        name: "searchDetails",
        query: {
          address: this.address,
        },
      });
    },

    getSearchBox() {
      axios.get(store.apiUrl + "tomtomKey").then((response) => {
        const apiKey = response.data.apiKey;
        let options = {
          searchOptions: {
            key: apiKey,
            language: "it-IT",
            limit: 10,
            countrySet: ["IT"],
          },
          autocompleteOptions: {
            key: apiKey,
            language: "it-IT",
            countrySet: ["IT"],
          },
          labels: {
            placeholder: "Inserisci l'indirizzo",
            noResultsMessage: "Nessun risultato trovato",
          },
        };

        let ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
        let searchBoxHTML = ttSearchBox.getSearchBoxHTML();
        document.getElementById("search-box-container").append(searchBoxHTML);

        let searchInput = document.querySelector("#search-box-container input");
        searchInput.setAttribute("autocomplete", "off");

        searchInput.addEventListener("keyup", (event) => {
          if (event.key === "Enter") {
            this.address = searchInput.value;
            this.searchAddress();
          }
        });

        let svgLens = document.querySelector(
          ".tt-search-box-input-container div svg"
        );
        svgLens.addEventListener("click", () => {
          this.address = searchInput.value;
          this.searchAddress();
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

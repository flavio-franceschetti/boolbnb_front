<!-- Filters.vue -->
<script>
export default {
  name: "Filters",
  props: {
    distance: Number,
    rooms: Number,
    beds: Number,
    services: Array,
    servicesList: Array,
  },
  data() {
    return {
      localDistance: this.distance || 20,
      localRooms: this.rooms || 1,
      localBeds: this.beds || 1,
      localServices: [...this.services],
    };
  },
  watch: {
    distance(newVal) {
      this.localDistance = newVal;
    },
    rooms(newVal) {
      this.localRooms = newVal;
    },
    beds(newVal) {
      this.localBeds = newVal;
    },
    services(newVal) {
      this.localServices = [...newVal];
    },
  },

  methods: {
    applyFilters() {
      this.$emit("update-filters", {
        distance: this.localDistance,
        rooms: this.localRooms,
        beds: this.localBeds,
        services: this.localServices,
      });
    },
    resetFilters(){
      this.$emit("update-filters", {
        distance: 20,
        rooms: 1,
        beds: 1,
        services: "",
      });
    }
  },
};
</script>
<template>
  <div class="filters">
    <div class="container">
      <div class=" row-cols-1 row-cols-md-3 d-md-flex">
        <div class=" col d-flex flex-column">
          <label for="distance">Distanza (km)</label>
          <input
            @keyup.enter="applyFilters"
            v-model="localDistance"
            id="distance"
            type="number"
            class="input"
            placeholder="Distanza massima"
          />
        </div>
        <div class=" col d-flex flex-column">
          <label for="rooms">N. Camere</label>
          <input
            @keyup.enter="applyFilters"
            v-model="localRooms"
            id="rooms"
            type="number"
            class="input"
            placeholder="Numero di stanze"
          />
        </div>
        <div class=" col d-flex flex-column">
          <label for="beds">N. Letti</label>
          <input
            @keyup.enter="applyFilters"
            v-model="localBeds"
            id="beds"
            type="number"
            placeholder="Numero di letti"
            class="input"
          />
        </div>
      </div>
      <div id="boxes" class=" col d-flex gap-2 justify-content-around">
        <div v-for="service in servicesList" :key="service.id">
          <label class="cekcheckbox-container d-flex flex-column align-items-center text-center">
            <input
              @keyup.enter="applyFilters"
              type="checkbox"
              :value="service.name"
              v-model="localServices"
              class="checkmark"
            />
            {{ service.name }}
          </label>
        </div>
      </div>
    </div>

    <div class=" d-flex gap-3">
      <button class="button" @click="applyFilters">Applica Filtri</button>
      <button class="button btn-red" @click="resetFilters">Annulla Filtri</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#boxes {
  border: 2px solid green;
  padding: 20px;
  margin: 10px auto;
  width: 100%;
  flex-wrap: wrap;
  border-radius: 20px;
  box-shadow: blanchedalmond;
  box-shadow: 5px 5px 10px rgba(0, 128, 0, 0.5);
}

label {
  text-align: center;
}

// Buttons css
.button {
  background-color: #04aa6d; /* Green */
  border: 1px solid green;
  border-radius: 10px;
  color: white;
  padding: 12px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.3s;
  cursor: pointer;
}

.button:hover {
  background-color: white; /* Green */
  color: #04aa6d;
}

.btn-red {
  background-color: red; /* Green */
  border: 1px solid red;
  &:hover {
    background-color: white; /* Green */
    color: red;
  }
}
// Ceckbox css
.checkbox-container {
  display: inline-flex;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 10px;
  position: relative;
}

.checkmark:hover {
  transform: scale(1.1);
}

.checkmark::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 6px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg) scale(0);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.checkbox-container input:checked + .checkmark {
  background-color: #4caf50;
  transform: scale(1.1);
}

.checkbox-container input:checked + .checkmark::before {
  transform: rotate(-45deg) scale(1);
  opacity: 1;
}

// Inputs
.input {
  padding: 10px 20px;
  margin: 5px;
  border-radius: 10px;
  border: 1px solid;
  transition: 0.1s;
}

.input:hover {
  transform: scale(1.04);
  border-color: green;
}

.input:focus {
  outline: none;
  border-color: green;
  box-shadow: 0 0 5px lightgreen;
}
</style>

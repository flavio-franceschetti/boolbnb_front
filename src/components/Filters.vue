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
  },
};
</script>
<template>
  <div class="filters">
    <div class="d-flex mt-2 justify-content-between">
      <div class="d-flex flex-column">
        <label for="distance">Distanza (km):</label>
        <input
          @keyup.enter="applyFilters"
          v-model="localDistance"
          id="distance"
          type="number"
          placeholder="Distanza massima"
        />
      </div>
      <div class="d-flex flex-column">
        <label for="rooms">Numero minimo di stanze:</label>
        <input
          @keyup.enter="applyFilters"
          v-model="localRooms"
          id="rooms"
          type="number"
          placeholder="Numero di stanze"
        />
      </div>
      <div class="d-flex flex-column">
        <label for="beds">Numero minimo di letti:</label>
        <input
          @keyup.enter="applyFilters"
          v-model="localBeds"
          id="beds"
          type="number"
          placeholder="Numero di letti"
        />
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div v-for="service in servicesList" :key="service.id">
        <label>
          <input
            @keyup.enter="applyFilters"
            type="checkbox"
            :value="service.name"
            v-model="localServices"
          />
          {{ service.name }}
        </label>
      </div>
    </div>
    <button @click="applyFilters">Applica Filtri</button>
  </div>
</template>

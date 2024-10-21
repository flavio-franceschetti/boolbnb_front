<script>
export default {
  name: "ApartmentDetails",
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  emits: ["apartment-selected"],
  methods: {
    handleClick() {
      this.$emit("apartment-selected", this.apartment.id);
    },
  },
};
</script>

<template>
  <div class="container">
    <h1>Titolo: {{ apartment.id }}</h1>
    <p>address:</p>
  </div>
</template>

<style lang="scss" scoped></style>

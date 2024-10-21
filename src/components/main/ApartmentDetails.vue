<script>

export default {
  name: 'ApartmentDetails',
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // Logga l'appartamento completo
    console.log('Appartamento completo', this.apartment);
    
  },
};
</script>

<template>

  

</template>

<style lang="scss" scoped>

</style>
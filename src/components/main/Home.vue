<script>
import Card from "./card/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
};
</script>

<template>

  <!-- Titolo della pagina esposizione -->
  <h1><i class="fa-solid fa-star" style="color: #FFD43B;"></i> Le Migliori <i class="fa-solid fa-star" style="color: #FFD43B;"></i></h1>



  <!-- Container gestito tramite bootstrap grill per il responsive -->
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12 col-mb-4 d-flex justify-content-around mb-5 mt-3">
        <Card></Card>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 col-mb-4 d-flex justify-content-around mb-5 mt-3">
        <Card></Card>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 col-mb-4 d-flex justify-content-around mb-5 mt-3">
        <Card></Card>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 col-mb-4 d-flex justify-content-around mb-5 mt-3">
        <Card></Card>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 col-mb-4 d-flex justify-content-around mb-5 mt-3">
        <Card></Card>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 col-mb-4 d-flex justify-content-around mb-5 mt-3">
        <Card></Card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style.scss" as *;

h1{
    // Titolo della pagina principale
    text-align: center;
    font-size: 40px;
    font-weight: lighter;
    padding-bottom: 5px;
}
</style>

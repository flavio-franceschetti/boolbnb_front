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
  <h1><i class="fa-solid fa-star" style="color: #FFD43B;"></i> Le Migliori <i class="fa-solid fa-star" style="color: #FFD43B;"></i></h1>

  <div class="container my-1 d-flex flex-wrap justify-content-around gap-5">
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
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

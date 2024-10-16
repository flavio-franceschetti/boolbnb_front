<script>
  export default {
    props: {
      rating: {
        type: Number,
        required: true
      }
    },
    computed: {
      fullStars() {
        return Math.floor(this.rating);
      },
      hasHalfStar() {
        return this.rating % 1 >= 0.5;
      },
      emptyStars() {
        return 5 - Math.ceil(this.rating);
      }
    }
  };
</script>

<template>
    <div class="star-rating">
      <span v-for="(star, index) in fullStars" :key="'full' + index" class="star full">★</span>
      <span v-if="hasHalfStar" class="star half">★</span>
      <span v-for="(star, index) in emptyStars" :key="'empty' + index" class="star empty">★</span>
    </div>
</template>
  
<style lang="scss" scoped>
  .star {
    font-size: 18px;
    color: gainsboro;
  }
  
  .star.full {
    color: yellow;
  }
  
  .star.half::before {
    content: "★";
    color: yellow;
    position: absolute;
    width: 50%;
    overflow: hidden;
  }
</style>
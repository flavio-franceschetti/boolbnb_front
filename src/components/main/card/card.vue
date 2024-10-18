<script>
// import rating from '../components/main/card/rating.vue';

export default {
  name: 'Card',
  components: {
    // rating
  },
  data() {
    return {
      imageIndex: 0,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrA66Je1VOoed7Lcw95T3vIRSJceEuwTsxw&s',
        'https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg',
        'https://www.toptrade.it/files/2023/05/airbnb-3399753_640.jpg'
      ],
      rating: 0,
    };
  },
  methods: {
    nextImage() {
        this.imageIndex = (this.imageIndex + 1) % this.images.length;
        
    },

    prevImage() {
        this.imageIndex = (this.imageIndex - 1 + this.images.length) % this.images.length;
    }
  },
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <div class="card-container">
    <div class="carousel">
      <button @click="prevImage" class="arrow prev"><i class="fa-solid fa-arrow-left"></i></button>
      <div class="carousel-images">
        <img
          v-for="(image, index) in images" 
          :key="index"
          :src="image"
          class="carousel-image"
          v-show="index === imageIndex"
        />
      </div>
      <button @click="nextImage" class="arrow next"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div class="card-info">
      <h3></h3>
      <p><strong>Dove:</strong> Lago di Como</p>
      <!-- <rating :rating="rating"/> -->
      <a href="">Invia un messaggio</a>
    </div>
  </div>
</template>

<style lang="scss">

.card-container {
  width: 300px;
  border: 1px solid white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.carousel {
  overflow: hidden;
}

.carousel-images {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(184, 184, 184, 0.742);
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 2.5px 10px;
  z-index: 1;
  border-radius: 50%;
}

.arrow:hover {
    background-color: rgba(144, 143, 143, 0.9);
   }

.arrow.prev {
  left: 10px;
}

.arrow.next {
  right: 10px;
}

.card-info {
  padding: 16px;
  background-color: white;
}

.card-info h3 {
  margin: 0;
  font-size: 18px;
}

.card-info p {
  margin: 4px 0;
  font-size: 14px;
}

.rating {
  font-size: 16px;
  color: black
}
</style>
<script>

// import rating from '../components/main/card/rating.vue';

export default {
  name: "Card",
  components: {
    // rating
  },

  props: {
    apartment: {
      type: Object,
      required: true,
    },
    // apartmentDetail: {
    //   type: Object,
    //   required: true,
    // },
  },

  emits: ['apartment-selected'],

  data() {
    return {
      imageIndex: 0,
      images: [
        "https://www.lombardia.info/wp-content/uploads/sites/112/lago-como-villa.jpg",
        "https://www.lombardia.info/wp-content/uploads/sites/112/menaggio-lago-como.jpg",
        "https://www.scopriremilano.com/f/italia/milan/guia/lago-como-m.jpg",
      ],
      apartments: [],
      // apartmentDetail: [],
      rating: 0,
    };
  },
  methods: {
    nextImage() {
      this.imageIndex = (this.imageIndex + 1) % this.images.length;
    },

    prevImage() {
      this.imageIndex =
        (this.imageIndex - 1 + this.images.length) % this.images.length;
    },

  
    handleClick() {
      this.$emit('apartment-selected', this.apartment.id); 
  },
 
}
}
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <div class="card-container " @click="handleClick">
    <div class="carousel">
      <button @click="prevImage" class="arrow prev">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <div class="carousel-images">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          class="carousel-image"
          v-show="index === imageIndex"
        />
      </div>
      <button @click="nextImage" class="arrow next">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
    <div class="card-info">
      <h3></h3>
      <p><strong>{{ apartment.title }}</strong></p>
      <!-- <rating :rating="rating"/> -->
      <!-- <a href="">Invia un messaggio</a> -->
      <p>{{ apartment.id }}</p>
      <p><strong>Letti:</strong> {{ apartment.beds }}</p>
      ciao
      <p>{{apartment.address}}</p>

      <!-- Debug -->
      <!-- <p>Dettaglio : {{ apartmentDetail.id }}</p> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: 250px;
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
  img {
    width: 100%;
    height: 250px;
    object-fit: contain;
  }
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
  opacity: 0;
  &:hover {
    background-color: rgba(144, 143, 143, 0.9);
    opacity: 1;
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
    color: black;
  }
}

.arrow.next {
  right: 10px;
}

.arrow .arrow.prev {
  left: 10px;
}
</style>

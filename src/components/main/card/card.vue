<script>
export default {
  name: "Card",
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      imageIndex: 0,
      images: [
        "https://www.lombardia.info/wp-content/uploads/sites/112/lago-como-villa.jpg",
        "https://www.lombardia.info/wp-content/uploads/sites/112/menaggio-lago-como.jpg",
        "https://www.scopriremilano.com/f/italia/milan/guia/lago-como-m.jpg",
      ],
      intervalId: null,
    };
  },

  mounted() {
    this.intervalId = setInterval(this.nextImage, 8000);
  },

  beforeDestroy() {
    clearInterval(this.intervalId);
  },

  methods: {
    nextImage() {
      this.imageIndex = (this.imageIndex + 1) % this.images.length;
    },

    prevImage() {
      this.imageIndex =
        (this.imageIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <div class="card-container" @click="handleClick">
    <div class="carousel">
      <button @click="prevImage" class="arrow prev">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <div
        class="carousel-images"
        :style="{ transform: 'translateX(-' + imageIndex * 100 + '%)' }"
      >
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          class="carousel-image"
        />
      </div>
      <button @click="nextImage" class="arrow next">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>

    <div class="card-info">
      <h3>{{ apartment.title }}</h3>
      <p><strong>Letti:</strong> {{ apartment.beds }}</p>
      <p><strong>Indirizzo:</strong> {{ apartment.address }}</p>
      <router-link
        :to="{ name: 'apartmentDetails', params: { id: apartment.id } }"
        class="details-link"
        >Dettaglio</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
// generali

.card-container {
  width: 100%;
  max-width: 350px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
}

// carosello

.carousel {
  position: relative;
  overflow: hidden;
  height: 250px;
  background-color: #f8f8f8;

  .carousel-images {
    display: flex;
    transition: transform 0.5s ease-in-out;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-bottom: 1px solid #e0e0e0;
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    z-index: 1;
    border-radius: 50%;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }
}

// dettagli

.card-info {
  padding: 16px;
  text-align: center;

  h3 {
    margin: 10px 0;
    font-size: 18px;
    color: #333;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
  }

  .details-link {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #28a745;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
}

@media (max-width: 768px) {
  .card-container {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .carousel {
    height: 200px;

    img {
      height: 200px;
    }
  }
}
</style>

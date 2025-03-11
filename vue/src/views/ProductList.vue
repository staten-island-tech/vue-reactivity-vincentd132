<template>
  <div class="product-grid">
    <div v-for="(product, index) in products" :key="index" class="product-card">
      <img :src="product.imageUrl" alt="product.name" class="product-image" />
      <div class="product-info">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>
          <strong>${{ product.price.toFixed(2) }}</strong>
        </p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits()

const addToCart = (product) => {
  emit('addToCart', product)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 10px;
  background-color: #f9f9f9;
  width: 90%;
}

.product-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  margin-bottom: 8px;
}

.product-info h3 {
  margin: 5px 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
}

.product-info p {
  margin: 3px 0;
  font-size: 0.8rem;
}

button {
  padding: 6px 10px;
  font-size: 14px;
  margin-top: 6px;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

<template>
  <ul>
    <li v-for="(product, index) in products" :key="index" class="product-card">
      <img :src="product.imageUrl" alt="product.name" class="product-image" />
      <div class="product-info">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>
          <strong>${{ product.price.toFixed(2) }}</strong>
        </p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </li>
  </ul>
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
.product-card {
  display: flex;
  flex-direction: column;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
  width: 250px;
  height: auto;
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-info {
  flex: 1;
}

.product-info h3 {
  margin: 5px 0;
  font-size: 1.1rem;
}

.product-info p {
  margin: 5px 0;
  font-size: 0.9rem;
}
.site {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
}

.shopping-cart {
  flex: 0 0 30%;
  margin-left: 20px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

button:hover {
  background-color: #45a049;
}

button:focus {
  outline: none;
}
</style>

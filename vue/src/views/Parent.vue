<template>
  <div id="app">
    <h1>Fruits</h1>

    <div class="site">
      <div class="product-list">
        <h2></h2>
        <ProductList :products="products" @addToCart="addToCart" />
      </div>

      <div class="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          <li v-for="(item, index) in cart" :key="index">
            {{ item.name }} - ${{ item.price.toFixed(2) }}
          </li>
        </ul>

        <p v-if="cart.length > 0">
          <strong>Total: ${{ cartTotal.toFixed(2) }}</strong>
        </p>

        <button v-if="cart.length > 0" @click="removeAllFromCart">Remove Everything</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductList from '@/views/ProductList.vue'

const products = ref([
  { name: 'Apple', price: 1.99, description: 'Fresh Red Apple', imageUrl: '/apple.jpg' },
  { name: 'Banana', price: 0.99, description: 'Ripe Banana', imageUrl: '/banana.jpg' },
  { name: 'Orange', price: 1.29, description: 'Sweet Orange', imageUrl: '/orange.jpg' },
  { name: 'Blueberry', price: 1.69, description: 'Big Blueberry', imageUrl: '/blue.jpg' },
  { name: 'Grape', price: 2.29, description: 'Sweet Grape', imageUrl: '/grape.jpg' },
  { name: 'Pear', price: 122.29, description: 'Asian Pear', imageUrl: '/pear.jpg' },
  { name: 'Strawberry', price: 1.99, description: 'Sweet Berry', imageUrl: '/strawberry.jpg' },
  { name: 'Pineapple', price: 55.29, description: 'Sweet Pineapple', imageUrl: '/pine.jpg' },
  { name: 'Raspberry', price: 0.29, description: 'Sweet Berry', imageUrl: '/rasp.jpg' },
])

const cart = ref([])

const addToCart = (product) => {
  cart.value.push(product)
}

const removeAllFromCart = () => {
  cart.value = []
}

const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + item.price, 0)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}
.site {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

.product-list {
  flex: 1;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
h1 {
  font-size: 3rem;
  text-align: center;
  margin-top: 20px;
}

.shopping-cart {
  width: 200px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

@media (max-width: 768px) {
  .site {
    flex-direction: column;
    align-items: center;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .shopping-cart {
    width: 100%;
    margin-top: 20px;
  }
}
</style>

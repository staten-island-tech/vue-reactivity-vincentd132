<template>
  <div id="app">
    <h1>ShopRite</h1>

    <div class="site">
      <h2>Products</h2>
      <ProductList :products="products" @addToCart="addToCart" />

      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          {{ item.name }} - ${{ item.price.toFixed(2) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductList from '@/views/ProductList.vue'

export default {
  name: 'Parent',
  components: {
    ProductList,
  },
  data() {
    return {
      products: [
        {
          name: 'Apple',
          price: 1.99,
          description: 'Fresh red apples',
          imageUrl: '/images/apple.jpg',
        },
        {
          name: 'Banana',
          price: 0.99,
          description: 'Ripe bananas',
          imageUrl: '/images/banana.jpg',
        },
        {
          name: 'Orange',
          price: 1.29,
          description: 'Sweet oranges',
          imageUrl: '/images/orange.jpg',
        },
      ],
      cart: [],
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product)
    },
  },
}
</script>

<style scoped>
.site {
  padding: 20px;
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
</style>

<template>
  <div id="app">
    <h1>ShopRite</h1>

    <div class="site">
      <div class="product-list">
        <h2>Products</h2>
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

<script>
import { ref, computed } from 'vue'
import ProductList from '@/views/ProductList.vue'

export default {
  name: 'Parent',
  components: {
    ProductList,
  },
  setup() {
    const products = ref([
      {
        name: 'Apple',
        price: 1.99,
        description: 'Fresh Red Apple',
        imageUrl: '/apple.jpg',
      },
      {
        name: 'Banana',
        price: 0.99,
        description: 'Ripe Banana',
        imageUrl: '/banana.jpg',
      },
      {
        name: 'Orange',
        price: 1.29,
        description: 'Sweet Orange',
        imageUrl: '/orange.jpg',
      },
      {
        name: 'Blueberry',
        price: 1.69,
        description: 'Big Blueberry',
        imageUrl: '/blue.jpg',
      },
      {
        name: 'Grape',
        price: 2.29,
        description: 'Sweet Grape',
        imageUrl: '/grape.jpg',
      },
      {
        name: 'Pear',
        price: 122.29,
        description: 'Asian Pear',
        imageUrl: '/pear.jpg',
      },
      {
        name: 'Strawberry',
        price: 1.99,
        description: 'Sweet Berry',
        imageUrl: '/strawberry.jpg',
      },
      {
        name: 'Pineapple',
        price: 55.29,
        description: 'Sweet Pineapple',
        imageUrl: '/pine.jpg',
      },
      {
        name: 'Raspberry',
        price: 0.29,
        description: 'Sweet Berry',
        imageUrl: '/rasp.jpg',
      },
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

    return {
      products,
      cart,
      addToCart,
      removeAllFromCart,
      cartTotal,
    }
  },
}
</script>

<style scoped>
.site {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
  width: 50%;
}

.product-list,
.shopping-cart {
  flex: 1;
  margin: 0 20px;
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

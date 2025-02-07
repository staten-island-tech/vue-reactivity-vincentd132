<template>
  <div id="app">
    <h1>ShopRite</h1>
    <div class="site">
      <h2>Products</h2>

      <ProductList :products="products" @deleteProduct="deleteProduct" />

      <button @click="addProduct">Add Product</button>
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
        { name: 'Apple', price: 1.99, description: 'Fresh red apples' },
        { name: 'Banana', price: 0.99, description: 'Ripe bananas' },
        { name: 'Orange', price: 1.29, description: 'Sweet oranges' },
      ],
    }
  },
  methods: {
    addProduct() {
      const randomProduct = {
        name: `Product ${this.products.length + 1}`,
        price: parseFloat((Math.random() * 10).toFixed(2)),
        description: 'A new random product',
      }
      this.products.push(randomProduct)
    },

    deleteProduct(index) {
      this.products.splice(index, 1)
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

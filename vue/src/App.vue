<template>
    <div id="app">
      <h1>ShopRite</h1>
      <div class="site">
        <h2>Products</h2>
  
        <!-- Pass the products array to the ProductList component and listen for the deleteProduct event -->
        <ProductList :products="products" @deleteProduct="deleteProduct" />
  
        <!-- Button to add a new product -->
        <button @click="addProduct">Add Product</button>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import ProductList from './components/ProductList.vue'  <!-- Correct import for ProductList component -->
  
  export default defineComponent({
    name: 'App',
    components: {
      ProductList, // Register the ProductList component
    },
    data() {
      return {
        // Initialize products array with some sample products
        products: [
          { name: 'Apple', price: 1.99, description: 'Fresh red apples' },
          { name: 'Banana', price: 0.99, description: 'Ripe bananas' },
          { name: 'Orange', price: 1.29, description: 'Sweet oranges' },
        ]
      }
    },
    methods: {
      // Method to add a random product to the list
      addProduct() {
        const randomProduct = {
          name: `Product ${this.products.length + 1}`,
          price: parseFloat((Math.random() * 10).toFixed(2)),
          description: 'A new random product',
        }
        this.products.push(randomProduct)
      },
  
      // Method to delete a product from the list by its index
      deleteProduct(index) {
        this.products.splice(index, 1)
      },
    },
  })
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
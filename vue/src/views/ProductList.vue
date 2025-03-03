<template>
  <div>
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
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  methods: {
    addToCart(product) {
      this.$emit('addToCart', product)
    },
  },
}
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 0;
  list-style-type: none;
}

.product-card {
  display: flex;
  flex-direction: column;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
}

.product-info {
  flex: 1;
}

.product-info h3 {
  margin: 10px 0;
  font-size: 1.2rem;
}

.product-info p {
  margin: 5px 0;
  font-size: 1rem;
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

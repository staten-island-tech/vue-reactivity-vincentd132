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
.product-card {
  display: flex;
  margin: 15px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background-color: #f9f9f9;
  align-items: center;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 15px;
}

.product-info {
  flex: 1;
}

.product-info h3 {
  margin: 10px 0;
}

.product-info p {
  margin: 5px 0;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>

<template>
  <div>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} - ${{ product.price }}
        <button @click="deleteProduct(index)">Delete</button>
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
    deleteProduct(index) {
      this.$emit('deleteProduct', index)
    },
  },
}
</script>

<style scoped>
button {
  background-color: #f44336;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #e53935;
}
</style>

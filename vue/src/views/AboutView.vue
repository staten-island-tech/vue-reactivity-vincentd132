<template>
  <div>
    <h1>Item List</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItem">Add Item</button>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3'],
    }
  },
  methods: {
    addItem() {
      this.items.push(`Item ${this.items.length + 1}`)
    },
  },
}
</script>

<style scoped>
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

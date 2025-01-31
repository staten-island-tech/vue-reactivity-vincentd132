<script setup>
import LogIn from '../components/LogIn.vue'
const animals = [{name: Capybara, image: "/capy.jpg"}]
</script>

<template>
  <main>
 <LogIn message="Hello World" :count="5">
  </main>
</template>

<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">

defineProps({
  msg: {
    type: String,
    default: 'Home Page'
  }
})
</script>

<style scoped>
</style>

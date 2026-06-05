<template>
  <section class="detail-section">
    <h2>{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
    <ul v-if="items?.length" class="detail-list">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  text: String,
  items: Array
})
</script>

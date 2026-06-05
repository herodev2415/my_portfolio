<template>
  <section class="stats-grid section-pad" aria-label="Indicateurs du portfolio">
    <article v-for="stat in profile.stats" :key="stat.label" class="stat-card">
      <strong>{{ stat.value }}</strong>
      <span>{{ stat.label }}</span>
    </article>
  </section>
</template>

<script setup>
import { profile } from '../data/profile'
</script>

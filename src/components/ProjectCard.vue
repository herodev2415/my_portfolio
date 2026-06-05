<template>
  <article class="project-card">
    <RouterLink class="project-media" :to="`/projets/${project.slug}`" :aria-label="`Voir les informations du projet ${project.title}`">
      <img :src="project.image" :alt="`Aperçu du projet ${cardTitle}`" loading="lazy" />
      <div class="project-title-layer">
        <h3>{{ cardTitle }}</h3>
        <span>Voir le projet</span>
      </div>
    </RouterLink>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true }
})

const titles = {
  'projet-rh': 'SIRH',
  'reseau-social': 'Réseau social',
  garageapp: 'Garage App',
  calculatrice: 'Calculatrice',
  portfolio: 'Portfolio',
  'petites-annonces': 'Petites annonces'
}

const cardTitle = computed(() => titles[props.project.slug] || props.project.category || props.project.title)
</script>

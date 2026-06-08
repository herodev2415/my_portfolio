<template>
  <main class="project-screen section-pad">
    <RouterLink to="/#projets" class="project-screen-back">
      ← Retour aux projets
    </RouterLink>

    <section class="project-screen-panel">
      <div class="project-screen-visual">
        <img
          :src="project.image"
          :alt="`Aperçu du projet ${project.title}`"
        />

        <div class="project-screen-visual-overlay">
          <span>{{ project.type || project.category }}</span>
          <h1>{{ project.title }}</h1>
        </div>
      </div>

      <div class="project-screen-content">
        <header class="project-screen-header">
          <div class="project-screen-meta">
            <span v-if="project.category">
              {{ project.category }}
            </span>

            <span v-if="project.complexity">
              {{ project.complexity }}
            </span>

            <span v-if="databaseLabel" class="project-database-meta">
              Base : {{ databaseLabel }}
            </span>
          </div>

          <h2>{{ project.fullTitle || project.title }}</h2>

          <p>{{ project.short }}</p>
        </header>

        <div class="project-screen-tech">
          <span v-for="tech in limitedTech" :key="tech">
            {{ tech }}
          </span>
        </div>

        <div class="project-screen-grid">
          <article class="project-screen-card">
            <small>Objectif</small>
            <h3>Ce que le projet résout</h3>
            <p>{{ project.value || project.context }}</p>
          </article>

          <article class="project-screen-card">
            <small>Fonctionnalités</small>
            <h3>Ce qu’il permet</h3>
            <ul>
              <li v-for="item in limitedFeatures" :key="item">
                {{ item }}
              </li>
            </ul>
          </article>

          <article class="project-screen-card">
            <small>UI/UX</small>
            <h3>Expérience utilisateur</h3>
            <ul>
              <li v-for="item in limitedUx" :key="item">
                {{ item }}
              </li>
            </ul>
          </article>

          <article class="project-screen-card">
            <small>Compétences</small>
            <h3>Ce que ce projet montre</h3>
            <ul>
              <li v-for="item in limitedSkills" :key="item">
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()

const project = computed(() => {
  return projects.find((item) => item.slug === route.params.slug) || projects[0]
})

const databaseByProject = {
  'projet-rh': 'MySQL',
  'reseau-social': 'Supabase PostgreSQL',
  garageapp: 'SQLite',
  'petites-annonces': 'MySQL'
}

const databaseLabel = computed(() => {
  return project.value.database || databaseByProject[project.value.slug] || ''
})

const limitedTech = computed(() => {
  return (project.value.tech || []).slice(0, 6)
})

const limitedFeatures = computed(() => {
  return (project.value.features || []).slice(0, 3)
})

const limitedUx = computed(() => {
  return (project.value.ux || []).slice(0, 3)
})

const limitedSkills = computed(() => {
  return (project.value.skills || []).slice(0, 3)
})

onMounted(() => {
  document.body.classList.add('project-detail-page')
})

onBeforeUnmount(() => {
  document.body.classList.remove('project-detail-page')
})
</script>
<template>
  <section v-if="project" class="project-page section-pad">
    <div class="project-topbar">
      <RouterLink class="back-link" to="/#projets">← Retour aux projets</RouterLink>
      <RouterLink class="back-link muted" to="/">Accueil</RouterLink>
    </div>

    <div class="project-hero-detail">
      <div class="project-detail-copy">
        <span class="eyebrow clean">{{ project.category }}</span>
        <h1>{{ project.title }}</h1>
        <p>{{ project.short }}</p>
        <div class="project-tags large">
          <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
        </div>
      </div>
      <img :src="project.image" :alt="`Capture ou visuel du projet ${project.title}`" />
    </div>

    <div class="project-detail-workspace">
      <aside class="detail-tabs" aria-label="Informations du projet">
        <button
          v-for="section in sections"
          :key="section.key"
          type="button"
          :class="{ active: activeTab === section.key }"
          @click="activeTab = section.key"
        >
          {{ section.title }}
        </button>
      </aside>

      <article class="detail-panel">
        <span class="detail-count">{{ activeIndex + 1 }} / {{ sections.length }}</span>
        <h2>{{ activeSection.title }}</h2>

        <div v-if="activeSection.blocks" class="overview-grid">
          <div v-for="block in activeSection.blocks" :key="block.title" class="overview-card">
            <h3>{{ block.title }}</h3>
            <p>{{ block.text }}</p>
          </div>
        </div>

        <p v-if="activeSection.text" class="detail-text">{{ activeSection.text }}</p>

        <ul v-if="activeSection.items?.length" class="detail-list compact-columns">
          <li v-for="item in activeSection.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>
  </section>

  <NotFoundView v-else />
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()
const activeTab = ref('resume')
const project = computed(() => projects.find((item) => item.slug === route.params.slug))

const sections = computed(() => {
  const item = project.value
  if (!item) return []
  return [
    {
      key: 'resume',
      title: 'Résumé',
      blocks: [
        { title: 'Contexte', text: item.context },
        { title: 'Problème résolu', text: item.problem },
        { title: 'Valeur utilisateur', text: item.value }
      ]
    },
    { key: 'fonctionnalites', title: 'Fonctionnalités principales', items: item.features },
    { key: 'modules', title: 'Modules visibles / développés', items: item.modules_visible },
    { key: 'ux', title: 'Analyse UX/UI', items: item.ux },
    { key: 'defis', title: 'Défis techniques rencontrés', items: item.challenges },
    { key: 'solutions', title: 'Solutions mises en œuvre', items: item.solutions },
    { key: 'competences', title: 'Compétences acquises', items: item.skills },
    { key: 'pratiques', title: 'Bonnes pratiques appliquées', items: item.practices || item.best_practices },
    { key: 'ameliorations', title: 'Améliorations futures possibles', items: item.future || item.future_improvements }
  ].filter((section) => section.blocks || section.text || section.items?.length)
})

const activeIndex = computed(() => Math.max(0, sections.value.findIndex((section) => section.key === activeTab.value)))
const activeSection = computed(() => sections.value[activeIndex.value] || sections.value[0] || { title: '', items: [] })

watch(project, () => {
  activeTab.value = 'resume'
})
</script>

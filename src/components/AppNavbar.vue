<template>
  <header class="navbar" :class="{ 'is-open': menuOpen, 'is-scrolled': scrolled }">
    <RouterLink to="/" class="brand" @click="closeMenu">
      <img src="/assets/images/logo.svg" alt="Logo Heritiana" />
    </RouterLink>

    <button class="menu-toggle" type="button" @click="menuOpen = !menuOpen" aria-label="Ouvrir ou fermer le menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="nav-links" aria-label="Navigation principale">
      <a :class="{ active: activeSection === 'profil' }" href="/#profil" @click="closeMenu">Profil</a>
      <a :class="{ active: activeSection === 'competences' }" href="/#competences" @click="closeMenu">Compétences</a>
      <a :class="{ active: activeSection === 'projets' }" href="/#projets" @click="closeMenu">Projets</a>
      <a :class="{ active: activeSection === 'contact' }" href="/#contact" @click="closeMenu">Contact</a>
    </nav>
  </header>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('profil')
let observer

function closeMenu() {
  menuOpen.value = false
}

function updateScrollState() {
  scrolled.value = window.scrollY > 18
}

function observeSections() {
  if (observer) observer.disconnect()
  const sections = ['profil', 'competences', 'projets', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean)

  if (!sections.length) {
    activeSection.value = ''
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target?.id) activeSection.value = visible.target.id
    },
    { rootMargin: '-25% 0px -55% 0px', threshold: [0.18, 0.35, 0.6] }
  )

  sections.forEach((section) => observer.observe(section))
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
  nextTick(observeSections)
})

watch(() => route.fullPath, () => nextTick(observeSections))

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
  if (observer) observer.disconnect()
})
</script>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

// Scroll spy
const activeSection = ref('accueil')

const updateActiveSection = () => {
  const sections = ['accueil', 'projets', 'competences', 'contact'] // backend retiré

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-white">
    <Navbar :active-section="activeSection" />
    <Hero />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
    <Footer />
  </div>
</template>

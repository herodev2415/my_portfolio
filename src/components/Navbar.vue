<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

defineProps({
  activeSection: String
})

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (sectionId) => {
  isMenuOpen.value = false
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const menuItems = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'backend', label: 'Backend' },
  { id: 'contact', label: 'Contact' }
]
</script>

<template>
  <nav 
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <button 
          @click="scrollToSection('accueil')"
          class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          Heritiana Dev
        </button>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <button
            v-for="item in menuItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            class="transition-all duration-300 hover:text-purple-400"
            :class="activeSection === item.id ? 'text-purple-400 font-semibold' : ''"
          >
            {{ item.label }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 hover:bg-purple-900/50 rounded-lg transition-colors"
        >
          <Menu v-if="!isMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <button
            v-for="item in menuItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            class="block w-full text-left px-3 py-2 hover:bg-purple-900/50 rounded-lg transition-all"
            :class="activeSection === item.id ? 'bg-purple-900/30 text-purple-400' : ''"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

defineProps({
  activeSection: String
})

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const activeSectionInternal = ref('accueil')

const menuItems = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' }
]

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 3

  menuItems.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) {
      const top = el.offsetTop
      const bottom = top + el.offsetHeight
      if (scrollPosition >= top && scrollPosition < bottom) {
        activeSectionInternal.value = item.id
      }
    }
  })

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
</script>

<template>
  <nav 
    class="fixed top-0 w-full z-50 transition-all duration-500"
    :class="isScrolled ? 'bg-slate-900/60 backdrop-blur-xl' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex items-center justify-end h-20 pr-6 md:pr-10">
        
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="item in menuItems"
            :key="item.id"
            @click.prevent="scrollToSection(item.id)"
            class="relative px-5 py-2.5 cursor-pointer rounded-lg transition-all duration-300 
                   text-[15px] md:text-[16px] font-semibold tracking-wide font-sans
                   hover:drop-shadow-[0_0_4px_rgba(236,72,153,0.5)]"
            :class="activeSectionInternal === item.id 
              ? 'text-white drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]' 
              : 'text-slate-200 hover:text-white hover:bg-white/5'"
          >
            {{ item.label }}
            <span 
              v-if="activeSectionInternal === item.id"
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            ></span>
          </a>
        </div>

        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2.5 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
        >
          <Menu v-if="!isMenuOpen" :size="24" class="text-purple-400" />
          <X v-else :size="24" class="text-pink-400" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isMenuOpen" 
        class="md:hidden bg-slate-900/90 backdrop-blur-xl"
      >
        <div class="px-4 pt-4 pb-6 space-y-1.5">
          <a
            v-for="item in menuItems"
            :key="item.id"
            @click.prevent="scrollToSection(item.id)"
            class="block w-full text-left px-4 py-3 cursor-pointer text-gray-400 rounded-lg font-medium transition-all duration-300
                   text-[15px] font-semibold tracking-wide font-sans
                   hover:drop-shadow-[0_0_4px_rgba(236,72,153,0.5)]"
            :class="activeSectionInternal === item.id 
              ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]' 
              : 'hover:bg-purple-500/10 hover:text-white'"
          >
            <span class="flex items-center gap-3">
              <span 
                class="w-1.5 h-1.5 rounded-full transition-all duration-300"
                :class="activeSectionInternal === item.id ? 'bg-purple-400' : 'bg-slate-600'"
              ></span>
              {{ item.label }}
            </span>
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

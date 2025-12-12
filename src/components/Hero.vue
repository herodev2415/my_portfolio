<script setup>
import { Github, Linkedin, ChevronDown } from 'lucide-vue-next'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="accueil" class="min-h-screen flex items-center justify-center px-4 pt-16">
    <div class="text-center max-w-4xl mx-auto">
      <!-- Avatar avec photo - Plus grand et visible -->
      <div class="mb-8 animate-fade-in">
        <div class="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 shadow-2xl shadow-purple-500/50">
          <div class="w-full h-full rounded-full bg-slate-900 overflow-hidden">
            <img 
              src="/bg hero.jpg" 
              alt="Heritiana Andrianantenaina"
              class="w-full h-full object-cover"
              @error="(e) => e.target.parentElement.innerHTML = '<div class=\'w-full h-full flex items-center justify-center text-5xl font-bold\'>HA</div>'"
            />
          </div>
        </div>
      </div>
      
      <!-- Titre principal -->
      <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
        Heritiana Andrianantenaina
      </h1>
      
      <h2 class="text-3xl md:text-4xl font-semibold mb-4 text-gray-200">
        Développeur Full Stack
      </h2>
      
      <!-- Description -->
      <p class="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
        Passionné par le développement web moderne avec Vue.js et Java
      </p>
      
      <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        Création d'applications web performantes, sécurisées et élégantes
      </p>
      
      <!-- Boutons d'action -->
      <div class="flex flex-wrap gap-4 justify-center mb-8">
        <button 
          @click="scrollToSection('realisations')"
          class="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Voir mes réalisations
        </button>
        <button 
          @click="scrollToSection('contact')"
          class="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300"
        >
          Me contacter
        </button>
      </div>

      <!-- Liens sociaux -->
      <div class="flex gap-4 justify-center">
        <a
          href="https://github.com/herodev2415"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 bg-slate-800/50 rounded-full hover:bg-purple-900/50 transition-all transform hover:scale-110"
          aria-label="GitHub"
        >
          <Github :size="24" />
        </a>
        <a
          href="https://www.linkedin.com/in/heritiana-andrianantenaina-127512300"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 bg-slate-800/50 rounded-full hover:bg-purple-900/50 transition-all transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin :size="24" />
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="mt-16 animate-bounce">
        <ChevronDown :size="32" class="mx-auto text-purple-400" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in;
}
</style>
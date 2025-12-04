<script setup>
import { Heart, Code } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="py-12 px-4 border-t border-slate-800 bg-slate-900/50">
    <div class="max-w-7xl mx-auto">
      <!-- Contenu principal -->
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- À propos -->
        <div>
          <h3 class="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Heritiana Dev
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Développeur Full Stack passionné par la création d'applications 
            web modernes et performantes avec Vue.js et Java.
          </p>
        </div>

        <!-- Navigation rapide -->
        <div>
          <h4 class="font-semibold mb-4 text-purple-400">Navigation</h4>
          <ul class="space-y-2">
            <li>
              <button
                @click="scrollToSection('accueil')"
                class="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                Accueil
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('projets')"
                class="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                Projets Frontend
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('backend')"
                class="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                API & Backend
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('competences')"
                class="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                Compétences
              </button>
            </li>
          </ul>
        </div>

        <!-- Technologies -->
        <div>
          <h4 class="font-semibold mb-4 text-purple-400">Technologies</h4>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-gray-400 border border-slate-700/50">
              Vue.js
            </span>
            <span class="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-gray-400 border border-slate-700/50">
              Java
            </span>
            <span class="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-gray-400 border border-slate-700/50">
              Spring Boot
            </span>
            <span class="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-gray-400 border border-slate-700/50">
              Node.js
            </span>
            <span class="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-gray-400 border border-slate-700/50">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="border-t border-slate-800 my-8"></div>

      <!-- Copyright et crédits -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div class="text-gray-400 text-sm">
          <p class="flex items-center justify-center md:justify-start gap-2 flex-wrap">
            © {{ currentYear }} Heritiana Andrianantenaina
            <span class="hidden md:inline">•</span>
            <span class="flex items-center gap-1">
              Développé avec 
              <Heart :size="14" class="text-red-500 fill-red-500 animate-pulse" />
              et 
              <Code :size="14" class="text-purple-400" />
            </span>
          </p>
        </div>

        <!-- Stats -->
        <div class="flex gap-6 text-sm text-gray-400">
          <div class="text-center">
            <div class="font-bold text-purple-400">11</div>
            <div class="text-xs">Projets</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-purple-400">8</div>
            <div class="text-xs">Technologies</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-purple-400">100%</div>
            <div class="text-xs">Passion</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
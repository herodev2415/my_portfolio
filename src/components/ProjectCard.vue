<script setup>
import { ExternalLink, Github, Eye } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-2">
    <!-- Image du projet -->
    <div class="relative overflow-hidden h-56">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        @error="(e) => e.target.src = 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&h=600&fit=crop'"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70"></div>
      
      <!-- Overlay avec liens -->
      <div class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/80">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
          title="Voir sur GitHub"
        >
          <Github :size="20" />
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors"
          title="Voir la démo"
        >
          <Eye :size="20" />
        </a>
      </div>
    </div>
    
    <!-- Contenu -->
    <div class="p-6">
      <h3 class="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
        {{ project.title }}
      </h3>
      <p class="text-gray-400 mb-4 leading-relaxed">
        {{ project.description }}
      </p>
      
      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="(tech, index) in project.tech"
          :key="index"
          class="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300 border border-purple-700/30"
        >
          {{ tech }}
        </span>
      </div>
      
      <!-- Lien GitHub -->
      <a
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
      >
        <Github :size="16" />
        Voir le code
        <ExternalLink :size="16" />
      </a>
    </div>
  </div>
</template>
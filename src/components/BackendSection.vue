<script setup>
import { ref } from 'vue'
import { Github, ExternalLink } from 'lucide-vue-next'
import { backendProjects } from '../data/projects.js'

const projects = ref(backendProjects)
</script>

<template>
  <section id="backend" class="py-20 px-4 bg-slate-900/30">
    <div class="max-w-7xl mx-auto">
      <!-- En-tête -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4  from-purple-400 to-pink-400 bg-clip-text text-transparent">
          API & Backend
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Services REST, bases de données et logique métier robuste
        </p>
      </div>

      <!-- Grille des projets backend -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 border border-slate-700/50"
        >
          <!-- En-tête avec icône -->
          <div class="flex items-start gap-4 mb-4">
            <div class="text-5xl">{{ project.icon }}</div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-2 text-purple-400">
                {{ project.title }}
              </h3>
              <p class="text-gray-400 leading-relaxed">
                {{ project.description }}
              </p>
            </div>
          </div>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="(tech, i) in project.tech"
              :key="i"
              class="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-slate-600/50"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Fonctionnalités clés -->
          <div class="mb-4">
            <p class="text-sm font-semibold text-purple-400 mb-2">Fonctionnalités :</p>
            <ul class="space-y-1">
              <li
                v-for="(feature, i) in project.features"
                :key="i"
                class="text-sm text-gray-400 flex items-center gap-2"
              >
                <span class="text-purple-500">•</span>
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- Lien GitHub -->
          <a
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            <Github :size="18" />
            Voir le code source
            <ExternalLink :size="16" />
          </a>
        </div>
      </div>

      <!-- Section explicative -->
      <div class="mt-12 max-w-4xl mx-auto">
        <div class=" from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-700/30">
          <h3 class="text-2xl font-bold mb-4 text-center">Pourquoi séparer Frontend et Backend ?</h3>
          <div class="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 class="font-semibold text-purple-400 mb-2">📱 Frontend</h4>
              <p class="text-sm">
                Ce que l'utilisateur voit et utilise. Interfaces visuelles, interactions, 
                design et expérience utilisateur.
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-pink-400 mb-2">⚙️ Backend</h4>
              <p class="text-sm">
                Le "moteur" invisible. Gestion des données, sécurité, logique métier 
                et communication avec les bases de données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
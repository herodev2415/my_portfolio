<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { frontendProjects } from '../data/projects.js'

const projects = ref(frontendProjects)
</script>

<template>
  <section id="projets" class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- En-tête -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projets Frontend
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Applications web interactives avec interfaces utilisateur modernes et responsive
        </p>
      </div>

      <!-- Grille de projets -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>

      <!-- Message si pas de screenshots -->
      <div class="mt-12 text-center">
        <div class="inline-block bg-purple-900/20 border border-purple-700/30 rounded-xl p-6 max-w-2xl">
          <p class="text-gray-300 mb-2">
            💡 <strong>Astuce :</strong> Pour afficher vos vraies captures d'écran
          </p>
          <p class="text-sm text-gray-400">
            Placez vos images dans <code class="bg-slate-800 px-2 py-1 rounded">public/screenshots/</code> 
            avec les noms : petites-annonces.png, quiz.png, calculator.png, etc.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
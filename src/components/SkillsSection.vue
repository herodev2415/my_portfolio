<script setup>
import { ref } from 'vue'
import { Code, Server, Database, Layout, Palette, Zap } from 'lucide-vue-next'

const skills = ref([
  { 
    name: "Java", 
    level: 95, 
    icon: Server, 
    color: "from-red-600 to-orange-600",
    description: "POO, Spring Boot, JavaFX"
  },
  { 
    name: "Vue.js", 
    level: 90, 
    icon: Code, 
    color: "from-green-600 to-emerald-600",
    description: "Composition API, Vuex, Router"
  },
  { 
    name: "JavaScript/TypeScript", 
    level: 90, 
    icon: Zap, 
    color: "from-yellow-600 to-amber-600",
    description: "ES6+, Async/Await, DOM"
  },
  { 
    name: "HTML5 & CSS3", 
    level: 95, 
    icon: Layout, 
    color: "from-orange-600 to-pink-600",
    description: "Semantic HTML, Flexbox, Grid"
  },
  { 
    name: "Node.js & Express", 
    level: 85, 
    icon: Server, 
    color: "from-green-700 to-green-500",
    description: "REST API, Middleware, Auth"
  },
  { 
    name: "SQL & NoSQL", 
    level: 80, 
    icon: Database, 
    color: "from-blue-600 to-cyan-600",
    description: "MySQL, PostgreSQL, MongoDB"
  },
  { 
    name: "UI/UX Design", 
    level: 85, 
    icon: Palette, 
    color: "from-purple-600 to-pink-600",
    description: "Figma, Tailwind, Responsive"
  },
  { 
    name: "Spring Boot", 
    level: 80, 
    icon: Server, 
    color: "from-green-600 to-lime-600",
    description: "REST, JPA, Security"
  }
])

const otherSkills = [
  { name: 'Git & GitHub', category: 'Outils' },
  { name: 'REST API', category: 'Architecture' },
  { name: 'Tailwind CSS', category: 'Framework' },
  { name: 'Responsive Design', category: 'Design' },
  { name: 'Agile/Scrum', category: 'Méthodologie' }
]
</script>

<template>
  <section id="competences" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- En-tête -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Compétences Techniques
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Technologies et frameworks maîtrisés pour créer des solutions complètes
        </p>
      </div>
      
      <!-- Grille des compétences principales -->
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="flex items-center gap-3 mb-3">
            <component 
              :is="skill.icon" 
              :size="24" 
              class="text-purple-400"
            />
            <div class="flex-1">
              <h3 class="text-xl font-semibold">{{ skill.name }}</h3>
              <p class="text-sm text-gray-500">{{ skill.description }}</p>
            </div>
          </div>
          
          <!-- Barre de progression -->
          <div class="relative h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              class="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 bg-gradient-to-r"
              :class="skill.color"
              :style="{ width: `${skill.level}%` }"
            ></div>
          </div>
          
          <div class="text-right mt-2 text-purple-400 font-semibold text-sm">
            {{ skill.level }}%
          </div>
        </div>
      </div>

      <!-- Autres compétences et explications -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Autres compétences -->
        <div class="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl">
          <h3 class="text-2xl font-bold mb-6 text-purple-400">Autres compétences</h3>
          <div class="flex flex-wrap gap-3">
            <div
              v-for="(skill, i) in otherSkills"
              :key="i"
              class="group"
            >
              <span class="inline-block px-4 py-2 bg-purple-900/30 rounded-full text-sm border border-purple-700/30 hover:bg-purple-900/50 transition-all cursor-default">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Explications Spring Boot et Agile -->
        <div class="space-y-6">
          <!-- Spring Boot -->
          <div class="bg-gradient-to-br from-green-900/30 to-lime-900/30 p-6 rounded-xl border border-green-700/30">
            <h4 class="text-xl font-bold mb-3 text-green-400">🍃 Spring Boot</h4>
            <p class="text-sm text-gray-300 leading-relaxed">
              Framework Java qui simplifie la création d'applications web et d'API REST. 
              Il configure automatiquement votre projet, gère les dépendances, et permet 
              de créer rapidement des services professionnels avec sécurité intégrée.
            </p>
          </div>

          <!-- Agile/Scrum -->
          <div class="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-700/30">
            <h4 class="text-xl font-bold mb-3 text-blue-400">🔄 Agile/Scrum</h4>
            <p class="text-sm text-gray-300 leading-relaxed">
              Méthode de travail en équipe où on développe par petites étapes appelées 
              "sprints" (2-4 semaines). Inclut des réunions quotidiennes courtes (daily stand-up) 
              et une adaptation continue aux besoins du client pour une livraison rapide et efficace.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
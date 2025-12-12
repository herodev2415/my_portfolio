<script setup>
import { ref, computed } from 'vue'
import { Github, ExternalLink, Code, Server, Layers } from 'lucide-vue-next'

const activeFilter = ref('tous')

// Tous vos projets combinés
const allProjects = [
  // FRONTEND - Avec images
 {
    title: "Petites Annonces",
    description: "Plateforme complète de publication et consultation d'annonces avec recherche avancée et système de catégories",
    tech: ["React.js", "Tailwind CSS", "API REST"],
    category: "frontend",
    type: "Interface Web",
    image: "/public/annonce.png",
    github: "https://github.com/herodev2415/petites-annonces",
    demo: null
},
  
  {
    title: "Application Quiz",
    description: "Quiz interactif avec système de score, timer et catégories multiples pour tester vos connaissances",
    tech: ["JavaScript", "HTML5", "CSS3"],
    category: "frontend",
    type: "Interface Web",
    image: "/public/quizz.png",
    github: "https://github.com/herodev2415/Quizz",
    demo: null
  },
  {
    title: "Calculatrice Scientifique",
    description: "Calculatrice moderne avec fonctions scientifiques avancées et interface responsive élégante",
    tech: ["JavaScript", "HTML5", "CSS3"],
    category: "frontend",
    type: "Interface Web",
    image: "/public/calculatrice1.png",
    github: "https://github.com/herodev2415/calculator",
    demo: null
  },
  {
    title: "Brochure Professionnelle",
    description: "Site web de présentation avec design moderne, animations fluides et sections dynamiques",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "frontend",
    type: "Interface Web",
    image: "/public/brochure.png",
    github: "https://github.com/herodev2415/brochure-heritiana",
    demo: null
  },
  {
    title: "CV Interactif",
    description: "CV en ligne avec design élégant, animations subtiles et sections organisées professionnellement",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "frontend",
    type: "Interface Web",
    image: "/public/cv.png",
    github: "https://github.com/herodev2415/cv_heritiana",
    demo: null
  },
  {
    title: "Gestionnaire de Tâches",
    description: "Application de gestion de tâches avec drag & drop, système de priorités et filtres intelligents",
    tech: ["Vue.js", "LocalStorage", "Tailwind CSS"],
    category: "frontend",
    type: "Apprentissage & Pratique",
    image: "/screenshots/gestionnaire-tache.png",
    github: "https://github.com/herodev2415/gestionnaire_tache",
    demo: null
  },
  
  // BACKEND - Projets techniques
  {
    title: "Coffre-fort Sécurisé",
    description: "Application de gestion de mots de passe avec chiffrement AES-256 et authentification robuste",
    tech: ["Java", "Encryption AES", "Sécurité", "Base de données"],
    category: "backend",
    type: "Sécurité & Encryption",
    icon: "🔐",
    github: "https://github.com/herodev2415/coffre-fort-java",
    features: ["Chiffrement AES-256", "Authentification sécurisée", "Gestion multi-utilisateurs"]
  },
  {
    title: "Système de Gestion Garage",
    description: "Application complète de gestion de garage avec inventaire véhicules et suivi des réparations",
    tech: ["Java", "JavaFX", "MySQL", "Architecture MVC"],
    category: "backend",
    type: "Gestion & Business Logic",
    icon: "🚗",
    github: "https://github.com/herodev2415/garage-application-java",
    features: ["Gestion inventaire", "Facturation automatique"]
  },
  {
    title: "API Petites Annonces",
    description: "API REST complète avec authentification JWT, gestion d'images et système de recherche avancée",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    type: "API REST",
    icon: "⚡",
    github: "https://github.com/herodev2415/petites-annonces-backend",
    features: ["API RESTful", "Auth JWT", "Upload d'images", "Recherche optimisée"]
  },
  {
  title: "Système RH Entreprise",
  description: "Application web RH développée en Vue.js pour gérer les employés, congés, évaluations et contrats",
  tech: ["Vue.js", "Node.js", "Express", "MySQL", "JWT"],
  category: "frontend & backend",
  type: "Application de gestion RH",
  icon: "👥",
  github: "https://github.com/herodev2415/projet-RH",
  features: [
    "Gestion des employés",
    "Suivi des congés",
    "Évaluations de performance",
    "Gestion des contrats et rôles utilisateurs"
  ]
}
,
  
  // FULL STACK
  {
    title: "Exercices Vue.js",
    description: "Collection d'exercices pratiques et composants Vue.js réutilisables avec documentation",
    tech: ["Vue.js", "JavaScript", "CSS3", "Composition API"],
    category: "fullstack",
    type: "Apprentissage & Pratique",
    image: "/screenshots/exo-vue.png",
    github: "https://github.com/herodev2415/exo-vue.js",
    demo: null
  }
]

const filters = [
  { id: 'tous', label: 'Tous les projets', icon: Layers, count: computed(() => allProjects.length) },
  { id: 'frontend', label: 'Interfaces Web', icon: Code, count: computed(() => allProjects.filter(p => p.category === 'frontend').length) },
  { id: 'backend', label: 'Backend & API', icon: Server, count: computed(() => allProjects.filter(p => p.category === 'backend').length) },
  { id: 'fullstack', label: 'Full Stack', icon: Layers, count: computed(() => allProjects.filter(p => p.category === 'fullstack').length) }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'tous') {
    return allProjects
  }
  return allProjects.filter(p => p.category === activeFilter.value)
})
</script>

<template>
  <section id="realisations" class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- En-tête -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Mes Réalisations
        </h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          Une sélection de mes projets en développement web, des interfaces utilisateur aux architectures backend
        </p>
      </div>

      <!-- Filtres modernes -->
      <div class="flex flex-wrap gap-3 justify-center mb-12">
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="activeFilter = filter.id"
          class="group flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300"
          :class="activeFilter === filter.id
            ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-white shadow-lg shadow-purple-500/20 scale-105'
            : 'bg-slate-800/30 text-gray-400 hover:bg-slate-800/50 hover:text-white'"
        >
          <component :is="filter.icon" :size="18" />
          <span>{{ filter.label }}</span>
          <span 
            class="px-2 py-0.5 rounded-full text-xs font-bold transition-colors"
            :class="activeFilter === filter.id ? 'bg-white/20' : 'bg-slate-700/50'"
          >
            {{ filter.count }}
          </span>
        </button>
      </div>

      <!-- Grille des projets -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TransitionGroup
          name="project"
          tag="div"
          class="contents"
        >
          <!-- Projets Frontend avec images -->
          <div
            v-for="project in filteredProjects.filter(p => p.image)"
            :key="project.title"
            class="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
          >
            <div class="relative overflow-hidden h-56">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                @error="(e) => e.target.src = 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&h=600&fit=crop'"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70"></div>
              
              <!-- Badge catégorie -->
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1 bg-purple-600/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                  {{ project.type }}
                </span>
              </div>

              <!-- Overlay avec liens -->
              <div class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/80">
                <a
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
                  title="Voir sur GitHub"
                >
                  <Github :size="20" />
                </a>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-400 mb-4 text-sm leading-relaxed">
                {{ project.description }}
              </p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="(tech, i) in project.tech.slice(0, 3)"
                  :key="i"
                  class="px-3 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300"
                >
                  {{ tech }}
                </span>
              </div>
              
              <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
              >
                <Github :size="16" />
                Voir le code
                <ExternalLink :size="14" />
              </a>
            </div>
          </div>

          <!-- Projets Backend sans images -->
          <div
            v-for="project in filteredProjects.filter(p => !p.image)"
            :key="project.title"
            class="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-700/30"
          >
            <!-- En-tête avec icône -->
            <div class="flex items-start gap-4 mb-4">
              <div class="text-5xl">{{ project.icon }}</div>
              <div class="flex-1">
                <div class="flex items-start justify-between mb-2">
                  <h3 class="text-2xl font-bold text-purple-400">
                    {{ project.title }}
                  </h3>
                  <span class="px-2 py-1 bg-purple-600/20 rounded-lg text-xs font-semibold whitespace-nowrap">
                    {{ project.type }}
                  </span>
                </div>
                <p class="text-gray-400 leading-relaxed text-sm">
                  {{ project.description }}
                </p>
              </div>
            </div>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, i) in project.tech"
                :key="i"
                class="px-3 py-1 bg-slate-700/40 rounded-full text-xs text-gray-300"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Fonctionnalités -->
            <div class="mb-4">
              <p class="text-xs font-semibold text-purple-400 mb-2">Fonctionnalités clés :</p>
              <ul class="space-y-1">
                <li
                  v-for="(feature, i) in project.features"
                  :key="i"
                  class="text-xs text-gray-400 flex items-center gap-2"
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
              class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium text-sm"
            >
              <Github :size="16" />
              Voir le code source
              <ExternalLink :size="14" />
            </a>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-enter-active,
.project-leave-active {
  transition: all 0.5s ease;
}

.project-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.project-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
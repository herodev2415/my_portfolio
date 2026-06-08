<template>
  <section id="competences" class="skills-showcase section-pad snap-section">
    <div class="skills-showcase-heading">
      <span class="skills-showcase-eyebrow">Compétences</span>

      <h2>Compétences Techniques</h2>

      <p>
        Technologies et frameworks maîtrisés pour créer des solutions complètes.
      </p>
    </div>

    <div class="skills-showcase-grid">
      <article
        v-for="category in skillCategories"
        :key="category.title"
        class="skills-showcase-card"
      >
        <header class="skills-showcase-card-head">
          <div class="skills-showcase-category-icon" aria-hidden="true">
            <span>{{ category.icon }}</span>
          </div>

          <div>
            <h3>{{ category.title }}</h3>
            <p>{{ category.description }}</p>
          </div>
        </header>

        <div class="skills-showcase-list">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="skills-showcase-item"
          >
            <div class="skills-showcase-tech-icon">
              <img
                v-if="skill.logo"
                :src="skill.logo"
                :alt="skill.name"
                loading="lazy"
              />

              <span v-else>{{ skill.fallback }}</span>
            </div>

            <div class="skills-showcase-info">
              <div class="skills-showcase-title-row">
                <strong>{{ skill.name }}</strong>

                <div class="skills-showcase-level">
                  <span>{{ skill.level }}%</span>
                  <div>
                    <i :style="{ width: skill.level + '%' }"></i>
                  </div>
                </div>
              </div>

              <p>{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="skills-showcase-other">
      <h3>Autres compétences</h3>

      <div class="skills-showcase-tags">
        <span
          v-for="item in otherSkills"
          :key="item.name"
        >
          <img
            v-if="item.logo"
            :src="item.logo"
            :alt="item.name"
            loading="lazy"
          />

          <b v-else>{{ item.icon }}</b>

          {{ item.name }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: 'Frontend',
    description: 'Interface utilisateur et responsive design',
    icon: '</>',
    skills: [
      {
        name: 'Vue.js',
        level: 88,
        description: 'Composants, router, pages dynamiques',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        fallback: 'V'
      },
      {
        name: 'JavaScript / TypeScript',
        level: 82,
        description: 'Logique frontend et interaction utilisateur',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        fallback: 'JS'
      },
      {
        name: 'React.js',
        level: 74,
        description: 'Création d’interfaces modernes',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        fallback: 'R'
      },
      {
        name: 'Tailwind CSS',
        level: 84,
        description: 'Design propre, rapide et responsive',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        fallback: 'TW'
      }
    ]
  },
  {
    title: 'API & Données',
    description: 'Connexion entre interface, serveur et base',
    icon: '▣',
    skills: [
      {
        name: 'API REST',
        level: 84,
        description: 'Création et consommation d’endpoints',
        logo: '',
        fallback: 'REST'
      },
      {
        name: 'Authentification JWT',
        level: 80,
        description: 'Connexion, rôles et accès sécurisés',
        logo: '',
        fallback: 'JWT'
      },
      {
        name: 'MySQL',
        level: 82,
        description: 'Tables, relations et requêtes métier',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        fallback: 'SQL'
      },
      {
        name: 'CRUD complet',
        level: 86,
        description: 'Créer, lire, modifier et supprimer',
        logo: '',
        fallback: 'CRUD'
      }
    ]
  },
  {
    title: 'Backend',
    description: 'Logique serveur et architecture applicative',
    icon: '⚙',
    skills: [
      {
        name: 'Node.js & Express',
        level: 84,
        description: 'Routes, middlewares et API backend',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        fallback: 'JS'
      },
      {
        name: 'Java',
        level: 78,
        description: 'Programmation orientée objet',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        fallback: 'J'
      },
      {
        name: 'Spring Boot',
        level: 72,
        description: 'Bases backend et API REST',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        fallback: 'SB'
      },
      {
        name: 'Python',
        level: 70,
        description: 'Scripts et logique applicative',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        fallback: 'PY'
      }
    ]
  }
]

const otherSkills = [
  {
    name: 'Git & GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    icon: 'GH'
  },
  {
    name: 'Responsive Design',
    logo: '',
    icon: '📱'
  },
  {
    name: 'UI/UX Design',
    logo: '',
    icon: '🎨'
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    icon: 'D'
  },
  {
    name: 'Agile / Scrum',
    logo: '',
    icon: '↻'
  },
  {
    name: 'Déploiement web',
    logo: '',
    icon: '☁'
  }
]
</script>
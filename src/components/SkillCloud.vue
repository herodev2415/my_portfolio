<template>
  <section id="competences" class="skills-page section-pad snap-section">
    <div class="skills-heading">
      <span class="skills-small-title">Compétences</span>
      <h2>Compétences Techniques</h2>
      <p>
        Technologies et frameworks maîtrisés pour créer des solutions complètes.
      </p>
    </div>

    <div class="skills-columns">
      <article
        v-for="category in skillCategories"
        :key="category.title"
        class="skill-category"
      >
        <div class="category-head">
          <span class="category-icon">{{ category.icon }}</span>
          <div>
            <h3>{{ category.title }}</h3>
            <p>{{ category.subtitle }}</p>
          </div>
        </div>

        <div class="skill-list">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="skill-item"
          >
            <div class="skill-title-row">
              <strong>{{ skill.name }}</strong>

              <div class="skill-mini-level">
                <span>{{ skill.level }}</span>
                <div class="mini-progress" aria-hidden="true">
                  <i :style="{ '--level': skill.level }"></i>
                </div>
              </div>
            </div>

            <p>{{ skill.description }}</p>
          </div>
        </div>
      </article>
    </div>

    <article class="other-skills">
      <h3>Autres compétences</h3>

      <div class="other-tags">
        <span v-for="skill in otherSkills" :key="skill">{{ skill }}</span>
      </div>
    </article>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    icon: '🎨',
    title: 'Frontend',
    subtitle: 'Interface utilisateur et responsive design',
    skills: [
      {
        name: 'Vue.js',
        description: 'Composants, router, pages dynamiques',
        level: '88%'
      },
      {
        name: 'JavaScript / TypeScript',
        description: 'Logique frontend et interaction utilisateur',
        level: '82%'
      },
      {
        name: 'React.js',
        description: 'Création d’interfaces modernes',
        level: '74%'
      },
      {
        name: 'Tailwind CSS',
        description: 'Design propre, rapide et responsive',
        level: '84%'
      }
    ]
  },
  {
    icon: '🔗',
    title: 'API & Données',
    subtitle: 'Connexion entre interface, serveur et base',
    skills: [
      {
        name: 'API REST',
        description: 'Création et consommation d’endpoints',
        level: '84%'
      },
      {
        name: 'Authentification JWT',
        description: 'Connexion, rôles et accès sécurisés',
        level: '80%'
      },
      {
        name: 'MySQL',
        description: 'Tables, relations et requêtes métier',
        level: '82%'
      },
      {
        name: 'CRUD complet',
        description: 'Créer, lire, modifier et supprimer',
        level: '86%'
      }
    ]
  },
  {
    icon: '⚙️',
    title: 'Backend',
    subtitle: 'Logique serveur et architecture applicative',
    skills: [
      {
        name: 'Node.js & Express',
        description: 'Routes, middlewares et API backend',
        level: '84%'
      },
      {
        name: 'Java',
        description: 'Programmation orientée objet',
        level: '78%'
      },
      {
        name: 'Spring Boot',
        description: 'Bases backend et API REST',
        level: '72%'
      },
      {
        name: 'Python',
        description: 'Scripts et logique applicative',
        level: '70%'
      }
    ]
  }
]

const otherSkills = [
  'Git & GitHub',
  'Responsive Design',
  'UI/UX Design',
  'Docker',
  'Agile / Scrum',
  'Déploiement web'
]
</script>
<template>
  <HeroSection />
  <SkillCloud />

  <section id="projets" class="section-pad projects-section snap-section">
    <div class="projects-heading">
  <span class="projects-small-title">Projets</span>
  <h2>Projets sélectionnés</h2>
  <p>
    Cliquez sur une image pour consulter les détails du projet : fonctionnalités,
    technologies, modules développés et solutions mises en œuvre.
  </p>
</div>

    <div class="projects-grid">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
  </section>

  <ContactCta />
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import SkillCloud from '../components/SkillCloud.vue'
import ProjectCard from '../components/ProjectCard.vue'
import ContactCta from '../components/ContactCta.vue'
import { projects } from '../data/projects'
</script>

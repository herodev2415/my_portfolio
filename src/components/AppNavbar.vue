<template>
  <header class="lp-navbar" :class="{ 'is-open': menuOpen, 'is-scrolled': scrolled }">
    <div class="lp-navbar__inner">
      <RouterLink to="/" class="lp-brand" @click="closeMenu" aria-label="Retour à l'accueil">
        <img class="lp-brand__logo" src="/assets/images/logo.svg" alt="" width="56" height="56" />
        <span class="lp-brand__copy">
          <strong>Heritiana</strong>
          <small>Landing pages</small>
        </span>
      </RouterLink>

      <button
        class="lp-menu-toggle"
        type="button"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-controls="navigation-principale"
        aria-label="Ouvrir ou fermer le menu"
      >
        <span></span><span></span><span></span>
      </button>

      <nav id="navigation-principale" class="lp-nav-links" aria-label="Navigation principale">
        <a href="#projets" @click="closeMenu">Réalisations</a>
        <a href="#avant-apres" @click="closeMenu">Avant / Après</a>
        <a href="#offre" @click="closeMenu">Mon service</a>
        <a href="#apropos" @click="closeMenu">À propos</a>
        <a href="#faq" @click="closeMenu">FAQ</a>
        <button class="lp-nav-cta" type="button" @click="openAuditFromNav">Demander mon audit</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useAuditModal } from '../composables/useAuditModal'

const menuOpen = ref(false)
const scrolled = ref(false)
const { openAudit } = useAuditModal()

function closeMenu() {
  menuOpen.value = false
}

function openAuditFromNav() {
  closeMenu()
  openAudit()
}

function updateScrollState() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', updateScrollState))
</script>

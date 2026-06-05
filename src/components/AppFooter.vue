<template>
  <footer
    ref="footerRef"
    class="footer-pro"
    :class="{ 'is-visible': footerVisible }"
  >
    <div class="footer-pro-inner section-pad">
      <div class="footer-pro-card">
        <div class="footer-pro-brand">
          <div class="footer-pro-logo" aria-hidden="true">
            AH
          </div>

          <div>
            <h2>Andrianantenaina Heritiana</h2>
            <p>Développeur Full Stack</p>
          </div>
        </div>

        <div class="footer-pro-social" aria-label="Réseaux sociaux professionnels">
          <a
            href="https://github.com/herodev2415"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir mon profil GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.8-.25.8-.56v-2c-3.25.7-3.94-1.4-3.94-1.4-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.74 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.6-.3-5.33-1.3-5.33-5.78 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.5.12-3.1 0 0 .98-.32 3.2 1.2a11.1 11.1 0 0 1 5.83 0c2.22-1.52 3.2-1.2 3.2-1.2.64 1.6.24 2.8.12 3.1.75.82 1.2 1.87 1.2 3.15 0 4.5-2.74 5.47-5.35 5.76.42.36.8 1.08.8 2.18v3.23c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/herodev2415/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir mon profil LinkedIn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.35 8.05h4.28V24H.35V8.05ZM8.1 8.05h4.1v2.18h.06c.57-1.08 1.97-2.22 4.05-2.22 4.33 0 5.13 2.85 5.13 6.56V24h-4.28v-8.36c0-2-.04-4.56-2.78-4.56-2.78 0-3.2 2.17-3.2 4.42V24H8.1V8.05Z"
              />
            </svg>
          </a>

          <a
            href="https://web.facebook.com/heritiana2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir mon profil Facebook"
            title="Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.5c-1.49 0-1.95.93-1.95 1.88v2.28h3.32l-.53 3.49H13.9V24C19.61 23.1 24 18.1 24 12.07Z"
              />
            </svg>
          </a>
        </div>

        <p class="footer-pro-availability">
          Disponible pour des missions freelance et des collaborations.
        </p>

        <div class="footer-pro-separator"></div>

        <div class="footer-pro-bottom">
          <span>
            © {{ currentYear }} Andrianantenaina Heritiana. Tous droits réservés.
          </span>
        </div>
      </div>
    </div>

    <button
      class="back-to-top"
      :class="{ 'is-visible': showBackToTop }"
      type="button"
      aria-label="Retour en haut de la page"
      title="Retour en haut"
      @click="scrollToTop"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5 5.5 11.5l1.42 1.42L11 8.84V20h2V8.84l4.08 4.08 1.42-1.42L12 5Z" />
      </svg>
    </button>
  </footer>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const footerRef = ref(null)
const footerVisible = ref(false)
const showBackToTop = ref(false)

const currentYear = computed(() => new Date().getFullYear())

let observer = null

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 450
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        footerVisible.value = true
      }
    },
    {
      threshold: 0.18
    }
  )

  if (footerRef.value) {
    observer.observe(footerRef.value)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)

  if (observer) {
    observer.disconnect()
  }
})
</script>
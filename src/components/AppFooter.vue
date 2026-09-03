<template>
  <footer class="lp-footer">
    <div class="lp-container lp-footer__inner">
      <div class="lp-footer__brand">
        <img src="/assets/images/logo.svg" alt="" width="44" height="44" />
        <div>
          <strong>Heritiana</strong>
          <p>Landing pages pour formateurs professionnels.</p>
        </div>
      </div>

      <div class="lp-footer__links">
        <a href="https://www.linkedin.com/in/heritiana-landing-page/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <button type="button" @click="openAudit">Demander mon audit</button>
      </div>

      <span>© {{ currentYear }} Heritiana. Tous droits réservés.</span>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useAuditModal } from '../composables/useAuditModal'

const currentYear = computed(() => new Date().getFullYear())
const { openAudit } = useAuditModal()
</script>

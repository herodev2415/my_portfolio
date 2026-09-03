<template>
  <Teleport to="body">
    <Transition name="audit-modal">
      <div
        v-if="auditOpen"
        class="audit-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-modal-title"
        @click.self="closeAudit"
      >
        <div class="audit-modal">
          <button
            class="audit-modal__close"
            type="button"
            aria-label="Fermer la demande d'audit"
            @click="closeAudit"
          >
            <span></span>
            <span></span>
          </button>

          <div class="audit-modal__intro">
            <span class="lp-eyebrow">Audit de landing page</span>
            <h2 id="audit-modal-title">Parlez-moi de votre page.</h2>
            <p>
              Envoyez votre page actuelle — ou décrivez votre offre —
              et je vous répondrai avec les premiers points à améliorer.
            </p>
            <div class="audit-modal__checks" aria-label="Points regardés pendant l'audit">
              <span>Promesse</span>
              <span>Bénéfices</span>
              <span>Action</span>
            </div>
          </div>

          <form
            class="audit-modal__form"
            action="https://formsubmit.co/heritiana.andrianantenaina24@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Demande d'audit landing page — Site Heritiana" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" class="lp-honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" />

            <div class="audit-modal__fields audit-modal__fields--two">
              <label>
                <span>Votre email *</span>
                <input type="email" name="email" autocomplete="email" placeholder="vous@entreprise.com" required />
              </label>

              <label>
                <span>Lien de votre page</span>
                <input type="url" name="page_url" inputmode="url" placeholder="https://..." />
              </label>
            </div>

            <label>
              <span>Votre objectif principal *</span>
              <select name="objectif" required>
                <option value="" disabled selected>Choisir votre objectif</option>
                <option>Obtenir plus d'inscriptions</option>
                <option>Réserver plus d'appels</option>
                <option>Recevoir plus de demandes</option>
                <option>Créer une nouvelle landing page</option>
              </select>
            </label>

            <label>
              <span>Votre contexte *</span>
              <textarea
                name="message"
                placeholder="Décrivez votre formation ou ce qui vous semble bloquer aujourd'hui."
                required
              ></textarea>
            </label>

            <button type="submit" class="lp-btn lp-btn--primary lp-btn--full">
              Demander mon audit
            </button>

            <p class="audit-modal__note">Une seule étape : envoyez votre demande.</p>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { useAuditModal } from '../composables/useAuditModal'

const { auditOpen, closeAudit } = useAuditModal()

function onKeydown(event) {
  if (event.key === 'Escape') closeAudit()
}

watch(auditOpen, (isOpen) => {
  document.body.classList.toggle('is-audit-open', isOpen)
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.classList.remove('is-audit-open')
})
</script>

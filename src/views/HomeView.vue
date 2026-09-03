<template>
  <div class="lp-home">
    <section id="accueil" class="lp-hero lp-container" aria-labelledby="hero-title">
      <div class="lp-hero__copy">
        <p class="lp-kicker">Création de landing pages pour formateurs professionnels</p>

        <h1 id="hero-title">
          Une landing page claire pour transformer l’intérêt
          <span class="lp-hero__accent">en inscription.</span>
        </h1>

        <p class="lp-hero__lead">
          Je construis votre page pour présenter clairement votre formation,
          mettre en avant ce que vos prospects vont réellement obtenir
          et leur montrer quoi faire ensuite.
        </p>

        <div class="lp-hero__actions">
          <button type="button" class="lp-btn lp-btn--primary" @click="openAudit">
            Demander mon audit
          </button>
          <a href="#projets" class="lp-text-link">Voir mes réalisations <span>↓</span></a>
        </div>

        <div class="lp-hero__trust" aria-label="Points clés">
          <span>Message clair</span>
          <span>Design professionnel</span>
          <span>Action évidente</span>
        </div>
      </div>

      <div class="lp-hero__visual" aria-label="Aperçu d'une landing page de formation">
        <div class="lp-orbit lp-orbit--one"></div>
        <div class="lp-orbit lp-orbit--two"></div>

        <div class="lp-browser">
          <div class="lp-browser__bar">
            <span></span><span></span><span></span>
            <div class="lp-browser__url">votre-formation.fr</div>
          </div>

          <div class="lp-browser__screen">
            <div class="lp-browser__nav">
              <b>Votre formation</b>
              <span>Programme</span>
              <span>Résultats</span>
              <i>Je m'inscris</i>
            </div>

            <div class="lp-browser__hero">
              <small>FORMATION PROFESSIONNELLE</small>
              <h3>Une promesse claire, centrée sur le résultat.</h3>
              <p>Votre prospect comprend rapidement pour qui est l’offre, ce qu’il va obtenir et comment avancer.</p>
              <button type="button" tabindex="-1">Je réserve ma place</button>
            </div>

            <div class="lp-browser__benefits">
              <span>Offre claire</span>
              <span>Bénéfices visibles</span>
              <span>Action évidente</span>
            </div>
          </div>
        </div>

        <div class="lp-floating-note lp-floating-note--top">
          <b>01</b><span>Comprendre vite</span>
        </div>
        <div class="lp-floating-note lp-floating-note--bottom">
          <b>→</b><span>Savoir quoi faire</span>
        </div>
      </div>
    </section>

    <section id="projets" class="lp-section lp-container" aria-labelledby="projects-title">
      <header class="lp-section-head lp-section-head--split">
        <div>
          <span class="lp-eyebrow">Réalisations</span>
          <h2 id="projects-title">Des pages conçues autour d’un résultat.</h2>
        </div>
        <p>Quelques exemples pour montrer ma manière de transformer une offre en page simple à comprendre.</p>
      </header>

      <div class="lp-project-grid">
        <article class="lp-project lp-project--excel">
          <div class="lp-project__preview">
            <div class="lp-preview-card">
              <small>FORMATION EXCEL</small>
              <strong>Gagnez du temps sur les tâches que vous faites encore manuellement.</strong>
              <span>Formules utiles · tableaux clairs · plus d’autonomie</span>
              <i>Réserver ma place</i>
            </div>
          </div>
          <div class="lp-project__copy">
            <span>Projet conceptuel</span>
            <h3>Formation Excel</h3>
            <p>De « connaître Excel » à « gagner du temps et devenir autonome ».</p>
          </div>
        </article>

        <article class="lp-project lp-project--trainer">
          <div class="lp-project__preview">
            <div class="lp-preview-card lp-preview-card--warm">
              <small>FORMATION BUSINESS ENGLISH</small>
              <strong>Parlez avec plus d’aisance dans vos situations professionnelles.</strong>
              <span>Réunions · présentations · appels clients</span>
              <i>Réserver mon évaluation</i>
            </div>
          </div>
          <div class="lp-project__copy">
            <span>Projet conceptuel</span>
            <h3>Business English</h3>
            <p>La page vend l’aisance professionnelle, pas une liste de cours.</p>
          </div>
        </article>

        <article class="lp-project lp-project--personal">
          <div class="lp-project__preview">
            <div class="lp-preview-card lp-preview-card--dark">
              <small>MON POSITIONNEMENT</small>
              <strong>Une page spécialisée autour d’un seul service.</strong>
              <span>Landing pages · formateurs · audit</span>
              <i>Demander mon audit</i>
            </div>
          </div>
          <div class="lp-project__copy">
            <span>Projet personnel</span>
            <h3>Mon propre portfolio</h3>
            <p>Un portfolio recentré sur une offre claire et une action principale.</p>
          </div>
        </article>
      </div>
    </section>

    <section id="avant-apres" class="lp-section lp-section--warm" aria-labelledby="compare-title">
      <div class="lp-container">
        <header class="lp-section-head lp-section-head--center">
          <span class="lp-eyebrow">Avant / Après</span>
          <h2 id="compare-title">D’une page qui informe à une page qui guide.</h2>
        </header>

        <div class="lp-compare lp-compare--clean">
          <article class="lp-compare__side lp-compare__side--before">
            <span>Avant</span>
            <ul>
              <li><b>Promesse floue</b></li>
              <li><b>Trop d’informations</b></li>
              <li><b>Programme avant bénéfices</b></li>
              <li><b>Plusieurs actions</b></li>
            </ul>
          </article>

          <div class="lp-compare__arrow" aria-hidden="true">→</div>

          <article class="lp-compare__side lp-compare__side--after">
            <span>Après</span>
            <ul>
              <li><b>Offre comprise rapidement</b></li>
              <li><b>Lecture simple</b></li>
              <li><b>Bénéfices visibles</b></li>
              <li><b>Une action claire</b></li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="offre" class="lp-section lp-container" aria-labelledby="offer-title">
      <header class="lp-section-head lp-section-head--split">
        <div>
          <span class="lp-eyebrow">Mon service</span>
          <h2 id="offer-title">Ce que je fais pour vous.</h2>
        </div>
        <p>Une page plus claire, plus agréable à parcourir et pensée pour une seule action.</p>
      </header>

      <div class="lp-service-grid lp-service-grid--friendly lp-service-grid--three">
        <article>
          <b>01</b>
          <h3>Clarifier votre offre</h3>
          <p>Votre visiteur comprend vite ce que vous proposez.</p>
        </article>

        <article>
          <b>02</b>
          <h3>Montrer l’essentiel</h3>
          <p>Les bénéfices et les informations utiles apparaissent au bon moment.</p>
        </article>

        <article>
          <b>03</b>
          <h3>Guider vers l’action</h3>
          <p>La page montre clairement quoi faire : s’inscrire, réserver ou demander.</p>
        </article>
      </div>

      <div class="lp-process lp-process--three">
        <span class="lp-process__label">Comment se passe le projet ?</span>
        <ol>
          <li><b>Comprendre</b><span>votre offre et votre objectif</span></li>
          <li><b>Créer</b><span>le message, le design et la page</span></li>
          <li><b>Mettre en ligne</b><span>une page prête à être utilisée</span></li>
        </ol>
      </div>
    </section>

    <section id="apropos" class="lp-section lp-section--about" aria-labelledby="about-title">
      <div class="lp-container lp-about">
        <div class="lp-about__media">
          <div class="lp-about__frame">
            <img
              src="/assets/images/profile-heritiana.jpg"
              alt="Heritiana, créateur de landing pages pour formateurs professionnels"
              width="1280"
              height="1280"
              loading="lazy"
            />
          </div>
          <span class="lp-about__signature">HA</span>
        </div>

        <div class="lp-about__content">
          <span class="lp-eyebrow">À propos</span>
          <h2 id="about-title">Je suis Heritiana.</h2>
          <p class="lp-about__lead">
            Je me spécialise dans la création de landing pages pour les formateurs professionnels.
          </p>
          <p>
            Je prends en charge le message, la présentation et la mise en ligne pour vous livrer une page claire et cohérente.
          </p>
          <div class="lp-about__values">
            <span>Message clair</span>
            <span>Design professionnel</span>
            <span>Page prête à l’emploi</span>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="lp-section lp-container" aria-labelledby="faq-title">
      <header class="lp-section-head lp-section-head--split">
        <div>
          <span class="lp-eyebrow">Questions fréquentes</span>
          <h2 id="faq-title">L’essentiel avant de démarrer.</h2>
        </div>
        <p>Des réponses simples aux questions qui reviennent le plus souvent.</p>
      </header>

      <div class="lp-faq">
        <details open>
          <summary>Est-ce que tu fais seulement le design ?</summary>
          <p>Non. Je commence par votre offre et votre objectif, puis je construis le contenu et la présentation autour de ce que votre prospect doit comprendre.</p>
        </details>
        <details>
          <summary>Peux-tu améliorer une page qui existe déjà ?</summary>
          <p>Oui. L’audit permet d’abord de voir ce qui fonctionne et ce qui mérite réellement d’être amélioré.</p>
        </details>
        <details>
          <summary>Est-ce qu’une landing page garantit plus de ventes ?</summary>
          <p>Non. Les ventes dépendent aussi de votre offre, votre prix et votre trafic. Mon rôle est de rendre la page plus claire et le passage à l’action plus simple.</p>
        </details>
      </div>
    </section>

    <section class="lp-final-cta" aria-labelledby="final-cta-title">
      <div class="lp-container lp-final-cta__inner">
        <div>
          <span class="lp-eyebrow">Votre prochaine étape</span>
          <h2 id="final-cta-title">Parlons de votre landing page.</h2>
          <p>Envoyez-moi votre page actuelle ou décrivez votre formation.</p>
        </div>
        <button type="button" class="lp-btn lp-btn--primary" @click="openAudit">Demander mon audit</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useAuditModal } from '../composables/useAuditModal'

const { openAudit } = useAuditModal()
</script>

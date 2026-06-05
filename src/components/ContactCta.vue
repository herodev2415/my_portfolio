<template>
  <section id="contact" class="contact-page section-pad snap-section">
    <div class="contact-heading">
      <span class="contact-small-title">Contact</span>
      <h2>Contactez-moi</h2>
    
    </div>

    <div class="contact-layout">
      <aside class="contact-trust-card">
        <div>
          <span class="trust-badge">Démarrons simplement</span>

          <h3>Votre projet mérite une solution claire et bien construite.</h3>
        </div>

        <div class="trust-points">
          <div class="trust-point">
            <span>01</span>
            <div>
              <strong>Écoute du besoin</strong>
              <p>Comprendre votre objectif et les fonctionnalités réellement utiles.</p>
            </div>
          </div>

          <div class="trust-point">
            <span>02</span>
            <div>
              <strong>Développement sérieux</strong>
              <p>Construire une solution propre, structurée et facile à utiliser.</p>
            </div>
          </div>

          <div class="trust-point">
            <span>03</span>
            <div>
              <strong>Résultat concret</strong>
              <p>Livrer une application claire, responsive et prête à évoluer.</p>
            </div>
          </div>
        </div>

        <div class="trust-cta">
          <strong>Expliquez-moi votre projet en quelques lignes.</strong>
          <span>Je lirai votre message avec attention et je vous répondrai directement.</span>
        </div>
      </aside>

      <form
        class="contact-form-card"
        action="https://formsubmit.co/heritiana.andrianantenaina24@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio Heritiana" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_captcha" value="false" />

        <div class="form-head">
          <h3>Envoyez-moi un message</h3>
      
        </div>

        <label class="form-group">
          <span>Votre email</span>
          <input
            type="email"
            name="email"
            placeholder="votre.email@exemple.com"
            required
          />
        </label>

        <label class="form-group message-group">
          <span>Votre message</span>
          <textarea
            name="message"
            placeholder="Bonjour Heritiana, j’aimerais vous parler d’un projet..."
            required
          ></textarea>
        </label>

        <div class="form-bottom">
          <button type="submit" class="send-button">
            Envoyer le message
            <span>→</span>
          </button>

          <p class="form-note">
            Email de réception : heritiana.andrianantenaina24@gmail.com
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
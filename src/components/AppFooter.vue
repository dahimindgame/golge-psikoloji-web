<template>
  <footer class="footer">
    <SpiralWatermark class="footer-watermark" aria-hidden="true" />
    <UiContainer class="footer-inner">
      <div class="footer-main" :class="{ 'footer-main--no-contact': !hasFooterContact }">
        <div class="footer-brand">
          <SpiralLogo class="footer-mark" :size="28" />
          <p class="footer-title">Gölge Psikoloji</p>
          <p class="footer-tagline">
            İç dünyanızda güven ve sakinlik için yanınızdayım.
          </p>
        </div>
        <div class="footer-links">
          <nav class="footer-nav" aria-label="Alt menü">
            <router-link to="/">Ana Sayfa</router-link>
            <router-link to="/hakkimda">Hakkımda</router-link>
            <router-link to="/hizmetler">Hizmetler</router-link>
            <router-link to="/blog">Blog</router-link>
            <router-link to="/iletisim">İletişim</router-link>
          </nav>
        </div>
        <div v-if="hasFooterContact" class="footer-contact">
          <h3>İletişim</h3>
          <a v-if="contactInfo.email" :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a>
          <a v-if="contactInfo.phone" :href="phoneHref">{{ contactInfo.phone }}</a>
        </div>
      </div>
      <div class="footer-legal">
        <p class="footer-copy">© 2026 Gölge Psikoloji</p>
      </div>
    </UiContainer>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import UiContainer from './ui/UiContainer.vue'
import SpiralLogo from './SpiralLogo.vue'
import SpiralWatermark from './SpiralWatermark.vue'
import { contactConfig } from '../config/contact'

const contactInfo = contactConfig
const phoneHref = contactInfo.phone ? `tel:${contactInfo.phone.replace(/\s+/g, '')}` : ''
const hasFooterContact = computed(() => Boolean(contactInfo.email || contactInfo.phone))
</script>

<style scoped>
.footer {
  position: relative;
  background: #EFE8E1;
  color: var(--color-main);
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  overflow: hidden;
}

.footer-inner {
  padding: clamp(4rem, 6vw, 5rem) 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.footer-main {
  display: grid;
  gap: 2.5rem;
}

@media (min-width: 960px) {
  .footer-main {
    grid-template-columns: 1.4fr 1fr 1fr;
    align-items: start;
  }

  .footer-main.footer-main--no-contact {
    grid-template-columns: 1.4fr 1.6fr;
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 38ch;
}

.footer-links h3,
.footer-contact h3 {
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  color: var(--color-main);
}

.footer-nav {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.75rem 1.25rem;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.footer-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-main);
  letter-spacing: 0.02em;
}

.footer-mark {
  display: inline-flex;
  opacity: 0.85;
}

.footer-tagline {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-contact a,
.footer-nav a {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-muted);
}

.footer-contact a {
  text-decoration: none;
  opacity: 0.75;
  transition: color var(--transition-fast), opacity var(--transition-fast);
}

.footer-contact a:hover,
.footer-contact a:focus-visible {
  color: var(--color-accent);
  opacity: 1;
}

.footer-nav a {
  position: relative;
  width: auto;
  text-decoration: none;
  opacity: 0.7;
  transition: color var(--transition-fast), opacity var(--transition-fast);
}

.footer-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.25rem;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  opacity: 0.5;
}

.footer-nav a:hover,
.footer-nav a:focus-visible {
  color: var(--color-accent);
  opacity: 1;
}

.footer-legal {
  border-top: 1px solid var(--color-border);
  padding-top: 1.25rem;
  text-align: center;
}

.footer-copy {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-muted);
}

.footer-watermark {
  position: absolute;
  right: -40px;
  bottom: -60px;
  width: clamp(180px, 22vw, 260px);
  opacity: 0.04;
  pointer-events: none;
}

@media (max-width: 860px) {
  .footer-main {
    text-align: center;
    justify-items: center;
  }

  .footer-nav a {
    width: auto;
  }

  .footer-contact {
    align-items: center;
  }
}
</style>

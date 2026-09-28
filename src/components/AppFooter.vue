<template>
  <footer class="footer">
    <SpiralWatermark class="footer-watermark" aria-hidden="true" />
    <UiContainer class="footer-inner">
      <div class="footer-main" :class="{ 'footer-main--no-contact': !hasFooterContact }">
        <div class="footer-brand">
          <img class="footer-lockup" src="/brand/logo-lockup.png" alt="Gölge Psikoloji" />
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
  position: relative;
  z-index: 1;
  padding: clamp(3.5rem, 6vw, 4.5rem) 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.footer-main {
  display: grid;
  gap: 2.5rem;
}

@media (min-width: 960px) {
  .footer-main {
    grid-template-columns: minmax(220px, 1.15fr) minmax(0, 1.6fr) minmax(180px, 0.7fr);
    align-items: center;
    column-gap: 2rem;
  }

  .footer-main.footer-main--no-contact {
    grid-template-columns: minmax(220px, 1fr) minmax(0, 1.4fr);
  }
}

.footer-brand {
  display: flex;
  max-width: 340px;
}

.footer-lockup {
  width: 100%;
  height: auto;
  display: block;
}

.footer-links h3,
.footer-contact h3 {
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  color: var(--color-main);
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.35rem;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
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
  flex: 0 0 auto;
  white-space: nowrap;
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

.footer :deep(.footer-watermark) {
  top: auto;
  right: -88px;
  bottom: -110px;
  width: 200px;
  opacity: 0.16;
  pointer-events: none;
}

@media (max-width: 959px) {
  .footer-main {
    text-align: center;
    justify-items: center;
  }

  .footer-nav {
    justify-content: center;
  }

  .footer-contact {
    align-items: center;
  }

  .footer :deep(.footer-watermark) {
    display: none;
  }
}
</style>

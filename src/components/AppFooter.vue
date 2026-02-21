<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <TheLogo />
      </div>
      <nav class="footer-nav" aria-label="Alt menü">
        <router-link to="/">Ana Sayfa</router-link>
        <router-link to="/hakkimda">Hakkımda</router-link>
        <router-link to="/hizmetler">Hizmetler</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/iletisim">İletişim</router-link>
      </nav>
      <p class="footer-contact">
        info@golgepsikoloji.com · +90 XXX XXX XX XX
      </p>
      <p class="footer-copy">
        &copy; {{ year }} Gölge Psikoloji. Tüm hakları saklıdır.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import TheLogo from './TheLogo.vue'

const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--color-main);
  color: var(--color-bg);
  margin-top: auto;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.06);
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 3rem) 1.5rem;
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .footer-inner {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    align-items: start;
  }

  .footer-nav {
    grid-column: 2;
    grid-row: 1 / -1;
  }

  .footer-contact {
    grid-column: 3;
  }

  .footer-copy {
    grid-column: 1 / -1;
  }
}

.footer-brand :deep(.logo) {
  color: var(--color-bg);
}

.footer-brand :deep(.logo-brand),
.footer-brand :deep(.logo-sub) {
  color: var(--color-bg);
  opacity: 0.8;
}

.footer-brand :deep(.spiral-main) {
  color: var(--color-bg);
}

.footer-brand :deep(.spiral-accent) {
  color: var(--color-accent);
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-nav a {
  color: var(--color-bg);
  opacity: 0.9;
  transition: opacity var(--transition-fast);
}

.footer-nav a:hover {
  opacity: 1;
  text-decoration: underline;
}

.footer-contact,
.footer-copy {
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.85;
}

.footer-copy {
  padding-top: 1rem;
  border-top: 1px solid rgba(244, 241, 237, 0.2);
}
</style>

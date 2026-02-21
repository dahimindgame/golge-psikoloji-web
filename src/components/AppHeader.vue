<template>
  <header class="header">
    <div class="header-inner">
      <TheLogo />
      <nav class="nav" aria-label="Ana menü">
        <router-link to="/" class="nav-link">Ana Sayfa</router-link>
        <router-link to="/hakkimda" class="nav-link">Hakkımda</router-link>
        <router-link to="/hizmetler" class="nav-link">Hizmetler</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/iletisim" class="nav-link">İletişim</router-link>
      </nav>
      <button
        type="button"
        class="menu-btn"
        aria-label="Menüyü aç"
        :aria-expanded="open"
        aria-controls="nav-menu"
        @click="open = !open"
      >
        <span class="menu-icon" />
      </button>
    </div>
    <div
      id="nav-menu"
      class="nav-mobile"
      :class="{ open }"
      aria-hidden="!open"
    >
      <router-link to="/" class="nav-link" @click="open = false">Ana Sayfa</router-link>
      <router-link to="/hakkimda" class="nav-link" @click="open = false">Hakkımda</router-link>
      <router-link to="/hizmetler" class="nav-link" @click="open = false">Hizmetler</router-link>
      <router-link to="/blog" class="nav-link" @click="open = false">Blog</router-link>
      <router-link to="/iletisim" class="nav-link" @click="open = false">İletişim</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import TheLogo from './TheLogo.vue'

const open = ref(false)
</script>

<style scoped>
.header {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-md));
  -webkit-backdrop-filter: blur(var(--blur-md));
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  display: none;
}

@media (min-width: 768px) {
  .nav {
    display: flex;
    gap: 1.5rem;
  }

  .menu-btn {
    display: none;
  }
}

.nav-link {
  color: var(--color-main);
  font-weight: 500;
  padding: 0.25rem 0;
  transition: color var(--transition-fast);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-accent);
}

.menu-btn {
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-main);
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-icon {
  width: 1.25rem;
  height: 2px;
  background: currentColor;
  box-shadow: 0 -6px 0 currentColor, 0 6px 0 currentColor;
}

.nav-mobile {
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 1rem;
  gap: 0.5rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-normal);
}

@media (min-width: 768px) {
  .nav-mobile {
    display: none;
  }
}

.nav-mobile.open {
  max-height: 240px;
}

.nav-mobile .nav-link {
  padding: 0.5rem 0;
}
</style>

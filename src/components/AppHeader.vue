<template>
  <header class="header" ref="headerRef">
    <UiContainer class="header-inner">
      <router-link to="/" class="brandLogo logo-wrap" aria-label="Gölge Psikoloji ana sayfa">
        <SpiralLogo class="brand-mark" :size="40" />
        <span class="brand-text">GÖLGE PSİKOLOJİ</span>
      </router-link>
      <div class="header-spacer" aria-hidden="true" />
      <div class="header-right">
        <nav class="nav" aria-label="Ana menü">
          <router-link to="/" class="nav-link" active-class="nav-link--active">Ana Sayfa</router-link>
          <router-link to="/hakkimda" class="nav-link" active-class="nav-link--active">Hakkımda</router-link>
          <router-link to="/hizmetler" class="nav-link" active-class="nav-link--active">Hizmetler</router-link>
          <router-link to="/blog" class="nav-link" active-class="nav-link--active">Blog</router-link>
          <router-link to="/iletisim" class="nav-link" active-class="nav-link--active">İletişim</router-link>
        </nav>
        <div class="header-actions">
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
      </div>
    </UiContainer>
    <div
      id="nav-menu"
      class="nav-mobile"
      :class="{ open }"
      :aria-hidden="!open"
      ref="panelRef"
    >
      <router-link to="/" class="nav-link" active-class="nav-link--active" @click="open = false" ref="firstItemRef">Ana Sayfa</router-link>
      <router-link to="/hakkimda" class="nav-link" active-class="nav-link--active" @click="open = false">Hakkımda</router-link>
      <router-link to="/hizmetler" class="nav-link" active-class="nav-link--active" @click="open = false">Hizmetler</router-link>
      <router-link to="/blog" class="nav-link" active-class="nav-link--active" @click="open = false">Blog</router-link>
      <router-link to="/iletisim" class="nav-link" active-class="nav-link--active" @click="open = false">İletişim</router-link>
    </div>
  </header>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import UiContainer from './ui/UiContainer.vue'
import SpiralLogo from './SpiralLogo.vue'

const open = ref(false)
const headerRef = ref(null)
const panelRef = ref(null)
const firstItemRef = ref(null)
const route = useRoute()

function closeMenu() {
  open.value = false
}

function onDocumentClick(event) {
  if (!open.value) return
  const header = headerRef.value
  if (header && header.contains(event.target)) return
  closeMenu()
}

function onDocumentKeydown(event) {
  if (!open.value) return
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)

watch(open, async (isOpen) => {
  if (!isOpen) return
  await nextTick()
  const el = firstItemRef.value?.$el ?? firstItemRef.value
  if (el?.focus) el.focus()
})

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onDocumentKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onDocumentKeydown)
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  height: 88px;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-md));
  -webkit-backdrop-filter: blur(var(--blur-md));
  border-bottom: 1px solid var(--color-border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  min-height: 72px;
  max-width: 1240px;
  margin: 0 auto;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}

@media (min-width: 900px) {
  .header-inner {
    min-height: 64px;
  }
}

.logo-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.brand-text {
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.18em;
  line-height: 1.2;
  text-align: center;
  color: #6B625C;
}

@media (max-width: 768px) {
  .logo-wrap {
    gap: 6px;
  }

  .brand-text {
    font-size: 11.5px;
    letter-spacing: 0.16em;
  }
}

.header-spacer {
  flex: 1;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.nav {
  display: none;
  justify-content: flex-end;
}

.header-actions {
  display: flex;
  align-items: center;
}

@media (min-width: 900px) {
  .nav {
    display: flex;
    gap: 3.1rem;
    align-items: center;
  }

  .menu-btn {
    display: none;
  }

  .header-actions {
    display: none;
  }
}

.nav-link {
  color: var(--color-main);
  font-weight: 500;
  font-size: 0.98rem;
  letter-spacing: 0.04em;
  padding: 0.25rem 0;
  position: relative;
  transition: color var(--transition-fast), opacity var(--transition-fast);
  opacity: 0.68;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.3rem;
  height: 1px;
  background: var(--color-accent-secondary);
  opacity: 0;
  transform: scaleX(0.7);
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-accent-secondary);
  opacity: 1;
}

.nav-link:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
  border-radius: var(--radius-sm);
}

.nav-link--active {
  color: var(--color-main);
  opacity: 1;
}

.nav-link--active::after {
  opacity: 1;
  transform: scaleX(1);
}

.menu-btn {
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-main);
  width: 2.75rem;
  height: 2.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
}

.menu-btn:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.menu-btn:hover {
  background: var(--color-card);
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
  gap: 0.75rem;
  padding: 0 1.5rem 1.5rem;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateY(-6px);
  transition: max-height var(--transition-normal), opacity var(--transition-normal), transform var(--transition-normal);
}

@media (min-width: 900px) {
  .nav-mobile {
    display: none;
  }
}

.nav-mobile.open {
  max-height: 360px;
  opacity: 1;
  transform: translateY(0);
}

.nav-mobile .nav-link {
  padding: 0.4rem 0;
}

.mobile-cta {
  width: 100%;
  justify-content: center;
}
</style>

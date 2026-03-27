<template>
  <div class="app">
    <AppHeader />
    <transition name="loader-fade">
      <div v-if="pageLoader.active" class="page-loader" aria-hidden="true">
        <img
          v-if="pageLoader.icon"
          :src="pageLoader.icon"
          alt=""
          class="loader-icon"
        />
        <span v-else class="loader-dot"></span>
      </div>
    </transition>
    <main class="main">
      <router-view v-slot="{ Component, route }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { pageLoader } from './stores/pageLoader'
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
}

.main {
  flex: 1;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}
.page-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.page-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.page-loader {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  pointer-events: none;
}

.loader-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 12px 22px rgba(51, 46, 43, 0.12);
  animation: softPop 0.35s ease;
}

.loader-dot {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(156, 118, 96, 0.35);
  box-shadow: 0 10px 18px rgba(51, 46, 43, 0.1);
  animation: softPop 0.35s ease;
}

.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.28s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}

@keyframes softPop {
  0% {
    opacity: 0;
    transform: scale(0.92);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

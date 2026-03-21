<template>
  <router-link
    to="/"
    class="logo"
    aria-label="Gölge Psikoloji ana sayfa"
    :style="{ '--logo-size': sizeStyle }"
  >
    <SpiralLogo class="logo-img" :size="sizeStyle" />
    <span class="logo-text logo-text--full">Gölge Psikoloji</span>
    <span class="logo-text logo-text--short">Gölge</span>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import SpiralLogo from './SpiralLogo.vue'

const props = defineProps({
  size: {
    type: [Number, String],
    default: 40,
  },
})

const sizeStyle = computed(() => (typeof props.size === 'number' ? `${props.size}px` : props.size))
</script>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--color-main);
}

.logo:hover {
  text-decoration: none;
}

.logo-img {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}

.logo-text {
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  color: var(--color-heading);
  white-space: nowrap;
}

.logo-text--short {
  display: none;
}

@media (max-width: 768px) {
  .logo-text--full {
    display: none;
  }

  .logo-text--short {
    display: inline;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .logo-img {
    height: 28px;
  }
}
</style>

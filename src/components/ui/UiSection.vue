<template>
  <section class="ui-section">
    <header v-if="hasHeader" class="ui-section__header">
      <p v-if="eyebrow" class="ui-section__eyebrow">{{ eyebrow }}</p>
      <h2 v-if="title" class="ui-section__title">{{ title }}</h2>
      <p v-if="subtitle" class="ui-section__subtitle">{{ subtitle }}</p>
    </header>
    <div class="ui-section__body">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})

const hasHeader = computed(() => props.eyebrow || props.title || props.subtitle)
</script>

<style scoped>
.ui-section {
  padding: clamp(2rem, 5vw, 4rem) 0;
}

.ui-section__header {
  margin-bottom: 1.5rem;
  max-width: 60ch;
}

.ui-section__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent-secondary);
}

.ui-section__title {
  margin: 0 0 0.5rem;
  color: var(--color-heading);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
}

.ui-section__subtitle {
  margin: 0;
  color: var(--color-muted);
  font-size: 1rem;
  line-height: 1.6;
}

.ui-section__body {
  color: var(--color-body);
}
</style>

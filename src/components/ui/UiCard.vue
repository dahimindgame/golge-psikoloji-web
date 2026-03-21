<template>
  <article class="ui-card" :class="{ 'is-hoverable': hoverable }">
    <div v-if="$slots.media" class="ui-card__media">
      <slot name="media" />
    </div>
    <div class="ui-card__body">
      <slot />
    </div>
  </article>
</template>

<script setup>
defineProps({
  hoverable: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
.ui-card {
  position: relative;
  border-radius: var(--radius-lg);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(var(--blur-md));
  -webkit-backdrop-filter: blur(var(--blur-md));
  overflow: hidden;
  transition: transform var(--transition-fast), box-shadow var(--transition-normal), border-color var(--transition-fast);
}

.ui-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-accent-secondary);
  opacity: 0.14;
}

.ui-card.is-hoverable:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-border);
}

.ui-card__media :deep(img),
.ui-card__media :deep(video) {
  width: 100%;
  display: block;
}

.ui-card__body {
  padding: 1.5rem;
  color: var(--color-body);
}
</style>

<template>
  <component
    :is="tag"
    class="ui-button"
    :class="[`ui-button--${variant}`, `ui-button--${size}`, { 'is-disabled': isDisabled }]"
    :to="tag === 'router-link' ? to : undefined"
    :href="tag === 'a' ? href : undefined"
    :type="tag === 'button' ? type : undefined"
    :disabled="tag === 'button' ? isDisabled : undefined"
    :aria-disabled="tag !== 'button' && isDisabled ? 'true' : undefined"
    :tabindex="tag !== 'button' && isDisabled ? -1 : undefined"
    :rel="tag === 'a' && external ? 'noopener noreferrer' : undefined"
    :target="tag === 'a' && external ? '_blank' : undefined"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  external: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})

const isDisabled = computed(() => props.disabled)
</script>

<style scoped>
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: var(--radius-button);
  font-weight: 600;
  font-family: var(--font-sans);
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-normal),
    background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
}

.ui-button:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.ui-button--sm {
  padding: 0.625rem 0.9rem;
  font-size: 0.875rem;
}

.ui-button--md {
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
}

.ui-button--lg {
  padding: 0.875rem 1.125rem;
  font-size: 1.05rem;
}

.ui-button--primary {
  background: var(--color-accent);
  color: var(--color-bg);
  box-shadow: var(--shadow-sm);
}

.ui-button--primary:hover {
  background: var(--color-accent-secondary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-card-hover);
  text-decoration: none;
}

.ui-button--secondary {
  background: transparent;
  color: var(--color-accent-secondary);
  border-color: var(--color-accent-secondary);
}

.ui-button--secondary:hover {
  color: var(--color-accent-secondary);
  border-color: var(--color-accent-secondary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
}

.ui-button--ghost {
  background: transparent;
  color: var(--color-heading);
  border-color: transparent;
}

.ui-button--ghost:hover {
  background: var(--color-card);
  color: var(--color-accent-secondary);
  text-decoration: none;
}

.ui-button--link {
  background: transparent;
  color: var(--color-accent);
  border-color: transparent;
  padding: 0;
  font-weight: 500;
}

.ui-button--link:hover {
  color: var(--color-accent-secondary);
  text-decoration: underline;
}

.ui-button.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
  pointer-events: none;
}
</style>

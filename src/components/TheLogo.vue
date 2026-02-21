<template>
  <router-link to="/" class="logo" aria-label="Gölge Psikoloji ana sayfa">
    <svg class="logo-spiral" viewBox="0 0 48 48" aria-hidden="true">
      <path
        class="spiral-main"
        d="M24 4 A20 20 0 0 1 44 24 A20 20 0 0 1 24 44 A20 20 0 0 1 4 24 A20 20 0 0 1 24 4"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        class="spiral-accent"
        d="M24 4 A20 20 0 0 1 44 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
    <span class="logo-text">
      <span class="logo-brand">GÖLGE</span>
      <span class="logo-sub">PSİKOLOJİ</span>
    </span>
  </router-link>
</template>

<script setup>
</script>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--color-main);
}

.logo:hover {
  text-decoration: none;
}

.logo-spiral {
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
}

.spiral-main {
  color: var(--color-main);
}

.spiral-accent {
  color: var(--color-accent);
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-brand {
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.02em;
  color: var(--color-main);
}

.logo-sub {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--color-accent-secondary);
}
</style>

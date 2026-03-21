<template>
  <div class="shadow-hero-art" aria-hidden="true">
    <span class="shadow-hero-art__fold shadow-hero-art__fold--one" />
    <span class="shadow-hero-art__fold shadow-hero-art__fold--two" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.shadow-hero-art {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 22px;
  background:
    linear-gradient(135deg, rgba(31, 57, 60, 0.08), transparent 55%),
    linear-gradient(200deg, rgba(176, 106, 60, 0.1), transparent 60%),
    url('@/assets/brand/golge-hero.jpeg') center / cover no-repeat;
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.shadow-hero-art::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(28, 28, 28, 0.06), transparent 55%);
  opacity: 0.6;
}

.shadow-hero-art__fold {
  position: absolute;
  inset: 12% 16% auto auto;
  width: 46%;
  height: 38%;
  border-radius: 60% 40% 50% 50%;
  background: radial-gradient(90% 90% at 20% 20%, rgba(28, 28, 28, 0.06), transparent 70%);
  opacity: 0.6;
}

.shadow-hero-art__fold--two {
  inset: auto auto 10% 12%;
  width: 42%;
  height: 34%;
  border-radius: 50% 60% 40% 60%;
  background: radial-gradient(90% 90% at 80% 20%, rgba(28, 28, 28, 0.05), transparent 72%);
  opacity: 0.5;
}

@media (max-width: 600px) {
  .shadow-hero-art {
    aspect-ratio: 1 / 1;
  }
}
</style>

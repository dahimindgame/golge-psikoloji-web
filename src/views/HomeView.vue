<template>
  <div ref="root" class="home">
    <section class="hero">
      <h1>Gölge Psikoloji</h1>
      <p class="tagline">İçsel yolculuğunuzda yanınızdayım</p>
      <div class="hero-actions">
        <router-link to="/iletisim" class="btn btn-primary">Randevu Al</router-link>
        <router-link to="/hizmetler" class="btn btn-secondary">Hizmetler</router-link>
      </div>
    </section>
    <section class="bento section">
      <div class="bento-grid">
        <div class="bento-cell bento-intro">
          <h2>Psikolojik Danışmanlık</h2>
          <p class="bento-text">
            Bireysel terapi, çift terapisi ve uzmanlık alanlarında profesyonel destek sunuyorum.
            Güvenli ve samimi bir ortamda kendinizi keşfetmenize alan açıyorum.
          </p>
          <router-link to="/hakkimda" class="link-accent">Hakkımda →</router-link>
        </div>
        <router-link to="/hizmetler" class="bento-cell bento-card card-interaction">
          <h3>Hizmetler</h3>
          <p>Yetişkin, ergen, çocuk ve çiftlerle çalışma alanlarında destek.</p>
        </router-link>
        <router-link to="/iletisim" class="bento-cell bento-card card-interaction">
          <h3>Randevu</h3>
          <p>İletişime geçerek randevu alabilirsiniz.</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)
</script>

<style scoped>
.home {
  padding: 0;
}

.hero {
  padding: clamp(3rem, 8vw, 5rem) 1.5rem;
  text-align: center;
  background: var(--color-bg);
}

.hero h1 {
  margin: 0 0 0.5rem;
}

.tagline {
  font-size: 1.125rem;
  color: var(--color-text);
  margin: 0 0 2rem;
  max-width: 28ch;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-normal), transform var(--transition-fast), opacity var(--transition-fast);
}

.btn:hover {
  text-decoration: none;
  opacity: 0.95;
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-bg);
}

.btn-secondary {
  background: transparent;
  color: var(--color-main);
  border: 2px solid var(--color-main);
}

.bento {
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 3rem) 1.5rem;
}

.bento-grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .bento-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }

  .bento-intro {
    grid-column: 1 / -1;
  }
}

@media (min-width: 900px) {
  .bento-grid {
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto;
    gap: 1.5rem;
  }

  .bento-intro {
    grid-column: 1;
    grid-row: 1 / -1;
  }
}

.bento-cell {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  background: var(--color-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
}

.bento-intro {
  display: flex;
  flex-direction: column;
}

.bento-intro h2 {
  margin: 0 0 0.75rem;
}

.bento-text {
  margin: 0 0 1rem;
  color: var(--color-text);
  flex: 1;
}

.link-accent {
  color: var(--color-accent);
  font-weight: 500;
}

.bento-card {
  text-decoration: none;
  color: inherit;
  display: block;
}

.bento-card:hover {
  text-decoration: none;
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-2px);
}

.bento-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
}

.bento-card p {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--color-text);
}
</style>

<template>
  <div ref="root" class="contact page-wrap">
    <section class="contact-hero">
      <p class="eyebrow">İletişim</p>
      <h1>İletişime Geçin</h1>
      <p class="lead">
        İhtiyacınız olan desteği birlikte değerlendirmek için doğrudan iletişime geçebilirsiniz.
      </p>
      <p class="contact-note">Tüm görüşmeler gizlilik ve özen çerçevesinde ele alınır.</p>
    </section>

    <section class="contact-cards">
      <article class="contact-card">
        <h2>Telefon</h2>
        <p class="contact-value">+90 530 655 7698</p>
      </article>
      <article class="contact-card">
        <h2>E-posta</h2>
        <p class="contact-value">ozdenunsal@gmail.com</p>
      </article>
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
.contact {
  padding: clamp(3rem, 7vw, 5rem) 0 clamp(4rem, 8vw, 6rem);
}

.contact-hero {
  max-width: 640px;
  margin-bottom: 3rem;
}

.contact-hero h1 {
  margin: 0 0 0.75rem;
  font-size: clamp(2.2rem, 3.2vw, 2.9rem);
  color: var(--color-heading);
}

.lead {
  margin: 0 0 0.75rem;
  color: var(--color-body);
  line-height: 1.7;
}

.contact-note {
  margin: 0;
  color: var(--color-muted);
}

.contact-cards {
  display: grid;
  gap: 1.5rem;
}

.contact-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-card h2 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--color-heading);
}

.contact-value {
  margin: 0;
  font-size: 1.05rem;
}


@media (min-width: 768px) {
  .contact-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .contact-hero {
    margin-bottom: 2.25rem;
  }
}
</style>

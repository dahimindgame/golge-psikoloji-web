<template>
  <div ref="root" class="home">
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero-visual-grid">
          <img :src="serviceChild" alt="" />
          <img :src="serviceTeen" alt="" />
          <img :src="serviceAdult" alt="" />
          <img :src="serviceCouple" alt="" />
        </div>
        <div class="hero-content">
          <p class="eyebrow">GÖLGE PSİKOLOJİ</p>
          <h1 class="hero-title">Zorlayıcı duygularla yeniden temas</h1>
          <p class="hero-description">
            Görmezden gelinen duygular zamanla daha güçlü hissedilir.
            Terapi, bu parçalarla güvenli bir bağ kurma ve kendine yeniden yaklaşma sürecidir.
          </p>
          <p class="hero-note">Her değişim, fark etmekle başlar.</p>
          <div class="hero__actions">
            <UiButton to="/randevu-olustur" variant="primary" size="lg" class="hero-cta">
              <span class="hero-cta__text">Randevu Oluştur</span>
            </UiButton>
          </div>
        </div>
        <SpiralWatermark class="hero__watermark" />
      </div>
    </section>
    <section class="services section">
      <div class="container services-head">
        <h2>Hizmet Alanları</h2>
      </div>
      <div class="container services-grid">
        <article class="service-card">
          <img
            :src="serviceChild"
            width="56"
            height="56"
            alt="Çocuk Danışmanlığı"
            loading="lazy"
            class="service-thumb"
          />
          <h3>Çocuk Danışmanlığı</h3>
          <p>Duygusal farkındalık, oyun terapisi ve aileyle birlikte ilerleyen destek.</p>
          <router-link to="/hizmetler/cocuk-danismanligi" class="service-action">Detayları Gör →</router-link>
        </article>
        <article class="service-card">
          <img
            :src="serviceTeen"
            width="56"
            height="56"
            alt="Ergen Danışmanlığı"
            loading="lazy"
            class="service-thumb"
          />
          <h3>Ergen Danışmanlığı</h3>
          <p>Kimlik, duygular ve sınırlar üzerine güvenli bir ilişki zemini.</p>
          <span class="service-action">Detayları Gör →</span>
        </article>
        <article class="service-card">
          <img
            :src="serviceAdult"
            width="56"
            height="56"
            alt="Bireysel Danışmanlık"
            loading="lazy"
            class="service-thumb"
          />
          <h3>Bireysel Danışmanlık</h3>
          <p>Kaygı, ilişkiler ve yaşam döngülerine yönelik derinlikli çalışma.</p>
          <span class="service-action">Detayları Gör →</span>
        </article>
        <article class="service-card">
          <img
            :src="serviceCouple"
            width="56"
            height="56"
            alt="Çift ve Evlilik Terapisi"
            loading="lazy"
            class="service-thumb"
          />
          <h3>Çift &amp; Evlilik Terapisi</h3>
          <p>Bağlanma örüntüleri ve iletişim döngülerine odaklanan rehberlik.</p>
          <span class="service-action">Detayları Gör →</span>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'
import UiButton from '../components/ui/UiButton.vue'
import SpiralWatermark from '../components/SpiralWatermark.vue'

import serviceChild from '../assets/services/cocuk.jpeg'
import serviceTeen from '../assets/services/ergen.jpeg'
import serviceAdult from '../assets/services/yetiskin.jpeg'
import serviceCouple from '../assets/services/cift.jpeg'

const root = ref(null)
useReveal(root)
</script>

<style scoped>
.home {
  padding: 0;
}

.container {
  max-width: var(--container-max);
  width: 100%;
  margin: 0 auto;
  padding-inline: 1.5rem;
}

@media (max-width: 600px) {
  .container {
    padding-inline: 1rem;
  }
}

.hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #F3EFEA 0%, #EFE8E1 100%);
  padding-top: clamp(88px, 10vh, 120px);
  padding-bottom: clamp(48px, 8vh, 96px);
}

.hero__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .hero__inner {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    align-items: center;
    gap: 3.5rem;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 480px;
  z-index: 2;
  order: 1;
}

.eyebrow {
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.hero-title {
  margin: 0 0 24px;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-weight: 600;
  font-size: clamp(2.25rem, 3.2vw, 2.75rem);
  line-height: 1.2;
  color: var(--color-main);
}

.hero-description {
  margin: 0;
  font-family: 'Inter', var(--font-sans);
  font-size: clamp(1rem, 2.2vw, 1.125rem);
  line-height: 1.7;
  color: var(--color-body);
}

.hero-note {
  margin: 0;
  font-family: 'Inter', var(--font-sans);
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  color: var(--color-muted);
  opacity: 0.75;
}

@media (max-width: 768px) {
  .hero-content {
    max-width: 90%;
  }

  .hero-title,
  .hero-description,
  .hero-note {
    text-align: left;
  }
}

.hero__actions {
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
}

.hero__actions :deep(.ui-button) {
  min-height: 44px;
}

.hero__actions :deep(.hero-cta) {
  min-height: 50px;
  padding: 12px 26px;
  border-radius: 18px;
  font-family: 'Inter', var(--font-sans);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.2px;
  background: linear-gradient(180deg, #6F7E6D 0%, #5E6C5C 100%);
  color: #FDFBF9;
  box-shadow:
    0 8px 18px rgba(94, 108, 92, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
  transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
}

.hero__actions :deep(.hero-cta__text) {
  display: inline-block;
  transform: translateY(-1px);
}

.hero__actions :deep(.hero-cta):hover {
  background: linear-gradient(180deg, #7A8778 0%, #677465 100%);
  transform: translateY(-2px);
  box-shadow:
    0 10px 22px rgba(94, 108, 92, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.hero__actions :deep(.hero-cta):active {
  transform: translateY(0) scale(0.98);
  box-shadow:
    0 5px 12px rgba(94, 108, 92, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
}

@media (max-width: 600px) {
  .hero__actions {
    width: 100%;
    gap: 0.75rem;
  }

  .hero__actions :deep(.ui-button) {
    width: 100%;
    justify-content: center;
  }
}

.hero-visual-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 14px;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 12px;
  border-radius: var(--radius-card);
  background: var(--color-card);
  box-shadow: 0 18px 36px rgba(51, 46, 43, 0.14);
  overflow: hidden;
  z-index: 1;
  order: 2;
}

.hero-visual-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--tile-radius, var(--radius-md));
  transition: transform var(--transition-normal);
  will-change: transform;
  transform: translateY(var(--tile-offset, 0));
}

.hero-visual-grid img:nth-child(2) {
  --tile-radius: calc(var(--radius-md) + 2px);
}

.hero-visual-grid img:nth-child(3) {
  --tile-radius: calc(var(--radius-md) - 2px);
  --tile-offset: 3px;
}

.hero-visual-grid img:nth-child(4) {
  --tile-radius: calc(var(--radius-md) + 1px);
}

.hero-visual-grid img:hover {
  transform: translateY(var(--tile-offset, 0)) scale(1.03);
}

@media (max-width: 600px) {
  .hero-visual-grid {
    gap: 10px;
    padding: 10px;
  }
}

@media (min-width: 1024px) {
  .hero-content,
  .hero-visual-grid {
    order: 0;
  }
}

.hero__watermark {
  z-index: 0;
  opacity: 0.02;
  filter: blur(0.4px);
}


.services-head {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
}

.services-head h2 {
  margin: 0;
}

.services {
  padding: var(--section-padding) 0;
}

.services-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 600px) {
  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.service-card {
  position: relative;
  padding: 1.5rem;
  border-radius: var(--radius-card);
  background:
    linear-gradient(135deg, rgba(31, 57, 60, 0.04), transparent 45%),
    var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(var(--blur-md));
  -webkit-backdrop-filter: blur(var(--blur-md));
  overflow: hidden;
  transition: transform var(--transition-fast), box-shadow var(--transition-normal);
}

.service-card::before {
  content: '';
  position: absolute;
  inset: auto auto 14% 8%;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(176, 106, 60, 0.08);
  opacity: 0.7;
  pointer-events: none;
}

.service-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(80% 80% at 85% 0%, rgba(28, 28, 28, 0.06), transparent 60%);
  opacity: 0.6;
  pointer-events: none;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}

.service-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;
}

.service-card p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-muted);
  position: relative;
  z-index: 1;
  line-height: 1.7;
}

.service-action {
  margin-top: 1rem;
  display: inline-flex;
  font-weight: 500;
  color: var(--color-accent-secondary);
  position: relative;
  z-index: 1;
  transition: transform var(--transition-fast), color var(--transition-fast);
}

.service-card:hover .service-action {
  transform: translateX(2px);
}

.service-thumb {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  object-fit: cover;
  background: rgba(244, 241, 237, 0.7);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  z-index: 1;
  margin-bottom: 1rem;
}

@media (max-width: 600px) {
  .service-thumb {
    width: 48px;
    height: 48px;
  }
}

</style>

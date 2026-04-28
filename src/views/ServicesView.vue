<template>
  <div ref="root" class="services">
    <section class="services-hero">
      <UiContainer>
        <div class="services-hero__grid">
          <div class="services-hero__content">
            <h1>Hizmetler</h1>
            <p class="services-hero__lead">
              Bireysel, ergen, çocuk ve çiftlerle yürütülen terapi süreçlerinde; güvenli, bütünlüklü ve ihtiyaç odaklı bir çalışma alanı sunuyorum.
            </p>
            <p class="services-hero__note">
              Her hizmet alanı kendi dinamiğine sahip olsa da, ortak amaç; kişiyi daha açık, daha dengeli ve daha destekleyici bir ilişki zeminiyle buluşturmaktır.
            </p>
          </div>
          <div class="services-hero__media">
            <div class="services-hero__frame">
              <img :src="heroMain" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <section class="services-body">
      <UiContainer>
        <div class="services-grid">
          <router-link
            v-for="item in services"
            :key="item.id"
            :to="item.to"
            class="service-card"
          >
            <img :src="item.icon" :alt="item.title" class="service-icon" />
            <h2 class="service-title">{{ item.title }}</h2>
            <p class="service-excerpt">{{ item.excerpt }}</p>
            <span class="service-action">Detayları Gör →</span>
          </router-link>
        </div>

        <div class="services-note">
          <p>
            Terapi süreci her danışan için farklıdır. Bu nedenle hizmetler, hazır kalıplardan çok kişinin ihtiyacına göre şekillenen, güvene dayalı bir birlikte düşünme alanı olarak tasarlanır.
          </p>
        </div>

        <div class="services-cta">
          <p class="services-cta__copy">
            Size uygun terapi alanını birlikte değerlendirmek için iletişime geçebilirsiniz.
          </p>
          <div class="services-cta__actions">
            <router-link to="/iletisim" class="services-btn services-btn--ghost">İletişime Geç</router-link>
            <router-link to="/randevu-olustur" class="services-btn services-btn--primary">Randevu Talebi Oluştur</router-link>
          </div>
        </div>
      </UiContainer>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'
import UiContainer from '../components/ui/UiContainer.vue'

import heroMain from '../assets/hero/hero-main-640.svg'
import serviceChild from '../assets/services/cocuk.jpeg'
import serviceTeen from '../assets/services/ergen.jpeg'
import serviceAdult from '../assets/services/yetiskin.jpeg'
import serviceCouple from '../assets/services/cift.jpeg'

const root = ref(null)
useReveal(root)


const services = [
  {
    id: 'cocuklar',
    title: 'Çocuklarla Çalışma',
    excerpt: 'Duyguları oyun ve yaratıcı yöntemlerle anlamaya, güvenli bir bağ kurmaya odaklanan çalışma.',
    to: '/hizmetler/cocuk-danismanligi',
    icon: serviceChild,
  },
  {
    id: 'ergenler',
    title: 'Ergenlerle Çalışma',
    excerpt: 'Kimlik, duygular ve sınırlar üzerine güvenli bir ilişki zemini ve destekleyici süreç.',
    to: '/hizmetler/ergen-danismanligi',
    icon: serviceTeen,
  },
  {
    id: 'ciftler',
    title: 'Çift & Evlilik Terapisi',
    excerpt: 'İlişkisel döngüleri fark etmeye, iletişimi güçlendirmeye ve güvenli temas kurmaya odaklı.',
    to: '/hizmetler/cift-evlilik-terapisi',
    icon: serviceCouple,
  },
  {
    id: 'yetiskinler',
    title: 'Bireysel Danışmanlık',
    excerpt: 'Kaygı, ilişki döngüleri ve içsel süreçleri birlikte anlamlandıran derinlikli çalışma.',
    to: '/hizmetler/bireysel-danismanlik',
    icon: serviceAdult,
  },
]
</script>

<style scoped>
.services {
  padding-bottom: clamp(48px, 6vw, 80px);
  background: #fbfaf9;
}

.services-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 10vh, 112px) 0 clamp(36px, 6vh, 56px);
  background:
    radial-gradient(120% 120% at 85% 5%, rgba(248, 242, 236, 0.85) 0%, rgba(252, 248, 245, 0.92) 55%, rgba(247, 243, 239, 0.96) 100%),
    linear-gradient(180deg, #ffffff 0%, #f7f2ef 100%);
}

.services-hero__grid {
  position: relative;
  display: grid;
  gap: clamp(18px, 3vw, 36px);
  align-items: center;
  z-index: 2;
}

.services-hero__content {
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.services-eyebrow {
  margin: 0 0 6px;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(156, 118, 96, 0.9);
}

.services-hero__content h1 {
  margin: 0;
  font-size: clamp(2.1rem, 3.4vw, 2.7rem);
  color: var(--color-heading);
}

.services-hero__lead,
.services-hero__note {
  margin: 0;
  color: var(--color-body);
  line-height: 1.7;
  font-size: 1rem;
}

.services-hero__note {
  color: var(--color-muted);
}

.services-hero__media {
  position: relative;
  order: -1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.services-hero__frame {
  position: relative;
  border-radius: clamp(22px, 2.6vw, 30px);
  overflow: hidden;
  background: #f6f0ea;
  box-shadow:
    0 22px 44px rgba(91, 60, 55, 0.16),
    0 8px 16px rgba(91, 60, 55, 0.1);
  min-height: 220px;
  max-width: 360px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
}

.services-hero__frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.9;
}

.services-body {
  position: relative;
  padding: clamp(24px, 5vw, 56px) 0 0;
}

.services-grid {
  display: grid;
  gap: 20px;
}

.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 22px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(143, 120, 106, 0.16);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast), box-shadow var(--transition-normal), border-color var(--transition-fast);
  text-decoration: none;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
  border-color: rgba(143, 120, 106, 0.28);
}

.service-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 8px 16px rgba(51, 46, 43, 0.12);
  background: rgba(244, 241, 237, 0.7);
  border: 1px solid rgba(143, 120, 106, 0.16);
}

.service-title {
  margin: 0;
  font-size: 1.15rem;
  color: var(--color-heading);
}

.service-excerpt {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-body);
  line-height: 1.6;
}

.service-action {
  margin-top: 6px;
  display: inline-flex;
  font-weight: 500;
  color: var(--color-accent-secondary);
  transition: transform var(--transition-fast);
}

.service-card:hover .service-action {
  transform: translateX(2px);
}

.services-note {
  margin-top: clamp(20px, 4vw, 28px);
  max-width: 680px;
  color: var(--color-body);
  line-height: 1.7;
}

.services-cta {
  margin-top: clamp(20px, 4vw, 32px);
  display: grid;
  gap: 12px;
}

.services-cta__copy {
  margin: 0;
  color: var(--color-body);
}

.services-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.services-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: transform var(--transition-fast), box-shadow var(--transition-normal), background var(--transition-normal);
}

.services-btn--primary {
  background: linear-gradient(180deg, #9C8779 0%, #857164 100%);
  color: #FDFBF9;
  box-shadow:
    0 10px 22px rgba(133, 113, 100, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
}

.services-btn--primary:hover {
  background: linear-gradient(180deg, #A18C7E 0%, #8B7567 100%);
  transform: translateY(-2px);
}

.services-btn--ghost {
  border: 1px solid var(--color-border);
  color: var(--color-main);
  background: rgba(255, 255, 255, 0.72);
}

@media (min-width: 900px) {
  .services-hero__grid {
    grid-template-columns: minmax(0, 0.6fr) minmax(0, 0.4fr);
  }

  .services-hero__media {
    order: 0;
  }

  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .services-hero {
    padding-top: 64px;
  }

  .services-hero__frame {
    min-height: 200px;
    max-width: 320px;
  }

  .services-cta__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .services-btn {
    width: 100%;
  }
}
</style>

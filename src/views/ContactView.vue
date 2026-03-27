<template>
  <div ref="root" class="contact">
    <section class="contact-hero">
      <UiContainer>
        <div class="contact-hero__content">
          <p class="contact-eyebrow">İletişim</p>
          <h1>İletişim</h1>
          <p class="contact-hero__lead">
            Size uygun bir terapi sürecini birlikte değerlendirmek ve sorularınızı yanıtlamak için iletişime geçebilirsiniz.
          </p>
          <p class="contact-hero__note">
            Tüm görüşmeler gizlilik ve özen çerçevesinde ele alınır.
          </p>
        </div>
      </UiContainer>
    </section>

    <section class="contact-body">
      <UiContainer>
        <div class="contact-grid">
          <div class="contact-info">
            <h2>İletişim Bilgileri</h2>
            <ul>
              <li v-if="contactInfo.phone">
                <span>Telefon</span>
                <a :href="phoneHref">{{ contactInfo.phone }}</a>
              </li>
              <li v-if="contactInfo.email">
                <span>E-posta</span>
                <a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a>
              </li>
              <li v-if="contactInfo.address">
                <span>Adres</span>
                <p>{{ contactInfo.address }}</p>
              </li>
              <li v-if="contactInfo.hours">
                <span>Çalışma Saatleri</span>
                <p>{{ contactInfo.hours }}</p>
              </li>
            </ul>
            <p v-if="contactInfo.appointmentNote" class="contact-note">
              {{ contactInfo.appointmentNote }}
            </p>
          </div>

          <div class="contact-cta">
            <p class="contact-cta__copy">
              Görüşme planlamak veya ön bilgi almak için size uygun kanaldan yazabilirsiniz.
            </p>
            <div class="contact-cta__actions">
              <router-link to="/iletisim" class="contact-btn contact-btn--ghost">İletişime Geç</router-link>
              <router-link to="/randevu-olustur" class="contact-btn contact-btn--primary">Randevu Talebi Oluştur</router-link>
            </div>
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
import { contactConfig } from '../config/contact'

const root = ref(null)
useReveal(root)

const contactInfo = contactConfig
const phoneHref = contactInfo.phone ? `tel:${contactInfo.phone.replace(/\s+/g, '')}` : ''
</script>

<style scoped>
.contact {
  padding-bottom: clamp(48px, 6vw, 80px);
  background: #fbfaf9;
}

.contact-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 10vh, 112px) 0 clamp(28px, 5vw, 40px);
  background:
    radial-gradient(120% 120% at 85% 5%, rgba(248, 242, 236, 0.85) 0%, rgba(252, 248, 245, 0.92) 55%, rgba(247, 243, 239, 0.96) 100%),
    linear-gradient(180deg, #ffffff 0%, #f7f2ef 100%);
}

.contact-hero__content {
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-eyebrow {
  margin: 0 0 6px;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(156, 118, 96, 0.9);
}

.contact-hero__content h1 {
  margin: 0;
  font-size: clamp(2.1rem, 3.4vw, 2.7rem);
  color: var(--color-heading);
}

.contact-hero__lead,
.contact-hero__note {
  margin: 0;
  color: var(--color-body);
  line-height: 1.7;
  font-size: 1rem;
}

.contact-hero__note {
  color: var(--color-muted);
}

.contact-body {
  padding: clamp(24px, 5vw, 56px) 0 0;
}

.contact-grid {
  display: grid;
  gap: 24px;
}

.contact-info {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(143, 120, 106, 0.18);
  border-radius: 20px;
  padding: 20px 22px;
  box-shadow: var(--shadow-sm);
}

.contact-info h2 {
  margin: 0 0 12px;
  font-size: 1.2rem;
  color: var(--color-heading);
}

.contact-info ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.contact-info li {
  display: grid;
  gap: 6px;
}

.contact-info span {
  font-size: 0.85rem;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.contact-info a,
.contact-info p {
  margin: 0;
  color: var(--color-body);
  font-size: 1rem;
  text-decoration: none;
}

.contact-info a:hover {
  color: var(--color-accent);
}

.contact-note {
  margin: 12px 0 0;
  color: var(--color-muted);
}

.contact-cta {
  display: grid;
  gap: 12px;
  align-content: start;
  padding: 20px 22px;
  border-radius: 20px;
  border: 1px solid rgba(143, 120, 106, 0.16);
  background: rgba(255, 255, 255, 0.7);
}

.contact-cta__copy {
  margin: 0;
  color: var(--color-body);
  line-height: 1.7;
}

.contact-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.contact-btn {
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

.contact-btn--primary {
  background: linear-gradient(180deg, #9C8779 0%, #857164 100%);
  color: #FDFBF9;
  box-shadow:
    0 10px 22px rgba(133, 113, 100, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
}

.contact-btn--primary:hover {
  background: linear-gradient(180deg, #A18C7E 0%, #8B7567 100%);
  transform: translateY(-2px);
}

.contact-btn--ghost {
  border: 1px solid var(--color-border);
  color: var(--color-main);
  background: rgba(255, 255, 255, 0.72);
}

@media (min-width: 900px) {
  .contact-grid {
    grid-template-columns: minmax(0, 0.6fr) minmax(0, 0.4fr);
    align-items: start;
  }
}

@media (max-width: 700px) {
  .contact-hero {
    padding-top: 64px;
  }

  .contact-cta__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-btn {
    width: 100%;
  }
}
</style>

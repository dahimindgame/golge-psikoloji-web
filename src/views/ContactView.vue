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
          <div class="contact-cards">
            <div v-if="phoneValue" class="contact-card">
              <div class="contact-card__icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="contact-card__icon">
                  <path
                    fill="currentColor"
                    d="M7.2 3.5h2.6l1.1 4.4-1.9 1.1a8.6 8.6 0 0 0 4 4l1.1-1.9 4.4 1.1v2.6a2 2 0 0 1-2 2A12.6 12.6 0 0 1 3.2 5.5a2 2 0 0 1 2-2Z"
                  />
                </svg>
              </div>
              <div>
                <p class="contact-card__label">Telefon</p>
                <a :href="phoneHref" class="contact-card__value">{{ phoneValue }}</a>
              </div>
            </div>
            <div v-if="emailValue" class="contact-card">
              <div class="contact-card__icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="contact-card__icon">
                  <path
                    fill="currentColor"
                    d="M4.5 6.5h15a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16v-8A1.5 1.5 0 0 1 4.5 6.5Zm0 1.7v.1l7.5 4.4 7.5-4.4v-.1h-15Zm15 2.1-6.9 4.1a1.5 1.5 0 0 1-1.5 0l-6.9-4.1V16h15v-5.7Z"
                  />
                </svg>
              </div>
              <div>
                <p class="contact-card__label">E-posta</p>
                <a :href="`mailto:${emailValue}`" class="contact-card__value">{{ emailValue }}</a>
              </div>
            </div>
            <div v-if="instagramValue" class="contact-card">
              <div class="contact-card__icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="contact-card__icon">
                  <path
                    fill="currentColor"
                    d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.7A4.05 4.05 0 0 0 3.7 7.75v8.5a4.05 4.05 0 0 0 4.05 4.05h8.5a4.05 4.05 0 0 0 4.05-4.05v-8.5A4.05 4.05 0 0 0 16.25 3.7h-8.5ZM12 7.9A4.1 4.1 0 1 1 7.9 12 4.1 4.1 0 0 1 12 7.9Zm0 1.7A2.4 2.4 0 1 0 14.4 12 2.4 2.4 0 0 0 12 9.6Zm4.45-2.05a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05Z"
                  />
                </svg>
              </div>
              <div>
                <p class="contact-card__label">Instagram</p>
                <a :href="instagramValue" class="contact-card__value" target="_blank" rel="noopener noreferrer">
                  Instagram profilini ziyaret et
                </a>
              </div>
            </div>
            <div v-if="!hasContactDetails" class="contact-empty">
              <p>İletişim bilgileri şu anda yüklenemedi. Lütfen `.env` değerlerini kontrol edin.</p>
            </div>
          </div>

          <div class="contact-cta">
            <p class="contact-cta__copy">
              Size en uygun kanalı seçerek hızlıca iletişime geçebilirsiniz.
            </p>
            <div class="contact-cta__actions">
              <router-link to="/randevu-olustur" class="contact-btn contact-btn--primary">Randevu Talebi Oluştur</router-link>
            </div>
            <p v-if="contactInfo.appointmentNote" class="contact-note">
              {{ contactInfo.appointmentNote }}
            </p>
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
const env = import.meta?.env || {}
const rawPhone = contactInfo.phone || env.VITE_CONTACT_PHONE || contactInfo.whatsapp?.number || ''
const emailValue = contactInfo.email || env.VITE_CONTACT_EMAIL || ''
const instagramValue = contactInfo.instagram?.url || env.VITE_INSTAGRAM_URL || ''

const formatPhoneDisplay = (value) => {
  const digits = String(value || '').replace(/\D/g, '')
  if (!digits) return ''
  const normalized = digits.startsWith('90') ? digits : digits.startsWith('0') ? `90${digits.slice(1)}` : `90${digits}`
  if (normalized.length < 12) return `+${normalized}`
  return `+${normalized.slice(0, 2)} ${normalized.slice(2, 5)} ${normalized.slice(5, 8)} ${normalized.slice(8, 10)} ${normalized.slice(10, 12)}`
}

const phoneValue = formatPhoneDisplay(rawPhone)
const phoneHref = rawPhone ? `tel:${String(rawPhone).replace(/\s+/g, '')}` : ''
const hasContactDetails = Boolean(phoneValue || emailValue || instagramValue)
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
  gap: 28px;
}

.contact-cards {
  display: grid;
  gap: 16px;
}

.contact-card {
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(143, 120, 106, 0.16);
  border-radius: 20px;
  padding: 18px 20px;
  box-shadow: 0 14px 26px rgba(51, 46, 43, 0.08);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 14px;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.contact-card__label {
  margin: 0;
  font-size: 0.82rem;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.contact-card__value {
  margin: 0;
  color: var(--color-body);
  font-size: 1rem;
  text-decoration: none;
}

.contact-card__value:hover {
  color: var(--color-accent);
}

.contact-card__icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(156, 118, 96, 0.12);
  color: rgba(95, 77, 66, 0.9);
}

.contact-card__icon {
  width: 20px;
  height: 20px;
}

.contact-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 30px rgba(51, 46, 43, 0.12);
}

.contact-empty {
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px dashed rgba(143, 120, 106, 0.32);
  color: var(--color-muted);
  background: rgba(255, 255, 255, 0.6);
}

.contact-empty p {
  margin: 0;
  font-size: 0.95rem;
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

.contact-btn--ghost:hover {
  background: linear-gradient(180deg, #A18C7E 0%, #8B7567 100%);
  color: #FDFBF9;
  transform: translateY(-2px);
}

@media (min-width: 900px) {
  .contact-grid {
    grid-template-columns: minmax(0, 0.6fr) minmax(0, 0.4fr);
    align-items: start;
  }

  .contact-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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

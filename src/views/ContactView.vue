<template>
  <div ref="root" class="contact">
    <section class="contact-hero">
      <UiContainer>
        <div class="contact-hero__content">
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
            <ul class="contact-primary-list">
              <li>
                <span>Adres</span>
                <p>{{ resolvedAddress || 'Belirtilmedi' }}</p>
              </li>
              <li>
                <span>Telefon</span>
                <a v-if="resolvedPhone" :href="phoneHref">{{ resolvedPhone }}</a>
                <p v-else>Belirtilmedi</p>
              </li>
              <li>
                <span>E-posta</span>
                <a v-if="resolvedEmail" :href="`mailto:${resolvedEmail}`">{{ resolvedEmail }}</a>
                <p v-else>Belirtilmedi</p>
              </li>
              <li v-if="contactInfo.workingHours">
                <span>Çalışma Saatleri</span>
                <p>{{ contactInfo.workingHours }}</p>
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
              <a
                v-if="whatsappUrl"
                :href="whatsappUrl"
                class="contact-btn contact-btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile iletişime geç"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" class="contact-btn__icon">
                  <path
                    fill="currentColor"
                    d="M19.05 4.94A9.9 9.9 0 0 0 12 2a10 10 0 0 0-8.74 14.86L2 22l5.26-1.23A10 10 0 1 0 19.05 4.94Zm-7.05 15.3a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.12.73.75-3.04-.2-.32a8.3 8.3 0 1 1 7.11 3.97Zm4.56-6.23c-.25-.12-1.46-.72-1.68-.8-.22-.08-.39-.12-.55.12s-.63.8-.77.96c-.14.16-.28.18-.53.06a6.8 6.8 0 0 1-2-1.24 7.5 7.5 0 0 1-1.38-1.72c-.15-.25-.02-.38.11-.5.11-.11.25-.28.38-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42h-.47a.9.9 0 0 0-.65.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.58 4.11 3.62.57.25 1.02.4 1.37.52.58.18 1.1.15 1.52.09.46-.07 1.46-.6 1.67-1.19.2-.58.2-1.08.14-1.18-.05-.1-.21-.16-.46-.28Z"
                  />
                </svg>
                <span class="sr-only">WhatsApp</span>
              </a>
              <a
                v-if="instagramDmUrl"
                :href="instagramDmUrl"
                class="contact-btn contact-btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram ile iletişime geç"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" class="contact-btn__icon">
                  <path
                    fill="currentColor"
                    d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.7A4.05 4.05 0 0 0 3.7 7.75v8.5a4.05 4.05 0 0 0 4.05 4.05h8.5a4.05 4.05 0 0 0 4.05-4.05v-8.5A4.05 4.05 0 0 0 16.25 3.7h-8.5ZM12 7.9A4.1 4.1 0 1 1 7.9 12 4.1 4.1 0 0 1 12 7.9Zm0 1.7A2.4 2.4 0 1 0 14.4 12 2.4 2.4 0 0 0 12 9.6Zm4.45-2.05a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05Z"
                  />
                </svg>
                <span class="sr-only">Instagram</span>
              </a>
              <router-link to="/randevu-olustur" class="contact-btn contact-btn--primary">Randevu Talebi Oluştur</router-link>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useReveal } from '../composables/useReveal'
import UiContainer from '../components/ui/UiContainer.vue'
import { contactConfig } from '../config/contact'
import { createWhatsappUrl } from '../utils/whatsapp'

const root = ref(null)
useReveal(root)

const contactInfo = contactConfig
const env = import.meta.env || {}
const envWhatsappEnabled = env.VITE_WHATSAPP_ENABLED !== 'false'
const envWhatsappNumber = env.VITE_WHATSAPP_NUMBER || ''
const envWhatsappMessage = env.VITE_WHATSAPP_DEFAULT_MESSAGE || 'Merhaba, bilgi almak istiyorum.'
const envWhatsappCountryCode = env.VITE_WHATSAPP_COUNTRY_CODE || '90'
const envInstagramUrl = env.VITE_INSTAGRAM_URL || ''
const envInstagramUsername = env.VITE_INSTAGRAM_USERNAME || ''
const envInstagramDmUrl = env.VITE_INSTAGRAM_DM_URL || ''
const isMobileDevice = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)

const resolvedAddress = computed(() => contactInfo.address || env.VITE_CONTACT_ADDRESS || '')
const resolvedPhone = computed(() => contactInfo.phone || env.VITE_CONTACT_PHONE || '')
const resolvedEmail = computed(() => contactInfo.email || env.VITE_CONTACT_EMAIL || '')
const phoneHref = computed(() =>
  resolvedPhone.value ? `tel:${resolvedPhone.value.replace(/\s+/g, '')}` : ''
)
const whatsappUrl = computed(() => {
  const isEnabled = contactInfo.whatsapp?.enabled ?? envWhatsappEnabled
  if (!isEnabled) return ''
  const targetNumber = contactInfo.whatsapp?.number || resolvedPhone.value || envWhatsappNumber
  const defaultMessage = contactInfo.whatsapp?.defaultMessage || envWhatsappMessage
  const defaultCountryCode = contactInfo.whatsapp?.defaultCountryCode || envWhatsappCountryCode
  return createWhatsappUrl(
    defaultMessage,
    targetNumber,
    defaultCountryCode
  )
})
const instagramDmUrl = computed(() => {
  const username = (contactInfo.instagram?.username || envInstagramUsername || '').replace(/^@/, '')
  const profileUrl = contactInfo.instagram?.url || envInstagramUrl
  const directDm = contactInfo.instagram?.dmUrl || envInstagramDmUrl

  if (isMobileDevice) {
    if (directDm) return directDm.replace('https://www.instagram.com/m/', 'https://ig.me/m/')
    if (username) return `https://ig.me/m/${username}`
  }

  if (profileUrl) return profileUrl
  if (username) return `https://www.instagram.com/${username}/`
  return ''
})
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

.contact-social-list {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid rgba(143, 120, 106, 0.18);
  gap: 10px;
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

.contact-social-list a {
  font-weight: 500;
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

.contact-btn__icon {
  width: 18px;
  height: 18px;
  display: block;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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

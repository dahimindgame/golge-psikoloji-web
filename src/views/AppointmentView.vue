<template>
  <div ref="root" class="appointment-page">
    <section class="appointment-hero">
      <div class="appointment-container">
        <p class="eyebrow">İlk Adım</p>
        <h1>Randevu Oluştur</h1>
        <p class="appointment-lead">
          İlk görüşme talebinizi iletmek için aşağıdaki formu doldurabilirsiniz. Size en uygun zaman
          ve süreç hakkında en kısa sürede dönüş sağlanacaktır.
        </p>
        <p class="appointment-note">Paylaştığınız bilgiler gizlilikle ve özenle ele alınır.</p>
      </div>
    </section>

    <section class="appointment-body">
      <div class="appointment-container appointment-grid">
        <form class="appointment-form" @submit.prevent="handleSubmit" novalidate>
          <div class="form-section">
            <h2>Kişisel Bilgiler</h2>
            <div class="field">
              <label for="fullName">Ad Soyad</label>
              <input
                id="fullName"
                v-model.trim="form.fullName"
                type="text"
                autocomplete="name"
                :aria-invalid="Boolean(errors.fullName)"
              />
              <span v-if="errors.fullName" class="error">{{ errors.fullName }}</span>
            </div>
            <div class="field">
              <label for="phone">Telefon</label>
              <input
                id="phone"
                v-model.trim="form.phone"
                type="tel"
                autocomplete="tel"
                inputmode="tel"
                placeholder="05xx xxx xx xx"
                :aria-invalid="Boolean(errors.phone)"
                @input="handlePhoneInput"
              />
              <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
            </div>
            <div class="field">
              <label for="email">E-posta</label>
              <input
                id="email"
                v-model.trim="form.email"
                type="email"
                autocomplete="email"
                inputmode="email"
                placeholder="ornek@mail.com"
                :aria-invalid="Boolean(errors.email)"
                @input="handleEmailInput"
              />
              <span v-if="errors.email" class="error">{{ errors.email }}</span>
            </div>
          </div>

          <div class="form-section">
            <h2>Görüşme Tercihi</h2>
            <div class="field">
              <label for="meetingType">Görüşme Türü</label>
              <select
                id="meetingType"
                v-model="form.meetingType"
                :aria-invalid="Boolean(errors.meetingType)"
              >
                <option value="" disabled>Seçiniz</option>
                <option value="Yüz Yüze">Yüz Yüze</option>
                <option value="Online">Online</option>
              </select>
              <span v-if="errors.meetingType" class="error">{{ errors.meetingType }}</span>
            </div>
            <div class="field">
              <label>Uygun Tarih(ler)</label>
              <p class="field-help">Size en uygun tarih(leri) seçebilirsiniz.</p>
              <div class="calendar">
                <div class="calendar-header">
                  <button type="button" class="calendar-nav" @click="prevMonth" aria-label="Önceki ay">‹</button>
                  <span class="calendar-title">{{ monthLabel }}</span>
                  <button type="button" class="calendar-nav" @click="nextMonth" aria-label="Sonraki ay">›</button>
                </div>
                <div class="calendar-weekdays">
                  <span v-for="day in weekdayLabels" :key="day">{{ day }}</span>
                </div>
                <div class="calendar-grid">
                  <span v-for="(cell, index) in calendarDays" :key="index" class="calendar-cell">
                    <button
                      v-if="cell"
                      type="button"
                      class="calendar-day"
                      :class="{ 'is-selected': isSelectedDate(cell) }"
                      :aria-pressed="isSelectedDate(cell)"
                      @click="toggleDate(cell)"
                    >
                      {{ cell }}
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div class="field">
              <label>Uygun Saat Aralığı</label>
              <div class="chip-grid chip-grid--times">
                <button
                  v-for="time in timeOptions"
                  :key="time"
                  type="button"
                  class="chip"
                  :class="{ 'is-selected': selectedTimes.includes(time) }"
                  :aria-pressed="selectedTimes.includes(time)"
                  @click="toggleTime(time)"
                >
                  {{ time }}
                </button>
              </div>
            </div>
            <div class="field">
              <label for="supportTopic">Destek Almak İstediğiniz Konu</label>
              <select
                id="supportTopic"
                v-model="form.supportTopic"
                :aria-invalid="Boolean(errors.supportTopic)"
              >
                <option value="" disabled>Seçiniz</option>
                <option value="Bireysel Terapi">Bireysel Terapi</option>
                <option value="Ergen Danışmanlığı">Ergen Danışmanlığı</option>
                <option value="Ebeveyn Danışmanlığı">Ebeveyn Danışmanlığı</option>
                <option value="Kaygı ve Stres">Kaygı ve Stres</option>
                <option value="İlişki ve Duygusal Süreç">İlişki ve Duygusal Süreç</option>
                <option value="Online Görüşme">Online Görüşme</option>
                <option value="Emin Değilim / Birlikte Değerlendirelim">Emin Değilim / Birlikte Değerlendirelim</option>
              </select>
              <span v-if="errors.supportTopic" class="error">{{ errors.supportTopic }}</span>
            </div>
            <div class="field">
              <label for="message">Mesajınız</label>
              <textarea
                id="message"
                v-model.trim="form.message"
                rows="4"
                placeholder="Kısaca paylaşmak istediğiniz notlar..."
              />
            </div>
          </div>

          <label class="consent">
            <input type="checkbox" v-model="form.consent" />
            <span>İletişim kurulmasını kabul ediyorum</span>
          </label>
          <span v-if="errors.consent" class="error">{{ errors.consent }}</span>

          <div v-if="submitStatus" class="submit-status" :class="`submit-status--${submitStatus}`">
            {{ submitMessage }}
          </div>
          <button type="submit" class="appointment-submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Gönderiliyor...' : 'Talebi Gönder' }}
          </button>
          <router-link class="appointment-alt" to="/iletisim">
            Alternatif olarak iletişim sayfasını kullanabilirsiniz.
          </router-link>
        </form>

        <aside class="appointment-info">
          <h2>Süreç Nasıl İlerliyor?</h2>
          <ol>
            <li>Talebinizi iletin</li>
            <li>Uygunluk değerlendirmesi yapalım</li>
            <li>Size dönüş sağlayalım</li>
          </ol>
          <p>İlk temas süreci, ihtiyaçlarınıza uygun şekilde ve özenle değerlendirilir.</p>
          <p class="info-note">Bu form, ön değerlendirme ve ilk iletişim amacı taşır.</p>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useReveal } from '../composables/useReveal'
import { contactConfig } from '../config/contact'
import { createAppointmentWhatsappMessage, createWhatsappUrl, normalizeWhatsappNumber } from '../utils/whatsapp'

const root = ref(null)
useReveal(root)

const route = useRoute()

const form = reactive({
  fullName: '',
  phone: '',
  email: '',
  meetingType: '',
  dayRange: '',
  timeRange: '',
  supportTopic: '',
  message: '',
  consent: false,
})

const errors = reactive({
  fullName: '',
  phone: '',
  email: '',
  meetingType: '',
  supportTopic: '',
  consent: '',
})

const isSubmitting = ref(false)
const submitStatus = ref('')
const submitMessage = ref('')

const timeOptions = ['09:00 – 12:00', '12:00 – 15:00', '15:00 – 18:00', '18:00 – 21:00']
const selectedDates = reactive([])
const selectedTimes = reactive([])
const maxDates = 3

const weekdayLabels = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']
const today = new Date()
const currentMonth = ref(today.getMonth())
const currentYear = ref(today.getFullYear())

watch(
  () => route.query.service,
  (value) => {
    if (value && !form.supportTopic) {
      form.supportTopic = String(value)
    }
  },
  { immediate: true }
)

const monthLabel = computed(() => {
  const date = new Date(currentYear.value, currentMonth.value, 1)
  return date.toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })
})

const calendarDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const startDay = (firstDay.getDay() + 6) % 7
  const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < startDay; i += 1) cells.push(null)
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day)
  return cells
})

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value -= 1
  } else {
    currentMonth.value -= 1
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value += 1
  } else {
    currentMonth.value += 1
  }
}

function formatDate(year, month, day) {
  const date = new Date(year, month, day)
  return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function getDateKey(day) {
  const month = String(currentMonth.value + 1).padStart(2, '0')
  const date = String(day).padStart(2, '0')
  return `${currentYear.value}-${month}-${date}`
}

function isSelectedDate(day) {
  return selectedDates.includes(getDateKey(day))
}

function syncPreferences() {
  form.dayRange = selectedDates.length
    ? selectedDates.map((key) => {
      const [year, month, day] = key.split('-').map(Number)
      return formatDate(year, month - 1, day)
    }).join(' / ')
    : ''
  form.timeRange = selectedTimes.length ? selectedTimes.join(', ') : ''
}

function toggleDate(day) {
  const key = getDateKey(day)
  const index = selectedDates.indexOf(key)
  if (index >= 0) {
    selectedDates.splice(index, 1)
  } else if (selectedDates.length < maxDates) {
    selectedDates.push(key)
  }
  syncPreferences()
}

function toggleTime(time) {
  const index = selectedTimes.indexOf(time)
  if (index >= 0) {
    selectedTimes.splice(index, 1)
  } else {
    selectedTimes.push(time)
  }
  syncPreferences()
}

function setErrors() {
  errors.fullName = form.fullName ? '' : 'Ad soyad gereklidir.'
  const phoneDigits = form.phone.replace(/\D/g, '')
  errors.phone = phoneDigits.length >= 10 ? '' : 'Geçerli bir telefon numarası girin.'
  errors.meetingType = form.meetingType ? '' : 'Görüşme türü seçiniz.'
  errors.supportTopic = form.supportTopic ? '' : 'Destek konusunu seçiniz.'
  errors.email = form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ? 'Geçerli bir e-posta adresi girin.'
    : ''
  errors.consent = form.consent ? '' : 'İletişim izni gereklidir.'
}

function formatPhone(value) {
  const digits = String(value || '').replace(/\D/g, '').slice(0, 11)
  if (!digits) return ''
  const normalized = digits.startsWith('0') ? digits : `0${digits}`
  const parts = [
    normalized.slice(0, 4),
    normalized.slice(4, 7),
    normalized.slice(7, 9),
    normalized.slice(9, 11),
  ].filter(Boolean)
  return parts.join(' ')
}

function handlePhoneInput(event) {
  form.phone = formatPhone(event.target.value)
}

function handleEmailInput(event) {
  form.email = String(event.target.value || '').trim().toLowerCase()
}

function resetStatus() {
  submitStatus.value = ''
  submitMessage.value = ''
}

function resetForm() {
  form.fullName = ''
  form.phone = ''
  form.email = ''
  form.meetingType = ''
  form.dayRange = ''
  form.timeRange = ''
  form.supportTopic = ''
  form.message = ''
  form.consent = false
  selectedDates.splice(0, selectedDates.length)
  selectedTimes.splice(0, selectedTimes.length)
}

async function handleSubmit() {
  setErrors()
  if (errors.fullName || errors.phone || errors.meetingType || errors.supportTopic || errors.email || errors.consent) {
    return
  }

  if (isSubmitting.value) {
    return
  }

  resetStatus()
  isSubmitting.value = true

  try {
    const whatsappEnabled = contactConfig.whatsapp?.enabled !== false
    const rawWhatsappNumber = contactConfig.whatsapp?.number || contactConfig.phone || ''
    const normalizedWhatsappNumber = normalizeWhatsappNumber(
      rawWhatsappNumber,
      contactConfig.whatsapp?.defaultCountryCode
    )

    if (!whatsappEnabled || !normalizedWhatsappNumber) {
      submitStatus.value = 'error'
      submitMessage.value = 'WhatsApp iletişim bilgisi şu anda tanımlı değil.'
      return
    }

    const message = createAppointmentWhatsappMessage({
      fullName: form.fullName,
      phone: form.phone,
      email: form.email,
      service: form.supportTopic,
      preferredDate: form.dayRange,
      preferredTime: form.timeRange,
      message: form.message,
    })

    const whatsappUrl = createWhatsappUrl(
      message,
      normalizedWhatsappNumber,
      contactConfig.whatsapp?.defaultCountryCode
    )

    if (!whatsappUrl) {
      submitStatus.value = 'error'
      submitMessage.value = 'WhatsApp iletişim bilgisi şu anda tanımlı değil.'
      return
    }

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    submitStatus.value = 'success'
    submitMessage.value = 'WhatsApp açıldı. Mesajınızı gönderebilirsiniz.'
    resetForm()
  } catch (error) {
    submitStatus.value = 'error'
    submitMessage.value = 'Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.appointment-page {
  background: var(--color-bg);
}

.appointment-container {
  max-width: 1240px;
  margin: 0 auto;
  padding-inline: 2rem;
}

.appointment-hero {
  padding: clamp(72px, 8vw, 112px) 0 clamp(40px, 6vw, 64px);
}

.appointment-hero h1 {
  margin: 0 0 1rem;
  font-size: clamp(2.1rem, 3.2vw, 3rem);
  color: var(--color-heading);
}

.appointment-lead {
  margin: 0 0 1rem;
  max-width: 58ch;
  color: var(--color-body);
  line-height: 1.7;
}

.appointment-note {
  margin: 0;
  max-width: 58ch;
  color: var(--color-muted);
}

.appointment-body {
  padding: 0 0 clamp(72px, 8vw, 112px);
}

.appointment-grid {
  display: grid;
  gap: 2.5rem;
}

.appointment-form,
.appointment-info {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  padding: 2rem;
  box-shadow: var(--shadow-sm);
}

.appointment-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-section h2,
.appointment-info h2 {
  margin: 0 0 1rem;
  font-size: 1.2rem;
  color: var(--color-heading);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-grid {
  display: grid;
  gap: 1rem;
}

label {
  font-weight: 500;
  color: var(--color-main);
}

input,
select,
textarea {
  border: 1px solid rgba(51, 46, 43, 0.18);
  border-radius: 14px;
  padding: 0.75rem 0.9rem;
  font-family: 'Inter', var(--font-sans);
  font-size: 0.98rem;
  background: var(--color-bg);
  color: var(--color-body);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field-help {
  margin: 0 0 0.75rem;
  font-size: 0.92rem;
  color: var(--color-muted);
}

.calendar {
  background: var(--color-bg);
  border: 1px solid rgba(51, 46, 43, 0.16);
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 10px 22px rgba(51, 46, 43, 0.06);
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.calendar-title {
  font-size: 0.98rem;
  font-weight: 500;
  color: var(--color-main);
  text-transform: capitalize;
}

.calendar-nav {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid rgba(51, 46, 43, 0.16);
  background: var(--color-card);
  color: var(--color-main);
  cursor: pointer;
  transition: background 200ms ease, border-color 200ms ease, transform 200ms ease;
}

.calendar-nav:hover {
  background: #EEF1EE;
  border-color: rgba(51, 46, 43, 0.24);
  transform: translateY(-1px);
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.35rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--color-muted);
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.35rem;
}

.calendar-cell {
  min-height: 36px;
}

.calendar-day {
  width: 100%;
  min-height: 36px;
  border-radius: 12px;
  border: 1px solid transparent;
  background: transparent;
  font-family: 'Inter', var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-body);
  cursor: pointer;
  transition: background 200ms ease, border-color 200ms ease, transform 200ms ease;
}

.calendar-day:hover {
  background: #EEF1EE;
  border-color: rgba(51, 46, 43, 0.16);
  transform: translateY(-1px);
}

.calendar-day.is-selected {
  background: linear-gradient(180deg, #7F9085 0%, #66776D 100%);
  color: #FDFBF9;
  border-color: transparent;
  box-shadow: 0 8px 14px rgba(102, 119, 109, 0.22);
}

.calendar-day.is-selected:hover {
  transform: translateY(-2px);
}

.chip-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
}

.chip-grid--times {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.chip {
  border: 1px solid rgba(51, 46, 43, 0.18);
  border-radius: 14px;
  padding: 0.6rem 0.9rem;
  font-family: 'Inter', var(--font-sans);
  font-size: 0.95rem;
  color: var(--color-body);
  background: var(--color-bg);
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease, background 200ms ease;
  cursor: pointer;
}

.chip:hover {
  transform: translateY(-1px);
  border-color: rgba(51, 46, 43, 0.28);
  box-shadow: 0 6px 14px rgba(51, 46, 43, 0.08);
}

.chip.is-selected {
  background: linear-gradient(180deg, #7F9085 0%, #66776D 100%);
  color: #FDFBF9;
  border-color: transparent;
  box-shadow: 0 8px 16px rgba(102, 119, 109, 0.25);
}

.chip.is-selected:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 119, 109, 0.28);
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(140, 116, 102, 0.18);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.consent {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.95rem;
  color: var(--color-body);
}

.consent input {
  width: 18px;
  height: 18px;
  accent-color: var(--color-accent);
}

.error {
  color: var(--color-accent);
  font-size: 0.85rem;
}

.appointment-submit {
  height: 50px;
  padding: 12px 26px;
  border-radius: 18px;
  border: none;
  font-family: 'Inter', var(--font-sans);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: #FDFBF9;
  background: linear-gradient(180deg, #7F9085 0%, #66776D 100%);
  box-shadow:
    0 8px 18px rgba(102, 119, 109, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
}

.appointment-submit:disabled {
  cursor: progress;
  opacity: 0.7;
  box-shadow: none;
  transform: none;
}

.submit-status {
  padding: 12px 14px;
  border-radius: 14px;
  font-size: 0.95rem;
  line-height: 1.5;
  border: 1px solid transparent;
}

.submit-status--success {
  background: rgba(232, 244, 236, 0.9);
  border-color: rgba(105, 156, 120, 0.3);
  color: #2c6040;
}

.submit-status--error {
  background: rgba(255, 236, 236, 0.9);
  border-color: rgba(188, 100, 100, 0.3);
  color: #7a2f2f;
}

.appointment-submit:hover {
  background: linear-gradient(180deg, #87988D 0%, #6D7D73 100%);
  transform: translateY(-2px);
  box-shadow:
    0 10px 22px rgba(102, 119, 109, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.appointment-submit:active {
  transform: translateY(0) scale(0.98);
  box-shadow:
    0 5px 12px rgba(102, 119, 109, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
}

.appointment-alt {
  margin-top: 0.25rem;
  font-size: 0.95rem;
  color: var(--color-muted);
  text-decoration: none;
}

.appointment-alt:hover {
  color: var(--color-accent);
}

.appointment-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.appointment-info ol {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--color-body);
  line-height: 1.7;
}

.appointment-info p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.6;
}

.info-note {
  font-size: 0.92rem;
}

@media (min-width: 900px) {
  .appointment-grid {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    align-items: start;
  }
}

@media (max-width: 768px) {
  .appointment-container {
    padding-inline: 1.5rem;
  }

  .appointment-form,
  .appointment-info {
    padding: 1.5rem;
  }

  .field-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) {
  .field-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>

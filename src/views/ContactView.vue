<template>
  <div ref="root" class="contact page-wrap">
    <section class="section">
      <h1>İletişim</h1>
      <p class="lead">
        Randevu almak veya sorularınız için aşağıdaki formu doldurabilir veya doğrudan iletişime geçebilirsiniz.
      </p>
      <div class="contact-layout">
        <form class="contact-form" @submit.prevent="onSubmit" novalidate>
          <div class="field">
            <label for="name">Ad Soyad</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              autocomplete="name"
              :aria-invalid="errors.name ? 'true' : 'false'"
              aria-describedby="name-error"
            />
            <span id="name-error" class="error" role="alert">{{ errors.name }}</span>
          </div>
          <div class="field">
            <label for="email">E-posta</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              autocomplete="email"
              :aria-invalid="errors.email ? 'true' : 'false'"
              aria-describedby="email-error"
            />
            <span id="email-error" class="error" role="alert">{{ errors.email }}</span>
          </div>
          <div class="field">
            <label for="phone">Telefon</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              autocomplete="tel"
              :aria-invalid="errors.phone ? 'true' : 'false'"
              aria-describedby="phone-error"
            />
            <span id="phone-error" class="error" role="alert">{{ errors.phone }}</span>
          </div>
          <div class="field">
            <label for="message">Mesajınız</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              :aria-invalid="errors.message ? 'true' : 'false'"
              aria-describedby="message-error"
            />
            <span id="message-error" class="error" role="alert">{{ errors.message }}</span>
          </div>
          <button type="submit" class="btn btn-primary">Gönder</button>
        </form>
        <div class="contact-info">
          <h2>İletişim Bilgileri</h2>
          <p><strong>E-posta:</strong> info@golgepsikoloji.com</p>
          <p><strong>Telefon:</strong> +90 XXX XXX XX XX</p>
          <p><strong>Adres:</strong> Örnek Mah. Örnek Sok. No: X, İstanbul</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

function validate() {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.phone = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Ad soyad gereklidir.'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'E-posta gereklidir.'
    valid = false
  } else {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(form.email)) {
      errors.email = 'Geçerli bir e-posta adresi girin.'
      valid = false
    }
  }

  if (form.phone && !/^[\d\s+()-]+$/.test(form.phone)) {
    errors.phone = 'Geçerli bir telefon numarası girin.'
    valid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Mesaj alanı gereklidir.'
    valid = false
  }

  return valid
}

function onSubmit() {
  if (!validate()) return
  console.log('Form submitted', form)
}
</script>

<style scoped>
.contact {
  padding: 2rem 1.5rem 4rem;
}

.contact h1 {
  margin: 0 0 0.5rem;
}

.lead {
  margin: 0 0 2rem;
  color: var(--color-text);
  max-width: 50ch;
}

.contact-layout {
  display: grid;
  gap: 2rem;
}

@media (min-width: 720px) {
  .contact-layout {
    grid-template-columns: 1fr 300px;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
  background: var(--color-bg);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.field label {
  font-weight: 500;
  color: var(--color-main);
}

.field input,
.field textarea {
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 1rem;
  background: var(--color-bg);
  color: var(--color-main);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.field input:focus,
.field textarea:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.field input[aria-invalid="true"],
.field textarea[aria-invalid="true"] {
  border-color: var(--color-accent);
}

.error {
  font-size: 0.875rem;
  color: var(--color-accent);
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  background: var(--color-accent);
  color: var(--color-bg);
  cursor: pointer;
  align-self: flex-start;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-normal), transform var(--transition-fast), opacity var(--transition-fast);
}

.btn:hover {
  opacity: 0.95;
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}

.contact-info {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
  background: var(--color-bg);
}

.contact-info h2 {
  margin: 0 0 1rem;
  font-size: 1.25rem;
}

.contact-info p {
  margin: 0 0 0.5rem;
  color: var(--color-text);
  font-size: 0.9375rem;
}
</style>

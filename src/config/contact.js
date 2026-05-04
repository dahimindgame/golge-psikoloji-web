const env = import.meta?.env || {}
const normalizeEnvValue = (value) => String(value || '').trim()
const normalizeNumber = (value) => normalizeEnvValue(value).replace(/\s+/g, '')
const hardcodedWhatsappFallback = '905306557698'
const hardcodedEmailFallback = 'ozdenunsal@gmail.com'
const hardcodedInstagramFallback = 'https://instagram.com/psikolog_ozdenunsal'
const fallbackWhatsapp = normalizeNumber(
  env.VITE_CONTACT_WHATSAPP ||
    env.VITE_WHATSAPP_NUMBER ||
    env.VITE_CONTACT_PHONE ||
    hardcodedWhatsappFallback
)

export const contactConfig = {
  whatsapp: {
    number: fallbackWhatsapp,
    defaultCountryCode: normalizeEnvValue(env.VITE_WHATSAPP_COUNTRY_CODE) || '90',
    enabled: normalizeEnvValue(env.VITE_WHATSAPP_ENABLED) !== 'false',
    defaultMessage: normalizeEnvValue(env.VITE_WHATSAPP_DEFAULT_MESSAGE) || 'Merhaba, randevu almak istiyorum.',
  },
  instagram: {
    url: normalizeEnvValue(env.VITE_INSTAGRAM_URL) || hardcodedInstagramFallback,
  },
  phone: normalizeEnvValue(env.VITE_CONTACT_PHONE),
  email: normalizeEnvValue(env.VITE_CONTACT_EMAIL) || hardcodedEmailFallback,
  address: normalizeEnvValue(env.VITE_CONTACT_ADDRESS),
  workingHours: normalizeEnvValue(env.VITE_CONTACT_HOURS),
  appointmentNote: normalizeEnvValue(env.VITE_CONTACT_APPOINTMENT_NOTE),
}

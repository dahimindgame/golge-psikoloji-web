const env = import.meta?.env || {}

export const contactConfig = {
  whatsapp: {
    number: env.VITE_WHATSAPP_NUMBER || '',
    defaultCountryCode: env.VITE_WHATSAPP_COUNTRY_CODE || '90',
    enabled: env.VITE_WHATSAPP_ENABLED !== 'false',
    defaultMessage: env.VITE_WHATSAPP_DEFAULT_MESSAGE || 'Merhaba, bilgi almak istiyorum.',
  },
  instagram: {
    url: env.VITE_INSTAGRAM_URL || '',
    username: env.VITE_INSTAGRAM_USERNAME || '',
    dmUrl: env.VITE_INSTAGRAM_DM_URL || '',
  },
  phone: env.VITE_CONTACT_PHONE || '',
  email: env.VITE_CONTACT_EMAIL || '',
  address: env.VITE_CONTACT_ADDRESS || '',
  workingHours: env.VITE_CONTACT_HOURS || '',
  appointmentNote: env.VITE_CONTACT_APPOINTMENT_NOTE || '',
}

export const normalizeWhatsappNumber = (input, defaultCountryCode = '90') => {
  if (!input) return ''
  let digits = String(input).replace(/\D/g, '')
  if (!digits) return ''

  if (digits.startsWith('0') && defaultCountryCode) {
    digits = `${defaultCountryCode}${digits.slice(1)}`
  }

  if (digits.length === 10 && defaultCountryCode) {
    digits = `${defaultCountryCode}${digits}`
  }

  return digits
}

export const createWhatsappUrl = (message, number, defaultCountryCode = '90') => {
  const normalized = normalizeWhatsappNumber(number, defaultCountryCode)
  if (!normalized) return ''
  const text = encodeURIComponent(message || '')
  return `https://wa.me/${normalized}?text=${text}`
}

export const createAppointmentWhatsappMessage = (formData) => {
  const lines = ['Merhaba, randevu talebi oluşturmak istiyorum.']

  const addLine = (label, value) => {
    if (value) lines.push(`${label}: ${value}`)
  }

  addLine('Ad Soyad', formData.fullName)
  addLine('Telefon', formData.phone)
  addLine('E-posta', formData.email)
  addLine('Hizmet Alanı', formData.service)
  addLine('Tercih Edilen Tarih', formData.preferredDate)
  addLine('Tercih Edilen Saat', formData.preferredTime)
  addLine('Mesaj', formData.message)

  return lines.join('\n')
}

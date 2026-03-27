import 'dotenv/config'
import express from 'express'

const app = express()
const port = process.env.PORT || 3001

app.use(express.json({ limit: '20kb' }))

const sanitize = (value) => String(value ?? '').replace(/[\r\n]+/g, ' ').trim()

const buildMessage = (payload) => {
  const lines = [
    'Yeni randevu talebi:',
    `Ad Soyad: ${sanitize(payload.name) || 'Belirtilmedi'}`,
    `Telefon: ${sanitize(payload.phone) || 'Belirtilmedi'}`,
    `E-posta: ${sanitize(payload.email) || 'Belirtilmedi'}`,
    `Hizmet Alanı: ${sanitize(payload.service) || 'Belirtilmedi'}`,
  ]

  if (payload.meetingType) lines.push(`Görüşme Türü: ${sanitize(payload.meetingType)}`)
  if (payload.dayRange) lines.push(`Uygun Gün Aralığı: ${sanitize(payload.dayRange)}`)
  if (payload.timeRange) lines.push(`Uygun Saat Aralığı: ${sanitize(payload.timeRange)}`)
  if (payload.message) lines.push(`Mesaj: ${sanitize(payload.message)}`)

  return lines.join('\n')
}

app.post('/api/appointment-whatsapp', async (req, res) => {
  const {
    name,
    phone,
    email = '',
    message = '',
    service = '',
    meetingType = '',
    dayRange = '',
    timeRange = '',
  } = req.body || {}

  if (!name || !phone || !service) {
    return res.status(400).json({ ok: false, message: 'Gerekli alanlar eksik.' })
  }

  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN
  const targetNumber = process.env.WHATSAPP_TARGET_NUMBER

  if (!phoneNumberId || !accessToken || !targetNumber) {
    console.error('WhatsApp config missing', {
      hasPhoneNumberId: Boolean(phoneNumberId),
      hasAccessToken: Boolean(accessToken),
      hasTargetNumber: Boolean(targetNumber),
    })
    return res.status(500).json({ ok: false, message: 'WhatsApp yapılandırması eksik.' })
  }

  const payload = {
    name,
    phone,
    email,
    message,
    service,
    meetingType,
    dayRange,
    timeRange,
  }

  try {
    const response = await fetch(`https://graph.facebook.com/v19.0/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: targetNumber,
        type: 'text',
        text: {
          preview_url: false,
          body: buildMessage(payload),
        },
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('WhatsApp API error', data)
      return res.status(502).json({
        ok: false,
        message: 'WhatsApp mesajı gönderilemedi.',
        error: data,
      })
    }

    return res.json({ ok: true })
  } catch (error) {
    console.error('WhatsApp request failed', error)
    return res.status(500).json({ ok: false, message: 'Sunucu hatası oluştu.' })
  }
})

app.listen(port, () => {
  console.log(`WhatsApp endpoint running on port ${port}`)
})

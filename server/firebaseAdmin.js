import { readFileSync } from 'node:fs'
import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

const adminEmails = () =>
  (process.env.FIREBASE_ADMIN_EMAIL || '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)

const auth = () => {
  if (getApps().length) return getAuth()

  const keyPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH
  const projectId = process.env.FIREBASE_PROJECT_ID
  if (!keyPath || !projectId) return null

  let serviceAccount
  try {
    serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'))
  } catch {
    return null
  }
  initializeApp({
    credential: cert(serviceAccount),
    projectId,
  })
  return getAuth()
}

export const verifyAdmin = async (request) => {
  const allowed = adminEmails()
  if (!allowed.length) {
    return { ok: false, status: 503, message: 'Yönetici e-postaları tanımlı değil.' }
  }
  const verifier = auth()
  if (!verifier) {
    return { ok: false, status: 503, message: 'Firebase sunucu ayarı eksik.' }
  }

  const header = request.get('authorization') || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : ''
  if (!token) {
    return { ok: false, status: 401, message: 'Oturum geçersiz.' }
  }

  try {
    const decoded = await verifier.verifyIdToken(token)
    const email = String(decoded.email || '').toLowerCase()
    if (!allowed.includes(email)) {
      return { ok: false, status: 403, message: 'Bu hesap yönetici değil.' }
    }
    return { ok: true, email }
  } catch {
    return { ok: false, status: 401, message: 'Oturum geçersiz.' }
  }
}

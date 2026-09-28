<template>
  <div class="admin page-wrap">
    <section class="section">
      <p v-if="!firebaseReady" class="error">
        Firebase ayarı eksik. .env içindeki Firebase değerlerini doldurup siteyi ve API sunucusunu yeniden başlatın.
      </p>
      <form v-else-if="!signedIn" class="panel" @submit.prevent="login">
        <label for="email">E-posta</label>
        <input id="email" v-model="email" type="email" autocomplete="username" required />
        <label for="password">Parola</label>
        <input id="password" v-model="password" type="password" autocomplete="current-password" required />
        <p v-if="error" class="error">{{ error }}</p>
        <button type="submit" :disabled="busy">Giriş yap</button>
      </form>

      <div v-else class="workspace">
        <div class="session">
          <p>{{ accountEmail }}</p>
          <button type="button" class="ghost" @click="logout">Çıkış</button>
        </div>
        <form class="composer" @submit.prevent="save">
          <div class="composer-bar">
            <h2>{{ editingSlug ? 'Yazıyı düzenle' : 'Yeni Yazı' }}</h2>
          </div>
          <div class="panel">
          <label for="title">Başlık</label>
          <input id="title" v-model="form.title" type="text" required />
          <label for="excerpt">Kısa özet</label>
          <textarea id="excerpt" v-model="form.excerpt" rows="3" />
          <div class="body-field">
            <div class="body-head">
              <label for="body">Yazı</label>
              <button type="button" class="icon-btn" aria-label="Tam ekran" @click="openBody">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
                </svg>
              </button>
            </div>
            <textarea v-if="!bodyFull" id="body" v-model="form.body" rows="12" required />
          </div>
          <Teleport to="body">
            <div v-if="bodyFull" class="body-screen" role="dialog" aria-modal="true" aria-label="Yazı">
              <div class="body-head">
                <label for="body-full">Yazı</label>
                <button type="button" class="icon-btn" aria-label="Kapat" @click="closeBody">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 3v3a2 2 0 0 1-2 2H3M16 3v3a2 2 0 0 0 2 2h3M8 21v-3a2 2 0 0 0-2-2H3M16 21v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                </button>
              </div>
              <textarea id="body-full" v-model="form.body" />
            </div>
          </Teleport>
          <label class="check">
            <input v-model="form.published" type="checkbox" />
            Yayında
          </label>
          <label for="date">Tarih</label>
          <input id="date" v-model="form.date" type="date" required />
          <p v-if="error" class="error">{{ error }}</p>
          </div>
          <div class="actions">
            <button type="submit" :disabled="busy">Kaydet</button>
            <button v-if="editingSlug" type="button" class="ghost" @click="resetForm">Vazgeç</button>
          </div>
        </form>

        <section class="post-list" aria-label="Yazı listesi">
          <h2>Yazı listesi</h2>
          <div class="post-grid" role="table">
            <div class="post-grid__row post-grid__head" role="row">
              <span role="columnheader">Başlık</span>
              <span role="columnheader">Tarih</span>
              <span role="columnheader">Durum</span>
              <span role="columnheader"></span>
            </div>
            <div
              v-for="(post, index) in gridRows"
              :key="post?.slug || `empty-${index}`"
              class="post-grid__row"
              role="row"
            >
              <span role="cell">{{ post?.title }}</span>
              <span role="cell">{{ post?.date }}</span>
              <span role="cell">{{ post ? (post.published ? 'Yayında' : 'Taslak') : '' }}</span>
              <span v-if="post" class="row-actions" role="cell">
                <button type="button" class="ghost" @click="edit(post)">Düzenle</button>
                <button type="button" class="ghost" @click="remove(post)">Sil</button>
              </span>
              <span v-else role="cell"></span>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, reactive, ref } from 'vue'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { firebaseAuth, firebaseReady } from '../config/firebase'

const signedIn = ref(false)
const accountEmail = ref('')
const email = ref('')
const password = ref('')
const posts = ref([])
const editingSlug = ref('')
const error = ref('')
const busy = ref(false)
const bodyFull = ref(false)
let stopAuth = () => {}

const gridRows = computed(() => {
  const count = Math.max(posts.value.length, 8)
  return Array.from({ length: count }, (_, index) => posts.value[index] || null)
})

const form = reactive({
  title: '',
  date: new Date().toISOString().slice(0, 10),
  excerpt: '',
  body: '',
  published: true,
})

async function authHeaders() {
  const user = firebaseAuth?.currentUser
  if (!user) throw new Error('Oturum geçersiz.')
  const token = await user.getIdToken()
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
}

function loginError(code) {
  if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
    return 'E-posta veya parola hatalı.'
  }
  if (code === 'auth/too-many-requests') return 'Çok fazla deneme. Bir süre sonra tekrar deneyin.'
  if (code === 'auth/network-request-failed') return 'Firebase’e ulaşılamıyor.'
  return 'Giriş yapılamadı.'
}

function resetForm() {
  editingSlug.value = ''
  form.title = ''
  form.date = new Date().toISOString().slice(0, 10)
  form.excerpt = ''
  form.body = ''
  form.published = true
  error.value = ''
}

async function loadPosts() {
  const response = await fetch('/api/admin/posts', { headers: await authHeaders() })
  if (response.status === 401 || response.status === 403) {
    const data = await response.json().catch(() => ({}))
    error.value = data.message || 'Oturum geçersiz.'
    if (response.status === 401 && firebaseAuth) await signOut(firebaseAuth)
    return
  }
  if (!response.ok) throw new Error('list')
  posts.value = await response.json()
}

async function login() {
  error.value = ''
  if (!firebaseAuth) {
    error.value = 'Firebase ayarı eksik.'
    return
  }
  busy.value = true
  try {
    await signInWithEmailAndPassword(firebaseAuth, email.value.trim(), password.value)
    password.value = ''
  } catch (err) {
    error.value = loginError(err?.code)
  } finally {
    busy.value = false
  }
}

function onBodyKey(event) {
  if (event.key === 'Escape') closeBody()
}

function openBody() {
  bodyFull.value = true
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', onBodyKey)
  nextTick(() => document.getElementById('body-full')?.focus())
}

function closeBody() {
  bodyFull.value = false
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onBodyKey)
}

async function logout() {
  closeBody()
  if (firebaseAuth) await signOut(firebaseAuth)
  posts.value = []
  resetForm()
}

function edit(post) {
  editingSlug.value = post.slug
  form.title = post.title
  form.date = post.date
  form.excerpt = post.excerpt
  form.body = post.body
  form.published = post.published
  error.value = ''
}

async function save() {
  error.value = ''
  busy.value = true
  try {
    const response = await fetch(
      editingSlug.value ? `/api/admin/posts/${encodeURIComponent(editingSlug.value)}` : '/api/admin/posts',
      {
        method: editingSlug.value ? 'PUT' : 'POST',
        headers: await authHeaders(),
        body: JSON.stringify(form),
      }
    )
    const data = await response.json()
    if (!response.ok) {
      error.value = data.message || 'Yazı kaydedilemedi.'
      return
    }
    resetForm()
    await loadPosts()
  } catch {
    error.value = 'Sunucuya ulaşılamıyor.'
  } finally {
    busy.value = false
  }
}

async function remove(post) {
  if (!window.confirm(`“${post.title}” silinsin mi?`)) return
  error.value = ''
  const response = await fetch(`/api/admin/posts/${encodeURIComponent(post.slug)}`, {
    method: 'DELETE',
    headers: await authHeaders(),
  })
  if (!response.ok) {
    error.value = 'Yazı silinemedi.'
    return
  }
  if (editingSlug.value === post.slug) resetForm()
  await loadPosts()
}

onMounted(() => {
  if (!firebaseAuth) return
  stopAuth = onAuthStateChanged(firebaseAuth, (user) => {
    signedIn.value = Boolean(user)
    accountEmail.value = user?.email || ''
    if (!user) {
      posts.value = []
      return
    }
    loadPosts().catch(() => {
      error.value = 'Yazılar yüklenemedi.'
    })
  })
})

onUnmounted(() => {
  closeBody()
  stopAuth()
})
</script>

<style scoped>
.admin {
  padding: 2rem 1.5rem 4rem;
}

.workspace {
  display: grid;
  gap: 2rem;
}

.panel {
  margin: 0;
  padding: 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-card);
}

.panel {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.session {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.session p {
  margin: 0;
  color: var(--color-muted);
}

.composer {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.composer-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.composer-bar h2 {
  margin: 0;
  font-size: 1.25rem;
}

.composer > .actions {
  margin-top: 0;
}

label {
  margin-top: 0.4rem;
  font-size: 0.9rem;
}

input,
textarea {
  width: 100%;
  padding: 0.7rem 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: #fff;
  color: var(--color-main);
  font: inherit;
}

.check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.check input {
  width: 18px;
  height: 18px;
  accent-color: var(--color-accent);
}

.body-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.body-head label {
  margin-top: 0;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  color: var(--color-main);
  border: 0;
  box-shadow: none;
}

.icon-btn:hover,
.icon-btn:focus {
  background: transparent;
}

.icon-btn svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.75;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.body-screen {
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem clamp(1rem, 3vw, 2.5rem) 1.5rem;
  background: var(--color-bg);
}

.body-screen textarea {
  flex: 1;
  min-height: 0;
  resize: none;
}

.actions {
  display: flex;
  gap: 0.6rem;
  margin-top: 0.6rem;
}

button {
  border: 0;
  border-radius: var(--radius-button);
  padding: 0.7rem 1rem;
  background: var(--color-main);
  color: var(--color-bg);
  font: inherit;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: default;
}

.ghost {
  background: transparent;
  color: var(--color-main);
  border: 1px solid var(--color-border);
}

.post-list h2 {
  margin: 0 0 0.85rem;
  font-size: 1.25rem;
}

.post-grid {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-card);
}

.post-grid__row {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) 140px 120px minmax(150px, auto);
  gap: 0.75rem;
  align-items: center;
  min-height: 52px;
  padding: 0.55rem 1rem;
  border-top: 1px solid var(--color-border);
}

.post-grid__head {
  border-top: 0;
  min-height: 44px;
  color: var(--color-muted);
  font-size: 0.85rem;
  background: rgba(51, 46, 43, 0.04);
}

.row-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
}

.row-actions .ghost {
  padding: 0.35rem 0.7rem;
  font-size: 0.85rem;
}

.error {
  margin: 0.25rem 0 0;
  color: #8a4b3a;
}
</style>

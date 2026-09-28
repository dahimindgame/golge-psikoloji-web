<template>
  <div class="post page-wrap">
    <article v-if="post" class="section">
      <p class="back">
        <router-link to="/blog">Blog</router-link>
      </p>
      <h1>{{ post.title }}</h1>
      <time :datetime="post.date">{{ formatDate(post.date) }}</time>
      <div class="body">
        <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      </div>
    </article>
    <p v-else-if="missing" class="empty">Bu yazı bulunamadı.</p>
    <p v-else-if="loadError" class="empty">Yazı şu an yüklenemiyor.</p>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)
const missing = ref(false)
const loadError = ref(false)

const paragraphs = computed(() =>
  String(post.value?.body || '')
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
)

function formatDate(dateStr) {
  const date = new Date(dateStr)
  if (Number.isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })
}

async function loadPost(slug) {
  post.value = null
  missing.value = false
  loadError.value = false
  try {
    const response = await fetch(`/api/posts/${encodeURIComponent(slug)}`)
    if (response.status === 404) {
      missing.value = true
      return
    }
    if (!response.ok) throw new Error('post')
    post.value = await response.json()
    document.title = `${post.value.title} | Gölge Psikoloji`
  } catch {
    loadError.value = true
  }
}

onMounted(() => loadPost(route.params.slug))
watch(() => route.params.slug, (slug) => {
  if (slug) loadPost(slug)
})
</script>

<style scoped>
.post {
  padding: 2rem 1.5rem 4rem;
}

.back {
  margin: 0 0 1.25rem;
}

.back a {
  color: var(--color-muted);
  text-decoration: none;
}

.post h1 {
  margin: 0 0 0.75rem;
}

time {
  display: block;
  margin-bottom: 1.75rem;
  color: var(--color-muted);
}

.body p {
  margin: 0 0 1rem;
  max-width: 68ch;
  white-space: pre-wrap;
}

.empty {
  color: var(--color-text);
  font-style: italic;
}
</style>

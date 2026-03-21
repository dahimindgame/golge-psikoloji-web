<template>
  <div ref="root" class="blog page-wrap">
    <section class="section">
      <SpiralWatermark class="section-watermark" aria-hidden="true" />
      <h1>Blog</h1>
      <p class="lead">
        Psikoloji ve kişisel gelişim üzerine yazılarım.
      </p>
      <ul class="post-list">
        <li v-for="post in posts" :key="post.slug" class="post-item">
          <router-link :to="`/blog/${post.slug}`" class="post-link">
            <h2 class="post-title">{{ post.title }}</h2>
            <time class="post-date" :datetime="post.date">{{ formatDate(post.date) }}</time>
            <p class="post-excerpt">{{ post.excerpt }}</p>
          </router-link>
        </li>
      </ul>
      <p v-if="posts.length === 0" class="empty">Yazılar yakında eklenecek.</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'
import SpiralWatermark from '../components/SpiralWatermark.vue'

const root = ref(null)
useReveal(root)

const posts = []

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
.blog {
  padding: 2rem 1.5rem 4rem;
}

.blog h1 {
  margin: 0 0 0.5rem;
}

.lead {
  margin: 0 0 2rem;
  color: var(--color-text);
  max-width: 42ch;
}

.post-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-item {
  margin: 0;
}

.post-link {
  display: block;
  padding: 1.25rem;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  background: var(--color-card);
  position: relative;
  overflow: hidden;
  transition: box-shadow var(--transition-normal), transform var(--transition-fast), border-color var(--transition-fast);
}

.post-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-accent-secondary);
  opacity: 0.14;
}

.post-link:hover {
  text-decoration: none;
  border-color: var(--color-border);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-2px);
}

.post-title {
  margin: 0 0 0.25rem;
  font-size: 1.25rem;
}

.post-date {
  font-size: 0.875rem;
  color: var(--color-text-soft);
  margin: 0 0 0.5rem;
  display: block;
}

.post-excerpt {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--color-text);
  line-height: 1.5;
}

.empty {
  color: var(--color-text);
  font-style: italic;
}
</style>

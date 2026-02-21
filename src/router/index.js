import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Ana Sayfa' },
  },
  {
    path: '/hakkimda',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'Hakkımda' },
  },
  {
    path: '/hizmetler',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: { title: 'Hizmetler' },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    meta: { title: 'Blog' },
  },
  {
    path: '/iletisim',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'İletişim' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | Gölge Psikoloji` : 'Gölge Psikoloji'
})

export default router

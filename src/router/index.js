import { createRouter, createWebHistory } from 'vue-router'
import { hidePageLoader, showPageLoader } from '../stores/pageLoader'

import serviceChild from '../assets/services/cocuk.jpeg'
import serviceTeen from '../assets/services/ergen.jpeg'
import serviceAdult from '../assets/services/yetiskin.jpeg'
import serviceCouple from '../assets/services/cift.jpeg'

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
    path: '/hizmetler/cocuk-danismanligi',
    name: 'cocuk-danismanligi',
    component: () => import('../views/services/ChildCounselingView.vue'),
    meta: {
      title: 'Çocuk Danışmanlığı | Gölge Psikoloji',
      showLoader: true,
      loaderIcon: serviceChild,
    },
  },
  {
    path: '/hizmetler/ergen-danismanligi',
    name: 'ErgenDanismanligi',
    component: () => import('../views/services/AdolescentCounselingView.vue'),
    meta: {
      title: 'Ergen Danışmanlığı | Gölge Psikoloji',
      showLoader: true,
      loaderIcon: serviceTeen,
    },
  },
  {
    path: '/hizmetler/cift-evlilik-terapisi',
    name: 'CiftEvlilikTerapisi',
    component: () => import('../views/services/CoupleCounselingView.vue'),
    meta: {
      title: 'Çift & Evlilik Terapisi | Gölge Psikoloji',
      showLoader: true,
      loaderIcon: serviceCouple,
    },
  },
  {
    path: '/hizmetler/bireysel-danismanlik',
    name: 'BireyselDanismanlik',
    component: () => import('../views/services/IndividualCounselingView.vue'),
    meta: {
      title: 'Bireysel Danışmanlık | Gölge Psikoloji',
      showLoader: true,
      loaderIcon: serviceAdult,
    },
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
  {
    path: '/randevu-olustur',
    name: 'appointment',
    component: () => import('../views/AppointmentView.vue'),
    meta: { title: 'Randevu Oluştur' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta?.showLoader) {
    showPageLoader(to.meta?.loaderIcon)
  } else {
    hidePageLoader()
  }
  next()
})

router.afterEach((to) => {
  if (to.meta?.showLoader) {
    window.setTimeout(() => {
      hidePageLoader()
    }, 260)
  } else {
    hidePageLoader()
  }
  document.title = to.meta.title ? `${to.meta.title} | Gölge Psikoloji` : 'Gölge Psikoloji'
})

export default router

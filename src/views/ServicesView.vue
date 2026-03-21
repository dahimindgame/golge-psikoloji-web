<template>
  <div ref="root" class="services page-wrap">
    <section class="section">
      <SpiralWatermark class="section-watermark" aria-hidden="true" />
      <h1>Hizmetler</h1>
      <p class="lead">
        Bireysel ihtiyaçlarınıza uygun terapi ve danışmanlık hizmetleri sunuyorum.
      </p>
      <div class="service-list">
        <article
          v-for="(item, index) in services"
          :key="item.id"
          class="service-card"
          :class="{ expanded: openId === item.id }"
        >
          <h2 class="service-title">{{ item.title }}</h2>
          <p class="service-tags">{{ item.tags }}</p>
          <p class="service-excerpt">{{ item.excerpt }}</p>
          <button
            type="button"
            class="read-more"
            :aria-expanded="openId === item.id"
            :aria-controls="`service-body-${item.id}`"
            :id="`service-toggle-${item.id}`"
            @click="toggle(item.id)"
          >
            {{ openId === item.id ? 'Gizle' : 'Devamını oku' }}
            <span class="arrow" aria-hidden="true">→</span>
          </button>
          <div
            :id="`service-body-${item.id}`"
            class="service-body"
            role="region"
            :aria-labelledby="`service-toggle-${item.id}`"
            :hidden="openId !== item.id"
          >
            <p v-if="openId === item.id" class="service-full">
              {{ item.body }}
            </p>
          </div>
        </article>
      </div>
      <div class="cta-wrap">
        <router-link to="/iletisim" class="btn btn-primary">Randevu için iletişime geçin</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'
import SpiralWatermark from '../components/SpiralWatermark.vue'

const root = ref(null)
useReveal(root)

const openId = ref(null)

function toggle(id) {
  openId.value = openId.value === id ? null : id
}

const services = [
  {
    id: 'yetiskinler',
    title: 'Yetişkinlerle Çalışma',
    tags: 'Kaygı, ilişki döngüleri, sınırlar, içsel sıkışmışlık',
    excerpt: 'Tekrar eden ilişkiler, yoğun kaygı, değersizlik hissi ya da "neden hep böyle oluyor?" sorusu. Yetişkinlerle çalışmada, bireyin içsel dünyasını ve günlük yaşamını birlikte anlamlandırmaya odaklanırım.',
    body: 'Görüşmelerde yaşam öykünüzü, ilişki örüntülerinizi ve duygusal dünyanızı birlikte ele alırız. Amaç, yalnızca belirtileri hafifletmek değil; tekrar eden döngülerin kaynağına temas etmek ve kişinin kendisiyle daha dürüst bir ilişki kurabilmesine alan açmaktır. Süreç, danışanın ritmine göre ilerler.',
  },
  {
    id: 'ergenler',
    title: 'Ergenlerle Çalışma',
    tags: 'Kimlik, duygular ve sınırlar',
    excerpt: 'Ergenlik, duyguların yoğunlaştığı ve kimliğin yeniden şekillendiği bir dönemdir. Ergenlerle çalışırken güvenli bir ilişki kurmayı, duyguları adlandırmayı ve sağlıklı sınırlar geliştirmeyi merkeze alırım.',
    body: 'Bu dönemde ebeveynlerle iş birliği önemlidir; ancak ergenin kendini güvende hissettiği, yargılanmadan dinlenebildiği bir alan sunmak temeldir. Duyguları adlandırma, sınır koyma ve kimlik gelişimi üzerine birlikte çalışırız.',
  },
  {
    id: 'cocuklar',
    title: 'Çocuklarla Çalışma',
    tags: 'Duygular, davranışlar ve oyun dili',
    excerpt: 'Çocuklar duygularını kelimelerle değil; davranışlarıyla anlatır. Çocuklarla çalışmada oyun, beden farkındalığı ve duygusal regülasyon ön plandadır. Aile süreci terapinin doğal bir parçasıdır.',
    body: 'Oyun ve yaratıcı ifade aracılığıyla çocuğun içsel dünyasına alan açılır. Davranışların altındaki duygusal ihtiyaçları birlikte anlamlandırırız. Aile görüşmeleri, sürecin devamı ve ev içi destek için düzenli olarak planlanır.',
  },
  {
    id: 'ciftler',
    title: 'Çiftlerle Çalışma',
    tags: 'Bağlanma, iletişim ve onarım',
    excerpt: 'Çiftler çoğu zaman aynı problemi değil, aynı yarayı taşır. Çift terapisinde bağlanma örüntülerini, iletişim döngülerini ve onarıcı teması birlikte ele alırız.',
    body: 'İlişkideki tekrarlayan çatışmaların altında sıklıkla bağlanma ihtiyaçları ve iletişim kalıpları yatar. Terapide güvenli bir ortamda bu örüntüleri fark etmek, birbirinizi duymak ve onarıcı bir temas kurmak için alan açılır.',
  },
]
</script>

<style scoped>
.services {
  padding: 2rem 1.5rem 4rem;
}

.services h1 {
  margin: 0 0 0.5rem;
}

.lead {
  margin: 0 0 2rem;
  color: var(--color-text);
  max-width: 42ch;
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 2rem;
}

.service-card {
  position: relative;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
  background: var(--color-card);
  overflow: hidden;
  transition: box-shadow var(--transition-normal), transform var(--transition-fast), border-color var(--transition-fast);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-accent-secondary);
  opacity: 0.14;
}

.service-card:last-child {
  margin-bottom: 0;
}

.service-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  border-color: var(--color-border);
}

.service-body[hidden] {
  display: none;
}

.service-title {
  margin: 0 0 0.25rem;
  font-size: 1.25rem;
}

.service-tags {
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  color: var(--color-accent);
}

.service-excerpt {
  margin: 0 0 1rem;
  font-size: 0.9375rem;
  color: var(--color-text);
  line-height: 1.6;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-accent);
  cursor: pointer;
  position: relative;
  transition: color var(--transition-fast), opacity var(--transition-fast), transform var(--transition-fast);
}

.read-more:hover {
  text-decoration: underline;
  opacity: 0.9;
  transform: translateX(1px);
}

.arrow {
  transition: transform var(--transition-normal);
}

.service-card.expanded .arrow {
  transform: rotate(90deg);
}

.service-body {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--glass-border);
}

.service-full {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--color-text);
  line-height: 1.6;
}

.cta-wrap {
  text-align: center;
  padding-top: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  color: var(--color-bg);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-normal), transform var(--transition-fast), opacity var(--transition-fast);
}

.btn:hover {
  text-decoration: none;
  opacity: 0.95;
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}

.btn-primary {
  background: var(--color-accent);
}
</style>

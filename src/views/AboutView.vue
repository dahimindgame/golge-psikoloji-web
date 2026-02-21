<template>
  <div ref="root" class="about page-wrap">
    <section class="section">
      <h1>Hakkımda</h1>
      <div class="about-grid">
        <div class="about-image">
          <img
            src="/about-photo.png"
            alt="Gölge Psikoloji kurucusu"
            class="about-photo"
          />
        </div>
        <div class="about-content">
          <p>
            İnsan, çoğu zaman zorlandığı duyguları bastırarak, görmezden gelerek ya da yok sayarak yaşamaya devam etmeye çalışır. Ancak bastırılan her parça, bilinçdışında varlığını sürdürür ve zamanla kaygı, ilişki sorunları, bedensel gerginlikler ya da tekrar eden yaşam döngüleri olarak kendini gösterir.
          </p>
          <p>
            Gölge Psikoloji, Carl Gustav Jung’un gölge kavramından ilham alır. Gölge; istenmeyen, reddedilen ya da kabul edilmesi zor bulunan yönlerimizdir. Bu yönler yok edilmesi gereken parçalar değil, anlaşılmayı bekleyen alanlardır. Terapi sürecinde amaç, karanlığı ortadan kaldırmak değil; onunla temas kurarak bütünleşmektir.
          </p>
          <p>
            Çalışmalarımda bireyin yalnızca düşüncelerine değil; duygularına, bedensel tepkilerine ve ilişki örüntülerine de alan açarım. Çünkü insan deneyimi bir bütündür. Bilinçdışıyla kurulan temas, kişinin kendisiyle daha dürüst bir ilişki kurmasına; sınırlarını, ihtiyaçlarını ve bağlanma biçimini fark etmesine olanak tanır.
          </p>
          <p>
            Terapi odası benim için, kişinin kendini savunmak zorunda kalmadan var olabildiği bir eşik alanıdır. Terapi sürecinde hızdan çok derinlik önemlidir. Hazır çözümler sunmak yerine, kişinin yaşantısına birlikte anlam vermek esastır. Çünkü her danışanın ritmi ve dönüşüm yolu kendine aittir.
          </p>
          <p>
            Bu süreçte analitik psikolojinin derinlikli ve anlamlandırıcı bakışını, bilişsel davranışçı terapinin yapılandırılmış ve kanıta dayalı yöntemleriyle birlikte ele alırım. Böylece danışanın yalnızca içsel dünyasını değil; düşünce, duygu ve davranışları arasındaki ilişkiyi de fark etmesine alan açılır.
          </p>
          <p>
            Gölge Psikoloji, yüzleşmenin cesaret, bütünleşmenin ise özgürlük getirdiğine inanır. Çünkü insan, ancak kendisiyle temas edebildiği ölçüde değişebilir.
          </p>
        </div>
      </div>
    </section>
    <section class="section expertise">
      <h2>Uzmanlık Alanları</h2>
      <ul class="expertise-list">
        <li>Bireysel terapi</li>
        <li>Kaygı ve depresyon</li>
        <li>İlişki ve iletişim</li>
        <li>Özgüven ve kimlik</li>
        <li>Stres ve yaşam dengesi</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)
</script>

<style scoped>
.about {
  padding: 2rem 1.5rem 4rem;
}

.about h1 {
  margin: 0 0 2rem;
}

.about-grid {
  display: grid;
  gap: 2rem;
  align-items: start;
}

@media (min-width: 640px) {
  .about-grid {
    grid-template-columns: 280px 1fr;
  }
}

.about-photo {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center 25%;
  border-radius: 50%;
  border: 2px solid var(--color-accent-secondary);
  box-shadow: var(--shadow-md);
}

.about-content p {
  margin: 0 0 1rem;
  color: var(--color-text);
}

.about-content p:last-child {
  margin-bottom: 0;
}

.expertise {
  margin-top: 3rem;
  padding: 2rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
  background: var(--color-bg);
}

.expertise h2 {
  margin: 0 0 1rem;
}

.expertise-list {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--color-text);
}

.expertise-list li {
  margin-bottom: 0.5rem;
}
</style>

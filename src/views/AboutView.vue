<template>
  <div ref="root" class="about">
    <section class="about-hero">
      <UiContainer>
        <div class="about-hero__grid">
          <div class="about-hero__content">
            <p class="about-eyebrow">Hizmet Alanı</p>
            <h1>Hakkımda</h1>
            <p class="about-hero__lead">
              İnsan, çoğu zaman zorlandığı duyguları bastırarak, görmezden gelerek ya da yok sayarak yaşamaya devam etmeye çalışır. Ancak bastırılan her parça, bilinçdışında varlığını sürdürür ve zamanla kaygı, ilişki sorunları, bedensel gerginlikler ya da tekrar eden yaşam döngüleri olarak kendini gösterir.
            </p>
            <p class="about-hero__note">
              Gölge Psikoloji, Carl Gustav Jung’un gölge kavramından ilham alır. Gölge; istenmeyen, reddedilen ya da kabul edilmesi zor bulunan yönlerimizdir. Bu yönler yok edilmesi gereken parçalar değil, anlaşılmayı bekleyen alanlardır.
            </p>
            <div class="about-hero__actions">
              <router-link to="/iletisim" class="about-btn about-btn--ghost">İletişime Geç</router-link>
            <router-link to="/randevu-olustur" class="about-btn about-btn--primary">Randevu Talebi Oluştur</router-link>
            </div>
          </div>
          <div class="about-hero__media">
            <div class="about-hero__frame about-image-wrapper">
              <img
                src="/about-photo.png"
                alt="Gölge Psikoloji kurucusu"
                class="about-photo"
              />
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <section class="about-body">
      <UiContainer>
        <div class="about-flow">
          <div class="about-flow__block">
            <p class="about-eyebrow">Yaklaşım</p>
            <h2>Terapi anlayışı ve bakış açısı</h2>
            <p>
              Terapi sürecinde amaç, karanlığı ortadan kaldırmak değil; onunla temas kurarak bütünleşmektir. Çalışmalarımda bireyin yalnızca düşüncelerine değil; duygularına, bedensel tepkilerine ve ilişki örüntülerine de alan açarım.
            </p>
            <p class="about-flow__accent">
              Çünkü insan deneyimi bir bütündür. Bilinçdışıyla kurulan temas, kişinin kendisiyle daha dürüst bir ilişki kurmasına; sınırlarını, ihtiyaçlarını ve bağlanma biçimini fark etmesine olanak tanır.
            </p>
          </div>

          <div class="about-flow__block">
            <p class="about-eyebrow">Terapi Alanı</p>
            <h2>Güvenli ve derinlikli bir ilişki zemini</h2>
            <p>
              Terapi odası benim için, kişinin kendini savunmak zorunda kalmadan var olabildiği bir eşik alanıdır. Terapi sürecinde hızdan çok derinlik önemlidir. Hazır çözümler sunmak yerine, kişinin yaşantısına birlikte anlam vermek esastır.
            </p>
            <p>
              Çünkü her danışanın ritmi ve dönüşüm yolu kendine aittir. Bu süreçte analitik psikolojinin derinlikli ve anlamlandırıcı bakışını, bilişsel davranışçı terapinin yapılandırılmış ve kanıta dayalı yöntemleriyle birlikte ele alırım.
            </p>
          </div>

          <div class="about-flow__block about-flow__grid">
            <div>
              <p class="about-eyebrow">Odak Alanları</p>
              <h2>Çalışma alanları</h2>
              <ul>
                <li>Bireysel terapi</li>
                <li>Kaygı ve depresyon</li>
                <li>İlişki ve iletişim</li>
                <li>Özgüven ve kimlik</li>
                <li>Stres ve yaşam dengesi</li>
              </ul>
            </div>
            <div class="about-flow__quote">
              <p>
                Gölge Psikoloji, yüzleşmenin cesaret, bütünleşmenin ise özgürlük getirdiğine inanır. Çünkü insan, ancak kendisiyle temas edebildiği ölçüde değişebilir.
              </p>
            </div>
          </div>

          <div class="about-flow__block about-flow__cta">
            <p class="about-flow__cta-copy">
              Terapi, kişinin kendini daha güvenli, daha açık ve daha sağlam bir zeminde yeniden tanıyabilmesi için bir alan sunar.
            </p>
            <h2>Birlikte düşünmek ve ilerlemek için iletişime geçebilirsiniz.</h2>
            <div class="about-hero__actions">
              <router-link to="/iletisim" class="about-btn about-btn--ghost">İletişime Geç</router-link>
              <router-link to="/randevu-olustur" class="about-btn about-btn--primary">Randevu Talebi Oluştur</router-link>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

import UiContainer from '../components/ui/UiContainer.vue'

const root = ref(null)
useReveal(root)

</script>

<style scoped>
.about {
  padding-bottom: clamp(48px, 6vw, 80px);
  background: #fbfaf9;
}

.about-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 10vh, 112px) 0 clamp(36px, 6vh, 56px);
  background:
    radial-gradient(120% 120% at 85% 5%, rgba(248, 242, 236, 0.85) 0%, rgba(252, 248, 245, 0.92) 55%, rgba(247, 243, 239, 0.96) 100%),
    linear-gradient(180deg, #ffffff 0%, #f7f2ef 100%);
}

.about-hero__grid {
  position: relative;
  display: grid;
  gap: clamp(18px, 3vw, 36px);
  align-items: center;
  z-index: 2;
}

.about-hero__content {
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about-hero__content h1 {
  margin: 0;
  font-size: clamp(2.1rem, 3.4vw, 2.7rem);
  color: var(--color-heading);
}

.about-hero__lead,
.about-hero__note {
  margin: 0;
  color: var(--color-body);
  line-height: 1.7;
  font-size: 1rem;
}

.about-hero__note {
  color: var(--color-muted);
}

.about-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 4px;
}

.about-hero__media {
  position: relative;
  order: -1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-hero__frame {
  position: relative;
  border-radius: clamp(22px, 2.6vw, 30px);
  overflow: hidden;
  background: #f6f0ea;
  box-shadow:
    0 22px 44px rgba(91, 60, 55, 0.16),
    0 8px 16px rgba(91, 60, 55, 0.1);
  max-width: 400px;
  width: 100%;
}

.about-image-wrapper {
  height: 420px;
}

.about-hero__frame::before {
  content: '';
  position: absolute;
  inset: 8px;
  border-radius: inherit;
  background: radial-gradient(130% 130% at 10% 0%, rgba(255, 255, 255, 0.6), transparent 55%);
  pointer-events: none;
  z-index: 1;
}

.about-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
}

.about-eyebrow {
  margin: 0 0 6px;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(156, 118, 96, 0.9);
}

.about-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: transform var(--transition-fast), box-shadow var(--transition-normal), background var(--transition-normal);
}

.about-btn--primary {
  background: linear-gradient(180deg, #9C8779 0%, #857164 100%);
  color: #FDFBF9;
  box-shadow:
    0 10px 22px rgba(133, 113, 100, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
}

.about-btn--primary:hover {
  background: linear-gradient(180deg, #A18C7E 0%, #8B7567 100%);
  transform: translateY(-2px);
}

.about-btn--ghost {
  border: 1px solid var(--color-border);
  color: var(--color-main);
  background: rgba(255, 255, 255, 0.72);
}

.about-body {
  position: relative;
  padding: clamp(24px, 5vw, 56px) 0 0;
}

.about-flow {
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 4vw, 32px);
}

.about-flow__block h2 {
  margin: 0 0 10px;
  font-size: clamp(1.45rem, 2.2vw, 1.85rem);
  color: var(--color-heading);
}

.about-flow__block p {
  margin: 0 0 12px;
  color: var(--color-body);
  line-height: 1.72;
}

.about-flow__accent {
  padding-left: 12px;
  border-left: 2px solid rgba(182, 138, 116, 0.35);
}

.about-flow__grid {
  display: grid;
  gap: 18px;
}

.about-flow__grid ul {
  margin: 0;
  padding-left: 1.05rem;
  line-height: 1.68;
}

.about-flow__quote {
  background: rgba(255, 255, 255, 0.75);
  border-radius: 18px;
  padding: 18px 20px;
  border: 1px solid rgba(143, 120, 106, 0.18);
}

.about-flow__quote p {
  margin: 0;
  color: var(--color-body);
  line-height: 1.7;
}

.about-flow__cta {
  padding-top: clamp(8px, 3vw, 16px);
}

.about-flow__cta-copy {
  margin-bottom: 10px;
  color: var(--color-body);
}

@media (min-width: 900px) {
  .about-hero__grid {
    grid-template-columns: minmax(0, 0.65fr) minmax(0, 0.35fr);
  }

  .about-hero__media {
    order: 0;
  }

  .about-flow__grid {
    grid-template-columns: minmax(0, 0.6fr) minmax(0, 0.4fr);
    align-items: start;
  }
}

@media (max-width: 700px) {
  .about-hero {
    padding-top: 64px;
  }

  .about-hero__frame {
    max-width: 320px;
  }

  .about-image-wrapper {
    height: 300px;
  }

  .about-hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .about-btn {
    width: 100%;
  }

  .about-flow {
    gap: 20px;
  }

  .about-flow__block p {
    margin-bottom: 10px;
  }
}
</style>

<template>
  <div class="child-counseling">
    <section class="cc-hero">
      <UiContainer>
        <div class="cc-hero__grid">
          <div class="cc-hero__content">
            <p class="cc-hero__eyebrow">Hizmet Alanı</p>
            <h1>Ergenlerle Çalışma / Ergen Danışmanlığı</h1>
            <p class="cc-hero__lead">
              Ergenlik dönemi, kişinin hem kendisini hem de dünyayı yeniden keşfettiği önemli bir gelişim sürecidir. Bu dönemde kimlik arayışı, duyguların yoğunluğu ve bağımsızlaşma ihtiyacı beraberinde çeşitli zorluklar getirebilir.
            </p>
            <p class="cc-hero__note">
              Ergenler çoğu zaman yaşadıkları duyguları anlamakta veya ifade etmekte zorlanabilirler. Bazen aileyle çatışmalar artabilir, bazen de kişi kendisini yalnız ya da anlaşılmamış hissedebilir.
            </p>
            <div class="cc-hero__actions">
              <router-link :to="appointmentLink" class="cc-btn cc-btn--primary">Randevu Talebi Oluştur</router-link>
              <router-link to="/iletisim" class="cc-btn cc-btn--ghost">İletişime Geç</router-link>
            </div>
          </div>
          <div class="cc-hero__media">
            <div class="cc-hero__frame cc-hero__frame--teen">
              <img src="/assets/services/ergen-danismanligi-hero.png" alt="Ergen danışmanlığında güvenli alan" loading="eager" />
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <section class="cc-body">
      <UiContainer>
        <div class="cc-flow">
          <div class="cc-flow__block">
            <p class="cc-eyebrow">Yaklaşım</p>
            <h2>Ergenlerle Terapi Yaklaşımı</h2>
            <p>
              Ergenlerle terapi sürecinde öncelikle güvenli ve yargısız bir ilişki kurmak önemlidir. Terapi alanı, ergenin kendisini rahatça ifade edebildiği ve düşüncelerinin ciddiyetle ele alındığını hissedebildiği bir alan olmalıdır.
            </p>
            <p class="cc-flow__intro">Bu süreçte birlikte:</p>
            <ul class="cc-flow__list cc-flow__list--grid">
              <li>Duyguları tanımayı ve ifade etmeyi</li>
              <li>Kaygı ve stresle baş etme becerileri geliştirmeyi</li>
              <li>Öfke ve dürtüleri düzenlemeyi</li>
              <li>Öz güven ve benlik algısını güçlendirmeyi</li>
              <li>Arkadaşlık ve ilişki sorunlarını ele almayı</li>
              <li>Akademik baskı ve performans kaygısını yönetmeyi</li>
            </ul>
            <p>
              Gerektiğinde aile ile yapılan görüşmelerle ergenin yaşadığı zorlukları daha iyi anlamak ve aile içi iletişimi desteklemek de sürecin bir parçası olabilir.
            </p>
            <p class="cc-flow__accent">
              Amaç yalnızca sorunları ortadan kaldırmak değil, ergenin kendisini daha iyi tanımasına ve duygularını sağlıklı şekilde ifade edebilmesine destek olmaktır.
            </p>
          </div>

          <div class="cc-flow__block cc-flow__support">
            <p class="cc-eyebrow">Destek Alanları</p>
            <h2>Ergen terapisine hangi durumlarda başvurulabilir?</h2>
            <div class="cc-flow__grid cc-flow__grid--dense">
              <div>
                <ul>
                  <li>Kaygı ve yoğun stres</li>
                  <li>Depresif duygular ve isteksizlik</li>
                  <li>Öfke patlamaları</li>
                  <li>Duygu düzenleme güçlükleri</li>
                  <li>Öz güven sorunları</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Kimlik arayışı ve kendini tanıma süreci</li>
                  <li>Sosyal kaygı ve arkadaşlık ilişkilerinde zorluklar</li>
                  <li>Akran zorbalığı deneyimleri</li>
                  <li>Okul uyum sorunları</li>
                  <li>Akademik baskı ve performans kaygısı</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Motivasyon ve ders çalışma güçlükleri</li>
                  <li>İnternet veya telefon kullanımında kontrol güçlüğü</li>
                  <li>Aile ile iletişim sorunları</li>
                  <li>İçine kapanma veya sosyal geri çekilme</li>
                </ul>
              </div>
            </div>

            <div class="cc-flow__subgroup">
              <h3>Davranışsal zorluklar:</h3>
              <ul>
                <li>Tırnak yeme</li>
                <li>Saç yolma (trikotillomani)</li>
                <li>Tik benzeri davranışlar</li>
              </ul>
            </div>

            <p class="cc-flow__after">
              Ergenlik döneminde yaşanan zorluklar gelişimin doğal bir parçası olabilir. Ancak bu süreçte destek almak, hem ergenin hem de ailenin süreci daha sağlıklı geçirmesine yardımcı olabilir.
            </p>
          </div>

          <div class="cc-flow__block cc-flow__cta">
            <p class="cc-flow__cta-copy">
              Ergeninizin davranışında sizi düşündüren bir değişim fark ediyorsanız, bunu anlamak ve destek almak için terapi süreci yardımcı olabilir.
            </p>
            <h2>Ergeniniz için güvenli bir alan oluşturmak için iletişime geçebilirsiniz.</h2>
            <div class="cc-hero__actions">
              <router-link to="/iletisim" class="cc-btn cc-btn--ghost">İletişime Geç</router-link>
              <router-link :to="appointmentLink" class="cc-btn cc-btn--primary">Randevu Talebi Oluştur</router-link>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>
  </div>
</template>

<script setup>
import UiContainer from '../../components/ui/UiContainer.vue'
const appointmentLink = {
  path: '/randevu-olustur',
  query: { service: 'Ergen Danışmanlığı' },
}
</script>

<style scoped>
.child-counseling {
  padding-bottom: clamp(48px, 6vw, 80px);
  background: #fbfaf9;
}

.cc-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 10vh, 112px) 0 clamp(36px, 6vh, 56px);
  background:
    radial-gradient(120% 120% at 85% 5%, rgba(249, 240, 232, 0.85) 0%, rgba(252, 248, 245, 0.92) 55%, rgba(247, 243, 239, 0.96) 100%),
    linear-gradient(180deg, #ffffff 0%, #f7f2ef 100%);
}

.cc-hero__grid {
  position: relative;
  display: grid;
  gap: clamp(18px, 3vw, 36px);
  align-items: center;
  z-index: 2;
}

.cc-hero::after {
  content: '';
  position: absolute;
  right: -100px;
  top: 14%;
  width: clamp(180px, 24vw, 300px);
  height: clamp(180px, 24vw, 300px);
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, rgba(212, 175, 152, 0.35), rgba(235, 214, 196, 0.2) 60%, transparent 70%);
  opacity: 0.5;
  pointer-events: none;
}

.cc-hero__content {
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cc-hero__eyebrow {
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-accent-secondary);
}

.cc-hero__content h1 {
  margin: 0;
  font-size: clamp(2.1rem, 3.4vw, 2.7rem);
  color: var(--color-heading);
}

.cc-hero__lead,
.cc-hero__note {
  margin: 0;
  color: var(--color-body);
  line-height: 1.7;
  font-size: 1rem;
}

.cc-hero__note {
  color: var(--color-muted);
}

.cc-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 4px;
}

.cc-btn {
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

.cc-btn--primary {
  background: linear-gradient(180deg, #9C8779 0%, #857164 100%);
  color: #FDFBF9;
  box-shadow:
    0 10px 22px rgba(133, 113, 100, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
}

.cc-btn--primary:hover {
  background: linear-gradient(180deg, #A18C7E 0%, #8B7567 100%);
  transform: translateY(-2px);
}

.cc-btn--ghost {
  border: 1px solid var(--color-border);
  color: var(--color-main);
  background: rgba(255, 255, 255, 0.72);
}

.cc-hero__media {
  position: relative;
  order: -1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cc-hero__frame {
  position: relative;
  border-radius: clamp(22px, 2.6vw, 30px);
  overflow: hidden;
  background: #f6f0ea;
  box-shadow:
    0 22px 44px rgba(91, 60, 55, 0.16),
    0 8px 16px rgba(91, 60, 55, 0.1);
  min-height: clamp(260px, 32vw, 420px);
  max-width: 460px;
  width: 100%;
}

.cc-hero__frame--teen::before {
  content: '';
  position: absolute;
  inset: 10px;
  border-radius: inherit;
  background: radial-gradient(130% 130% at 10% 0%, rgba(255, 255, 255, 0.6), transparent 55%);
  pointer-events: none;
  z-index: 1;
}

.cc-hero__frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  filter: saturate(1.04);
}

.cc-body {
  position: relative;
  padding: clamp(24px, 5vw, 56px) 0 0;
}

.cc-body::before {
  content: '';
  position: absolute;
  left: -140px;
  top: 22%;
  width: clamp(200px, 26vw, 360px);
  height: clamp(200px, 26vw, 360px);
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(210, 180, 160, 0.18), transparent 70%);
  pointer-events: none;
}

.cc-flow {
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 4vw, 32px);
}

.cc-flow__block h2 {
  margin: 0 0 10px;
  font-size: clamp(1.45rem, 2.2vw, 1.85rem);
  color: var(--color-heading);
}

.cc-flow__block h3 {
  margin: 0 0 6px;
  font-size: 1rem;
  color: var(--color-heading);
}

.cc-eyebrow {
  margin: 0 0 6px;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(156, 118, 96, 0.9);
}

.cc-flow__block p {
  margin: 0 0 12px;
  color: var(--color-body);
  line-height: 1.72;
}

.cc-flow__accent {
  padding-left: 12px;
  border-left: 2px solid rgba(182, 138, 116, 0.35);
}

.cc-flow__intro {
  margin-bottom: 8px;
  font-weight: 500;
}

.cc-flow__list {
  margin: 0 0 10px;
  padding-left: 1.05rem;
  line-height: 1.68;
}

.cc-flow__list--grid {
  display: grid;
  gap: 6px 18px;
}

.cc-flow__after {
  margin: 0;
  color: var(--color-body);
}

.cc-flow__grid {
  display: grid;
  gap: 16px;
}

.cc-flow__grid--dense ul {
  margin: 0;
  padding-left: 1.05rem;
  line-height: 1.65;
}

.cc-flow__subgroup {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid rgba(143, 120, 106, 0.18);
}

.cc-flow__support {
  padding-top: 4px;
}

.cc-flow__cta {
  padding-top: clamp(8px, 3vw, 16px);
}

.cc-flow__cta-copy {
  margin-bottom: 10px;
  color: var(--color-body);
}

@media (min-width: 900px) {
  .cc-hero__grid {
    grid-template-columns: minmax(0, 0.6fr) minmax(0, 0.4fr);
  }

  .cc-hero__media {
    order: 0;
  }

  .cc-flow__list--grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cc-flow__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1200px) {
  .cc-flow__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .cc-hero {
    padding-top: 64px;
  }

  .cc-hero__frame {
    min-height: 220px;
    max-width: 340px;
  }

  .cc-hero__actions,
  .cc-cta__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .cc-btn {
    width: 100%;
  }

  .cc-flow {
    gap: 20px;
  }

  .cc-flow__block p {
    margin-bottom: 10px;
  }
}
</style>

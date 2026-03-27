<template>
  <div class="child-counseling">
    <section class="cc-hero">
      <UiContainer>
        <div class="cc-hero__grid">
          <div class="cc-hero__content">
            <p class="cc-hero__eyebrow">Hizmet Alanı</p>
            <h1>Bireysel Danışmanlık / Yetişkinlerle Çalışma</h1>
            <p class="cc-hero__lead">
              Yetişkinlerle terapi sürecinde amacım, kişinin yaşadığı zorlukları yalnızca semptom düzeyinde ele almak değil; onları yaşam öyküsü ve içsel dünyası içinde anlamlandırabilmesine alan açmaktır.
            </p>
            <p class="cc-hero__note">
              Kaygı, depresyon, panik atak, obsesif düşünceler, ilişki sorunları, değersizlik duyguları, sınır koymakta zorlanma, öfke, tükenmişlik ya da yaşam geçişleri gibi pek çok deneyim; çoğu zaman kişinin kendisiyle ve başkalarıyla kurduğu ilişki biçimleriyle bağlantılıdır.
            </p>
            <p class="cc-hero__note">
              Bazen kişi kendini sürekli endişeli hisseder, bazen zihni durmadan aynı düşünceler etrafında döner. Kimi zaman da kişi neyin yanlış olduğunu tam olarak adlandıramasa da içinde taşıdığı bir sıkışmışlık ya da yorgunluk hisseder.
            </p>
            <div class="cc-hero__actions">
              <router-link :to="appointmentLink" class="cc-btn cc-btn--primary">Randevu Talebi Oluştur</router-link>
              <router-link to="/iletisim" class="cc-btn cc-btn--ghost">İletişime Geç</router-link>
            </div>
          </div>
          <div class="cc-hero__media">
            <div class="cc-hero__frame cc-hero__frame--adult">
              <img src="/assets/services/bireysel-danismanlik-hero.png" alt="Bireysel danışmanlık için güvenli alan" loading="eager" />
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <section class="cc-body">
      <UiContainer>
        <div class="cc-flow">
          <div class="cc-flow__block">
            <p class="cc-eyebrow">Süreç</p>
            <h2>Terapi sürecinde birlikte</h2>
            <p class="cc-flow__intro">Terapi sürecinde birlikte:</p>
            <ul class="cc-flow__list cc-flow__list--grid">
              <li>Düşünce, duygu ve davranış döngülerini fark etmeyi</li>
              <li>Kaygı ve stresle baş etme yollarını geliştirmeyi</li>
              <li>Otomatik düşünceleri ve temel inançları sorgulamayı</li>
              <li>Zorlayıcı içsel sesleri tanımayı</li>
              <li>Sağlıklı sınırlar geliştirmeyi</li>
              <li>Duygularla temas kurmayı ve onları düzenlemeyi</li>
              <li>Kişinin kendi ihtiyaçlarını daha net duyabilmesini</li>
            </ul>
            <p>
              Bilişsel Davranışçı Terapi temelli çalışırken, aynı zamanda kişinin iç dünyasına, geçmiş deneyimlerine ve bugününü şekillendiren ilişki örüntülerine de alan açarım.
            </p>
            <p>
              Terapi benim için, kişinin kendini savunmak zorunda kalmadan var olabildiği bir keşif alanıdır.
            </p>
            <p class="cc-flow__accent">
              Bu süreçte amaç yalnızca sorunları çözmek değil; kişinin kendisiyle kurduğu ilişkiyi daha şefkatli, daha farkında ve daha sağlam bir zemine dönüştürmesidir.
            </p>
          </div>

          <div class="cc-flow__block cc-flow__support">
            <p class="cc-eyebrow">Destek Alanları</p>
            <h2>Yetişkin terapisine hangi durumlarda başvurabilirsiniz?</h2>
            <div class="cc-flow__grid cc-flow__grid--dense">
              <div>
                <ul>
                  <li>Kaygı ve sürekli endişe hali</li>
                  <li>Panik atak</li>
                  <li>Depresyon, isteksizlik ve enerji kaybı</li>
                  <li>Obsesif düşünceler ve kompulsif davranışlar (OKB)</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>İlişki sorunları ve tekrar eden ilişki döngüleri</li>
                  <li>Öfke ve duygu düzenleme güçlükleri</li>
                  <li>Sınır koymakta zorlanma</li>
                  <li>Öz değer ve özgüven sorunları</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Tükenmişlik ve yoğun stres</li>
                  <li>Karar verme güçlüğü ve yaşam yönünü sorgulama</li>
                  <li>Ayrılık, kayıp ve yas süreçleri</li>
                  <li>Travmatik yaşantıların etkileri</li>
                </ul>
              </div>
            </div>

            <div class="cc-flow__subgroup">
              <h3>Davranışsal zorluklar:</h3>
              <ul>
                <li>Tırnak yeme</li>
                <li>Saç / kirpik / kaş yolma (trikotillomani)</li>
                <li>Erteleme ve motivasyon güçlükleri</li>
              </ul>
            </div>

            <div class="cc-flow__subgroup">
              <h3>Kaygı temelli durumlar:</h3>
              <ul>
                <li>Sosyal kaygı</li>
                <li>Performans kaygısı</li>
                <li>Özgül fobiler (hayvan korkusu, yükseklik korkusu, uçak korkusu vb.)</li>
              </ul>
            </div>

            <div class="cc-flow__subgroup">
              <h3>Yaşam süreçleri:</h3>
              <ul>
                <li>Hayat geçişleri (iş değişimi, taşınma, evlilik vb.)</li>
                <li>Kendini tanıma ve kişisel gelişim süreci</li>
                <li>İçsel denge ve yaşam doyumunu artırma isteği</li>
              </ul>
            </div>

            <p class="cc-flow__after">
              Eğer yaşadığınız durum burada yazmıyorsa bile, sizi zorlayan bir deneyimi konuşmak için terapiye başvurabilirsiniz.
            </p>
          </div>

          <div class="cc-flow__block cc-flow__cta">
            <p class="cc-flow__cta-copy">
              Yaşadığınız deneyimleri daha iyi anlamak ve destek almak için terapi süreci yardımcı olabilir.
            </p>
            <h2>Kendiniz için güvenli bir alan oluşturmak için iletişime geçebilirsiniz.</h2>
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
  query: { service: 'Bireysel Danışmanlık' },
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
    radial-gradient(120% 120% at 85% 5%, rgba(248, 242, 236, 0.85) 0%, rgba(252, 248, 245, 0.92) 55%, rgba(247, 243, 239, 0.96) 100%),
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
  background: radial-gradient(circle at 35% 35%, rgba(201, 145, 90, 0.32), rgba(235, 210, 180, 0.2) 60%, transparent 70%);
  opacity: 0.45;
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

.cc-hero__frame--adult::before {
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
  background: radial-gradient(circle at 50% 50%, rgba(205, 155, 105, 0.18), transparent 70%);
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

.cc-flow__grid--dense ul,
.cc-flow__subgroup ul {
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

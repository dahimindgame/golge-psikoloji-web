<template>
  <div class="service-page">
    <section class="service-hero">
      <div class="service-container service-hero__inner">
        <div class="service-hero__content">
          <h1>Çocuklarla Çalışma</h1>
        </div>
      </div>
      <img
        class="service-hero__motif"
        src="/assets/services/cocuk-danismanligi-motif.png"
        alt=""
        aria-hidden="true"
      />
    </section>

    <section class="service-section">
      <div class="service-container service-article">
        <p>
          Çocuklar yaşadıkları duyguları çoğu zaman yetişkinler gibi kelimelerle ifade edemezler. Bu nedenle çocuk terapisinde oyun, resim, hikâye ve yaratıcı yöntemler önemli bir yer tutar. Oyun, çocuğun dünyasını anlamanın ve duygularını ifade edebilmesinin en doğal yollarından biridir.
        </p>
        <p>
          Terapi sürecinde amaç yalnızca görünen davranışı değiştirmek değil; davranışın arkasındaki duygusal ihtiyaçları anlamaktır. Bazen bir öfke patlamasının, bazen de içe kapanmanın altında anlaşılma, görülme ya da güven ihtiyacı bulunabilir.
        </p>
        <p>
          Çocuklarla yapılan çalışmalarda, çocuğun kendini güvende hissettiği ve duygularını rahatça ifade edebildiği bir alan oluşturmak önemlidir. Bu güvenli alan içinde çocuk duygularını keşfetmeyi, onları ifade etmeyi ve düzenlemeyi öğrenir.
        </p>
      </div>
    </section>

    <section class="service-section">
      <div class="service-container service-article">
        <p class="service-focus__intro">Terapi sürecinde çocuklarla birlikte:</p>
        <div class="service-focus__grid">
          <article class="focus-card">Duyguları tanıma ve ifade etme</article>
          <article class="focus-card">Öfke ve kaygıyla baş etme</article>
          <article class="focus-card">Sosyal becerileri geliştirme</article>
          <article class="focus-card">Özgüveni destekleme</article>
          <article class="focus-card">Problem çözme becerileri geliştirme</article>
        </div>
        <p class="service-focus__after">üzerinde çalışılır.</p>
        <div class="focus-family">
          <p>
            Çocuk terapisinde aile sürecin önemli bir parçasıdır. Bu nedenle ebeveynlerle yapılan görüşmeler, çocuğun ihtiyaçlarını daha iyi anlamaya ve ev ortamında destekleyici bir yaklaşım oluşturulmasına yardımcı olur.
          </p>
          <p>
            Amaç yalnızca davranışı değiştirmek değil, çocuğun kendini güvende ve anlaşılmış hissettiği bir duygusal alan oluşturmaktır.
          </p>
        </div>
      </div>
    </section>

    <section class="service-section">
      <div class="service-container service-article">
        <h2>Çocuk terapisine hangi durumlarda başvurulabilir?</h2>
        <div class="service-cards">
          <article class="service-card">
            <h3>Duygusal zorluklar:</h3>
            <ul>
              <li>Kaygı ve korkular</li>
              <li>Ayrılık kaygısı</li>
              <li>Öfke patlamaları</li>
              <li>İçine kapanma</li>
              <li>Özgüven sorunları</li>
            </ul>
          </article>
          <article class="service-card">
            <h3>Davranışsal zorluklar:</h3>
            <ul>
              <li>Tırnak yeme</li>
              <li>Alt ıslatma / kaka kaçırma</li>
              <li>Parmak emme</li>
              <li>Tik benzeri davranışlar</li>
            </ul>
          </article>
          <article class="service-card">
            <h3>Okul ve sosyal alan:</h3>
            <ul>
              <li>Okula uyum sorunları</li>
              <li>Arkadaş ilişkilerinde zorluk</li>
              <li>Akran zorbalığı</li>
              <li>Derslere odaklanma güçlüğü</li>
            </ul>
          </article>
          <article class="service-card">
            <h3>Yaşam olayları:</h3>
            <ul>
              <li>Boşanma süreci</li>
              <li>Taşınma veya okul değişimi</li>
              <li>Kardeş doğumu</li>
              <li>Kayıp ve yas süreçleri</li>
            </ul>
          </article>
        </div>
        <p class="service-after">
          Çocuğunuzun davranışında sizi düşündüren bir değişim fark ediyorsanız, bunu anlamak ve destek almak için terapi süreci yardımcı olabilir.
        </p>
        <div class="service-cta__inline">
          <h2>Çocuğunuz için güvenli bir alan oluşturmak için iletişime geçebilirsiniz.</h2>
          <div class="service-cta__actions">
            <router-link to="/iletisim" class="service-btn service-btn--ghost">İletişime Geç</router-link>
            <router-link to="/randevu-olustur" class="service-btn service-btn--primary">Randevu Talebi Oluştur</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.service-page {
  padding-top: clamp(48px, 6vw, 96px);
}

.service-container {
  max-width: 1240px;
  margin: 0 auto;
  padding-inline: 2rem;
}

.service-hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #ffffff 0%, #f7f3ef 100%);
  padding-top: clamp(32px, 6vw, 56px);
  padding-bottom: clamp(24px, 5vw, 40px);
}

@media (min-width: 768px) {
  .service-hero {
    padding-top: 72px;
  }
}

@media (min-width: 1024px) {
  .service-hero {
    padding-top: 96px;
  }
}

.service-hero__inner {
  display: grid;
  gap: 1.5rem;
  position: relative;
  z-index: 2;
}

@media (min-width: 1024px) {
  .service-hero__inner {
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.6fr);
    gap: 4.5rem;
  }
}

.service-hero__content {
  max-width: 560px;
}

.service-hero__content h1 {
  margin: 0;
  font-size: clamp(2.2rem, 3.2vw, 2.8rem);
  color: var(--color-heading);
}

.service-hero__motif {
  position: absolute;
  left: -20px;
  top: 12px;
  width: 240px;
  opacity: 0.32;
  z-index: 0;
  pointer-events: none;
}

@media (max-width: 1023px) {
  .service-hero__motif {
    left: -12px;
    width: 200px;
    opacity: 0.26;
  }
}

@media (max-width: 640px) {
  .service-hero__motif {
    left: -10px;
    width: 160px;
    opacity: 0.22;
  }
}

.service-section {
  padding: clamp(32px, 6vw, 56px) 0;
}

.service-article {
  max-width: 760px;
}

.service-article h2 {
  margin: 28px 0 16px;
  color: var(--color-heading);
}

.service-article p {
  margin: 0 0 16px;
  line-height: 1.65;
  color: var(--color-body);
}

.service-focus__intro {
  font-weight: 500;
  margin: 28px 0 16px;
  color: var(--color-body);
}

.service-focus__grid {
  display: grid;
  gap: 12px;
}

@media (min-width: 768px) {
  .service-focus__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.focus-card {
  background: var(--color-card);
  border-radius: 14px;
  padding: 14px 16px;
  box-shadow: 0 6px 14px rgba(51, 46, 43, 0.06);
  color: var(--color-body);
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.focus-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.service-focus__after {
  margin: 16px 0 20px;
  color: var(--color-body);
}

.focus-family {
  background: #F7F3EF;
  border-radius: 20px;
  padding: 20px 24px;
  margin-bottom: 28px;
}

.focus-family p {
  margin: 0 0 16px;
  color: var(--color-body);
  line-height: 1.65;
}

.service-cards {
  display: grid;
  gap: 12px;
  margin: 20px 0;
}

@media (min-width: 768px) {
  .service-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.service-card {
  background: var(--color-card);
  border-radius: 14px;
  padding: 16px 18px;
  box-shadow: 0 6px 14px rgba(51, 46, 43, 0.06);
}

.service-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.05rem;
  color: var(--color-heading);
}

.service-card ul {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--color-body);
  line-height: 1.7;
}

.service-after {
  max-width: 760px;
  color: var(--color-body);
  line-height: 1.65;
  margin-bottom: 28px;
}

.service-cta__inline {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
}

.service-cta__inline h2 {
  margin: 0;
  max-width: 680px;
  color: var(--color-heading);
}

.service-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.service-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
}

.service-btn--primary {
  background: linear-gradient(180deg, #9C8779 0%, #857164 100%);
  color: #FDFBF9;
  box-shadow:
    0 8px 18px rgba(133, 113, 100, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
}

.service-btn--primary:hover {
  background: linear-gradient(180deg, #A18C7E 0%, #8B7567 100%);
  transform: translateY(-2px);
  box-shadow:
    0 10px 22px rgba(133, 113, 100, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.service-btn--ghost {
  border: 1px solid var(--color-border);
  color: var(--color-main);
  background: var(--color-card);
}

@media (max-width: 900px) {
  .service-container {
    padding-inline: 1.5rem;
  }
}

@media (max-width: 600px) {
  .service-cta__actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .service-btn {
    width: 100%;
  }
}
</style>

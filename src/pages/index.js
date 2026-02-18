import React from 'react';
import './index.css';

const IndexPage = () => {
  return (
    <main className="epik-page">
      <section className="epik-hero">
        <div className="epik-container">
          <p className="epik-badge">EPİK INVESTMENT</p>
          <h1>
            Güvenilir, ölçülebilir ve sürdürülebilir
            <span> yatırım danışmanlığı</span>
          </h1>
          <p className="epik-hero-text">
            Epik Investment, bireysel ve kurumsal yatırımcılar için profesyonel
            danışmanlık hizmetleri sunar. Piyasa verileri, risk yönetimi ve
            performans odaklı stratejiler ile sermayenizin sürdürülebilir
            şekilde büyümesini hedefleriz.
          </p>
          <div className="epik-actions">
            <a className="epik-btn epik-btn-primary" href="#iletisim">
              Ücretsiz Ön Görüşme
            </a>
            <a className="epik-btn epik-btn-outline" href="#hizmetler">
              Hizmetlerimiz
            </a>
          </div>
        </div>
      </section>

      <section className="epik-section epik-about" id="hakkimizda">
        <div className="epik-container">
          <h2>Neden Epik Investment?</h2>
          <p>
            Finansal kararlarınızda yalnızca bugünü değil, orta ve uzun vadeli
            hedeflerinizi de merkeze alıyoruz. Şeffaf raporlama, düzenli
            bilgilendirme ve disiplinli portföy yaklaşımımız ile yatırım
            sürecini güvenle yönetmenizi sağlıyoruz.
          </p>
          <div className="epik-stats">
            <article>
              <strong>12+ yıl</strong>
              <span>Sektör deneyimi</span>
            </article>
            <article>
              <strong>₺4.2B+</strong>
              <span>Yönetilen varlık</span>
            </article>
            <article>
              <strong>%95</strong>
              <span>Müşteri memnuniyeti</span>
            </article>
            <article>
              <strong>200+</strong>
              <span>Tamamlanan proje</span>
            </article>
          </div>
        </div>
      </section>

      <section className="epik-section" id="hizmetler">
        <div className="epik-container">
          <h2>Hizmetlerimiz</h2>
          <div className="epik-services">
            <article>
              <h3>Portföy Yönetimi</h3>
              <p>
                Risk profilinize uygun, çeşitlendirilmiş ve performans takipli
                portföy stratejileri oluşturuyoruz.
              </p>
            </article>
            <article>
              <h3>Kurumsal Finansman Danışmanlığı</h3>
              <p>
                Değerleme, sermaye planlama ve büyüme finansmanı süreçlerinde
                şirketinize stratejik destek sunuyoruz.
              </p>
            </article>
            <article>
              <h3>Yatırım Stratejisi ve Araştırma</h3>
              <p>
                Makroekonomik veriler ve sektör dinamikleriyle desteklenen
                analitik yatırım kararları geliştiriyoruz.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="epik-section epik-process" id="surec">
        <div className="epik-container">
          <h2>Çalışma Modelimiz</h2>
          <ol>
            <li>
              <strong>Analiz:</strong> Finansal durumunuz, hedefleriniz ve risk
              iştahınız detaylı şekilde değerlendirilir.
            </li>
            <li>
              <strong>Strateji:</strong> Size özel yatırım planı ve aksiyon
              haritası oluşturulur.
            </li>
            <li>
              <strong>Uygulama & İzleme:</strong> Portföy performansı periyodik
              olarak takip edilir, gerektiğinde revize edilir.
            </li>
          </ol>
        </div>
      </section>

      <section className="epik-cta" id="iletisim">
        <div className="epik-container">
          <h2>Yatırım hedeflerinizi birlikte büyütelim</h2>
          <p>
            Epik Investment uzmanlarıyla iletişime geçin, şirketinize veya
            kişisel portföyünüze özel bir yatırım yol haritası oluşturalım.
          </p>
          <div className="epik-contact">
            <a href="tel:+902120000000">+90 (212) 000 00 00</a>
            <a href="mailto:info@epikinvestment.com">info@epikinvestment.com</a>
            <span>Levent / İstanbul</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

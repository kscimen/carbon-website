import React from 'react';
import { Helmet } from 'react-helmet';
import * as styles from './index.module.scss';

const services = [
  {
    title: 'Portföy Yönetimi',
    description:
      'Risk profilinize ve finansal hedeflerinize uygun, disiplinli ve ölçülebilir portföy stratejileri oluşturuyoruz.',
  },
  {
    title: 'Kurumsal Finansman Danışmanlığı',
    description:
      'Şirket değerlemesi, sermaye artırımı, borç yapılandırması ve büyüme planlaması süreçlerinde uçtan uca destek veriyoruz.',
  },
  {
    title: 'Yatırım Stratejisi ve Araştırma',
    description:
      'Makroekonomik göstergeler, sektör analizleri ve piyasa trendleri doğrultusunda veriye dayalı yatırım kararları almanıza yardımcı oluyoruz.',
  },
];

const stats = [
  { value: '12+', label: 'Yıllık sektör deneyimi' },
  { value: '₺4.2B+', label: 'Yönetilen ve danışılan varlık' },
  { value: '95%', label: 'Müşteri memnuniyeti oranı' },
  { value: '200+', label: 'Tamamlanan yatırım projesi' },
];

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Epik Investment | Yatırım Danışmanlığı</title>
        <meta
          name="description"
          content="Epik Investment, bireysel ve kurumsal müşterilere özel yatırım danışmanlığı, portföy yönetimi ve finansal strateji çözümleri sunar."
        />
      </Helmet>

      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.badge}>EPİK INVESTMENT</p>
          <h1>
            Güvenilir, ölçülebilir ve sürdürülebilir{' '}
            <span>yatırım çözümleri</span>
          </h1>
          <p className={styles.heroText}>
            Epik Investment olarak, bireysel ve kurumsal yatırımcılar için
            stratejik danışmanlık hizmetleri sunuyor; sermayenizi doğru zamanda,
            doğru araçlarla büyütmeniz için yol arkadaşınız oluyoruz.
          </p>
          <div className={styles.heroActions}>
            <a href="#iletisim" className={styles.primaryButton}>
              Hemen İletişime Geçin
            </a>
            <a href="#hizmetler" className={styles.secondaryButton}>
              Hizmetlerimizi İnceleyin
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Neden Epik Investment?</h2>
          <p>
            Finans dünyasında başarı yalnızca doğru ürün seçimiyle değil, doğru
            strateji ve güçlü bir risk yönetimi ile mümkündür. Uzman ekibimiz;
            piyasa dinamiklerini yakından takip eder, şeffaf raporlama
            süreçleriyle sizi her adımda bilgilendirir.
          </p>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <article key={stat.label} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="hizmetler" className={styles.section}>
          <h2>Hizmetlerimiz</h2>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Çalışma Modelimiz</h2>
          <ol className={styles.processList}>
            <li>
              <strong>1. Analiz:</strong> Finansal durumunuz, hedefleriniz ve
              risk iştahınız detaylı şekilde değerlendirilir.
            </li>
            <li>
              <strong>2. Strateji:</strong> Size özel yatırım planı oluşturulur,
              kısa ve uzun vadeli hedefler netleştirilir.
            </li>
            <li>
              <strong>3. Uygulama & İzleme:</strong> Portföy performansı düzenli
              olarak takip edilir, gerektiğinde dinamik revizyonlar yapılır.
            </li>
          </ol>
        </section>

        <section id="iletisim" className={styles.ctaSection}>
          <h2>Yatırım hedeflerinizi birlikte büyütelim</h2>
          <p>
            Profesyonel bir yatırım danışmanlığı ekibiyle çalışarak finansal
            geleceğinizi güvence altına almak için bugün bizimle iletişime
            geçin.
          </p>
          <div className={styles.contactRow}>
            <a href="tel:+902120000000">+90 (212) 000 00 00</a>
            <a href="mailto:info@epikinvestment.com">info@epikinvestment.com</a>
            <span>Levent, İstanbul</span>
          </div>
        </section>
      </main>
    </>
  );
};

export default IndexPage;

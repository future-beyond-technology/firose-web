import type { Metadata } from 'next';
import Link from 'next/link';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import PageIntro from './components/PageIntro';
import ProductGrid from './components/ProductGrid';
import WhatsAppButton from './components/WhatsAppButton';
import WhyChoose from './components/WhyChoose';
import arStyles from './components/arPerfumes.module.css';
import styles from '../brands.module.css';

const INSTAGRAM_URL = 'https://www.instagram.com/arperfumes2026';
const externalBrandWebsite = process.env.NEXT_PUBLIC_AR_BRAND_WEBSITE?.trim();
const brandWebsiteUrl = externalBrandWebsite || INSTAGRAM_URL;
const brandWebsiteLabel = externalBrandWebsite ? 'Visit Brand Website' : 'Visit Instagram';

export const metadata: Metadata = {
  title: 'AR Perfumes',
  description:
    'Premium fragrance brand under Firose Enterprises. Follow AR Perfumes on Instagram for updates and offers.',
};

export default function ARPerfumesPage() {
  return (
    <main className={styles.brandPage}>
      <p className={styles.metaTag}>Premium Fragrance Brand</p>
      <h2 className={`${styles.brandTitle} ${arStyles.goldHeading}`}>AR Perfumes</h2>
      <p className={styles.brandLead}>
        AR Perfumes carries the premium fragrance identity within the group, with brand storytelling, curated product
        highlights, and direct customer conversion via WhatsApp.
      </p>

      <div className={styles.sectionGrid}>
        <article className={styles.sectionCard}>
          <h3 className={styles.cardTitle}>Brand Story</h3>
          <p className={styles.cardText}>
            Built around identity and presence, AR Perfumes is positioned for premium fragrance seekers and gifting-led
            purchase journeys.
          </p>
        </article>

        <article className={styles.sectionCard}>
          <h3 className={styles.cardTitle}>Product Highlights</h3>
          <ul className={styles.bulletList}>
            <li>Signature attars and fragrance profiles.</li>
            <li>Gift-ready packaging options.</li>
            <li>Direct order support through WhatsApp.</li>
          </ul>
        </article>
      </div>

      <div className={styles.actionRow}>
        <Link href="/brands" className={styles.backLink}>
          Back to All Brands
        </Link>
        <Link href="#ar-brand-experience" className={styles.inlineBrandAction}>
          Explore AR Experience
        </Link>
        <a
          href={brandWebsiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineBrandAction}
        >
          {brandWebsiteLabel}
        </a>
      </div>

      <article className={styles.sectionCard}>
        <h3 className={styles.cardTitle}>Follow AR Perfumes</h3>
        <p className={styles.cardText}>
          Explore launches, offers, and product highlights on Instagram.
        </p>
        <SocialLinks instagramUrl={INSTAGRAM_URL} />
      </article>

      <div id="ar-brand-experience" className={`${arStyles.arTheme} scroll-mt-28`}>
        <PageIntro
          title="AR Perfumes"
          description="Signature fragrance label under Firose Enterprises with premium attars and curated gifting options."
        />
        <Hero />
        <ProductGrid />
        <About variant="short" />
        <WhyChoose />
        <Contact showBusinessDetails />
        <WhatsAppButton />
      </div>
    </main>
  );
}

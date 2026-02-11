import type { Metadata } from 'next';
import Image from 'next/image';
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
import { brandVisuals } from '@/app/lib/brandVisuals';

const INSTAGRAM_URL = 'https://www.instagram.com/arperfumes2026';
const AR_PERFUMES_WEBSITE_URL = 'https://arperfumes.in';
const externalBrandWebsite = process.env.NEXT_PUBLIC_AR_BRAND_WEBSITE?.trim();
const brandWebsiteUrl = externalBrandWebsite || AR_PERFUMES_WEBSITE_URL;
const brandWebsiteLabel = 'Visit Brand Website';
const arVisual = brandVisuals['ar-perfumes'];

export const metadata: Metadata = {
  title: 'AR Perfumes',
  description:
    'Premium fragrance brand under Firose Enterprises. Explore AR Perfumes at arperfumes.in for product updates and offers.',
};

export default function ARPerfumesPage() {
  return (
    <main className={styles.brandPage}>
      <p className={styles.metaTag}>Premium Fragrance Brand</p>

      <section className={styles.brandSpotlight}>
        <div className={styles.brandSpotlightMedia}>
          <Image
            src={arVisual.heroImage}
            alt={arVisual.alt}
            fill
            className={styles.brandSpotlightImage}
            sizes="(max-width: 899px) 100vw, 50vw"
            priority
          />
        </div>

        <div className={styles.brandSpotlightContent}>
          <p className={styles.brandSpotlightBadge}>{arVisual.focus}</p>
          <h2 className={`${styles.brandSpotlightTitle} ${arStyles.goldHeading}`}>AR Perfumes</h2>
          <p className={styles.brandSpotlightText}>
            AR Perfumes carries the premium fragrance identity within the group, with curated product storytelling and
            direct order conversion through WhatsApp.
          </p>
          <div className={styles.brandSpotlightChips}>
            <p className={styles.brandSpotlightChip}>Signature Attars</p>
            <p className={styles.brandSpotlightChip}>Gift-Ready Packaging</p>
            <p className={styles.brandSpotlightChip}>Direct Ordering Flow</p>
          </div>
        </div>
      </section>

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
          target="_self"
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

import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../corporate.module.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Firose Enterprises, its mission, values, leadership direction, and multi-brand growth strategy.',
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <header className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Company Overview</p>
          <h1 className={styles.title}>About Firose Enterprises</h1>
          <p className={styles.lead}>
            Firose Enterprises is a parent company that operates category-driven consumer brands with a clear focus on
            trust, consistency, and long-term market relevance.
          </p>
        </header>

        <div className={styles.splitGrid}>
          <article className={styles.panel}>
            <h2 className={styles.sectionTitle}>Who We Are</h2>
            <p>
              Our portfolio strategy combines dedicated brand identity with shared operational standards. This model
              allows each brand to remain distinct while benefiting from central quality and business systems.
            </p>
          </article>

          <article className={styles.panel}>
            <h2 className={styles.sectionTitle}>Vision &amp; Mission</h2>
            <p>
              <strong>Vision:</strong> Build trusted household and personal care brands with enduring customer value.
            </p>
            <p>
              <strong>Mission:</strong> Deliver reliable products through disciplined quality control and responsible
              market expansion.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>Core Values</h2>
        </header>

        <div className={styles.valuesGrid}>
          <article className={styles.valueCard}>
            <h3>Quality</h3>
            <p>Every brand follows standardized checks for consistency, safety, and customer confidence.</p>
          </article>
          <article className={styles.valueCard}>
            <h3>Safety</h3>
            <p>Product quality and responsible category practices are embedded into every operating stage.</p>
          </article>
          <article className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>We adapt product and distribution models based on category shifts and customer feedback.</p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.quoteCard}>
          <h2 className={styles.sectionTitle}>Leadership Message</h2>
          <p>
            We are building Firose Enterprises as a long-horizon group, where each brand earns trust through product
            quality, clear positioning, and reliable support to channel stakeholders.
          </p>
        </div>

        <div className={styles.statsGrid}>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Portfolio Focus</p>
            <p className={styles.statValue}>Fragrance, Hygiene, Healthcare</p>
          </article>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Operating Model</p>
            <p className={styles.statValue}>Multi-brand, Quality-led</p>
          </article>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Experience Approach</p>
            <p className={styles.statValue}>Process-driven &amp; Scalable</p>
          </article>
        </div>

        <div className={styles.actionRow}>
          <Link href="/brands" className={styles.primaryAction}>
            Explore Our Brands
          </Link>
          <Link href="/about/story" className={styles.inlineAction}>
            Read Our Full Story
          </Link>
          <Link href="/business-with-us" className={styles.inlineAction}>
            Business With Us
          </Link>
        </div>
      </section>
    </main>
  );
}

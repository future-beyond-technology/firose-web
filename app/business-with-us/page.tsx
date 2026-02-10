import type { Metadata } from 'next';
import Link from 'next/link';
import CorporateLeadForm from '@/app/components/CorporateLeadForm';
import styles from '../corporate.module.css';

export const metadata: Metadata = {
  title: 'Business With Us',
  description:
    'Connect with Firose Enterprises for distribution, bulk orders, private labeling, and category expansion enquiries.',
};

export default function BusinessWithUsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <header className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Lead Conversion</p>
          <h1 className={styles.title}>Business With Us</h1>
          <p className={styles.lead}>
            We work with distributors and retailers to scale our brand portfolio through disciplined channel growth.
          </p>
        </header>

        <div className={styles.splitGrid}>
          <article className={styles.panel}>
            <h2 className={styles.sectionTitle}>Become a Distributor</h2>
            <p>Regional and channel-specific distributor onboarding for qualified markets.</p>
          </article>

          <article className={styles.panel}>
            <h2 className={styles.sectionTitle}>Bulk Orders</h2>
            <p>Bulk supply support for modern trade, institutional demand, and channel-led requirements.</p>
          </article>

          <article className={styles.panel}>
            <h2 className={styles.sectionTitle}>Private Labeling</h2>
            <p>Private label collaborations are available as a planned expansion track.</p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <article className={styles.contactCard}>
          <h2 className={styles.sectionTitle}>Submit a Business Request</h2>
          <CorporateLeadForm contextLabel="Business" buttonLabel="Submit Business Inquiry" showInquiryType />
        </article>

        <div className={styles.actionRow}>
          <Link href="/brands" className={styles.inlineAction}>
            Review Brand Portfolio
          </Link>
          <Link href="/manufacturing-quality" className={styles.inlineAction}>
            See Quality Framework
          </Link>
        </div>
      </section>
    </main>
  );
}

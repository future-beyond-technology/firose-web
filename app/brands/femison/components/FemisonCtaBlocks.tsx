import Link from 'next/link';
import styles from './femison.module.css';

type FemisonCtaBlocksProps = {
  whatsappUrl: string;
  mailtoUrl: string;
};

export default function FemisonCtaBlocks({ whatsappUrl, mailtoUrl }: Readonly<FemisonCtaBlocksProps>) {
  return (
    <section className={styles.ctaGrid}>
      <article className={styles.ctaCard}>
        <h3 className={styles.ctaTitle}>Medical Channel Expansion</h3>
        <p className={styles.ctaText}>
          Open conversations for distributor and medical retail opportunities aligned with infant care categories.
        </p>
        <Link href="/business-with-us" className={styles.ctaLink}>
          Start Business Inquiry
        </Link>
      </article>

      <article className={styles.ctaCard}>
        <h3 className={styles.ctaTitle}>Clinical & Product Queries</h3>
        <p className={styles.ctaText}>Connect with the brand contact person for product profile and documentation support.</p>
        <div className={styles.ctaActionRow}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaLink}>
            WhatsApp Contact
          </a>
          <a href={mailtoUrl} className={styles.ctaLink}>
            Email Contact
          </a>
        </div>
      </article>
    </section>
  );
}

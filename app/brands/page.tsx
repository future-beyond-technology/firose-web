import type { Metadata } from 'next';
import Link from 'next/link';
import { brandCatalog, getBrandUrl } from '@/app/lib/brands';
import styles from './brands.module.css';

export const metadata: Metadata = {
  title: 'Our Brands',
  description: 'Portfolio overview of AR Perfumes, Neat & Fresh, and Femison under Firose Enterprises.',
};

export default function BrandsOverview() {
  return (
    <main className={styles.brandPage}>
      <h2 className={styles.brandTitle}>Brand Portfolio Overview</h2>
      <p className={styles.introQuote}>
        “Firose Enterprises operates multiple consumer-focused brands across fragrance, hygiene, and healthcare.”
      </p>

      <ul className={styles.brandList}>
        {brandCatalog.map((brand) => (
          <li key={brand.slug}>
            <Link href={getBrandUrl(brand.slug)} className={styles.brandItemLink}>
              <p className={styles.brandItemTag}>{brand.category}</p>
              <h3 className={styles.brandItemTitle}>{brand.name}</h3>
              <p className={styles.brandItemText}>{brand.portfolioDescription}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.actionRow}>
        <Link href="/" className={styles.backLink}>
          Back to Home
        </Link>
        <Link href="/business-with-us" className={styles.inlineBrandAction}>
          Business Inquiry
        </Link>
      </div>
    </main>
  );
}

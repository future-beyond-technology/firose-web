import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { divisionCatalog } from '@/app/lib/divisions';
import styles from './brands.module.css';

export const metadata: Metadata = {
  title: 'Our Divisions',
  description:
    'Explore AR Perfumes, Femison, Neat & Fresh, and Future Beyond Technology under the Firose Enterprises group.',
};

function ExternalLinkIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 4h8v8" />
      <path d="M7 13l9-9" />
      <path d="M16 11v5H4V4h5" />
    </svg>
  );
}

export default function BrandsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <section className={styles.brandsShell}>
      <header className={styles.brandsHeader}>
        <p className={styles.brandsEyebrow}>Firose Enterprises Group Structure</p>
        <h1 className={styles.brandsTitle}>Our Divisions</h1>
        <p className={styles.brandsLead}>
          Consumer and technology divisions across fragrance, women lifestyle, hygiene FMCG, and enterprise AI systems.
        </p>

        <nav className={styles.brandsNav} aria-label="Divisions navigation">
          <Link href="/brands">Overview</Link>
          {divisionCatalog.map((division) =>
            division.external ? (
              <a
                key={division.id}
                href={division.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                <span>{division.name}</span>
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            ) : (
              <Link key={division.id} href={division.href}>
                {division.name}
              </Link>
            )
          )}
        </nav>
      </header>

      <div className={styles.brandsBody}>{children}</div>
    </section>
  );
}

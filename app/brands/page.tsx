import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { divisionCatalog } from '@/app/lib/divisions';
import styles from './brands.module.css';

export const metadata: Metadata = {
  title: 'Our Divisions',
  description:
    'Portfolio overview of AR Perfumes, Femison, Neat & Fresh, and Future Beyond Technology under Firose Enterprises.',
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

export default function BrandsOverview() {
  return (
    <main className={styles.brandPage}>
      <section className={styles.portfolioHero}>
        <p className={styles.brandItemTag}>FIROSE Division Architecture</p>
        <h2 className={styles.portfolioHeroTitle}>Explore Every Division</h2>
        <p className={styles.portfolioHeroLead}>
          FIROSE ENTERPRISES combines consumer-focused brands with an AI-driven technology division for diversified,
          long-horizon growth.
        </p>

        <div className={styles.chipRow}>
          <p className={styles.chip}>Fragrance</p>
          <p className={styles.chip}>Baby Care &amp; Nutrition</p>
          <p className={styles.chip}>Hygiene / FMCG</p>
          <p className={styles.chip}>AI & Cybersecurity</p>
          <p className={styles.chip}>Distributor Ready</p>
        </div>
      </section>

      <ul className={styles.brandList}>
        {divisionCatalog.map((division) => {
          const isTech = division.theme === 'tech';
          const ctaLabel = division.ctaLabel ?? (division.external ? 'Visit Website' : 'Open Division');
          const cardClass = isTech
            ? `${styles.brandVisualCard} border-[#2b5d8f] bg-gradient-to-b from-[#0c1d33] to-[#11253e] text-[#e8f2ff] shadow-[0_0_0_1px_rgba(64,126,191,0.18),0_16px_34px_rgba(8,23,40,0.5)]`
            : styles.brandVisualCard;
          const categoryClass = isTech
            ? 'absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full border border-[#a2cdfc66] bg-[#1c467266] px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[#d7eaff]'
            : styles.brandVisualCategory;
          const actionClass = isTech
            ? 'mt-1 inline-flex w-fit items-center gap-1 rounded-full border border-[#8ebceb70] bg-[#17385c66] px-4 py-2 text-sm font-medium text-[#d5e9ff] transition hover:bg-[#1d4a786b]'
            : styles.brandVisualAction;

          const body = (
            <>
              <div className={styles.brandVisualMedia}>
                <Image
                  src={division.image}
                  alt={division.imageAlt}
                  fill
                  className={styles.brandVisualImage}
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                />
                <div className={styles.brandVisualOverlay} />
                <p className={categoryClass}>{division.category}</p>
              </div>

              <div className={styles.brandVisualBody}>
                <h3 className={isTech ? 'text-xl font-semibold text-[#e8f4ff]' : styles.brandItemTitle}>{division.name}</h3>
                <p className={isTech ? 'w-fit rounded-full border border-[#8ebceb70] bg-[#17385c66] px-2.5 py-1 text-xs text-[#d5e9ff]' : styles.brandVisualFocus}>
                  {isTech ? 'Technology Division' : 'Consumer Division'}
                </p>
                <p className={isTech ? 'text-sm text-[#c7d9f0]' : styles.brandItemText}>{division.description}</p>
                <span className={actionClass}>
                  {division.external ? (
                    <>
                      {ctaLabel}
                      <ExternalLinkIcon className="h-4 w-4" />
                    </>
                  ) : (
                    ctaLabel
                  )}
                </span>
              </div>
            </>
          );

          return (
            <li key={division.id}>
              {division.external ? (
                <a
                  href={division.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                  aria-label={`Visit ${division.name} website`}
                >
                  {body}
                </a>
              ) : (
                <Link href={division.href} className={cardClass} aria-label={`Open ${division.name} division page`}>
                  {body}
                </Link>
              )}
            </li>
          );
        })}
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

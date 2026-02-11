import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MeaningBehindFirose from '@/app/components/MeaningBehindFirose';
import { corporateVisuals } from '@/app/lib/brandVisuals';
import { FBT_WEBSITE_URL, divisionCatalog } from '@/app/lib/divisions';
import styles from '../corporate.module.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Firose Enterprises, its mission, values, leadership direction, and multi-division growth strategy including Future Beyond Technology (FBT).',
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

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.aboutHeroSection}>
        <div className={styles.aboutHeroMedia}>
          <Image
            src={corporateVisuals.aboutHeroImage}
            alt="Firose corporate growth vision"
            fill
            className={styles.aboutHeroImage}
            sizes="(max-width: 899px) 100vw, 50vw"
            priority
          />
          <div className={styles.aboutHeroOverlay} />
        </div>

        <header className={styles.aboutHeroContent}>
          <p className={styles.eyebrow}>Company Overview</p>
          <h1 className={styles.aboutHeroTitle}>About Firose Enterprises</h1>
          <p className={styles.aboutHeroLead}>
            Firose Enterprises is a parent company that operates category-driven consumer and technology divisions with
            a clear focus on trust, consistency, and long-term market relevance.
          </p>

          <div className={styles.aboutHeroChipRow}>
            <p className={styles.aboutHeroChip}>One Group</p>
            <p className={styles.aboutHeroChip}>Multiple Trusted Brands</p>
            <p className={styles.aboutHeroChip}>AI &amp; Cybersecurity</p>
            <p className={styles.aboutHeroChip}>Quality-Led Growth</p>
            <p className={styles.aboutHeroChip}>Scalable Operations</p>
          </div>

          <div className={styles.actionRow}>
            <Link href="/brands" className={styles.primaryAction}>
              Explore Our Brands
            </Link>
            <Link href="/about/story" className={styles.inlineAction}>
              Read Our Full Story
            </Link>
            <a
              href={FBT_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.inlineAction} ${styles.techInlineAction}`}
              aria-label="Visit Future Beyond Technology website"
            >
              Visit FBT Website
              <ExternalLinkIcon className={styles.externalIcon} />
            </a>
          </div>
        </header>
      </section>

      <section className={`${styles.section} ${styles.aboutEngagementSection}`}>
        <div className={styles.aboutInfoGrid}>
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

        <div className={styles.aboutSignalsGrid}>
          <article className={styles.aboutSignalCard}>
            <p className={styles.statLabel}>Portfolio Focus</p>
            <p className={styles.statValue}>Fragrance, Baby Care &amp; Nutrition, FMCG, Technology</p>
          </article>
          <article className={styles.aboutSignalCard}>
            <p className={styles.statLabel}>Operating Model</p>
            <p className={styles.statValue}>Multi-brand, Quality-led</p>
          </article>
          <article className={styles.aboutSignalCard}>
            <p className={styles.statLabel}>Experience Approach</p>
            <p className={styles.statValue}>Process-driven &amp; Scalable</p>
          </article>
        </div>
      </section>

      <MeaningBehindFirose />

      <section className={`${styles.section} ${styles.aboutDivisionSection}`}>
        <header className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>Group Divisions</h2>
          <p className={styles.sectionLead}>
            FIROSE ENTERPRISES now operates four divisions, combining category-focused consumer brands with the new
            Future Beyond Technology (FBT) AI and cybersecurity division.
          </p>
        </header>

        <div className={styles.aboutDivisionGrid}>
          {divisionCatalog.map((division) => {
            const isTech = division.theme === 'tech';
            const ctaLabel = division.ctaLabel ?? (division.external ? 'Visit Website' : 'Open Division');
            const cardClassName = isTech
              ? `${styles.aboutDivisionCard} ${styles.aboutDivisionCardTech}`
              : styles.aboutDivisionCard;
            const actionClassName = isTech
              ? `${styles.aboutDivisionAction} ${styles.aboutDivisionActionTech}`
              : styles.aboutDivisionAction;

            return (
              <article key={division.id} className={cardClassName}>
                <p className={styles.aboutDivisionTag}>{division.category}</p>
                <h3>{division.name}</h3>
                <p>{division.description}</p>

                {division.external ? (
                  <a
                    href={division.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={actionClassName}
                    aria-label={`Visit ${division.name} website`}
                  >
                    {ctaLabel}
                    <ExternalLinkIcon className={styles.externalIcon} />
                  </a>
                ) : (
                  <Link
                    href={division.href}
                    className={actionClassName}
                    aria-label={`Open ${division.name} division page`}
                  >
                    {ctaLabel}
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className={`${styles.section} ${styles.aboutValueSection}`}>
        <header className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>Core Values</h2>
          <p className={styles.sectionLead}>
            The FIROSE operating philosophy combines discipline, trust, and adaptation across every brand touchpoint.
          </p>
        </header>

        <div className={styles.aboutValueGrid}>
          <article className={styles.aboutValueCard}>
            <h3>Quality</h3>
            <p>Every brand follows standardized checks for consistency, safety, and customer confidence.</p>
          </article>
          <article className={styles.aboutValueCard}>
            <h3>Safety</h3>
            <p>Product quality and responsible category practices are embedded into every operating stage.</p>
          </article>
          <article className={styles.aboutValueCard}>
            <h3>Innovation</h3>
            <p>We adapt product and distribution models based on category shifts and customer feedback.</p>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.aboutVisualSection}`}>
        <div className={styles.aboutVisualMedia}>
          <Image
            src={corporateVisuals.aboutValuesImage}
            alt="Firose team collaboration and quality culture"
            fill
            className={styles.aboutVisualImage}
            sizes="(max-width: 899px) 100vw, 50vw"
          />
          <div className={styles.aboutVisualOverlay} />
          <p className={styles.aboutVisualCaption}>Built on quality discipline and long-term trust</p>
        </div>

        <div className={styles.quoteCard}>
          <h2 className={styles.sectionTitle}>Leadership Message</h2>
          <p>
            We are building Firose Enterprises as a long-horizon group, where each brand earns trust through product
            quality, clear positioning, and reliable support to channel stakeholders.
          </p>
        </div>

        <div className={styles.actionRow}>
          <Link href="/about/story" className={styles.inlineAction}>
            Read Our Full Story
          </Link>
          <a
            href={FBT_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.inlineAction} ${styles.techInlineAction}`}
            aria-label="Visit Future Beyond Technology website"
          >
            Visit FBT Website
            <ExternalLinkIcon className={styles.externalIcon} />
          </a>
          <Link href="/business-with-us" className={styles.inlineAction}>
            Business With Us
          </Link>
        </div>
      </section>
    </main>
  );
}

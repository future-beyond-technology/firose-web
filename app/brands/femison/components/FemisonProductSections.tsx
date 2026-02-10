import styles from './femison.module.css';

const focusAreas = [
  {
    title: 'Baby Care Positioning',
    description: 'Femison is positioned around infant wellness support and caregiver reassurance.',
    bullets: ['Routine-use trust messaging', 'Clear dosage communication approach', 'Caregiver support orientation'],
  },
  {
    title: 'Safety & Quality Assurance',
    description: 'Quality systems emphasize consistency, handling discipline, and product integrity.',
    bullets: ['Controlled process checkpoints', 'Batch consistency focus', 'Packaging reliability standards'],
  },
  {
    title: 'Channel Use-Cases',
    description: 'Prepared for pharmacy, medical, and distributor-oriented demand environments.',
    bullets: ['Medical store distribution', 'Healthcare retail fit', 'Institutional inquiry readiness'],
  },
];

const trustSignals = ['Caregiver-first communication', 'Safety-led production controls', 'Compliance-ready documentation'];

export default function FemisonProductSections() {
  return (
    <section className={styles.sectionBlock}>
      <header className={styles.sectionHeading}>
        <h3 className={styles.sectionTitle}>Product & Trust Sections</h3>
        <p className={styles.sectionLead}>
          Femison content architecture is prepared for future full implementation while keeping medical/distributor lead
          conversion paths active today.
        </p>
      </header>

      <div className={styles.productGrid}>
        {focusAreas.map((area) => (
          <article key={area.title} className={styles.productCard}>
            <h4 className={styles.productTitle}>{area.title}</h4>
            <p className={styles.productText}>{area.description}</p>
            <ul className={styles.productList}>
              {area.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className={styles.productCard}>
        <h4 className={styles.productTitle}>Compliance / Trust Indicators</h4>
        <p className={styles.productText}>
          Certification and assurance artifacts can be shared during onboarding and regulatory discussions.
        </p>
        <div className={styles.heroChipRow}>
          {trustSignals.map((signal) => (
            <p key={signal} className={styles.heroChip}>
              {signal}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
}

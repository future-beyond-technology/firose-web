import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  buildBrandMailToUrl,
  buildBrandWhatsAppUrl,
  getBrandBySlug,
} from '@/app/lib/brands';
import { brandVisuals } from '@/app/lib/brandVisuals';
import FemisonContactCard from './components/FemisonContactCard';
import FemisonCtaBlocks from './components/FemisonCtaBlocks';
import FemisonHero from './components/FemisonHero';
import FemisonProductSections from './components/FemisonProductSections';
import FemisonTransitionBanner from './components/FemisonTransitionBanner';
import brandStyles from './components/femison.module.css';
import styles from '../brands.module.css';

const femisonBrand = getBrandBySlug('femison');
const femisonContact = femisonBrand.contact;

const femisonWhatsAppUrl = buildBrandWhatsAppUrl(
  femisonContact,
  'Hello, I would like to discuss Femison baby gripe water, Arwat, and glucose distribution opportunities.'
);
const femisonMailToUrl = buildBrandMailToUrl(
  femisonContact,
  'Femison Enquiry',
  'Hello, I would like to discuss Femison baby gripe water, Arwat, and glucose product information and channel opportunities.'
);
const femisonVisual = brandVisuals.femison;
const FEMISON_WEBSITE_URL = 'https://femison.in';

export const metadata: Metadata = {
  title: 'Femison',
  description:
    'Femison is the baby gripe water, Arwat, and glucose brand under Firose Enterprises, built for infant care and everyday family wellness. The dedicated website is available at femison.in.',
};

export default function Femison() {
  return (
    <main className={`${styles.brandPage} ${brandStyles.brandPageTheme} ${brandStyles.pageFrame}`}>
      <section className={brandStyles.masthead}>
        <div className={brandStyles.mastheadMedia}>
          <Image
            src={femisonVisual.heroImage}
            alt={femisonVisual.alt}
            fill
            className={brandStyles.mastheadImage}
            sizes="(max-width: 899px) 100vw, 44vw"
            priority
          />
          <div className={brandStyles.mastheadOverlay} />
          <p className={brandStyles.mastheadTag}>{femisonVisual.focus}</p>
        </div>

        <div className={brandStyles.mastheadContent}>
          <p className={brandStyles.mastheadEyebrow}>Baby Care &amp; Nutrition Brand</p>
          <h1 className={brandStyles.mastheadTitle}>Femison</h1>
          <p className={brandStyles.mastheadLead}>
            A trusted infant-care and family wellness portfolio with safety-focused formulations built for pharmacy,
            retail, and distributor channels.
          </p>
          <div className={brandStyles.mastheadChipRow}>
            <p className={brandStyles.mastheadChip}>Baby Gripe Water</p>
            <p className={brandStyles.mastheadChip}>Arwat Formulations</p>
            <p className={brandStyles.mastheadChip}>Glucose for All Ages</p>
          </div>

          <div className={brandStyles.mastheadActions}>
            <a href={FEMISON_WEBSITE_URL} target="_self" rel="noopener noreferrer" className={brandStyles.heroPrimary}>
              Visit Website
            </a>
            <Link href="/business-with-us" className={brandStyles.heroSecondary}>
              Healthcare Inquiry
            </Link>
          </div>
        </div>
      </section>

      <FemisonTransitionBanner />

      <div className={styles.actionRow}>
        <Link href="/brands" className={styles.backLink}>
          Back to All Brands
        </Link>
        <Link href="/business-with-us" className={`${styles.inlineBrandAction} ${brandStyles.brandAction}`}>
          Inquiry
        </Link>
      </div>

      <FemisonHero whatsappUrl={femisonWhatsAppUrl} contactPerson={femisonContact.personName} />
      <FemisonProductSections />
      <FemisonContactCard contact={femisonContact} whatsappUrl={femisonWhatsAppUrl} mailtoUrl={femisonMailToUrl} />
      <FemisonCtaBlocks whatsappUrl={femisonWhatsAppUrl} mailtoUrl={femisonMailToUrl} />
    </main>
  );
}

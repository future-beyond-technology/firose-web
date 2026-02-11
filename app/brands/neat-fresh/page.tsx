import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  buildBrandMailToUrl,
  buildBrandWhatsAppUrl,
  getBrandBySlug,
} from '@/app/lib/brands';
import { brandVisuals } from '@/app/lib/brandVisuals';
import BrandTransitionBanner from './components/BrandTransitionBanner';
import NeatFreshContactCard from './components/NeatFreshContactCard';
import NeatFreshCtaBlocks from './components/NeatFreshCtaBlocks';
import NeatFreshHero from './components/NeatFreshHero';
import NeatFreshProductSections from './components/NeatFreshProductSections';
import brandStyles from './components/neatFresh.module.css';
import styles from '../brands.module.css';

const neatFreshBrand = getBrandBySlug('neat-fresh');
const neatFreshContact = neatFreshBrand.contact;

const neatFreshWhatsAppUrl = buildBrandWhatsAppUrl(
  neatFreshContact,
  'Hello, I would like to discuss Neat & Fresh distribution and product options.'
);
const neatFreshMailToUrl = buildBrandMailToUrl(
  neatFreshContact,
  'Neat & Fresh Enquiry',
  'Hello, I would like to discuss Neat & Fresh products and distribution opportunities.'
);
const neatFreshVisual = brandVisuals['neat-fresh'];
const NEAT_FRESH_WEBSITE_URL = 'https://neatfresh.online';

export const metadata: Metadata = {
  title: 'Neat & Fresh',
  description:
    'Neat & Fresh is the housekeeping products brand under Firose Enterprises, serving home, office, and commercial hygiene segments. Now transitioning to neatfresh.online while maintaining the same quality standards and Firose Enterprises ownership.',
};

export default function NeatFresh() {
  return (
    <main className={`${styles.brandPage} ${brandStyles.brandPageTheme} ${brandStyles.pageFrame}`}>
      <section className={brandStyles.masthead}>
        <div className={brandStyles.mastheadMedia}>
          <Image
            src={neatFreshVisual.heroImage}
            alt={neatFreshVisual.alt}
            fill
            className={brandStyles.mastheadImage}
            sizes="(max-width: 899px) 100vw, 44vw"
            priority
          />
          <div className={brandStyles.mastheadOverlay} />
          <p className={brandStyles.mastheadTag}>{neatFreshVisual.focus}</p>
        </div>

        <div className={brandStyles.mastheadContent}>
          <p className={brandStyles.mastheadEyebrow}>Housekeeping Product Brand</p>
          <h1 className={brandStyles.mastheadTitle}>Neat &amp; Fresh</h1>
          <p className={brandStyles.mastheadLead}>
            A premium hygiene division built for dependable cleaning performance across residential, workplace, and
            institutional environments.
          </p>
          <div className={brandStyles.mastheadChipRow}>
            <p className={brandStyles.mastheadChip}>Surface Care</p>
            <p className={brandStyles.mastheadChip}>Disinfection Systems</p>
            <p className={brandStyles.mastheadChip}>Institutional Supply</p>
          </div>

          <div className={brandStyles.mastheadActions}>
            <a href={NEAT_FRESH_WEBSITE_URL} target="_self" rel="noopener noreferrer" className={brandStyles.heroPrimary}>
              Visit Website
            </a>
            <Link href="/business-with-us" className={brandStyles.heroSecondary}>
              Become a Distributor
            </Link>
          </div>
        </div>
      </section>

      <BrandTransitionBanner />

      <div className={styles.actionRow}>
        <Link href="/brands" className={styles.backLink}>
          Back to All Brands
        </Link>
        <Link href="/business-with-us" className={`${styles.inlineBrandAction} ${brandStyles.brandAction}`}>
          Become a Distributor
        </Link>
      </div>

      <NeatFreshHero whatsappUrl={neatFreshWhatsAppUrl} contactPerson={neatFreshContact.personName} />
      <NeatFreshProductSections />
      <NeatFreshContactCard
        contact={neatFreshContact}
        whatsappUrl={neatFreshWhatsAppUrl}
        mailtoUrl={neatFreshMailToUrl}
      />
      <NeatFreshCtaBlocks whatsappUrl={neatFreshWhatsAppUrl} mailtoUrl={neatFreshMailToUrl} />
    </main>
  );
}

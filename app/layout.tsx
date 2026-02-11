import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import CorporateHeader from '@/app/components/CorporateHeader';
import { divisionCatalog } from '@/app/lib/divisions';
import './globals.css';

const ORGANIZATION_ID = 'https://firoseenterprises.com/#organization';
const ORGANIZATION_URL = 'https://firoseenterprises.com';

const subOrganizationSchema = divisionCatalog.map((division) => ({
  '@type': 'Organization',
  name: division.name,
  url: division.external ? division.href : `${ORGANIZATION_URL}${division.href}`,
  description: division.description,
  parentOrganization: { '@id': ORGANIZATION_ID },
}));

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'Firose Enterprises',
  url: ORGANIZATION_URL,
  description:
    'Firose Enterprises is a diversified enterprise group operating AR Perfumes, Femison, Neat & Fresh, and Future Beyond Technology across fragrance, baby care and nutrition, hygiene FMCG, AI engineering, and cybersecurity.',
  keywords:
    'Neat & Fresh, hygiene, cleanliness, daily essentials, premium care, housekeeping products, FMCG, AR Perfumes, Femison, Future Beyond Technology',
  brand: divisionCatalog.map((division) => division.name),
  subOrganization: subOrganizationSchema,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'corporate@firoseenterprises.com',
      telephone: '+91-9790600220',
      areaServed: 'IN',
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://firoseenterprises.com'),
  title: {
    default: 'Firose Enterprises',
    template: '%s | Firose Enterprises',
  },
  description:
    'Firose Enterprises is the parent group for AR Perfumes, Femison, Neat & Fresh, and Future Beyond Technology, built for trusted consumer products, baby care and nutrition offerings, and enterprise-grade technology systems.',
  keywords: [
    'Firose Enterprises',
    'AR Perfumes',
    'Neat and Fresh',
    'Femison',
    'Future Beyond Technology',
    'FBT',
    'consumer brands',
    'housekeeping products',
    'hygiene',
    'cleanliness',
    'daily essentials',
    'premium care',
    'gripe water',
    'fragrance brand',
    'AI automation',
    'cybersecurity',
    'enterprise software',
    'secure systems',
  ],
  openGraph: {
    title: 'Firose Enterprises',
    description:
      'One group. Multiple trusted divisions across fragrance, baby care and nutrition, hygiene FMCG, and AI-driven technology systems.',
    url: ORGANIZATION_URL,
    siteName: 'Firose Enterprises',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
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

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="fe-shell">
          <CorporateHeader />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />

          {children}

          <footer className="mt-auto border-t border-[#113b5f24] bg-gradient-to-b from-white/70 to-[#e7eff9]">
            <div className="mx-auto w-[min(1200px,calc(100%_-_1.25rem))] md:w-[min(1200px,calc(100%_-_2rem))] py-5">
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="grid gap-1">
                  <p className="font-semibold uppercase tracking-[0.08em] text-[#0f4d77]">Firose Enterprises</p>
                  <p className="max-w-[44ch] text-sm text-[#4c657d]">One Group. Multiple Trusted Brands.</p>
                </div>

                <div className="grid gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f4d77]">Our Companies</p>
                  <nav className="flex flex-wrap gap-2" aria-label="Our companies">
                    {divisionCatalog.map((division) =>
                      division.external ? (
                        <a
                          key={division.id}
                          href={division.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fe-link-chip inline-flex items-center gap-1.5"
                          aria-label={`Visit ${division.name} external website`}
                        >
                          <span>{division.name}</span>
                          <ExternalLinkIcon className="h-4 w-4" />
                        </a>
                      ) : (
                        <Link key={division.id} href={division.href} className="fe-link-chip">
                          {division.name}
                        </Link>
                      )
                    )}
                  </nav>
                </div>

                <div className="grid gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f4d77]">Corporate</p>
                  <nav className="flex flex-wrap gap-2" aria-label="Footer links">
                    <Link href="/about" className="fe-link-chip">About</Link>
                    <Link href="/brands" className="fe-link-chip">Our Divisions</Link>
                    <Link href="/manufacturing-quality" className="fe-link-chip">Manufacturing &amp; Quality</Link>
                    <Link href="/business-with-us" className="fe-link-chip">Business With Us</Link>
                    <Link href="/contact" className="fe-link-chip">Contact</Link>
                  </nav>
                </div>
              </div>

              <p className="mt-4 border-t border-[#113b5f1f] pt-3 text-sm text-[#4c657d]">
                © {new Date().getFullYear()} FiroseEnterprises. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

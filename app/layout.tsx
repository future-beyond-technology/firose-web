import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import CorporateHeader from '@/app/components/CorporateHeader';
import ExperienceEnhancer from '@/app/components/ExperienceEnhancer';
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
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="fe-shell">
          <ExperienceEnhancer />
          <CorporateHeader />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />

          {children}

          <footer className="mt-auto border-t border-[#e0c8932b] bg-[linear-gradient(180deg,#0c0a08,#090807)]">
            <div className="mx-auto w-[min(1240px,calc(100%_-_1.25rem))] md:w-[min(1240px,calc(100%_-_2rem))] py-8">
              <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr_1fr]">
                <div className="grid gap-2">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d7bb85]">Firose Enterprises</p>
                  <p className="max-w-[44ch] text-sm text-[#a99d87]">
                    One group. Multiple trusted divisions operating with heritage discipline and future-facing capability.
                  </p>
                </div>

                <div className="grid gap-2">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#d7bb85]">Our Companies</p>
                  <nav className="grid gap-1" aria-label="Our companies">
                    {divisionCatalog.map((division) =>
                      division.external ? (
                        <a
                          key={division.id}
                          href={division.href}
                          target="_self"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-between rounded-md border border-[#e0c89325] bg-[#18140fbf] px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#d8ccb4] transition hover:border-[#e0c89362] hover:bg-[#221b14]"
                          aria-label={`Visit ${division.name} external website`}
                        >
                          <span>{division.name}</span>
                          <ExternalLinkIcon className="h-4 w-4 text-[#a99d87]" />
                        </a>
                      ) : (
                        <Link
                          key={division.id}
                          href={division.href}
                          className="inline-flex items-center rounded-md border border-[#e0c89325] bg-[#18140fbf] px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#d8ccb4] transition hover:border-[#e0c89362] hover:bg-[#221b14]"
                        >
                          {division.name}
                        </Link>
                      )
                    )}
                  </nav>
                </div>

                <div className="grid gap-2">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#d7bb85]">Corporate</p>
                  <nav className="grid gap-1" aria-label="Footer links">
                    <Link href="/about" className="inline-flex items-center rounded-md border border-[#e0c89325] bg-[#18140fbf] px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#d8ccb4] transition hover:border-[#e0c89362] hover:bg-[#221b14]">About</Link>
                    <Link href="/brands" className="inline-flex items-center rounded-md border border-[#e0c89325] bg-[#18140fbf] px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#d8ccb4] transition hover:border-[#e0c89362] hover:bg-[#221b14]">Our Divisions</Link>
                    <Link href="/manufacturing-quality" className="inline-flex items-center rounded-md border border-[#e0c89325] bg-[#18140fbf] px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#d8ccb4] transition hover:border-[#e0c89362] hover:bg-[#221b14]">Manufacturing &amp; Quality</Link>
                    <Link href="/business-with-us" className="inline-flex items-center rounded-md border border-[#e0c89325] bg-[#18140fbf] px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#d8ccb4] transition hover:border-[#e0c89362] hover:bg-[#221b14]">Business With Us</Link>
                    <Link href="/contact" className="inline-flex items-center rounded-md border border-[#e0c89325] bg-[#18140fbf] px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#d8ccb4] transition hover:border-[#e0c89362] hover:bg-[#221b14]">Contact</Link>
                  </nav>
                </div>
              </div>

              <p className="mt-6 border-t border-[#e0c89324] pt-4 text-xs uppercase tracking-[0.12em] text-[#968a74]">
                © {new Date().getFullYear()} FiroseEnterprises. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

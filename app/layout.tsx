import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import CorporateHeader from '@/app/components/CorporateHeader';
import './globals.css';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Firose Enterprises',
  url: 'https://firoseenterprises.com',
  description:
    'Firose Enterprises is a multi-brand parent group operating AR Perfumes, Neat & Fresh, and Femison across fragrance, hygiene, and healthcare categories.',
  brand: ['AR Perfumes', 'Neat & Fresh', 'Femison'],
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
    'Firose Enterprises is the parent group for AR Perfumes, Neat & Fresh, and Femison, built for trusted consumer products and scalable market expansion.',
  keywords: [
    'Firose Enterprises',
    'AR Perfumes',
    'Neat and Fresh',
    'Femison',
    'consumer brands',
    'housekeeping products',
    'gripe water',
    'fragrance brand',
  ],
  openGraph: {
    title: 'Firose Enterprises',
    description: 'One group. Multiple trusted brands across fragrance, hygiene, and healthcare categories.',
    url: 'https://firoseenterprises.com',
    siteName: 'Firose Enterprises',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

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
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="grid gap-1">
                  <p className="font-semibold uppercase tracking-[0.08em] text-[#0f4d77]">Firose Enterprises</p>
                  <p className="max-w-[44ch] text-sm text-[#4c657d]">One Group. Multiple Trusted Brands.</p>
                </div>

                <nav className="flex flex-wrap gap-2" aria-label="Footer links">
                  <Link href="/about" className="fe-link-chip">About</Link>
                  <Link href="/brands" className="fe-link-chip">Brands</Link>
                  <Link href="/manufacturing-quality" className="fe-link-chip">Manufacturing &amp; Quality</Link>
                  <Link href="/business-with-us" className="fe-link-chip">Business With Us</Link>
                  <Link href="/contact" className="fe-link-chip">Contact</Link>
                </nav>
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

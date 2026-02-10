import type { Metadata } from 'next';
import Link from 'next/link';
import { brandCatalog, getBrandUrl } from './lib/brands';

const CORPORATE_WHATSAPP = 'https://wa.me/919790600220?text=Hello%20FiroseEnterprises%2C%20I%20would%20like%20to%20connect.';
const CORPORATE_INDIAMART = 'https://www.indiamart.com/firose-enterpriseschennai/';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Firose Enterprises is a trusted multi-brand group across fragrance, hygiene, and healthcare categories.',
};

export default function Home() {
  return (
    <main className="fe-main">
      <section className="fe-panel-strong overflow-hidden p-5 sm:p-7 lg:p-10">
        <div className="grid gap-4">
          <p className="fe-badge">Corporate Group</p>
          <h1 className="max-w-[18ch] text-4xl font-semibold leading-tight sm:text-5xl text-[#0f4d77]">
            One Group. Multiple Trusted Brands.
          </h1>
          <p className="max-w-[74ch] text-base sm:text-lg text-[#4a6279]">
            Firose Enterprises builds and scales focused consumer brands with disciplined quality systems,
            category-specific positioning, and distribution-ready operations.
          </p>

          <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
            <Link href="/brands" className="fe-btn-primary">
              Explore Brands
            </Link>
            <Link href="/contact" className="fe-link-chip">
              Contact Team
            </Link>
            <a href={CORPORATE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="fe-link-chip">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="fe-panel p-4 sm:p-6">
        <header className="grid gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Brand Portfolio</h2>
          <p className="max-w-[72ch] text-[#4a6279]">
            Firose Enterprises operates multiple consumer-focused brands across fragrance, hygiene, and healthcare.
          </p>
        </header>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {brandCatalog.map((brand) => (
            <article
              key={brand.slug}
              className="fe-panel-strong p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <p className="fe-badge">{brand.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-[#0e2338]">{brand.name}</h3>
              <p className="mt-2 text-sm text-[#4a6279]">{brand.shortDescription}</p>
              <Link href={getBrandUrl(brand.slug)} className="mt-4 fe-link-chip">
                View Brand
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="fe-panel p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Why Choose Firose Enterprises</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <article className="fe-panel-strong p-4">
            <h3 className="text-lg font-semibold text-[#0e2338]">Quality Discipline</h3>
            <p className="mt-2 text-sm text-[#4a6279]">
              Quality checkpoints across sourcing, manufacturing, and finished product review.
            </p>
          </article>
          <article className="fe-panel-strong p-4">
            <h3 className="text-lg font-semibold text-[#0e2338]">Trusted Delivery</h3>
            <p className="mt-2 text-sm text-[#4a6279]">
              Operational rigor that supports distributor reliability and customer confidence.
            </p>
          </article>
          <article className="fe-panel-strong p-4">
            <h3 className="text-lg font-semibold text-[#0e2338]">Scalable Reach</h3>
            <p className="mt-2 text-sm text-[#4a6279]">
              Portfolio structure designed for category expansion and regional growth.
            </p>
          </article>
        </div>
      </section>

      <section className="fe-panel p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Industries Served</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {[
            'Fragrance & Personal Identity',
            'Housekeeping & Hygiene',
            'Baby Care & Wellness',
            'Retail & Distribution',
            'Modern Trade Support',
          ].map((item) => (
            <p
              key={item}
              className="rounded-full border border-[#113b5f2b] bg-white/90 px-4 py-2 text-center text-sm text-[#4a6279]"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="fe-panel-strong p-4 sm:p-6 lg:p-7">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Start a Business Conversation</h2>
        <p className="mt-2 max-w-[72ch] text-[#4a6279]">
          For distribution, bulk procurement, or category expansion opportunities, connect directly with our corporate team.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
          <Link href="/business-with-us" className="fe-btn-primary">
            Business With Us
          </Link>
          <Link href="/contact" className="fe-link-chip">
            Contact Us
          </Link>
          <a href={CORPORATE_INDIAMART} target="_blank" rel="noopener noreferrer" className="fe-link-chip">
            IndiaMART Profile
          </a>
          <a href={CORPORATE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="fe-link-chip">
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

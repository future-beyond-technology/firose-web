import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DivisionCard from '@/app/components/DivisionCard';
import { FBT_WEBSITE_URL, divisionCatalog } from '@/app/lib/divisions';
import { corporateVisuals } from './lib/brandVisuals';

const CORPORATE_WHATSAPP = 'https://wa.me/919790600220?text=Hello%20FiroseEnterprises%2C%20I%20would%20like%20to%20connect.';
const CORPORATE_INDIAMART = 'https://www.indiamart.com/firose-enterpriseschennai/';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Firose Enterprises is a diversified enterprise group across fragrance, women lifestyle, hygiene FMCG, and AI-driven technology systems.',
};

export default function Home() {
  return (
    <main className="fe-main fe-ambient-drift">
      <section className="fe-panel-strong fe-reveal relative overflow-hidden p-5 sm:p-7 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_130%_at_0%_0%,rgba(28,115,170,0.14)_0%,rgba(28,115,170,0)_62%)]"
        />

        <div className="relative grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="grid gap-4">
            <p className="fe-badge fe-reveal fe-delay-1">Corporate Group</p>
            <h1 className="fe-reveal fe-delay-2 max-w-[15ch] text-4xl font-semibold leading-tight sm:text-5xl text-[#0f4d77]">
              FIROSE ENTERPRISES
            </h1>
            <p className="fe-reveal fe-delay-3 max-w-[68ch] text-base sm:text-lg text-[#4a6279]">
              One diversified group across fragrance, women lifestyle, hygiene FMCG, and AI-driven technology systems,
              built on quality discipline and enterprise-scale execution.
            </p>

            <div className="fe-reveal fe-delay-4 grid grid-cols-2 gap-2 text-sm text-[#37566f] sm:flex sm:flex-wrap">
              <p className="rounded-full border border-[#113b5f30] bg-white/90 px-3 py-1.5 text-center">Brand Portfolio</p>
              <p className="rounded-full border border-[#113b5f30] bg-white/90 px-3 py-1.5 text-center">Quality-Led Ops</p>
              <p className="rounded-full border border-[#113b5f30] bg-white/90 px-3 py-1.5 text-center">Channel Expansion</p>
              <p className="rounded-full border border-[#113b5f30] bg-white/90 px-3 py-1.5 text-center">Fast Support</p>
            </div>

            <div className="fe-reveal fe-delay-4 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
              <Link href="/brands" className="fe-btn-primary">
                Explore Brand Landing Pages
              </Link>
              <Link href="/contact" className="fe-link-chip">
                Contact Team
              </Link>
              <a href={CORPORATE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="fe-link-chip">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="fe-reveal fe-delay-3 fe-interactive-media fe-shine relative rounded-3xl border border-[#113b5f30] bg-white/70 shadow-[0_18px_40px_rgba(10,58,90,0.2)]">
            <div className="relative h-[260px] w-full sm:h-[320px]">
              <Image
                src={corporateVisuals.heroImage}
                alt="Firose corporate growth and strategy visual"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092640b5] via-[#09264059] to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 grid gap-1 p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#d4e9ff]">Who We Are</p>
              <p className="text-base font-semibold sm:text-lg">Scalable Consumer Brand Platform</p>
              <p className="max-w-[48ch] text-sm text-[#e4f0ff]">
                FIROSE builds trusted category brands with quality discipline and execution clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fe-panel fe-reveal fe-delay-1 p-4 sm:p-6 lg:p-7">
        <header className="grid gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Brand Architecture</h2>
          <p className="max-w-[72ch] text-[#4a6279]">
            FIROSE ENTERPRISES operates four focused divisions with dedicated positioning, conversion paths, and
            enterprise-ready operations.
          </p>
        </header>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {divisionCatalog.map((division, index) => (
            <DivisionCard key={division.id} division={division} animationDelayMs={120 + index * 90} />
          ))}
        </div>
      </section>

      <section className="fe-panel-strong fe-reveal fe-delay-2 overflow-hidden p-4 sm:p-6 lg:p-7">
        <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="grid gap-3">
            <p className="inline-flex w-fit items-center rounded-full border border-[#3d77ad66] bg-[#17395d1f] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#1d5f98]">
              New Division
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Future Beyond Technology (FBT)</h2>
            <p className="max-w-[74ch] text-[#4a6279]">
              An AI-driven software engineering and cybersecurity division focused on automation, secure architecture,
              and enterprise-grade systems.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={FBT_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#2e6295] bg-gradient-to-r from-[#102a45] to-[#173a60] px-5 py-2 text-sm font-semibold text-[#e5f1ff] shadow-[0_0_0_1px_rgba(76,142,204,0.2),0_14px_30px_rgba(13,34,56,0.42)] transition hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(107,171,231,0.34),0_18px_34px_rgba(13,34,56,0.5)]"
                aria-label="Visit Future Beyond Technology website"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div className="fe-interactive-media fe-shine relative overflow-hidden rounded-3xl border border-[#2b5d8c6e]">
            <div className="relative h-[240px] sm:h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80"
                alt="Future Beyond Technology secure AI engineering environment"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081729de] via-[#0b2742a8] to-transparent" />
            </div>

            <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-[#84b6e844] bg-[#0e2946c2] px-3 py-2 text-[#d8ebff] backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#9dcbf8]">AI Engineering</p>
              <p className="text-sm">Secure architecture and enterprise systems for modern organizations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fe-panel fe-reveal fe-delay-3 grid gap-4 p-4 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="fe-interactive-media fe-shine relative overflow-hidden rounded-3xl border border-[#113b5f2d]">
          <div className="relative h-[240px] sm:h-[300px]">
            <Image
              src={corporateVisuals.supportImage}
              alt="Firose product and operations support"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2c47b8] to-transparent" />
          </div>
          <p className="absolute bottom-3 left-3 rounded-full border border-white/35 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white">
            Process-Led Operations
          </p>
        </div>

        <div className="grid gap-3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Why Businesses Choose FIROSE</h2>
          <p className="max-w-[72ch] text-[#4a6279]">
            FIROSE combines category specialization with disciplined execution so partners can expand confidently.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <p className="rounded-2xl border border-[#113b5f28] bg-white/90 px-4 py-3 text-sm text-[#4a6279]">
              Quality checkpoints across sourcing, manufacturing, and release.
            </p>
            <p className="rounded-2xl border border-[#113b5f28] bg-white/90 px-4 py-3 text-sm text-[#4a6279]">
              Structured support for distributors, institutions, and modern trade.
            </p>
            <p className="rounded-2xl border border-[#113b5f28] bg-white/90 px-4 py-3 text-sm text-[#4a6279]">
              Clear brand architecture with dedicated landing experiences.
            </p>
            <p className="rounded-2xl border border-[#113b5f28] bg-white/90 px-4 py-3 text-sm text-[#4a6279]">
              Direct contact channels for faster conversion and onboarding.
            </p>
          </div>
        </div>
      </section>

      <section className="fe-panel fe-reveal fe-delay-4 p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Industries Served</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {[
            'Fragrance & Personal Identity',
            'Housekeeping & Hygiene',
            'Women Lifestyle & Wellness',
            'AI Engineering & Automation',
            'Cybersecurity & Secure Systems',
            'Retail & Distribution',
            'Enterprise Technology Support',
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

      <section className="fe-panel-strong fe-reveal p-4 sm:p-6 lg:p-7">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Start a Business Conversation</h2>
        <p className="mt-2 max-w-[72ch] text-[#4a6279]">
          For distribution, category expansion, or enterprise technology initiatives, connect directly with our
          corporate team.
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

import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { DivisionDefinition } from '@/app/lib/divisions';

type DivisionCardProps = {
  division: DivisionDefinition;
  animationDelayMs?: number;
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

export default function DivisionCard({ division, animationDelayMs = 0 }: Readonly<DivisionCardProps>) {
  const isTech = division.theme === 'tech';
  const cardClassName = isTech
    ? 'fe-stagger-card group overflow-hidden rounded-3xl border border-[#2b5c8f] bg-gradient-to-b from-[#0c1d33] to-[#11253e] text-[#e8f2ff] shadow-[0_0_0_1px_rgba(64,126,191,0.18),0_16px_34px_rgba(8,23,40,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(86,156,230,0.36),0_22px_40px_rgba(8,23,40,0.62)]'
    : 'fe-stagger-card group overflow-hidden rounded-3xl border border-[#113b5f28] bg-white text-[#0e2338] shadow-[0_12px_28px_rgba(10,58,90,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(10,58,90,0.2)]';
  const categoryClassName = isTech
    ? 'absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full border border-[#a2cdfc66] bg-[#1c467266] px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[#d7eaff]'
    : 'absolute bottom-3 left-3 fe-badge border-white/40 bg-white/20 text-white';
  const descriptionClassName = isTech ? 'text-sm text-[#c7d9f0]' : 'text-sm text-[#4a6279]';
  const actionClassName = isTech
    ? 'mt-1 inline-flex w-fit items-center gap-1 rounded-full border border-[#8ebceb70] bg-[#17385c66] px-4 py-2 text-sm font-medium text-[#d5e9ff] transition hover:bg-[#1d4a786b]'
    : 'mt-1 fe-link-chip';

  return (
    <article className={cardClassName} style={{ animationDelay: `${animationDelayMs}ms` } as CSSProperties}>
      <div className="fe-interactive-media relative h-48 w-full">
        <Image
          src={division.image}
          alt={division.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
        />
        <div
          className={
            isTech
              ? 'absolute inset-0 bg-gradient-to-t from-[#09192eeb] via-[#0d2943bf] to-transparent'
              : 'absolute inset-0 bg-gradient-to-t from-[#0b2c47bd] to-transparent'
          }
        />
        <p className={categoryClassName}>{division.category}</p>
      </div>

      <div className="grid gap-2 p-4">
        <h3 className={isTech ? 'text-xl font-semibold text-[#e8f4ff]' : 'text-xl font-semibold'}>{division.name}</h3>
        <p className={descriptionClassName}>{division.description}</p>

        {division.external ? (
          <a
            href={division.href}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClassName}
            aria-label={`Visit ${division.name} website`}
          >
            Visit Website
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        ) : (
          <Link href={division.href} className={actionClassName}>
            Open Division
          </Link>
        )}
      </div>
    </article>
  );
}

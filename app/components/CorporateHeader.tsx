'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { divisionCatalog } from '@/app/lib/divisions';

type NavItem = {
  href: string;
  label: string;
  cta?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/manufacturing-quality', label: 'Manufacturing & Quality' },
  { href: '/business-with-us', label: 'Business With Us' },
  { href: '/contact', label: 'Contact', cta: true },
];

function isActive(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function isDivisionsActive(pathname: string): boolean {
  return pathname === '/brands' || pathname.startsWith('/brands/');
}

function navClassName(item: NavItem, active: boolean): string {
  const base =
    'inline-flex min-h-11 items-center justify-center rounded-full border px-3.5 py-1.5 text-sm font-medium transition md:px-3';
  const activeStyle = active
    ? 'border-[#1c73aa66] bg-[#1c73aa22] text-[#0e2338]'
    : 'border-transparent text-[#4c657d] hover:-translate-y-px hover:border-[#0f4d7755] hover:bg-white/80 hover:text-[#0e2338]';
  const ctaStyle = item.cta
    ? 'border-[#0f4d7760] bg-gradient-to-r from-[#0f4d7726] to-[#1c73aa24] text-[#0f4d77] font-semibold'
    : '';

  return [base, activeStyle, ctaStyle].filter(Boolean).join(' ');
}

function divisionTriggerClass(active: boolean, open: boolean): string {
  const base =
    'inline-flex min-h-11 items-center justify-center gap-1 rounded-full border px-3.5 py-1.5 text-sm font-medium transition md:px-3';
  const activeStyle = active || open
    ? 'border-[#1c73aa66] bg-[#1c73aa22] text-[#0e2338]'
    : 'border-transparent text-[#4c657d] hover:-translate-y-px hover:border-[#0f4d7755] hover:bg-white/80 hover:text-[#0e2338]';

  return `${base} ${activeStyle}`;
}

function divisionLinkClass(active: boolean): string {
  const base =
    'inline-flex min-h-10 items-center justify-between rounded-xl border px-3 py-2 text-sm font-medium transition';
  const activeStyle = active
    ? 'border-[#1c73aa66] bg-[#1c73aa20] text-[#0e2338]'
    : 'border-transparent text-[#4c657d] hover:border-[#0f4d7745] hover:bg-white hover:text-[#0e2338]';

  return `${base} ${activeStyle}`;
}

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

export default function CorporateHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const divisionsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setDivisionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!divisionsMenuRef.current) {
        return;
      }

      if (divisionsMenuRef.current.contains(event.target as Node)) {
        return;
      }

      setDivisionsOpen(false);
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setDivisionsOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const divisionsActive = isDivisionsActive(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-[#113b5f24] bg-[rgba(255,255,255,0.86)] backdrop-blur-lg">
      <div className="mx-auto flex min-h-[74px] w-[min(1200px,calc(100%_-_1.25rem))] items-center justify-between gap-3 py-2 md:w-[min(1200px,calc(100%_-_2rem))]">
        <Link
          href="/"
          className="font-semibold uppercase tracking-[0.12em] text-[#0f4d77] text-[clamp(1rem,1.8vw,1.25rem)]"
        >
          Firose Enterprises
        </Link>

        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#0f4d7738] bg-[#1c73aa1c] px-4 py-1.5 text-sm font-semibold text-[#0f4d77] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="corporate-mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {NAV_ITEMS.slice(0, 2).map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={navClassName(item, active)}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          <div
            ref={divisionsMenuRef}
            className="relative"
            onMouseEnter={() => setDivisionsOpen(true)}
            onMouseLeave={() => setDivisionsOpen(false)}
          >
            <button
              type="button"
              className={divisionTriggerClass(divisionsActive, divisionsOpen)}
              aria-expanded={divisionsOpen}
              aria-controls="corporate-divisions-menu"
              onClick={() => setDivisionsOpen((current) => !current)}
            >
              Our Divisions
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d="M5.2 7.7a.75.75 0 011.06 0L10 11.44l3.74-3.74a.75.75 0 111.06 1.06l-4.27 4.27a.75.75 0 01-1.06 0L5.2 8.76a.75.75 0 010-1.06z" />
              </svg>
            </button>

            {divisionsOpen ? (
              <div
                id="corporate-divisions-menu"
                className="absolute left-0 top-full z-[70] mt-2 w-[320px] rounded-2xl border border-[#113b5f2a] bg-white/96 p-2 shadow-[0_18px_34px_rgba(10,58,90,0.22)] backdrop-blur"
                role="menu"
                aria-label="Our divisions"
              >
                <div className="grid gap-1">
                  {divisionCatalog.map((division) => {
                    const active = !division.external && isActive(pathname, division.href);

                    if (division.external) {
                      return (
                        <a
                          key={division.id}
                          href={division.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          role="menuitem"
                          className={divisionLinkClass(false)}
                        >
                          <span>{division.name}</span>
                          <ExternalLinkIcon className="h-4 w-4 text-[#4c657d]" />
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={division.id}
                        href={division.href}
                        role="menuitem"
                        className={divisionLinkClass(active)}
                        aria-current={active ? 'page' : undefined}
                      >
                        <span>{division.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          {NAV_ITEMS.slice(2).map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={navClassName(item, active)}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {menuOpen ? (
        <nav
          id="corporate-mobile-nav"
          className="border-t border-[#113b5f1f] bg-[rgba(255,255,255,0.94)] md:hidden"
          aria-label="Mobile primary navigation"
        >
          <div className="mx-auto grid w-[min(1200px,calc(100%_-_1.25rem))] gap-2 py-3">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${navClassName(item, active)} w-full justify-start`}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="rounded-2xl border border-[#113b5f26] bg-white/86 p-2">
              <p className="px-2 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#0f4d77]">Our Divisions</p>
              <div className="grid gap-1">
                {divisionCatalog.map((division) => {
                  const active = !division.external && isActive(pathname, division.href);

                  if (division.external) {
                    return (
                      <a
                        key={division.id}
                        href={division.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${divisionLinkClass(false)} w-full`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>{division.name}</span>
                        <ExternalLinkIcon className="h-4 w-4 text-[#4c657d]" />
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={division.id}
                      href={division.href}
                      className={`${divisionLinkClass(active)} w-full`}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{division.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

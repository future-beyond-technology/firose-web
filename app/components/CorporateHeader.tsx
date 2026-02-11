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
const FEMISON_WEBSITE_URL = 'https://femison.in';

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
    'inline-flex min-h-10 items-center justify-center rounded-md border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] transition md:px-3.5';
  const activeStyle = active
    ? 'border-[#e0c8937a] bg-[#3d30206b] text-[#f4e6c8]'
    : 'border-transparent text-[#ab9f88] hover:border-[#d8bc8760] hover:bg-[#2a22166e] hover:text-[#f4e6c8]';
  const ctaStyle = item.cta
    ? 'border-[#e0c89382] bg-gradient-to-r from-[#4f3c228a] to-[#2f251996] text-[#f4e6c8]'
    : '';

  return [base, activeStyle, ctaStyle].filter(Boolean).join(' ');
}

function divisionTriggerClass(active: boolean, open: boolean): string {
  const base =
    'inline-flex min-h-10 items-center justify-center gap-1 rounded-md border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] transition md:px-3.5';
  const activeStyle = active || open
    ? 'border-[#e0c8937a] bg-[#3d30206b] text-[#f4e6c8]'
    : 'border-transparent text-[#ab9f88] hover:border-[#d8bc8760] hover:bg-[#2a22166e] hover:text-[#f4e6c8]';

  return `${base} ${activeStyle}`;
}

function divisionLinkClass(active: boolean): string {
  const base =
    'inline-flex min-h-10 items-center justify-between rounded-md border px-3 py-2 text-xs font-medium uppercase tracking-[0.1em] transition';
  const activeStyle = active
    ? 'border-[#e0c8937a] bg-[#3d30206b] text-[#f4e6c8]'
    : 'border-transparent text-[#b8ad95] hover:border-[#d8bc8760] hover:bg-[#2a22166e] hover:text-[#f4e6c8]';

  return `${base} ${activeStyle}`;
}

function resolveDivisionHref(id: string, href: string): string {
  if (id === 'femison') {
    return FEMISON_WEBSITE_URL;
  }

  return href;
}

function shouldUseExternalDivisionLink(id: string, external?: boolean): boolean {
  return external || id === 'femison';
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
    <header className="sticky top-0 z-50 border-b border-[#e0c89330] bg-[#090807de] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[74px] w-[min(1240px,calc(100%_-_1.25rem))] items-center justify-between gap-3 py-2 md:w-[min(1240px,calc(100%_-_2rem))]">
        <Link
          href="/"
          className="text-[clamp(0.92rem,1.5vw,1.12rem)] font-medium uppercase tracking-[0.2em] text-[#ecd9af]"
        >
          Firose Enterprises
        </Link>

        <button
          type="button"
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#d8bc8770] bg-[#2a22166e] px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#f4e6c8] md:hidden"
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

          <div ref={divisionsMenuRef} className="relative">
            <button
              type="button"
              className={divisionTriggerClass(divisionsActive, divisionsOpen)}
              aria-expanded={divisionsOpen}
              aria-haspopup="menu"
              aria-controls="corporate-divisions-menu"
              onClick={() => setDivisionsOpen((current) => !current)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown') {
                  event.preventDefault();
                  setDivisionsOpen(true);
                }
              }}
            >
              Our Divisions
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d="M5.2 7.7a.75.75 0 011.06 0L10 11.44l3.74-3.74a.75.75 0 111.06 1.06l-4.27 4.27a.75.75 0 01-1.06 0L5.2 8.76a.75.75 0 010-1.06z" />
              </svg>
            </button>

            {divisionsOpen ? (
              <div
                id="corporate-divisions-menu"
                className="absolute left-0 top-full z-[70] mt-2 w-[340px] rounded-xl border border-[#e0c89333] bg-[#0f0d0adf] p-2 shadow-[0_24px_44px_rgba(0,0,0,0.52)] backdrop-blur"
                role="menu"
                aria-label="Our divisions"
              >
                <div className="grid gap-1">
                  {divisionCatalog.map((division) => {
                    const divisionHref = resolveDivisionHref(division.id, division.href);
                    const useExternalLink = shouldUseExternalDivisionLink(division.id, division.external);
                    const active = !useExternalLink && isActive(pathname, divisionHref);

                    if (useExternalLink) {
                      return (
                        <a
                          key={division.id}
                          href={divisionHref}
                          target="_self"
                          rel="noopener noreferrer"
                          role="menuitem"
                          className={divisionLinkClass(false)}
                          aria-label={`Visit ${division.name} website`}
                        >
                          <span>{division.name}</span>
                          <ExternalLinkIcon className="h-4 w-4 text-[#b8ad95]" />
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={division.id}
                        href={divisionHref}
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
          className="border-t border-[#e0c89322] bg-[#0c0a08f5] md:hidden"
          aria-label="Mobile primary navigation"
        >
          <div className="mx-auto grid w-[min(1240px,calc(100%_-_1.25rem))] gap-2 py-3">
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

            <div className="rounded-xl border border-[#e0c8932f] bg-[#12100dcf] p-2">
              <p className="px-2 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#d7bb85]">Our Divisions</p>
              <div className="grid gap-1">
                {divisionCatalog.map((division) => {
                  const divisionHref = resolveDivisionHref(division.id, division.href);
                  const useExternalLink = shouldUseExternalDivisionLink(division.id, division.external);
                  const active = !useExternalLink && isActive(pathname, divisionHref);

                  if (useExternalLink) {
                    return (
                      <a
                        key={division.id}
                        href={divisionHref}
                        target="_self"
                        rel="noopener noreferrer"
                        className={`${divisionLinkClass(false)} w-full`}
                        aria-label={`Visit ${division.name} website`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>{division.name}</span>
                        <ExternalLinkIcon className="h-4 w-4 text-[#b8ad95]" />
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={division.id}
                      href={divisionHref}
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

/**
 * AR Perfume — Subtle interactions and animations
 */

(function () {
  'use strict';

  const header = document.getElementById('header');
  const menuBtn = document.getElementById('menu-btn');
  const navMobile = document.getElementById('nav-mobile');
  const fadeElements = Array.from(document.querySelectorAll('.fade-in'));
  const pageMain = document.querySelector('main');
  const pageFooter = document.querySelector('.footer');
  const mobileNavLinks = navMobile ? Array.from(navMobile.querySelectorAll('a')) : [];

  function isMenuOpen() {
    return menuBtn && menuBtn.getAttribute('aria-expanded') === 'true';
  }

  function setBackgroundContentInteractive(interactive) {
    [pageMain, pageFooter].forEach(function (el) {
      if (!el) return;
      if (interactive) {
        el.removeAttribute('inert');
        el.removeAttribute('aria-hidden');
      } else {
        el.setAttribute('inert', '');
        el.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /**
   * Mobile menu: open/close with smooth transition
   */
  function openMenu() {
    if (!menuBtn || !navMobile) return;
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Close menu');
    navMobile.classList.add('is-open');
    navMobile.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    setBackgroundContentInteractive(false);

    if (mobileNavLinks.length) {
      mobileNavLinks[0].focus();
    }
  }

  function closeMenu(restoreFocus) {
    if (!menuBtn || !navMobile) return;
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
    navMobile.classList.remove('is-open');
    navMobile.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    setBackgroundContentInteractive(true);

    if (restoreFocus) {
      menuBtn.focus();
    }
  }

  function toggleMenu() {
    if (!menuBtn) return;
    if (isMenuOpen()) {
      closeMenu(false);
    } else {
      openMenu();
    }
  }

  function trapMenuFocus(e) {
    if (!isMenuOpen() || e.key !== 'Tab' || mobileNavLinks.length === 0) return;

    const first = mobileNavLinks[0];
    const last = mobileNavLinks[mobileNavLinks.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function markCurrentPageLinks() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a, .footer__nav a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (!href) return;
      if (href.split('#')[0] === current) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if (menuBtn && navMobile) {
    menuBtn.addEventListener('click', toggleMenu);

    navMobile.addEventListener('click', function (e) {
      if (e.target === navMobile || e.target.closest('a')) {
        closeMenu(false);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isMenuOpen()) {
        closeMenu(true);
      }
      trapMenuFocus(e);
    });

    window.addEventListener('resize', function () {
      if (window.matchMedia('(min-width: 1024px)').matches && isMenuOpen()) {
        closeMenu(false);
      }
    });
  }

  /**
   * Header: add scrolled class when user scrolls
   */
  function updateHeader() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 40);
  }

  /**
   * Fade-in on scroll: reveal elements when they enter viewport
   */
  function revealOnScroll() {
    const vh = window.innerHeight;
    const trigger = vh * 0.84;
    fadeElements.forEach(function (el) {
      if (el.classList.contains('visible')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= trigger) {
        el.classList.add('visible');
      }
    });
  }

  function initScrollReveal() {
    if (!fadeElements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px',
      });

      fadeElements.forEach(function (el) {
        observer.observe(el);
      });

      requestAnimationFrame(revealOnScroll);
      return;
    }

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    window.addEventListener('resize', revealOnScroll);
  }

  function optimizeImages() {
    const viewport = window.innerHeight || 0;
    document.querySelectorAll('img').forEach(function (img) {
      if (!img.getAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      if (!img.getAttribute('loading')) {
        const rect = img.getBoundingClientRect();
        if (rect.top > viewport * 0.5) {
          img.setAttribute('loading', 'lazy');
        }
      }
    });
  }

  function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;

      const text = btn.textContent;
      btn.textContent = 'Thank you';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = text;
        btn.disabled = false;
        form.reset();
      }, 2000);
    });
  }

  function initProductActions() {
    const productActions = document.querySelector('.product-info__actions');
    if (!productActions) return;

    productActions.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (this.textContent.includes('Cart')) {
          this.textContent = 'Added';
          const target = this;
          setTimeout(function () {
            target.textContent = 'Add to Cart';
          }, 1500);
        }
      });
    });
  }

  /**
   * Smooth throttle for scroll handlers
   */
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    requestAnimationFrame(function () {
      updateHeader();
      ticking = false;
    });
    ticking = true;
  }

  // Initial state
  markCurrentPageLinks();
  optimizeImages();
  updateHeader();
  initScrollReveal();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  initContactForm();
  initProductActions();
})();

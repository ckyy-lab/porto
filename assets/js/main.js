/**
 * Main Application Logic for Vicky Juni Hendri Portfolio
 * "The Friendly Analyst" Design System
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // 2. Active Navigation on Scroll (ScrollSpy)
  const sections = document.querySelectorAll('section[id], footer[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 200;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        desktopNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-amber-brand', 'font-bold');
            link.classList.remove('text-white/80');
            link.classList.add('after:content-[\'\']', 'after:absolute', 'after:bottom-0', 'after:left-0', 'after:w-full', 'after:h-[2px]', 'after:bg-amber-brand', 'after:rounded-full');
          } else {
            link.classList.remove('text-amber-brand', 'font-bold');
            link.classList.add('text-white/80');
            link.classList.remove('after:content-[\'\']', 'after:absolute', 'after:bottom-0', 'after:left-0', 'after:w-full', 'after:h-[2px]', 'after:bg-amber-brand', 'after:rounded-full');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // 3. KPI Animated Number Counters
  const kpiSection = document.getElementById('about');
  let counted = false;

  function animateCounters() {
    const counterElements = document.querySelectorAll('.kpi-counter');
    counterElements.forEach((counter) => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = counter.getAttribute('data-decimal') === 'true';
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 1600;
      const start = 0;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = start + (target - start) * easeOut;

        if (isDecimal) {
          counter.textContent = currentVal.toFixed(2) + suffix;
        } else {
          counter.textContent = Math.floor(currentVal).toLocaleString() + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          if (isDecimal) {
            counter.textContent = target.toFixed(2) + suffix;
          } else {
            counter.textContent = target.toLocaleString() + suffix;
          }
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  if (kpiSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            counted = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(kpiSection);
  }

  // 4. Modal System (MBG Case Study, ERP Case Study, CV Preview)
  const modals = document.querySelectorAll('.modal-dialog');
  const modalTriggers = document.querySelectorAll('[data-open-modal]');
  const modalCloseBtns = document.querySelectorAll('[data-close-modal]');

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    const closeBtn = modal.querySelector('[data-close-modal]');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-open-modal');
      openModal(modalId);
    });
  });

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = btn.closest('.modal-dialog');
      closeModal(modal);
    });
  });

  modals.forEach((modal) => {
    // Close on clicking backdrop
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach((modal) => {
        if (!modal.classList.contains('hidden')) {
          closeModal(modal);
        }
      });
      closeMobileMenu();
    }
  });

  // 5. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 400) {
          backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
          backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
        } else {
          backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
          backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
        }
      },
      { passive: true }
    );

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

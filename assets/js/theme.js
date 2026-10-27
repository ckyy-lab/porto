/**
 * Theme Manager for Vicky Juni Hendri Portfolio
 * Supports Dark & Light mode with localStorage persistence & system preference detection
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'vicky_portfolio_theme';
  const htmlEl = document.documentElement;

  // Detect initial theme
  function getPreferredTheme() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryTheme = urlParams.get('theme');
    if (queryTheme === 'dark' || queryTheme === 'light') {
      return queryTheme;
    }

    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }
    // Check OS system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  // Apply theme to DOM
  function applyTheme(theme) {
    if (theme === 'dark') {
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
    }

    // Update all theme toggle buttons in the document
    const themeButtons = document.querySelectorAll('.theme-toggle-btn');
    themeButtons.forEach((btn) => {
      const sunIcon = btn.querySelector('.theme-sun-icon');
      const moonIcon = btn.querySelector('.theme-moon-icon');
      const label = btn.querySelector('.theme-label');

      if (theme === 'dark') {
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
        btn.setAttribute('aria-label', 'Switch to light mode');
        btn.setAttribute('title', 'Switch to light mode');
        if (label) label.textContent = 'Light';
      } else {
        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
        btn.setAttribute('aria-label', 'Switch to dark mode');
        btn.setAttribute('title', 'Switch to dark mode');
        if (label) label.textContent = 'Dark';
      }
    });

    // Dispatch event for other components if needed
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  // Set theme & persist
  function setTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  }

  // Toggle theme between light and dark
  function toggleTheme() {
    const isDark = htmlEl.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Initialize immediately to prevent flash of wrong theme
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Setup event listeners once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    // Re-apply to ensure icons reflect correct state
    applyTheme(getPreferredTheme());

    // Bind all theme toggle buttons
    const themeButtons = document.querySelectorAll('.theme-toggle-btn');
    themeButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });
    });

    // Listen to OS theme changes if user has not explicitly chosen
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  });

  // Expose to window for external control
  window.ThemeManager = {
    getPreferredTheme,
    applyTheme,
    setTheme,
    toggleTheme,
  };
})();

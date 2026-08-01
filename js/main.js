/* ============================================================================
   David Zeff — portfolio
   Three small enhancements, all optional. Nothing here is required to read the
   page: without JS the nav renders as a plain inline list, every section is
   visible, and all links work.

   Scroll state is driven by one rAF-throttled handler doing plain geometry
   rather than by IntersectionObserver. IO is the tidier API, but the reveal
   effect gates *content visibility* — if its callback is ever delayed,
   throttled or skipped, a section stays at opacity 0 and the page looks
   broken. Measuring rectangles cannot fail that way, and with six observed
   elements the cost is irrelevant.
   ========================================================================= */

(function () {
  'use strict';

  var MOBILE_NAV = window.matchMedia('(max-width: 47.99rem)');

  /* ── 1. Mobile nav disclosure ─────────────────────────────────────────── */

  var toggle = document.querySelector('.nav-toggle');
  var navList = document.getElementById('nav-list');

  function setNavOpen(open) {
    if (!toggle || !navList) return;
    toggle.setAttribute('aria-expanded', String(open));
    navList.setAttribute('data-collapsed', String(!open));
  }

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      setNavOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Selecting a destination should dismiss the menu that offered it.
    navList.addEventListener('click', function (event) {
      if (event.target.closest('a') && MOBILE_NAV.matches) setNavOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      setNavOpen(false);
      toggle.focus();
    });

    document.addEventListener('click', function (event) {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      if (event.target.closest('.nav-inner')) return;
      setNavOpen(false);
    });

    // Crossing the breakpoint with the menu open would otherwise leave it
    // "open" the next time the viewport narrows.
    var onBreakpoint = function () { setNavOpen(false); };
    if (MOBILE_NAV.addEventListener) MOBILE_NAV.addEventListener('change', onBreakpoint);
    else if (MOBILE_NAV.addListener) MOBILE_NAV.addListener(onBreakpoint);
  }

  /* ── 2. Scroll-driven state ───────────────────────────────────────────── */

  var nav = document.getElementById('nav');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link[href^="#"]'));
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);
  var pending = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));

  var navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10
  ) || 60;

  var currentId = null;

  function setCurrent(id) {
    if (id === currentId) return;
    currentId = id;
    navLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  function update() {
    // The divider under the sticky bar appears only once there is content
    // scrolled beneath it to divide from.
    if (nav) nav.classList.toggle('is-stuck', window.scrollY > 8);

    // Reveal anything whose top has reached the lower edge of the viewport,
    // plus everything already above it. Revealed elements leave the list, so
    // this shrinks to nothing as the reader scrolls.
    if (pending.length) {
      var limit = window.innerHeight * 0.92;
      pending = pending.filter(function (el) {
        if (el.getBoundingClientRect().top >= limit) return true;
        el.classList.add('is-visible');
        return false;
      });
    }

    if (!sections.length) return;

    // The current section is the last one whose top has passed under the nav.
    // At the very bottom of the page the last section always wins, so a short
    // final section can still be reached.
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    if (atBottom) {
      setCurrent(sections[sections.length - 1].id);
      return;
    }

    var line = navHeight + 16;
    var active = null;

    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= line) active = section;
    });

    // Null while the reader is still on the hero — marking "About" as current
    // before they have reached it is a small lie the underline tells.
    setCurrent(active ? active.id : null);
  }

  var ticking = false;

  function schedule() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      update();
    });
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  // Late-loading fonts and images shift layout; re-measure once they land.
  window.addEventListener('load', update);

  update();
})();

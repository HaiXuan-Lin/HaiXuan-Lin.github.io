(() => {
  const root = document.documentElement;
  const debut = document.getElementById('debut');
  const main = document.getElementById('main');
  if (!debut || !main || !root.classList.contains('debut-active')) return;

  const enter = debut.querySelector('.debut__enter');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  main.setAttribute('tabindex', '-1');

  const resumeAtContent = root.classList.contains('debut-resume') && !location.hash;
  const restoreContent = () => {
    if (resumeAtContent) main.scrollIntoView({ behavior: 'instant', block: 'start' });
  };

  const rememberEntry = () => {
    try {
      sessionStorage.setItem('debut:entered', 'true');
    } catch (_) {
      /* The screen remains usable when storage is disabled. */
    }
  };

  const updateNavigation = () => {
    const header = document.querySelector('.masthead');
    const headerHeight = header ? header.offsetHeight : 72;
    const offset = parseFloat(getComputedStyle(main).scrollMarginTop) || 0;
    const inContent = main.getBoundingClientRect().top <= Math.max(headerHeight + 8, offset) + 1;
    root.classList.toggle('debut-content', inContent);
    debut.toggleAttribute('inert', inContent);
    if (inContent) rememberEntry();
  };

  enter.addEventListener('click', event => {
    /* Keep modified clicks and the native anchor fallback available. */
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    rememberEntry();
    main.focus({ preventScroll: true });
    main.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
  });

  /* Once the user tabs past the welcome screen, bring focused homepage links into view. */
  document.addEventListener('focusin', event => {
    if (event.target !== main && main.contains(event.target) && !root.classList.contains('debut-content')) {
      rememberEntry();
      main.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  });

  let scheduled = false;
  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      updateNavigation();
      scheduled = false;
    });
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('pageshow', event => {
    /* Let back/forward cache keep the user's position; new visits resume at the homepage. */
    if (!event.persisted) restoreContent();
    scheduleUpdate();
  });
  restoreContent();
  updateNavigation();
  clearTimeout(window.debutFallback);
})();

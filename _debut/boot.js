/* Keep the welcome screen above the homepage, including on returning visits. */
(() => {
  const root = document.documentElement;
  let seen = false;
  try {
    seen = sessionStorage.getItem('debut:entered') === 'true';
  } catch (_) {
    /* Storage can be unavailable in private or restricted browsing. */
  }
  root.classList.add('debut-active');
  if (seen || location.hash || location.pathname !== (window.debutHomePath || '/')) root.classList.add('debut-resume');
  /* Fail open if the body script cannot initialize. */
  window.debutFallback = setTimeout(() => root.classList.remove('debut-active'), 4000);
})();

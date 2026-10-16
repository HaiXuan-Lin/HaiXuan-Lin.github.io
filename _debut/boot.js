/* Keep the welcome screen above the homepage, including on returning visits. */
(() => {
  const root = document.documentElement;
  let seen = false;
  try {
    seen = sessionStorage.getItem('debut:entered') === 'true';
  } catch (_) {
    /* Storage can be unavailable in private or restricted browsing. */
  }
  /* Resolve the welcome colors immediately, before the main theme module loads. */
  let theme = null;
  try { theme = localStorage.getItem('theme'); } catch (_) {}
  const dark = theme === 'dark' || (theme !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
  if (dark) root.setAttribute('data-theme', 'dark');
  else root.removeAttribute('data-theme');

  root.classList.add('debut-active');
  if (seen || location.hash || location.pathname !== (window.debutHomePath || '/')) root.classList.add('debut-resume');
  /* Fail open if the body script cannot initialize. */
  window.debutFallback = setTimeout(() => root.classList.remove('debut-active'), 4000);
})();

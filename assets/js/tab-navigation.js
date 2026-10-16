/* Native horizontal scrolling: one document, one full-width screen per tab. */
(() => {
  'use strict';
  const config = document.getElementById('tab-navigation-config');
  if (!config) return;
  const root = document.documentElement;
  const normalize = value => {
    const path = new URL(value, location.href).pathname;
    return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  };
  const urls = [...new Set(JSON.parse(config.textContent))].map(value => new URL(value, location.href));
  const indexOf = value => urls.findIndex(url => normalize(url) === normalize(value));
  let active = indexOf(location.href);
  if (active < 0) return;

  window.initializeTabNavigation = () => {
    const stage = document.getElementById('main');
    if (!stage || stage.dataset.horizontalTabs || !window.fetch || !CSS.supports('scroll-snap-type', 'x mandatory')) return;
    stage.dataset.horizontalTabs = 'true';
    const rail = document.createElement('div');
    rail.className = 'tab-rail';
    rail.id = 'tab-rail';
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const header = document.querySelector('.masthead');
    const original = document.createElement('div');
    original.className = 'tab-page';
    const sidebar = stage.querySelector(':scope > .sidebar');
    if (sidebar) sidebar.remove();
    original.append(...Array.from(stage.childNodes));
    const panels = urls.map((url, index) => {
      const panel = document.createElement('section');
      panel.className = 'tab-panel';
      panel.id = 'site-tab-' + index;
      panel.setAttribute('role', 'tabpanel');
      const link = Array.from(document.querySelectorAll('.masthead a[href]')).find(item => normalize(item.href) === normalize(url));
      panel.setAttribute('aria-label', link ? link.textContent.trim() : url.pathname);
      if (index === active) panel.append(original);
      else panel.setAttribute('aria-busy', 'true');
      return panel;
    });
    const titles = urls.map(() => document.title);
    const requests = new Map();
    let settleTimer;
    let intent = active;
    let navigating = false;
    let touching = false;
    let resizePending = false;

    const typeset = panel => {
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([panel]).catch(() => {});
    };
    const load = index => {
      if (panels[index].firstElementChild) return Promise.resolve();
      if (requests.has(index)) return requests.get(index);
      const request = fetch(urls[index].href, { credentials: 'same-origin' }).then(response => {
        if (!response.ok) throw new Error('Page unavailable');
        return response.text();
      }).then(html => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const main = doc.getElementById('main');
        if (!main) throw new Error('Page content unavailable');
        const content = document.createElement('div');
        content.className = 'tab-page';
        content.append(...Array.from(main.childNodes)
          .filter(node => !(node instanceof Element && node.classList.contains('sidebar')))
          .map(node => document.importNode(node, true)));
        panels[index].replaceChildren(content);
        panels[index].removeAttribute('aria-busy');
        titles[index] = doc.title;
        typeset(panels[index]);
      }).catch(() => {
        requests.delete(index);
        const box = document.createElement('div');
        box.className = 'tab-page tab-load-error';
        const link = document.createElement('a');
        link.href = urls[index].href;
        link.textContent = 'Open ' + panels[index].getAttribute('aria-label');
        box.append(link);
        panels[index].replaceChildren(box);
        panels[index].removeAttribute('aria-busy');
      });
      requests.set(index, request);
      return request;
    };
    const showStage = () => {
      if (root.classList.contains('debut-active')) {
        stage.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    };
    const mark = index => {
      active = index;
      root.classList.toggle('tab-secondary', index !== 0);
      panels.forEach((panel, n) => {
        panel.toggleAttribute('inert', n !== index);
        panel.setAttribute('aria-hidden', n === index ? 'false' : 'true');
      });
      document.querySelectorAll('.masthead a[href]').forEach(link => {
        const n = indexOf(link.href);
        if (n < 0) return;
        link.parentElement.classList.toggle('selected', n === index);
        if (n === index) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
      document.title = titles[index];
    };
    const finish = () => {
      if (navigating || touching) return;
      const index = Math.max(0, Math.min(urls.length - 1, Math.round(rail.scrollLeft / rail.clientWidth)));
      mark(index);
      if (normalize(location.href) !== normalize(urls[index])) history.pushState({ siteTab: index }, '', urls[index].pathname);
      load(index);
    };
    const move = async (index, historyMode = 'push', hash = '') => {
      intent = index;
      navigating = true;
      await load(index);
      if (intent !== index) return;
      showStage();
      /* Unlock all screens while moving so touch input follows the native scroll surface. */
      panels.forEach(panel => panel.removeAttribute('inert'));
      if (historyMode === 'push' && normalize(location.href) !== normalize(urls[index])) {
        history.pushState({ siteTab: index }, '', urls[index].pathname + hash);
      }
      rail.scrollTo({ left: index * rail.clientWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
      navigating = false;
      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        const element = Array.from(panels[index].querySelectorAll('[id]')).find(item => item.id === id);
        if (element) panels[index].scrollTo({ top: element.offsetTop, behavior: 'instant' });
      }
      clearTimeout(settleTimer);
      settleTimer = setTimeout(finish, reducedMotion.matches ? 0 : 500);
    };

    rail.replaceChildren(...panels);
    stage.replaceChildren(...(sidebar ? [sidebar, rail] : [rail]));
    if (!sidebar) stage.classList.add('tab-no-sidebar');
    root.classList.add('tab-navigation');
    rail.scrollLeft = active * rail.clientWidth;
    mark(active);
    rail.addEventListener('scroll', () => {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(finish, 140);
    }, { passive: true });
    rail.addEventListener('scrollend', finish);
    /* Remove inert before a native drag begins; restore keyboard focus boundaries on settle. */
    rail.addEventListener('touchstart', () => {
      touching = true;
      panels.forEach(panel => panel.removeAttribute('inert'));
    }, { passive: true });
    const endTouch = () => {
      touching = false;
      clearTimeout(settleTimer);
      settleTimer = setTimeout(finish, 140);
    };
    rail.addEventListener('touchend', endTouch, { passive: true });
    rail.addEventListener('touchcancel', endTouch, { passive: true });
    rail.addEventListener('wheel', event => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) panels.forEach(panel => panel.removeAttribute('inert'));
    }, { passive: true });

    document.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
      /* Controls such as the theme toggle use an anchor without an href. */
      const link = event.target.closest('a[href]');
      if (!link || !link.closest('.masthead') || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.search) return;
      const index = indexOf(url);
      if (index < 0) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const menu = document.querySelector('#site-nav .hidden-links');
      if (menu) menu.classList.add('hidden');
      const toggle = document.querySelector('#site-nav button');
      if (toggle) toggle.classList.remove('close');
      move(index, 'push', url.hash);
    }, true);
    /* Keep the fixed profile menu independent of the content screens. */
    document.addEventListener('click', event => {
      const button = event.target.closest('#main > .sidebar .author__urls-wrapper button');
      if (!button) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const list = button.parentElement.querySelector('.author__urls');
      const open = getComputedStyle(list).display === 'none';
      list.style.display = open ? 'block' : 'none';
      button.classList.toggle('open', open);
      button.setAttribute('aria-expanded', String(open));
    }, true);
    document.addEventListener('focusin', event => {
      const index = panels.findIndex(panel => panel.contains(event.target));
      if (index >= 0 && index !== active) move(index);
    });
    window.addEventListener('popstate', () => {
      const index = indexOf(location.href);
      if (index >= 0) move(index, 'none', location.hash);
    });
    const resize = () => {
      if (resizePending) return;
      resizePending = true;
      requestAnimationFrame(() => {
        const height = header ? header.offsetHeight : 70;
        root.style.setProperty('--tab-nav-height', height + 'px');
        rail.scrollTo({ left: active * rail.clientWidth, behavior: 'instant' });
        resizePending = false;
      });
    };
    const observer = new ResizeObserver(resize);
    observer.observe(header || document.body);
    observer.observe(rail);
    window.addEventListener('resize', resize);
    window.addEventListener('load', () => panels.forEach(typeset), { once: true });
    resize();
    if (active !== 0 || root.classList.contains('debut-resume') || location.hash) showStage();
    if (location.hash) move(active, 'none', location.hash);
    urls.forEach((url, index) => { if (index !== active) load(index); });
  };
  if (document.readyState !== 'loading') window.initializeTabNavigation();
  else document.addEventListener('DOMContentLoaded', window.initializeTabNavigation, { once: true });
})();

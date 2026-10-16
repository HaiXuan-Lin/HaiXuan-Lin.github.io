/* Run against generated HTML so HTML compression is covered by the check. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const filename = process.argv[2] || '_site/index.html';
const html = fs.readFileSync(filename, 'utf8');
const scripts = Array.from(html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi), match => match[1]);
const boot = scripts.find(script => script.includes("sessionStorage.getItem('debut:entered')"));
const interaction = scripts.find(script => script.includes("const main = document.getElementById('main')"));
const selector = scripts.find(script => script.includes("querySelectorAll('[data-debut-variant]')"));
assert(boot && interaction && selector, 'The generated homepage must contain all debut scripts.');
new vm.Script(interaction);

function bootState({ seen = false, hash = '', blocked = false } = {}) {
  const classes = new Set();
  const storage = {
    getItem(key) {
      if (blocked) throw new Error('Storage blocked');
      return key === 'debut:entered' && seen ? 'true' : null;
    },
  };
  const root = {
    classList: { add: value => classes.add(value), remove: value => classes.delete(value) },
    setAttribute() {},
    removeAttribute() {},
  };
  new vm.Script(boot).runInNewContext({
    document: { documentElement: root },
    sessionStorage: storage,
    localStorage: storage,
    location: { hash, pathname: '/' },
    matchMedia: () => ({ matches: false }),
    setTimeout: () => 1,
    window: {},
  });
  return { active: classes.has('debut-active'), resume: classes.has('debut-resume') };
}

assert.deepEqual(bootState(), { active: true, resume: false },
  'A fresh visit must open the welcome screen after HTML compression.');
assert.deepEqual(bootState({ seen: true }), { active: true, resume: true },
  'Returning visits must keep the welcome screen available above the homepage.');
assert.deepEqual(bootState({ hash: '#about-me' }), { active: true, resume: true },
  'Direct links must retain the welcome screen and let the browser navigate to content.');
assert.deepEqual(bootState({ blocked: true }), { active: true, resume: false },
  'Blocked storage must not disable the welcome screen.');

function selectedDiagram(mode, random = 0, ids = ['yoneda', 'pentagon', 'hexagon', 'yang-baxter']) {
  const figures = ids.map(id => ({ dataset: { debutVariant: id }, hidden: true }));
  const debut = { dataset: { debutSelection: mode }, querySelectorAll: () => figures };
  new vm.Script(selector).runInNewContext({
    document: { getElementById: () => debut },
    Math: { random: () => random, floor: Math.floor },
  });
  assert.equal(figures.filter(figure => !figure.hidden).length, 1,
    'Exactly one diagram must be visible.');
  return debut.dataset.debutDiagram;
}
['yoneda', 'pentagon', 'hexagon', 'yang-baxter'].forEach((id, index) => {
  assert.equal(selectedDiagram(id), id);
  assert.equal(selectedDiagram('random', (index + .5) / 4), id);
});
assert.equal(selectedDiagram('unknown'), 'yoneda');
assert.equal(selectedDiagram('custom', 0, ['custom']), 'custom');
console.log('PASS rendered debut scripts: syntax, fresh visit, returning visit, anchors, blocked storage');
console.log('PASS diagram selection: fixed choices, all random outcomes, fallback, and custom SVG');

/* Select once per page load, before the first welcome-screen animation. */
(() => {
  const debut = document.getElementById('debut');
  if (!debut) return;
  const figures = Array.from(debut.querySelectorAll('[data-debut-variant]'));
  if (!figures.length) return;
  const mode = debut.dataset.debutSelection;
  const selected = mode === 'random'
    ? figures[Math.floor(Math.random() * figures.length)]
    : figures.find(figure => figure.dataset.debutVariant === mode) || figures[0];
  figures.forEach(figure => { figure.hidden = figure !== selected; });
  debut.dataset.debutDiagram = selected.dataset.debutVariant;
})();

# LaTeX → HTML pipeline (LaTeXML)

Write notes/papers here as LaTeX and get a browsable HTML page instead of
(or in addition to) a PDF.

## Layout

Each document is a folder under `_tex/`, e.g.:

```
_tex/<slug>/main.tex        # source (+ any .bib, figures, etc. alongside it)
```

## Build

```
brew install latexml          # one-time
scripts/build_latex.sh        # build everything under _tex/
scripts/build_latex.sh <slug> # build just one document
```

This runs `latexmlc` and writes the result to `papers/<slug>/index.html`
(plus the CSS it references). `papers/` is a plain static directory, so
Jekyll serves it as-is at `/papers/<slug>/` — commit the generated output
along with the source.

## Linking from a report/project entry

Point the existing `link` front-matter field at the generated page instead
of (or in addition to) `download_link` for a PDF:

```yaml
link: "/papers/<slug>/"
link_label: "View HTML"
```

See `_reports/2026-07-20-latexml-demo.md` for a working example built from
`_tex/demo-note/main.tex`.

## Notes

- Math renders as native MathML with a MathJax fallback script for browsers
  with weaker MathML support — no extra config needed per document.
- `\href`/citations/etc. need their usual packages (`hyperref`, `natbib`,
  ...) in the `.tex` source, same as compiling with pdflatex.
- Build logs (`*.latexml.log`) are git-ignored; only rerun the script when
  the source changes.

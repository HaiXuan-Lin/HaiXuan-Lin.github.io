#!/usr/bin/env bash
# Convert every _tex/<slug>/main.tex into a browsable HTML page at papers/<slug>/index.html
# using LaTeXML. Requires `latexmlc` on PATH (`brew install latexml`).
#
# Usage:
#   scripts/build_latex.sh            # build all sources under _tex/
#   scripts/build_latex.sh demo-note  # build only _tex/demo-note

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TEX_DIR="$ROOT_DIR/_tex"
OUT_DIR="$ROOT_DIR/papers"

if ! command -v latexmlc >/dev/null 2>&1; then
  echo "error: latexmlc not found. Install with 'brew install latexml'." >&2
  exit 1
fi

targets=("$@")
if [ ${#targets[@]} -eq 0 ]; then
  for d in "$TEX_DIR"/*/; do
    targets+=("$(basename "$d")")
  done
fi

for slug in "${targets[@]}"; do
  src_dir="$TEX_DIR/$slug"
  src_tex="$src_dir/main.tex"
  dest_dir="$OUT_DIR/$slug"

  if [ ! -f "$src_tex" ]; then
    echo "error: $src_tex not found" >&2
    exit 1
  fi

  echo "==> Building $slug"
  mkdir -p "$dest_dir"

  (
    cd "$src_dir"
    latexmlc \
      --dest="$dest_dir/index.html" \
      --format=html5 \
      --javascript=https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-chtml.js \
      --navigationtoc=context \
      main.tex
  )

  # Prepend a small "back to site" link so the standalone page can return home.
  python3 - "$dest_dir/index.html" <<'PY'
import sys
path = sys.argv[1]
with open(path, "r", encoding="utf-8") as f:
    html = f.read()
marker = "<body>"
banner = (
    '<body>\n'
    '<div style="padding:0.5em 1em;font:14px -apple-system,sans-serif;'
    'background:#f5f5f5;border-bottom:1px solid #ddd;">'
    '<a href="/">&larr; Back to haixuan-lin.github.io</a></div>'
)
if marker in html and "Back to haixuan-lin.github.io" not in html:
    html = html.replace(marker, banner, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
PY

  echo "    -> $dest_dir/index.html"
done

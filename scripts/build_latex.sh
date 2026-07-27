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
FILES_DIR="$ROOT_DIR/files"
AR5IV_CSS="$ROOT_DIR/scripts/latexml-assets/ar5iv.css"
AR5IV_FONTS_CSS="$ROOT_DIR/scripts/latexml-assets/ar5iv-fonts.css"

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
      --nodefaultresources \
      --css="$AR5IV_FONTS_CSS" \
      --css="$AR5IV_CSS" \
      main.tex
  )

  # Drop stale copies of LaTeXML's default stylesheets from earlier builds;
  # the ar5iv CSS above fully replaces them.
  rm -f "$dest_dir/LaTeXML.css" "$dest_dir/ltx-article.css" "$dest_dir/ltx-amsart.css"

  # PDF companion, if the LaTeX source also builds one. _tex/ is excluded
  # from the Jekyll build (and its *.pdf is gitignored), so copy it into
  # files/, the tracked+included directory every other downloadable PDF on
  # the site lives in.
  pdf_href=""
  if [ -f "$src_dir/main.pdf" ]; then
    mkdir -p "$FILES_DIR"
    cp "$src_dir/main.pdf" "$FILES_DIR/$slug.pdf"
    pdf_href="/files/$slug.pdf"
  fi

  # Add a top bar (back / PDF / theme toggle) and wire the color theme to the
  # same localStorage key the main site's toggle uses, so the choice persists
  # across navigation between the site and this standalone page.
  python3 - "$dest_dir/index.html" "$pdf_href" <<'PY'
import re
import sys

path, pdf_href = sys.argv[1], sys.argv[2]
with open(path, "r", encoding="utf-8") as f:
    html = f.read()

if "paper-topbar" not in html:
    # Apply the stored/OS theme before first paint (mirrors assets/js/_main.js).
    no_flash_script = (
        '<script>(function(){'
        'var d=document.documentElement;'
        'var t=localStorage.getItem("theme");'
        'var theme=(t==="dark"||t==="light")?t:'
        '((window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light");'
        'if(theme==="dark"){d.setAttribute("data-theme","dark");}else{d.removeAttribute("data-theme");}'
        '})();</script>\n'
    )
    if "<head>" in html:
        html = html.replace("<head>", "<head>\n" + no_flash_script, 1)

    pdf_button = (
        '<a href="{href}" class="paper-topbar__btn" title="Download PDF">'
        '<svg class="paper-topbar__pdf-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        '<path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h4v1.5H8V10z"/>'
        '</svg>PDF</a>\n'
    ).format(href=pdf_href) if pdf_href else ""
    topbar = (
        '<style>\n'
        '.paper-topbar{position:sticky;top:0;z-index:1000;display:flex;align-items:center;'
        'justify-content:space-between;gap:0.5em;padding:0.5em 1em;'
        'font:14px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;'
        'background:#eef0f2;color:var(--text-color,#292929);'
        'border-bottom:1px solid var(--border-color,#ddd);'
        'box-shadow:0 1px 3px rgba(0,0,0,0.08);}\n'
        'html[data-theme="dark"] .paper-topbar{background:#161b22;'
        'box-shadow:0 1px 3px rgba(0,0,0,0.5);}\n'
        '.paper-topbar__group{display:flex;align-items:center;gap:0.5em;}\n'
        '.paper-topbar__btn{display:inline-flex;align-items:center;padding:0.25em 0.75em;'
        'border-radius:999px;border:1px solid var(--border-color,#ccc);background:transparent;'
        'color:inherit;text-decoration:none;font:inherit;cursor:pointer;line-height:1.4;}\n'
        '.paper-topbar__btn:hover{background:rgba(128,128,128,0.15);}\n'
        '.paper-topbar__icon-btn{padding:0.25em 0.55em;}\n'
        '.paper-topbar__pdf-icon{width:14px;height:14px;margin-right:0.35em;fill:#EC1C24;}\n'
        '</style>\n'
        '<div class="paper-topbar">\n'
        '<a href="/" class="paper-topbar__btn" title="Back" '
        'onclick="if(document.referrer){history.back();return false;}">&larr; Back</a>\n'
        '<div class="paper-topbar__group">\n'
        f'{pdf_button}'
        '<button type="button" id="paper-theme-toggle" class="paper-topbar__btn paper-topbar__icon-btn" '
        'aria-label="Toggle color theme" title="Toggle color theme">\U0001F319</button>\n'
        '</div>\n'
        '</div>\n'
        '<script>(function(){'
        'var btn=document.getElementById("paper-theme-toggle");'
        'function icon(){return document.documentElement.getAttribute("data-theme")==="dark"?"☀️":"\U0001F319";}'
        'function sync(){if(btn){btn.textContent=icon();}}'
        'sync();'
        'if(btn){btn.addEventListener("click",function(){'
        'var d=document.documentElement;'
        'var next=d.getAttribute("data-theme")==="dark"?"light":"dark";'
        'localStorage.setItem("theme",next);'
        'if(next==="dark"){d.setAttribute("data-theme","dark");}else{d.removeAttribute("data-theme");}'
        'sync();'
        '});}'
        '})();</script>\n'
    )
    html = html.replace("<body>", "<body>\n" + topbar, 1)

# Drop the "Generated on <date> by LaTeXML" footer credit.
html = re.sub(
    r'<footer class="ltx_page_footer">.*?</footer>',
    "",
    html,
    count=1,
    flags=re.DOTALL,
)

with open(path, "w", encoding="utf-8") as f:
    f.write(html)
PY

  echo "    -> $dest_dir/index.html"
done

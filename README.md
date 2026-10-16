# Haixuan Lin

This is the repository of my personal website. You can visit it at [https://haixuan-lin.github.io/](https://haixuan-lin.github.io/).

## Build with Docker

To run this repository locally, run:

```bash
docker compose build
docker compose up
```

then open `http://localhost:4000` and you can see the website.

## Swipe Navigation

The homepage and top-level navigation tabs share a continuous horizontal
content rail beside one fixed profile sidebar. On mobile the profile stays above
the content rail. Touch and trackpad input move only the content directly;
CSS scroll snapping settles each screen. Clicking a navigation tab scrolls to
that screen without reloading the document. Each screen scrolls vertically on its own.
The order follows the homepage and then the enabled entries in
_data/navigation.yml. The first and last tabs do not wrap around.

The welcome screen, vertical scrolling, text selection, interactive controls,
formulas, tables, and horizontally scrollable content retain their normal
behavior. The address bar, selected navigation tab, and browser history follow
the current screen. Navigation scrolling respects the reduced-motion preference.

The implementation is in _includes/tab-navigation.html,
assets/js/tab-navigation.js, and assets/css/tab-navigation.css.

## About This Website Template

Many thanks to the open-source GitHub repository [academicpages.github.io](https://github.com/academicpages/academicpages.github.io) for providing this elegant personal website template. I designed these pages primarily based on the template and its accompanying tutorials.

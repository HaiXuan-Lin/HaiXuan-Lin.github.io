/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Use the visitor's local time on every visit (06:00–18:00 is light).
let determineComputedTheme = () => {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? "light" : "dark";
};

// Set the theme on page load or when explicitly called
let setTheme = (theme) => {
  const use_theme = theme || determineComputedTheme();

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
};

// Toggle the theme for the current page without saving a preference.
var toggleTheme = () => {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  setTheme(new_theme);
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Table of contents for kramdown-rendered pages (page.toc: true)

   Headings get their ids from kramdown's auto_ids, so this just walks
   .page__content's headings and builds a nested list of anchor links -
   kramdown's own {:toc} marker can't be used here since content included
   via a layout (rather than a markdown source file) never passes through
   the markdown converter.
   ========================================================================== */

let initTableOfContents = () => {
  const menu = document.querySelector(".toc-sidebar .toc__menu");
  if (!menu) return;

  const content = document.querySelector(".page__content");
  const headings = content ? Array.from(content.querySelectorAll("h1, h2, h3, h4, h5, h6")).filter((h) => h.id) : [];

  const asideEl = menu.closest(".toc-sidebar");
  if (headings.length === 0) {
    if (asideEl) asideEl.remove();
    return;
  }

  const rootLevel = Math.min(...headings.map((h) => parseInt(h.tagName[1], 10)));
  const rootList = document.createElement("ul");
  rootList.className = "toc__menu";
  const stack = [{ level: rootLevel - 1, list: rootList }];

  headings.forEach((heading) => {
    const level = parseInt(heading.tagName[1], 10);
    while (stack.length > 1 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + heading.id;
    a.textContent = heading.textContent;
    li.appendChild(a);
    stack[stack.length - 1].list.appendChild(li);

    const childList = document.createElement("ul");
    li.appendChild(childList);
    stack.push({ level, list: childList });
  });

  rootList.querySelectorAll("ul").forEach((ul) => {
    if (!ul.children.length) ul.remove();
  });

  menu.replaceWith(rootList);

  // Scrollspy: highlight whichever heading is currently at the top of the viewport
  const linkByHash = new Map(Array.from(rootList.querySelectorAll("a")).map((a) => [a.getAttribute("href"), a]));
  let activeLink = null;
  const setActive = (link) => {
    if (activeLink === link) return;
    if (activeLink) activeLink.classList.remove("is-active");
    activeLink = link || null;
    if (activeLink) activeLink.classList.add("is-active");
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target);
      if (visible.length === 0) return;
      const topMost = visible.reduce((a, b) => (a.getBoundingClientRect().top < b.getBoundingClientRect().top ? a : b));
      setActive(linkByHash.get("#" + topMost.id));
    },
    { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
  );
  headings.forEach((heading) => observer.observe(heading));
};

/* ==========================================================================
   Copy-to-clipboard button for Rouge-highlighted code blocks
   ========================================================================== */

// Fallback for browsers/contexts without the async Clipboard API (e.g. non-HTTPS)
let legacyCopyText = (text) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }
};

let copyText = (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  return Promise.resolve().then(() => legacyCopyText(text));
};

let initCodeCopyButtons = () => {
  const blocks = document.querySelectorAll("div.highlighter-rouge, figure.highlight");

  blocks.forEach((block) => {
    const codeEl = block.querySelector("pre > code, pre.highlight");
    if (!codeEl) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "code-copy-btn";
    button.setAttribute("aria-label", "Copy code to clipboard");
    button.setAttribute("data-tooltip", "Copy");
    button.innerHTML =
      '<i class="fa-solid fa-copy code-copy-btn__copy" aria-hidden="true"></i>' +
      '<i class="fa-solid fa-check code-copy-btn__check" aria-hidden="true"></i>';

    let resetTimeout;
    button.addEventListener("click", () => {
      const text = codeEl.innerText.replace(/\n$/, "");
      copyText(text)
        .then(() => {
          clearTimeout(resetTimeout);
          button.classList.add("is-copied");
          button.setAttribute("data-tooltip", "Copied!");
          button.setAttribute("aria-label", "Copied to clipboard");
          resetTimeout = setTimeout(() => {
            button.classList.remove("is-copied");
            button.setAttribute("data-tooltip", "Copy");
            button.setAttribute("aria-label", "Copy code to clipboard");
          }, 1500);
        })
        .catch(() => {
          button.setAttribute("data-tooltip", "Failed to copy");
        });
    });

    block.appendChild(button);
  });
};

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // Start each visit with the local-time default.
  setTheme();

  // Restore the local-time default when returning through the back-forward cache.
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
      setTheme();
    }
  });

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);

  // Add copy-to-clipboard buttons to code blocks
  initCodeCopyButtons();

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Build the table of contents (if any) before smooth scroll binds to its links
  initTableOfContents();

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

});

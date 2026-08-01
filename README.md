# david-zeff-portfolio

Static portfolio site. Plain HTML, CSS and vanilla JavaScript — no build step, no npm, no
framework. The only external request the site makes is to Google Fonts for Inter.

**Fill in [`CONTENT-TODO.md`](CONTENT-TODO.md) before publishing** — 19 marked placeholders, all
on the case study pages, highlighted in yellow so they can't ship unnoticed.

## Preview locally

Just open it:

```bash
open index.html
```

Every path in the site is relative, so `file://` works — including the links between the homepage
and the case studies.

To exercise it the way a browser on a real host would (correct MIME types, working `robots.txt`
and `sitemap.xml`, no `file://` quirks):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Nothing needs installing for either.

## Deploy

**Netlify** — drag this folder onto the Netlify dashboard, or connect the repo. No build command,
no publish directory (leave both blank; the site root *is* the publish directory).

**GitHub Pages** — Settings → Pages → deploy from branch `main`, folder `/ (root)`. Relative
paths mean it works at `username.github.io/repo/` as well as at a custom domain, with no
`basePath` to configure.

One thing to update after deploying, if the domain is not `www.david-zeff-portfolio.com`: the
absolute URLs in `<link rel="canonical">`, the Open Graph and Twitter tags, `sitemap.xml` and
`robots.txt`. Find them all with:

```bash
grep -rn 'david-zeff-portfolio.com' index.html projects/ sitemap.xml robots.txt
```

## Structure

```
index.html                  Single page: hero, about, work, skills, experience, education, contact
projects/*.html             Four case studies — one file each, no shared template to build
css/style.css               Whole design system; tokens at :root, dark mode via prefers-color-scheme
js/main.js                  Nav disclosure, scrollspy, reveal-on-scroll. All optional enhancement.
assets/projects/*.png       Real chart captures from the live dashboards
assets/resume/*.pdf         All four CV variants (data-analyst / bi-analyst × en / he)
resume.pdf                  Copy of the Data Analyst EN CV — the hero download button
assets/og-image.png         1200×630 social card
assets/favicon.svg          Light/dark-aware SVG mark; .ico and apple-touch-icon are rasterised from it
```

### Editing the design

Everything visual is a custom property in the `:root` block at the top of `css/style.css`. The
palette is a neutral base plus **one** accent (`--color-accent: #1f3c5c`, the same navy as your
CV), used on links and nothing else. The primary button is ink-on-paper inverted rather than
accent-coloured, deliberately — it keeps exactly one loud element per screen.

Dark mode is a second token block under `@media (prefers-color-scheme: dark)`. No JS, no toggle,
no flash. Every foreground/background pairing in both themes clears WCAG AA (the lowest is 4.6:1).

Spacing, type and layout all use logical properties (`margin-inline`, `padding-block`,
`inset-inline-start`), so a Hebrew RTL variant needs `dir="rtl"` and translated content, not new
CSS.

### Regenerating the social card

`assets/og-image.png` is rendered from an HTML file with headless Chrome. If you change the hero
statement, change it there too:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars --window-size=1200,630 \
  --screenshot=assets/og-image.png --virtual-time-budget=6000 file:///path/to/og.html
```

## Notes

- **The CV PDFs are copies.** They're generated outside this repo, from
  `~/Desktop/Resumes/src/` (`python3 build_resumes.py`). Edit the content there and re-copy;
  don't edit the PDFs in place.
- **No contact form.** A static site can't process one without a third-party service, so the
  contact section is a real `mailto:` and a real `tel:` link instead.
- **Skills are labelled rows, not bars or ratings.** Deliberate — a percentage next to "SQL"
  means nothing, and reads as unserious to the people you want to hire you.
- **The homepage has no images.** The four charts are dark-panelled and one is light; mixing them
  as thumbnails looked inconsistent against a light minimal page, and a hiring manager scanning
  for 90 seconds is better served by the finding than by a 200px thumbnail. The charts appear
  full-size on the case study pages, where they have room to be read.

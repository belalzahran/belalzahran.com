# Personal Website — belalzahran.com

## Stack
- Vanilla HTML5 + SASS/CSS + jQuery — static site, no build tools or bundler
- Bootstrap 3 grid, Animate.css, Flexslider, jQuery Waypoints, Magnific Popup, Modernizr
- **Hosting:** GitHub Pages (CNAME: belalzahran.com) — deploy by pushing to `main`
- **GitHub:** https://github.com/belalzahran/belalzahran.com (public)
- **Dev preview:** `python3 -m http.server 4173`

## Pages
- `index.html` — project grid (landing)
- `Experience.html` — work history
- `contact.html`
- 4 original project pages: `circuits.html`, `vinflash.html`, `kumonStudentTracker.html`, `MedicineDispenser.html`

## Design System (after 2026-07-06 redesign)
- "Engineering Print" aesthetic - pure black & white, no accent color
- Fonts: **Archivo** variable (wdth 62-125 / wght 100-900, via font-stretch + font-weight) + **IBM Plex Mono** (spec labels) + **Amiri Quran** (Arabic signature)
- Palette: ink `#0a0a0a` / paper `#fafafa` / hairlines `#e2e2e2` (`#2b2b2b` on ink) / muted `#6f6f6f`
- Signature motifs: black-plate hero with ghost-outline بلال, full-row black inversion on work-item hover, nav self-inverts via `mix-blend-mode: difference`, all photos `grayscale(1)` until hovered
- Layout: black plate hero + marquee, white body, hairline title-block meta tables, prev/next p-nav on project pages
- Stylesheet: `css/site.css`
- Wistia embeds: `.video` wrapper must NOT carry its own padding-bottom - the inline `wistia_responsive_padding` div handles aspect ratio (double padding = dead space below the player)
- Old Bootstrap/animate/flexslider CSS files still present but unreferenced — safe to delete if desired

## Key Files
- `config.js` — resume PDF link, single source of truth
- `js/main.js` — scroll animations, mobile menu, fullheight, loader
- `data/` — project images/videos
- `sass/style.scss` → compiled `css/style.css` (legacy stylesheet)

## Videos
Embedded via Wistia with responsive padding-bottom trick. Different aspect ratios per project:
- Portrait: `175.9%`, `133.33%`
- Landscape: `56.25%`

## 2026-04-16 Redesign Notes
Replaced the freehtml5 template with the new Editorial Terminal design. All 7 pages rewritten. Added 5 new projects to the showcase alongside the original 4: FaceSwap (GPU-over-SSH), Life Dashboard, Qur'an Semantic Search, Finslik, Webber. No build step — pure static.

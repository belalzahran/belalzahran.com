# Personal Website - belalzahran.com

## Stack
- Plain static HTML + one stylesheet + one tiny script.
- No build step, no bundler, no jQuery, no framework.
- **Hosting:** GitHub Pages (CNAME: belalzahran.com), deploy by pushing to `main`.
- **GitHub:** https://github.com/belalzahran/belalzahran.com (public)
- **Dev preview:** `python3 -m http.server 4173`
- LIVE again since 2026-11-11: Pages is on (source `main` / root), custom domain `belalzahran.com`, HTTPS enforced.
- The domain is verified on Belal's GitHub account through the Namecheap TXT record `_github-pages-challenge-belalzahran`; keep that record.
- If the custom domain is ever refused as "already taken", re-verify it under account Settings > Pages, then `gh api -X PUT repos/belalzahran/belalzahran.com/pages -f cname=belalzahran.com` and `gh api -X POST repos/belalzahran/belalzahran.com/pages/builds`.
- Work history rows carry company logos in `data/logos/` (icons from each company's own site).
- Every resume link opens in a new tab; the PDF at `data/Belal_Zahran_Resume.pdf` contains his phone number (he has been told; swap in a phone-free copy if he asks), and it must be re-copied whenever the resume changes.

## Pages
- `index.html` - the whole portfolio on one page: hero, Experience, Projects, Workbench (photo collage), Skills, Education, Contact.
- `pace.html` - PACE story (version 1 on a Raspberry Pi, then the 2026 rebuild).
- `vinflash.html` - Karma Automotive VIN flasher.
- `MedicineDispenser.html` - 3D-printed ESP32 medication dispenser.
- `circuits.html` - ATmega32 breadboard projects.
- `Experience.html`, `contact.html`, `kumonStudentTracker.html` - meta-refresh redirect stubs so old URLs keep working.
- They point to `index.html#experience`, `index.html#contact` and `pace.html`.

## Content rules (from Belal, 2026-11-11)
- The resume (`data/Belal_Zahran_Resume.pdf`) is the source of truth for experience wording.
- When the resume changes, copy the new PDF over that file and update the bullets in `index.html` to match.
- Only facts from the resume, `~/job-hunt/profile.md`, or the presentation; never invent metrics.
- Experience order: Meta, VistraTec, PACE, AONDevices, Karma Automotive, then education.
- Spelling is exactly "VistraTec"; never "EyeDeal Tech", never "solo" for VistraPM.
- PACE: "dozens of Kumon centers across 9 US states", "1,200+ students and 19,000+ check-ins".
- Never a specific PACE center count, never a revenue claim.
- Meta: keep internal system names generic.
- No phone number and no home address anywhere in the HTML.
- No em dashes in copy.
- No typing animations, skill bars, emoji bullets or buzzword filler.
- The screenshots of Finslik and the Life Dashboard from the presentation collage were left out on purpose because they show personal data.
- The photo of a student at the iPad kiosk was left out on purpose.

## Design system (dark rebuild, 2026-11-11)
- Dark theme on a blue-graphite background, warm off-white text, and a single amber accent.
- Palette: bg `#0f1318`, raised `#161b22`, hairline `#262d38`, text `#ecebe7`, muted `#9ba3ae`, accent `#f0b35a`.
- All colors are CSS custom properties at the top of `css/site.css`.
- Fonts: **Bricolage Grotesque** for headings and the name (the same family as the PACE logo), **IBM Plex Sans** for text.
- Both load from Google Fonts with `display=swap`.
- No monospace labels, no all-caps eyebrows, no numbered section markers.
- The one loud element is the name in the hero, set at `min(14.5vw, 11.25rem)` on a single line.
- Keep everything else quiet: hairline dividers, generous section padding, left-aligned text.
- The amber accent is for the role line, job titles, the resume button and in-prose links only.
- Layout width is `72rem` with a fluid gutter; two-column grids collapse to one column below `56rem` or `48rem`.
- Experience rows are a date column plus content, because the dates are the structure.
- Featured projects alternate image and text sides with `.feature--flip`.
- The Workbench collage (`.board` and `.tile`) is rebuilt natively from the presentation collage.
- Each tile carries its position as custom properties on a 1280 x 720 grid: `--x --y --w --h --r --z`.
- At `48rem` and up the tiles are absolutely positioned, rotated and overlap like prints on a table; hover straightens a tile.
- Below `48rem` the same tiles fall into a two-column masonry with no rotation.
- Short muted clips use `<video data-inview>`; `js/site.js` plays them only while on screen.
- With reduced motion on, clips stay paused and get native controls.
- There is no scroll-reveal animation anywhere; do not add one.
- Every `<img>` has real `width` and `height` attributes so nothing shifts while loading.
- Focus is a 2px amber outline; there is a skip link on every page.
- Project pages share one template: back link, `h1`, lead, `.facts` list, galleries, `.prose`, `.pager`.

## Key files
- `css/site.css` - the only stylesheet.
- `js/site.js` - in-view video playback, nothing else.
- `data/pace/`, `data/vin/`, `data/dispenser/`, `data/workbench/` - web-sized media (largest photo is about 320 KB).
- `data/Belal_Zahran_Resume.pdf` - the resume linked from every page.
- The header, footer and `<head>` are repeated by hand in each page; change all five when one changes.

## Media sources
- VIN flasher, dispenser and version 1 kiosk photos came from the previous site's `data/` folder, resized.
- Collage clips, desk photo, install photos and PACE demo screenshots came from the 2026-11 RVT interview deck.
- Workbench photos (printer, tools, parts drawers, bench supply) came from `~/Desktop/RVT Presentation Media/`.
- PACE screenshots are from the local demo environment with fictional names; say so in the caption.
- On macOS the filesystem is case-insensitive: never create `data/vin` while `data/VIN` exists, they are the same folder.

## Videos
- Longer demos are Wistia embeds, kept from the old site.
- The `.video` wrapper must NOT carry its own padding-bottom; the inline `wistia_responsive_padding` div sets the aspect ratio.
- Padding values: portrait `175.9%` and `133.33%`, landscape `56.25%`.

## History
- 2026-04-16: replaced the freehtml5 template with the "Editorial Terminal" design.
- 2026-07-06: black-and-white "Engineering Print" redesign (checkpoint commit `648f8ca`).
- 2026-11-11: dark rebuild on branch `redesign-dark-2026-11`; jQuery, Bootstrap, SASS and all template assets removed.

# SGR Decorators — Website

Marketing website for **SGR Decorators**, a wedding and event decoration company in Bengaluru, founded 1999. Static multi-page site (HTML/CSS/vanilla JS, no build step).

**Pages:** `index.html` (home) · `weddings.html` (flagship service) · `beyond-decor.html` (engagements, religious functions, birthdays, corporate) · `gallery.html` · `about.html`

**Primary conversion action:** "Book a Free Consultation" button (links to [topmate.io/sgrdecorators](https://topmate.io/sgrdecorators)), present in the header, mobile nav, floating CTA, and at the end of each page.

## Design logic

- **Brand feel:** premium but warm, rooted in South Indian wedding tradition (marigold, mandap carving, ritual photography) rendered with restraint — one saturated accent color per screen, generous whitespace, real event photography carrying the visual weight instead of illustration or flat color blocks.
- **Color system** (`css/tokens.css`): maroon `#7A1429` as the single primary-action color (CTA fills, active nav); warm ivory/canvas backgrounds instead of stark white; gold `#B8924A` for hairlines and accents; deep-green, dusty-rose, and marigold as tonal panel colors for story sections, testimonials, and stats — never two saturated panels back-to-back.
- **Typography:** serif **Cormorant Garamond** for headlines/quotes (editorial, elegant), sans **Poppins** for body/UI (clean, modern), mono **JetBrains Mono** uppercase for eyebrow/section labels — a serif+sans pairing chosen because it reads as premium for Indian wedding audiences, versus an all-sans system that reads cold against wedding photography.
- **Shape & spacing:** pill-shaped buttons throughout, 24px-radius cards, circular icon badges, generous 96px (desktop) / 56px (mobile) section rhythm.
- **Service taxonomy** (consistent across all pages): Mandap & Stage · Floral Design · Lighting · Draping & Tenting · Full Event Styling · Catering.

## Structure

```
index.html, about.html, weddings.html, gallery.html, beyond-decor.html
css/        tokens.css (design tokens), style.css, mobile-nav.css
js/main.js  scroll reveals, marquee, mobile nav, gallery/lightbox behavior
assets/images/   optimized site imagery
robots.txt, sitemap.xml, .htaccess   SEO + Hostinger deploy config
```

## Local preview

```
npx serve -l 4321 .
```

## Deployment

Hosted on Hostinger (shared hosting). Deploys via hPanel's Git integration pulling from this repository.

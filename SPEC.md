# SGR Decorators — Website Spec (Phase 2)

Status: draft for review. Anything marked **[CONFIRM WITH CLIENT]** is a placeholder — plausible, well-written, but not real data. Do not let these ship unverified.

Sign-off from Phase 1:
- Design: hybrid — Figma system's structural discipline, rebuilt on a wedding-appropriate palette; photography carries visual weight instead of flat color blocks.
- Scope: weddings-led. Other event types share one secondary page.
- Primary CTA everywhere: **"Book a Consultation."**
- Placeholder content drafted and flagged, not left blank.

---

## 1. Design Tokens

Adapted from `DESIGN-figma.md`. Where the source system specified a literal value (radii, spacing, button shape, type-weight discipline), it's kept — those are system-agnostic. Where it specified an actual SaaS color/type choice, it's replaced per the wedding-photography-led direction agreed in Phase 1.

### Colors

| Token | Value | Use |
|---|---|---|
| `color.primary` (maroon) | `#7A1429` | Primary CTA fill, active nav state, key headline accents — the system's "black," used scarcely and deliberately |
| `color.on-primary` | `#FBF3E7` | Text on maroon fills |
| `color.ink` | `#26201C` | Body text, headlines on light surfaces (warm charcoal, not pure black) |
| `color.canvas` | `#FBF6EE` | Default page background (warm ivory, not stark white) |
| `color.canvas-white` | `#FFFFFF` | Card surfaces, form fields, gallery mattes |
| `color.gold` | `#B8924A` | Secondary accent — dividers, icon strokes, hairline borders, eyebrow underlines |
| `color.gold-soft` | `#E8D9B8` | Tinted backgrounds behind stat counters, hover states |
| `color.hairline` | `#E7DFD0` | 1px borders on cards, inputs, dividers |
| `color.deep-green` | `#2F4734` | Inverse story panel (replaces Figma's navy block) — used once, for the founder/legacy section |
| `color.dusty-rose` | `#E7CFC9` | Tonal panel — testimonials |
| `color.marigold` | `#E8A33D` | Tonal panel — stats/why-choose-us; also FAQ accordion accent |
| `color.success` | `#2F6B3E` | Form success states, FAQ checkmarks |
| `color.scrim` | `#1A1410` at 55–70% | Gradient overlay on hero/banner photography for text legibility |

Rule carried from Figma doc: **never show two saturated panels in the same viewport** — white/ivory canvas always separates them. Maroon stays reserved for the one primary action per view (don't let two `button-primary` instances compete in one screen).

### Typography

| Token | Family | Size | Weight | Line-height | Use |
|---|---|---|---|---|---|
| `display-xl` | Serif — Cormorant Garamond | 72px (48px mobile) | 600 | 1.05 | Hero headline |
| `display-lg` | Cormorant Garamond | 48px (34px mobile) | 600 | 1.10 | Section openers |
| `headline` | Cormorant Garamond | 28px | 600 | 1.3 | Story-panel titles, card titles |
| `subhead` | Sans — Poppins/Lato | 22px | 400 | 1.4 | Lead paragraphs under headlines |
| `body` | Poppins/Lato | 17px | 400 | 1.55 | Default body copy |
| `body-sm` | Poppins/Lato | 15px | 400 | 1.5 | Captions, footer, form helper text |
| `button` | Poppins/Lato | 16px | 600 | 1 | All pill buttons |
| `eyebrow` | Mono — JetBrains Mono | 13px | 500 | 1.3, +0.06em tracking | Uppercase section labels ("WEDDINGS · BANGALORE") |

Rationale: the research is explicit that a serif/sans pairing reads as premium for Indian wedding audiences; figmaSans (single-voice variable sans for everything, including headlines) was built for a software brand and reads cold against marigold-and-gold photography. The mono eyebrow label is kept from the Figma system — it's a useful, neutral taxonomy device that doesn't fight the wedding aesthetic.

### Shape & Spacing

Kept as-is from the Figma system — these are aesthetic-neutral:
- Radii: `xs` 2px, `sm` 6px, `md` 8px (image frames, inputs), `lg` 24px (cards, panels), `pill` 50px (all CTAs), `full` (icon buttons).
- Spacing: 8px base unit; `section` = 96px vertical rhythm between major sections (56px on mobile).
- Buttons: pill-shaped only, no square CTAs anywhere on the site.

### Components (deltas from Figma source)

- **`button-primary`**: maroon fill, ivory text, pill. Used once per viewport.
- **`button-secondary`**: ivory fill, maroon text, 1px gold hairline border (a real border, unlike Figma's borderless version — needed because canvas is already off-white, not white-on-white).
- **`story-panel`**: replaces `color-block-section`. Either (a) a full-bleed photo with scrim + overlaid text, or (b) a flat tonal panel (dusty-rose / marigold / deep-green) for testimonials, stats, and FAQ — never a literal lime/lilac/navy.
- **`stat-counter`**: number in `display-lg`, label in `eyebrow`, animates count-up on scroll-into-view, fires once.
- **Gallery lightbox, accordion (FAQ), 2-step form**: new components, not in the source system — specified per page below.

---

## 2. Sitemap

```
Home
Weddings (flagship)
  ├─ Mandap & Stage
  ├─ Floral Design
  ├─ Lighting
  ├─ Draping & Tenting
  └─ Full Event Styling & Coordination
Other Celebrations
  ├─ Engagements
  ├─ Religious Functions
  ├─ Birthdays & Anniversaries
  └─ Corporate Events
Gallery
About
Testimonials
FAQ
Contact
```

Header nav: Home · Weddings · Celebrations · Gallery · About · Contact (Testimonials and FAQ are linked from Home/footer, not primary nav — keeps nav at 6 items per research guidance on 4–7 item navs). WhatsApp icon + "Book a Consultation" pill pinned right, all breakpoints.

---

## 3. Page-by-Page Spec

### 3.1 Home

| # | Section | Content | Notes |
|---|---|---|---|
| 1 | Sticky header | Logo (left), nav, WhatsApp icon, "Book a Consultation" pill | Shrinks ~8px height + gains soft shadow after 80px scroll |
| 2 | Hero | BG image: `Muhurtha 02.jpg` (carved mandap, red/gold, geometric ceiling) with bottom-up scrim. Eyebrow: "BANGALORE · SINCE 2007". Headline: *"Crafting Memorable Celebrations with Creative Decor."* Subhead: *"18 years of weddings, [X]+[CONFIRM] events, one team that handles every detail of the decor — Bangalore and beyond."* Primary CTA "Book a Consultation" + secondary ghost CTA "View Our Work" | Subtle slow zoom (104%→100% over 8s) on hero image only, no other motion; respects `prefers-reduced-motion` |
| 3 | Trust marquee | Scrolling ribbon, deep-green bg, ivory text: "18+ Years" • "[X]+ Events [CONFIRM]" • "Bangalore & Destination Weddings" • "500+ Happy Families [CONFIRM]" | Infinite scroll marquee, pauses on hover/tap |
| 4 | Services overview | "What We Create" — 5 cards: Mandap & Stage, Floral Design, Lighting, Draping & Tenting, Full Event Styling. Icon + 1-line description, links to Weddings page anchor | Card lifts 4px + soft shadow on hover |
| 5 | Flagship gallery teaser | "Real Weddings, Real Moments" — horizontal scroll-snap strip, 5 images: `amish-thakkar-BEdxXAiRfRM`, `pexels-thevisionaryvows-33417233`, `Reception Photo (1).jpg`, `pexels-khaas-photographer`, `pexels-keyurmali7-7153785`. CTA "See Full Gallery →" | Drag-to-scroll on desktop, native swipe on mobile |
| 6 | Why Choose Us / stats | Marigold tonal `story-panel`. Headline *"A Proven Track Record"* + 4 `stat-counter`s: Years (18), Events ([X] CONFIRM), Repeat Clients (% CONFIRM), Avg. Response Time ("Within 24 Hrs"). Supporting line from existing copy: *"We don't just decorate events — we craft experiences that leave a lasting impression."* | Counters animate once on scroll-into-view |
| 7 | Testimonials | Dusty-rose tonal `story-panel`. Swipeable cards (1-up mobile, 3-up desktop), each tagged by event type. Pulled from `sgr_content.md`, completed per placeholder policy | See §5 for cleaned testimonial copy |
| 8 | Instagram strip | "Follow Along @sgrdecorators" — 6-image grid linking out, "Follow Us" button | Static grid, no embed (avoids third-party script weight) |
| 9 | Final CTA banner | Full-bleed deep-green panel: *"Ready to Plan Your Perfect Event?"* / *"Let us handle the details, so you can cherish every moment of your special day."* — Book a Consultation + WhatsApp buttons side by side | |
| 10 | Footer | Logo + 1-line blurb, Quick Links, Services, Contact (address, phone, email), Instagram icon, "© SGR Decorators. All Rights Reserved." | |

### 3.2 Weddings (flagship page)

- **Banner**: shorter hero (60vh), image `amish-thakkar-BEdxXAiRfRM.jpg` (ballroom chandelier + gold/white floral arch), eyebrow "HOME / WEDDINGS", headline *"Exquisite Wedding Decor."*
- **Intro**: 2–3 line positioning paragraph (existing copy: mandaps, floral, lighting, thematic decor blending tradition and modern aesthetics).
- **In-page sub-nav**: sticky pill-tab row (desktop) / horizontal scroll chips (mobile) — Mandap & Stage · Floral · Lighting · Draping & Tenting · Full Styling. Smooth-scroll to anchor.
- **Category sections** (alternating image-left/text-right, full-bleed image right on mobile):
  | Category | Copy direction | Images |
  |---|---|---|
  | Mandap & Stage | "Bespoke mandap designs that blend tradition with modern aesthetics." Custom + themed mandaps. | `Muhurtha 02.jpg`, `pexels-thevisionaryvows-33417233.jpg` (Rajasthani rose mandap), `pexels-thevisionaryvows-33417234.jpg` (pastel mandap) |
  | Floral Design | "Exquisite floral arrangements for mandaps, stages, aisles, and centerpieces." | `Reception Photo.jpg`, `pexels-khaas-photographer-3700378-31832874.jpg`, `pexels-thevisionaryvows-33485955.jpg` |
  | Lighting | "From subtle mood lighting to dazzling displays — LEDs, chandeliers, string lights." | `Reception Photo (1).jpg`, `pexels-aperture-fotography-1272397970-23953090.jpg` |
  | Draping & Tenting | "Elegant shamiyanas, tents, and fabric draping for indoor and outdoor setups." | `pexels-aperture-fotography...jpg` (reuse, draping focus), `pexels-camera-treasure-928922-16840838.jpg` |
  | Full Event Styling & Coordination | "Venue layout, furniture, props, on-site coordination from concept to execution." | `pexels-thevisionaryvows-32994468.jpg` (table styling), `pexels-thevisionaryvows-33485972.jpg` (styled detail table) |
- **Process strip**: "How We Work" horizontal stepper — Consultation → Concept & Design → Execution → On-Day Coordination → Takedown (ties directly to FAQ's setup/takedown answer).
- **Wedding testimonials**: 2–3 wedding-specific quotes, dusty-rose panel.
- **Closing CTA**: "Start Planning Your Wedding" → Book a Consultation.

**Bonus material available but unused above** (ritual/ceremony photography — haldi, mehendi, ring exchange, varmala): these don't fit the "decor services" categories cleanly but are some of the most emotionally vivid images in the set. Recommend a **"Moments We've Decorated For"** sub-section on this page — a tighter grid using `pexels-keyurmali7-7153822`, `pexels-rohit-sharma-1230131-30891939`, `one-horizon-productions-lAze38kfdAs`, `pexels-the-shaanphotography-1496986664-27286970`, `vitaliy-lyubezhanin-gfVofr15ICc`, `prajna-amey-zSX9_MM_pSA` — framed around ceremony moments (haldi, mehendi, varmala, ring exchange) the decor sets the stage for, rather than as standalone "services."

### 3.3 Other Celebrations

- **Banner**: shorter hero, ivory background with marigold tonal overlay (no strong photo match exists for this page — see gap note below).
- **Grid of 4 cards** — Engagements, Religious Functions (Gruhapravesha/Poojas), Birthdays & Anniversaries, Corporate Events. Each: image + 2–3 line description (from `sgr_content.md` service descriptions) + "Enquire" link.
  - Engagements: can reasonably use `prajna-amey-zSX9_MM_pSA.jpg` or `vitaliy-lyubezhanin-gfVofr15ICc.jpg` (ring-exchange imagery).
  - Religious Functions: no direct image in the set; closest is `one-horizon-productions-lAze38kfdAs.jpg` (homam/fire ritual) — usable but it's a wedding ritual shot, not a housewarming/pooja. Flag for client.
  - Birthdays & Anniversaries: **no matching image exists in the supplied library.** Use a tonal/illustrative card (no photo) until real photos are supplied.
  - Corporate Events: **no matching image exists.** Same treatment.
- **Closing CTA**: shared Book a Consultation panel.

> **Gap to flag**: the photo library is ~95% wedding-function photography. Corporate and birthday cards will look thin without dedicated images. Recommend requesting 2–3 photos per category from the client before Phase 3 build of this page, or shipping it photo-light by design (text + icon cards) until then.

### 3.4 Gallery

- Filter pills: All · Mandaps · Floral · Lighting · Draping · Mehendi & Haldi · Reception · Engagements.
- Masonry grid, lazy-loaded, all 26 supplied images tagged into the categories above.
- Click opens lightbox: swipe/arrow-key navigation, captioned per existing alt-text conventions ("Elegant wedding mandap decoration by SGR Decorators").

### 3.5 About

- **Founder story panel**: deep-green `story-panel`, no photo available (flag: no team/founder photo in the supplied set — request from client). Copy from existing content: Deepak's founding story, 2007, vision and craft.
- **Values strip**: 4–5 icon + short-text value props from "Why Choose SGR Decorators" copy.
- **Team**: text-led ("experienced designers, skilled artisans, dedicated coordinators") since no team photography exists — icon/pattern treatment, not photo grid, until real photos are available.
- **Stats recap**: reuse `stat-counter` component from Home.

### 3.6 Testimonials

- Full card grid of all testimonials (wedding, Gruhapravesha, birthday, corporate, engagement), filterable by event type.
- Reserved badge slot for Google/JustDial rating — empty state until client provides a link/score.
- CTA: "Have we decorated your event? We'd love to hear from you." → Contact.

### 3.7 FAQ

- Accordion, one open at a time, gold accent on active item.
- All 7 existing questions, with cleaned/completed answers (see §5).
- Closing CTA: "Still Have Questions?" → Contact.

### 3.8 Contact

- **2-step enquiry form** (research-backed):
  - Step 1: Name, Phone, Email, Event Date, City. Progress dots (1 of 2).
  - Step 2: Event Type (dropdown: Wedding / Engagement / Religious Function / Birthday / Anniversary / Corporate), Approx. Budget Range (optional), Notes.
  - Inline validation, gold focus ring, slide transition between steps.
- WhatsApp button (large, top of page) + tap-to-call number + email, all visible without scrolling on mobile.
- Address: Govindappa Road, Gandhi Bazaar, Basavanagudi, Bangalore, Karnataka 560004 + embedded map.
- Response-time line: *"We typically respond within 24 hours."*
- Instagram link.

---

## 4. Global UX & Interaction Notes

- **Mobile-first**, sticky bottom bar on mobile: WhatsApp + "Book a Consultation," always thumb-reachable, hides on scroll-down/reveals on scroll-up.
- **Scroll reveals**: sections fade + rise 16px on enter, staggered ~80ms per child in grids; one-shot, honors `prefers-reduced-motion`.
- **Hero**: slow background zoom only; no carousel auto-rotation (research flags auto-rotating hero carousels as a conversion drag — static image + clear CTA outperforms).
- **Gallery/card hover**: 1.02 scale + shadow, 200ms ease.
- **Forms**: 44px+ tap targets throughout, gold focus rings, no fill-color change on focus (per Figma source's input pattern).
- **Performance**: all images served as WebP with the original as fallback, lazy-loaded below the fold, target sub-3-second load per research.
- **Accessibility**: descriptive alt text on every image (extending the existing alt-text convention from the old site), 4.5:1 minimum contrast on all text-over-photo treatments via the scrim token.

---

## 5. Content — Cleaned Copy with Placeholders Flagged

### Hero / Taglines (no changes needed, already clean)
- "Crafting Memorable Celebrations with Creative Decor."
- "Your Dream Event Awaits."
- "Join Us in Crafting Your Next Memory."

### Stats **[CONFIRM WITH CLIENT — all numbers below are placeholders]**
- Years in business: **18+** (derived from 2007 founding — likely accurate, low risk)
- Events completed: **500+** *(placeholder — old site implies "many," true count unknown)*
- Repeat/referred clients: **40%** *(placeholder)*
- Response time: "Within 24 hours" *(commitment, not a stat — safe to ship as a service promise rather than a measured claim)*

### Testimonials (completed, flagged)
1. *"SGR Decorators turned our wedding venue into a fairytale! The floral arrangements with marigolds and roses were breathtaking, and the lighting was magical. Deepak and his team were professional, creative, and paid attention to every detail — we couldn't have asked for a better experience.[CONFIRM ENDING]"* — **[Couple name — CONFIRM]**
2. *"The decorations for our Gruhapravesha were simply divine. SGR Decorators understood our traditional requirements perfectly, using fresh green garlands and marigolds, and added their creative touch to make it even more special. Thank you for making our day so memorable."* — **The Sharma Family**
3. *"SGR did a fantastic job for my daughter's 1st birthday party. The thematic decoration was a huge hit with the kids and adults alike. Very creative and accommodating to our requests for a festive, colorful setup.[CONFIRM ENDING]"* — **[Name — CONFIRM]**
4. *"We hired SGR for our annual corporate gala, and they exceeded all expectations. The decor was elegant and sophisticated with beautiful gold and ivory touches, perfectly matching our brand's image. Punctual, reliable, and professional throughout.[CONFIRM ENDING]"* — **[Corporate client name — CONFIRM]**
5. *"From the initial consultation to the final execution, SGR Decorators were a dream to work with. They transformed our engagement venue beautifully with stunning rose pink and gold elements. Their creativity and professionalism made the entire process stress-free.[CONFIRM ENDING]"* — **Priya & Rohan S.**

### FAQ (completed, flagged where the source was truncated)
1. **What types of events do you decorate?** — Weddings, engagement ceremonies, corporate events, religious functions (Gruhapravesha, poojas), birthday parties, anniversaries, and other private celebrations.
2. **What areas do you serve?** — Primarily Bangalore and surrounding regions. *"For events outside this area, including destination weddings, please contact us to discuss possibilities — we may be able to travel for the right event.[CONFIRM]"*
3. **What is the booking process?** — Initial consultation → concept & design proposal → finalize scope and timeline → execution → on-day coordination → takedown.
4. **How far in advance should I book?** — 6–12 months recommended for weddings and large events; 1–3 months for smaller events. *"Don't hesitate to reach out for last-minute requests — we'll always try to accommodate where possible.[CONFIRM]"*
5. **Do you handle setup and takedown?** — Yes — full setup before the event and professional takedown after, so you can relax and enjoy your celebration without worrying about logistics.
6. **Do you offer customized decoration packages?** — Yes. We don't offer fixed packages — every quote is built around your vision, preferences, and budget. *[CONFIRM — verify "no fixed packages" is still the client's policy]*
7. **Can you work with a specific theme I have in mind?** — *"Yes, we love bringing themes to life — from traditional South Indian motifs to fully custom, modern concepts.[CONFIRM — full answer not in source]"*

---

## 6. Consolidated Open Items for Client / Sign-off

1. Real event count and any breakdown by event type (weddings vs. corporate vs. religious, etc.).
2. Full, verified testimonial text and attributions for all 5 quotes above.
3. Confirmed FAQ answers for service area, booking lead time, and "no fixed packages" policy.
4. 2–3 photos each for **Corporate Events** and **Birthdays/Anniversaries** — the current library has none.
5. At least one founder/team photo for the About page.
6. Confirm whether destination weddings outside Bangalore (Rajasthan/Goa-style, per several supplied photos) are an active service line worth its own callout, or those photos are reference/inspiration only.
7. Google/JustDial rating link, if one exists, for the Testimonials page badge.

---

Review this however's easiest — comment inline, strike sections, or just tell me what to change. Once you sign off, Phase 3 starts with the Home hero section.

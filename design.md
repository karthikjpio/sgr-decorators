# SGR Decorators — Brand & Design System

Reference doc for building anything outside the website in this same visual identity — PowerPoint decks, Instagram posts/stories, brochures, ads, signage, etc. Pulled from the live site's `css/tokens.css` and `css/style.css`, plus the brand voice established across the site copy.

---

## 1. Brand Identity

- **Name:** SGR Decorators
- **Tagline:** "We Create, You Celebrate"
- **Secondary tagline:** "Crafting Moments & Memories Since 1999"
- **Founded:** 1999, by **Javanappa** (Founder & Chairman) — 27+ years in business (Bengaluru). Today led by his son, **Deepak Jp** (Managing Director), who carries the legacy forward.
- **Positioning:** Premium, wedding-led event decor — mandaps, floral, lighting, draping, full styling, catering. Also serves engagements, religious functions, birthdays/anniversaries, corporate events. Coordinates a trusted partner network for "Complete Wedding Solutions" (makeup, mehendi, photography, cinematography, transportation, DJ, entertainment, event coordination) beyond its own in-house decor services.
- **Service area:** Bengaluru & surrounding regions, plus destination weddings.
- **SEO city term:** Visible site copy always says "Bengaluru." Meta titles/descriptions, schema, and alt text additionally include "Bangalore" for search reach — the two terms are split by layer, not mixed in user-facing copy.
- **Address:** Govindappa Road, Gandhi Bazaar, Basavanagudi, Bengaluru 560004
- **Phone:** +91 97407 11235
- **Email:** sgrdecorators@gmail.com
- **Instagram:** instagram.com/sgrdecorators
- **Primary CTA (always):** "Book a Consultation"

### Brand personality
Premium but warm — not corporate-cold, not garish. Rooted in South Indian wedding tradition (marigold, mandap carving, ritual moments) rendered with restraint: one accent color per surface, generous whitespace, serif headlines for elegance, clean sans body copy for readability. Photography carries the emotional weight; the graphic system stays quiet around it.

---

## 2. Color Palette

| Name | Hex | Role |
|---|---|---|
| **Maroon** (Primary) | `#7A1429` | Primary CTA fill, active nav state, key accents. The "hero" brand color — used scarcely and deliberately, never more than one saturated primary action per screen. |
| **Ivory** (On-Primary / text-on-maroon) | `#FBF3E7` | Text on maroon fills, text on dark photo overlays |
| **Ink** (body text) | `#26201C` | Warm charcoal — body copy, headlines on light backgrounds. Never pure black. |
| **Canvas** (page background) | `#FBF6EE` | Default warm-ivory background — not stark white |
| **Canvas White** | `#FFFFFF` | Card surfaces, form fields, photo mattes |
| **Gold** | `#B8924A` | Secondary accent — dividers, icon strokes, hairline borders, eyebrow underlines |
| **Gold Soft** | `#E8D9B8` | Tinted backgrounds behind icon badges, stat counters, hover states |
| **Hairline** | `#E7DFD0` | 1px borders on cards, inputs, dividers |
| **Deep Green** | `#2F4734` | Inverse/dark panel — founder story, legacy sections, final CTA banners |
| **Dusty Rose** | `#E7CFC9` | Tonal panel — testimonials, team section |
| **Marigold** | `#E8A33D` | Tonal panel — stats / "why choose us" |
| **Success Green** | `#2F6B3E` | Confirmation states only |
| **Scrim** | `#1A1410` at 55–88% opacity | Dark gradient overlay on photos for text legibility |

**Hard rule:** never place two saturated tonal panels (marigold / rose / deep-green) back-to-back — always separate with the ivory canvas or white. Maroon is the single "primary action" color per screen; don't let two maroon CTAs compete in one view.

**For social/print, suggested palette pairing per mood:**
- *Romantic/floral post:* ivory background + maroon headline + gold accents
- *Festive/celebratory post:* marigold panel + maroon text + ivory
- *Premium/legacy post (About, founder, milestones):* deep green background + ivory text + gold accent line
- *Testimonial/quote card:* dusty rose background + ink text + maroon name attribution

---

## 3. Typography

| Token | Font | Size (web ref) | Weight | Use |
|---|---|---|---|---|
| Display / Headline | **Cormorant Garamond** (serif) | 72px hero / 48px section / 28px card | 600 | All headlines, taglines, names, quotes — the elegant, editorial voice |
| Body / UI | **Poppins** (sans) | 17px body / 22px lead / 16px button | 400–600 | Body copy, buttons, nav, captions — the clean, modern voice |
| Eyebrow / Label | **JetBrains Mono** (mono) | 13px | 500, +0.06em tracking, UPPERCASE | Section labels, category tags, stat labels ("BENGALURU · SINCE 1999") — a crisp taxonomic accent |

**Google Fonts import** (use this exact line in any HTML/embed context):
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Poppins:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap
```

**Pairing rule for decks/posts:** headline in Cormorant Garamond (always a warm ink or ivory color, never gold — gold is for accents only), supporting line in Poppins, a one-line mono "eyebrow" tag above the headline for structure (e.g. "WEDDINGS · BENGALURU", "REAL WEDDINGS, REAL MOMENTS").

If Cormorant Garamond / Poppins / JetBrains Mono aren't available in the target tool (e.g. native PowerPoint), nearest substitutes: **Playfair Display or Garamond** (serif), **Inter or Lato** (sans), **Space Mono or Courier New** (mono).

---

## 4. Shape, Spacing & Imagery

- **Corner radii:** small elements 6–8px, cards/panels 24px, all buttons fully pill-shaped (50px), icon badges fully circular.
- **Buttons:** always pill-shaped, never square/rounded-square. Primary = maroon fill + ivory text. Ghost (on photo) = transparent + ivory border. Secondary (on light bg) = white fill + maroon text + gold hairline border.
- **Spacing rhythm:** generous — base unit 8px, major section breaks ~96px (desktop) / 56px (mobile). Don't crowd elements; the brand reads as unhurried and premium.
- **Photography over flat color:** real event photography is the primary visual device, not illustration or abstract graphics. When a flat panel is needed (no photo fits), use one tonal color (marigold/rose/deep-green) at full saturation rather than a gradient or pattern.
- **Photo treatment over text:** combined horizontal+vertical dark scrim gradient (never a flat uniform dim) so photo detail survives where there's no text, with layered text-shadow on headline text for extra legibility. Object focal point typically favors off-center composition (subject-left or subject-right) rather than dead-center crops.
- **Icons:** simple 1.5px-stroke line icons (not filled/glyph-style), circular gold-soft badge background, maroon icon color.

---

## 5. Voice & Messaging

- **Core taglines:** "We Create, You Celebrate" / "Crafting Moments & Memories Since 1999" / "Crafting Memorable Celebrations with Creative Decor." / "Your Dream Event Awaits." / "Join Us in Crafting Your Next Memory."
- **Tone:** warm, confident, detail-oriented. Short declarative headlines (serif), slightly longer explanatory subhead (sans). Avoid hype/exclamation-heavy copy; let the photography and craft claims do the work.
- **Recurring proof points (current site stats):** "27+ Years Experience", "1500+ Events Completed", "1000+ Happy Families", "70% Repeat Clients", "100+ Corporate Events", "Bengaluru & Destination Weddings".
- **Service taxonomy (consistent naming across all materials):** Mandap & Stage · Floral Design · Lighting · Draping & Tenting · Full Event Styling · Catering. Plus, for non-wedding content: Engagements · Religious Functions · Birthdays & Anniversaries · Corporate Events. Plus, for the partner-coordinated "Complete Wedding Solutions" line: Bridal Makeup · Mehendi · Photography · Cinematography · Transportation · DJ · Entertainment · Event Coordination.
- **Gallery category taxonomy (10 categories, mixes event-type and decor-type tags):** Weddings · Reception · Engagement · Mehendi · Haldi · Mandap · Floral Decoration · Corporate Events · Tent & Shamiana · Catering. "Corporate Events" and "Catering" have no matching photos yet — gallery shows a "coming soon" empty state for those until real photos are supplied.

> **Note on stats:** these 5 numbers replaced an earlier placeholder set and are current as of the last content update. Reconfirm with the client before reusing in print/ads if this doc is more than a few months old.

---

## 6. Quick-Reference Swatches (for design tools)

```
Maroon       #7A1429
Ivory        #FBF3E7
Ink          #26201C
Canvas       #FBF6EE
White        #FFFFFF
Gold         #B8924A
Gold Soft    #E8D9B8
Hairline     #E7DFD0
Deep Green   #2F4734
Dusty Rose   #E7CFC9
Marigold     #E8A33D
```

Paste these directly into PowerPoint's custom color picker or Canva/Instagram template tools to stay on-brand.

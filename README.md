# Handoff: Robert Garcia — Software Engineer Portfolio Site

## Overview
A single-page portfolio site for a Software Engineer based in Miami, FL. The site introduces Robert Garcia, showcases his skills, summarizes his experience and credentials, and provides a contact form for potential clients.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing the intended look and behavior. They are **not production code to copy directly**. Your task is to **recreate these designs in your target codebase** (e.g., a Rails view, a React app, a Next.js site, etc.) using its established patterns, libraries, and conventions.

## Fidelity
**High-fidelity.** The prototype is pixel-accurate with final colors, typography, spacing, hover states, and interactions. Recreate the UI as closely as possible using your codebase's existing tools.

---

## Screens / Views

### 1. Hero (About)
**Purpose:** First impression — introduces Robert, his role, and invites action.

**Layout:**
- Full viewport height section (`min-height: 100vh`)
- Flex column, centered vertically, `padding: 120px 32px 80px`
- Content constrained to `max-width: 1120px`, left-aligned
- Text column max-width: `740px`
- Fade-up entrance animation (`opacity 0→1`, `translateY 28px→0`, `0.75s ease`)
- Decorative dot-grid overlay on the right 45% of the section (very subtle, `opacity: 0.04`)

**Components:**
- **Available badge:** 9px green pulsing dot (`#059669`) + label `"Available for projects"` — `12px`, `font-weight: 600`, `#94aac0`, uppercase, letter-spacing `0.1em`
- **Heading:** `clamp(44px, 7vw, 82px)`, `font-weight: 800`, `letter-spacing: -2.5px`, line-height `1.07`; "Hi, I'm" in `#1e3a5f`, "Robert Garcia" in `#2563eb`
- **Subheading:** `"Software Engineer · Miami, FL"` — `17px`, `font-weight: 500`, `#94aac0`
- **Bio paragraph:** `16px`, `line-height: 1.85`, `#4a6a8a`; "Ruby on Rails" and "AI-driven agentic workflows" bolded in `#1e3a5f`
- **CTA buttons (flex row, gap 14px):**
  - Primary: `background #2563eb`, white text, `15px font-weight 700`, `padding 14px 28px`, `border-radius 10px`, right-arrow SVG icon, hover `opacity 0.88`
  - Secondary: `border 1.5px solid #dbe4ee`, `color #4a6a8a`, same size, hover border `#2563eb` and text `#2563eb`

---

### 2. Skills
**Purpose:** Communicate technical expertise in four focus areas.

**Layout:**
- `padding: 100px 32px`, `background: #e6edf4`
- Section header: eyebrow label + H2
- Cards in CSS grid: `repeat(auto-fill, minmax(300px, 1fr))`, `gap: 20px`

**Section Header:**
- Eyebrow: `11px`, `font-weight: 700`, `color: #2563eb`, uppercase, `letter-spacing: 0.14em`
- H2: `clamp(32px, 5vw, 44px)`, `font-weight: 800`, `color: #1e3a5f`, `letter-spacing: -1.2px`

**Each Skill Card:**
- `background: #fff`, `border: 1px solid #dbe4ee`, `border-radius: 16px`, `padding: 30px`
- `box-shadow: 0 1px 4px rgba(30,58,95,0.04)`
- Hover: border-color changes to the card's accent color (see below)
- Icon container: `48×48px`, `border-radius: 12px`, tinted background

| Card | Accent Color | Tags |
|------|-------------|------|
| Ruby on Rails | `#2563eb` | MVC, ActiveRecord, REST APIs, Sidekiq |
| Agentic Workflows | `#d97706` | Agents, Orchestration, Automation |
| Prompt Engineering | `#7c3aed` | LLMs, RAG, Pipelines |
| Databases & Backend | `#059669` | PostgreSQL, Redis, Git |

**Tags:** `12px`, `font-weight: 500`, `padding: 4px 12px`, `border-radius: 100px`, colored text + 7% tinted background + 20% opacity border — all matching the card accent color.

---

### 3. Experience
**Purpose:** Summarize background and highlight the eCornell ML & AI certificate without naming employers.

**Layout:**
- `padding: 100px 32px`, `background: #f0f4f8`
- Two-column grid: `1fr 1fr`, `gap: 48px`

**Left Column — Overview:**
- Two paragraphs of bio text (`16px`, `line-height: 1.9`, `#4a6a8a`), keywords bolded in `#1e3a5f`
- Three highlight chips (flex row, `background: #fff`, `border: 1px solid #dbe4ee`, `border-radius: 12px`, `padding: 12px 16px`):
  - 8px colored dot + `14px font-weight: 500` label
  - Dots: `#2563eb`, `#d97706`, `#7c3aed`
  - Labels: "4+ years of professional software engineering", "AI & agentic workflow development", "Full-stack Rails application delivery"

**Right Column — eCornell Certificate Card:**
- `background: #fff`, `border: 1.5px solid #e8c96a`, `border-radius: 20px`, `padding: 36px`
- `box-shadow: 0 4px 28px rgba(217,119,6,0.09)`
- Top row: 52×52px icon container (amber tint) + "Certificate" badge (amber, pill shape)
- Title: `"Machine Learning & Artificial Intelligence"` — `21px`, `font-weight: 800`, `#1e3a5f`
- Institution: `"Cornell University · eCornell"` — `14px`, `font-weight: 600`, `#d97706`
- Year: `"2025"` — `13px`, `#94aac0`
- Description below a `border-top: 1px solid #f5edda` divider — `14px`, `#4a6a8a`

---

### 4. Contact
**Purpose:** Allow potential clients to send Robert a message directly.

**Layout:**
- `padding: 100px 32px`, `background: #e6edf4`
- Content max-width: `620px`

**Form Fields:**
- Name + Email in a `2-column grid`, `gap: 16px`
- Message textarea below, full width, `min-height: 130px`, resizable vertically
- Each field: `background: #fff`, `border: 1px solid #dbe4ee`, `border-radius: 10px`, `padding: 12px 16px`, `font-size: 14px`, `color: #1e3a5f`; focus border: `#2563eb`
- Labels: `12.5px`, `font-weight: 600`, `#4a6a8a`, uppercase, `letter-spacing: 0.04em`

**Submit Button:** Same style as primary CTA in Hero.

**Success State:** Replaces the form after submission.
- Centered green checkmark icon in a 56px circle (`rgba(5,150,105,0.1)`)
- "Message Sent!" heading + confirmation copy
- Card: `background: #fff`, `border: 1px solid #dbe4ee`, `border-radius: 16px`

---

### 5. Footer
**Layout:** `padding: 44px 32px`, `border-top: 1px solid #dbe4ee`, `background: #f0f4f8`
- Flex row, space-between
- Left: "rg." logotype (`18px`, `font-weight: 800`, `#1e3a5f`, dot in `#2563eb`) + copyright line
- Right: GitHub, LinkedIn, Email links — icon + label, `color: #94aac0`, hover `#1e3a5f`

---

### 6. Navigation (Fixed)
- Fixed top, `height: 68px`, `backdrop-filter: blur(20px)`
- Transparent on load → `rgba(240,244,248,0.95)` + `border-bottom: 1px solid #dbe4ee` on scroll
- Left: "rg." logotype
- Right: About, Skills, Experience anchor links + "Let's Talk" CTA button (blue, `border-radius: 8px`)
- Active section link highlighted in `#2563eb`

---

## Interactions & Behavior

- **Nav scroll:** Background and border fade in after `scrollY > 40px`
- **Active nav link:** Updates based on which section is nearest the top of the viewport
- **Buttons:** `opacity: 0.88` on hover; `transition: opacity 0.2s`
- **Skill cards:** `border-color` transitions to accent color on hover; `transition: border-color 0.25s`
- **Contact form:** Controlled inputs; on submit, form is replaced with a success message (no page reload)
- **Hero entrance:** `fadeUp` animation (opacity + translateY) on load
- **Available dot:** Repeating `pulseDot` keyframe animation (box-shadow pulse)

---

## State Management

| Variable | Type | Description |
|----------|------|-------------|
| `formName` | string | Controlled name input |
| `formEmail` | string | Controlled email input |
| `formMessage` | string | Controlled message textarea |
| `formSubmitted` | boolean | Toggles form ↔ success state |
| `activeSection` | string | ID of the current visible section |
| `navScrolled` | boolean | Controls nav appearance |

---

## Design Tokens

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Background (primary) | `#f0f4f8` | Hero, Experience, Footer bg |
| Background (alt) | `#e6edf4` | Skills, Contact bg |
| Navy (text) | `#1e3a5f` | Headings, body strong |
| Body text | `#4a6a8a` | Paragraphs |
| Muted text | `#94aac0` | Subheadings, meta |
| Border | `#dbe4ee` | Cards, inputs, dividers |
| Card bg | `#ffffff` | Cards, inputs |
| Blue (accent) | `#2563eb` | Primary CTA, links, Rails |
| Amber (accent) | `#d97706` | Agentic Workflows, certificate |
| Purple (accent) | `#7c3aed` | Prompt Engineering |
| Green (accent) | `#059669` | Databases, available dot |
| Gold (border) | `#e8c96a` | Certificate card border |

### Typography
- Font: **Plus Jakarta Sans** (Google Fonts) — weights 300, 400, 500, 600, 700, 800
- Section eyebrow: `11px`, `700`, uppercase, `letter-spacing: 0.14em`
- Section H2: `clamp(32px, 5vw, 44px)`, `800`, `letter-spacing: -1.2px`
- Hero H1: `clamp(44px, 7vw, 82px)`, `800`, `letter-spacing: -2.5px`
- Body: `16px`, `line-height: 1.85`
- Small/meta: `12–14px`

### Spacing
- Section padding: `100px 32px`
- Content max-width: `1120px`
- Card padding: `30px`
- Card gap: `20px`

### Border Radius
- Cards: `16px`
- Certificate card: `20px`
- Buttons: `10px`
- Inputs: `10px`
- Tags/pills: `100px`
- Icons: `12px`

### Shadows
- Cards: `0 1px 4px rgba(30,58,95,0.04)`
- Certificate: `0 4px 28px rgba(217,119,6,0.09)`

---

## Assets
- All icons are inline SVGs — no external icon library needed
- Font: [Plus Jakarta Sans via Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- No images used

## Files
- `Portfolio.dc.html` — Full design prototype (open directly in a browser)
- `support.js` — Runtime support file (required to run the prototype locally)

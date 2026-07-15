---
name: Clinical Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#42474f'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#727780'
  outline-variant: '#c2c7d1'
  surface-tint: '#2d6197'
  primary: '#00355f'
  on-primary: '#ffffff'
  primary-container: '#0f4c81'
  on-primary-container: '#8ebdf9'
  inverse-primary: '#a0c9ff'
  secondary: '#005cba'
  on-secondary: '#ffffff'
  secondary-container: '#448ffd'
  on-secondary-container: '#002959'
  tertiary: '#003c1b'
  on-tertiary: '#ffffff'
  tertiary-container: '#00562a'
  on-tertiary-container: '#52d17e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a0c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#07497d'
  secondary-fixed: '#d7e3ff'
  secondary-fixed-dim: '#abc7ff'
  on-secondary-fixed: '#001b3f'
  on-secondary-fixed-variant: '#00458e'
  tertiary-fixed: '#7efba4'
  tertiary-fixed-dim: '#61de8a'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005228'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
  surface-main: '#F8FAFC'
  surface-deep: '#071D36'
  accent-sky: '#00BFFF'
  success-muted: '#ECFDF5'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Manrope
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 120px
---

## Brand & Style

This design system is engineered for a premium enterprise healthcare technology audience. It balances the high-stakes reliability of medical billing with the cutting-edge efficiency of modern SaaS leaders. The brand personality is authoritative yet approachable, evoking feelings of security, transparency, and effortless scale.

The design style follows a **Modern SaaS** aesthetic, characterized by:
- **Exceptional Whitespace:** Generous breathing room to reduce cognitive load in complex data environments.
- **Micro-interactions:** Subtle, high-quality transitions that signal a premium build.
- **Glassmorphic Accents:** Occasional use of backdrop blurs on navigation elements to maintain spatial awareness.
- **Refined Precision:** A "luxury corporate" feel achieved through hairline borders, soft depth, and a restrained color application.

## Colors

The palette is anchored by a deep "Classic Blue" primary, signifying stability and institutional trust. This is supported by a secondary vibrant blue for interactive elements and a functional green for success states and growth metrics.

- **Primary & Secondary:** Used for high-level branding, active states, and primary actions.
- **Neutral:** A slate-toned scale used for text and iconography to maintain readability without the harshness of pure black.
- **Backgrounds:** The interface primarily utilizes a cool-toned light gray (`#F8FAFC`) to minimize eye strain, while the "Deep Footer" (`#071D36`) provides a heavy visual anchor at the base of long-form content.
- **Subtle Gradients:** Use linear gradients from Primary to Secondary (at 135 degrees) only for high-impact hero sections or primary CTA buttons.

## Typography

The typography strategy pairs the geometric, modern warmth of **Manrope** for headlines with the industry-standard utility of **Inter** for data and body text.

- **Headlines:** Set with tighter letter-spacing and bold weights to create a strong visual hierarchy. Manrope’s rounded apertures complement the soft UI shapes.
- **Body:** Inter is used for all functional text. It ensures maximum legibility in dense billing tables and medical reports.
- **Labels:** Small caps with increased tracking should be used for section headers or metadata to provide variety without introducing new font families.

## Layout & Spacing

The layout utilizes a **Fixed Grid** system for desktop to maintain a premium, editorial feel, and a **Fluid Grid** for mobile.

- **Grid System:** A 12-column grid is standard for desktop. On mobile, this collapses to a single column with 16px side margins.
- **Rhythm:** An 8px base unit governs all padding and margins. 
- **Sectioning:** Large vertical gaps (120px+) between landing page sections are encouraged to reinforce the feeling of luxury and space.
- **Content Density:** In dashboard views, density should remain "comfortable" rather than "compact," prioritizing clarity of data over volume of data.

## Elevation & Depth

This design system uses **Tonal Layering** and **Ambient Shadows** to create a multi-dimensional environment.

- **Elevation Levels:**
    - **Level 0 (Flat):** The main background (`#F8FAFC`).
    - **Level 1 (Raised):** Cards and containers. Use a white background with a subtle 1px border in `#E2E8F0` and a very soft, diffused shadow (0px 4px 20px rgba(15, 76, 129, 0.04)).
    - **Level 2 (Floating):** Navigation bars and dropdowns. Use backdrop-blur (12px) and a slightly more pronounced shadow (0px 10px 30px rgba(0, 0, 0, 0.08)).
- **Subtle Gradients:** Backgrounds of primary containers may feature a faint radial gradient (Secondary at 5% opacity fading to transparent) to draw the eye toward the center of the content.

## Shapes

The shape language is consistently **Rounded**, avoiding sharp edges to appear more approachable and modern.

- **Components:** Standard buttons and input fields use an 8px (0.5rem) radius.
- **Containers:** Large feature cards and modals should use 16px (1rem) or 24px (1.5rem) radii to feel distinct from smaller interactive elements.
- **Icons:** Use icons with a consistent 2px stroke weight and rounded terminals to match the typography and corner radii.

## Components

### Buttons
- **Primary:** Solid Primary Color, white text, 8px radius. On hover, apply a subtle linear gradient shift or a slight lift shadow.
- **Secondary:** Outline in Secondary Color, 1px stroke. Transparent background.
- **Ghost:** No border or background. Used for low-priority actions like "Cancel" or "Learn More."

### Input Fields
- White background, 1px border in a soft neutral gray. Focus state should feature a 2px Secondary Color outer glow (ring) with 20% opacity. Labels must always be visible above the field in `body-sm` weight.

### Cards
- White base, 16px radius, Level 1 shadow. Cards should have generous internal padding (min 24px). For "Premium" features, a hairline 1px gradient border can be applied.

### Lists & Data Tables
- Use Inter `body-sm`. Alternate row shading is discouraged; use subtle horizontal dividers (`#F1F5F9`) instead. Headers should be in `label-caps` for clear distinction.

### Chips
- Used for status indicators (e.g., "Paid", "Pending"). Use high-roundedness (pill-shaped) with a 10% opacity background of the state color (e.g., green for paid) and 100% opacity text for contrast.
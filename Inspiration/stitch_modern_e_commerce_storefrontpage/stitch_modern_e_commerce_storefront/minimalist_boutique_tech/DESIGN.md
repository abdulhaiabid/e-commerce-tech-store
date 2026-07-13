---
name: Minimalist Boutique Tech
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffb595'
  on-tertiary: '#571e00'
  tertiary-container: '#ef6719'
  on-tertiary-container: '#4c1a00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb595'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7c2e00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system is built for a premium tech e-commerce experience that prioritizes clarity, sophistication, and a sense of "innovation through restraint." The brand personality is authoritative yet approachable, focusing on high-end hardware and seamless digital interactions.

The design style follows a **Modern Minimalist** movement with a focus on:
- **Generous Whitespace:** Utilizing negative space to draw focus toward high-quality product imagery.
- **High-Contrast Accents:** Using a single, vibrant primary color to guide user intent and signal interactivity.
- **Precision Typography:** A strict hierarchy that balances utility with an editorial feel.
- **Subtle Depth:** Moving away from flat design toward a "layered" aesthetic using tonal surfaces and soft shadows to create a tactile sense of quality.

The target audience consists of tech enthusiasts and professionals who value aesthetics as much as performance, expecting a frictionless, premium shopping journey.

## Colors

The palette is rooted in a "Deep Dark" aesthetic to allow product photography and the primary accent to vibrate against the background.

- **Primary (#007AFF):** An "Electric Blue" used exclusively for primary actions, progress indicators, and active states. It represents the "tech" pulse of the system.
- **Surface (Neutral/Secondary):** Deep Slate (#121212) serves as the base canvas, while Charcoal (#1E1E1E) is used for cards, navigation bars, and elevated containers to create structural depth.
- **Text:** Pure White (#FFFFFF) is reserved for headings and primary content to ensure maximum legibility. Secondary text uses a desaturated grey (#A1A1A1) to reduce visual noise in metadata.
- **Success/Error:** Use standard semantic greens and reds, but desaturate them slightly to fit the dark aesthetic.

## Typography

The system utilizes **Inter** for its systematic, neutral, and highly legible characteristics. The typographic voice is defined by high contrast between weight and scale.

- **Headlines:** Use Bold (700) or Semi-Bold (600) weights with tighter letter spacing to create a "locked-in" editorial look for product names and category titles.
- **Body:** Standardized on 16px for optimal readability against dark backgrounds. Use Regular (400) weight to maintain a clean, airy feel.
- **Labels:** Small labels (like "New Arrival" or "In Stock") should use Medium (500) or Semi-Bold (600) weights and can occasionally be transformed to all-caps with subtle letter spacing for a technical, utilitarian vibe.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** with generous margins to enforce the boutique aesthetic.

- **Grid System:** A 12-column grid for desktop with 24px gutters. Elements should generally span 3, 4, 6, or 12 columns to maintain symmetry.
- **Spacing Rhythm:** Based on an 8px baseline. Use 16px/24px for internal component padding and 48px/64px/80px for section vertical spacing to ensure the UI "breathes."
- **Breakpoints:**
    - **Desktop (1280px+):** Full 12-column spread, 64px outer margins.
    - **Tablet (768px - 1279px):** 8-column grid, 40px outer margins.
    - **Mobile (Up to 767px):** 4-column grid, 20px outer margins. Stack all side-by-side components vertically.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Ambient Shadows** rather than heavy borders.

- **Level 0 (Base):** Deep Slate (#121212) - The background of the entire application.
- **Level 1 (Cards/Surface):** Charcoal (#1E1E1E) - Used for primary UI containers. Apply a very soft, diffused shadow: `box-shadow: 0 10px 30px rgba(0,0,0,0.5)`.
- **Level 2 (Modals/Popovers):** A lighter Charcoal (#2C2C2C) with a more pronounced shadow to indicate it is floating above the main interface.
- **Interactive States:** When a card is hovered, it should subtly lift (Y-axis shift) or increase shadow spread rather than changing background color significantly.

## Shapes

The shape language is "Soft-Modern," balancing the coldness of tech with approachable, rounded geometry.

- **Components:** Standard buttons and input fields use a **12px radius** (Medium).
- **Large Containers:** Product cards and main content areas use a **16px-24px radius** (Large/XL) to create a friendly, premium frame for images.
- **Small Elements:** Tags and chips use an 8px radius or full pill-shape depending on the context.

## Components

- **Buttons:**
    - **Primary:** Background #007AFF, Text #FFFFFF. 12px border radius. Bold, 16px text. No border.
    - **Secondary:** Background #1E1E1E, Text #FFFFFF, 1px Border #333333.
- **Product Cards:**
    - Background #1E1E1E. Image should be top-aligned with no internal margin to the card edges, or centered with 24px padding if on a transparent background. 
    - Text info at the bottom with 24px padding.
- **Input Fields:**
    - Background #121212, Border 1px #333333. On focus, the border changes to #007AFF.
- **Chips/Tags:**
    - Used for "Sale" or "Specs." Subtle #2C2C2C background with Semi-Bold 12px text.
- **Lists:**
    - Clean horizontal dividers using #262626. High vertical padding (16px-20px) between items.
- **Cart/Checkout:**
    - Use "Glassmorphism" for the sticky bottom bar on mobile (Backdrop-filter: blur(20px)) to maintain a sense of layered depth.
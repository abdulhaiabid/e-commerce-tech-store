---
name: Luminous Precision
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#414755'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#717786'
  outline-variant: '#c1c6d7'
  surface-tint: '#005bc1'
  primary: '#0058bc'
  on-primary: '#ffffff'
  primary-container: '#0070eb'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5b5c60'
  on-tertiary: '#ffffff'
  tertiary-container: '#747479'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e3e2e7'
  tertiary-fixed-dim: '#c7c6cb'
  on-tertiary-fixed: '#1a1b1f'
  on-tertiary-fixed-variant: '#46464b'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system embodies a "Luminous Precision" aesthetic—a refined, light-mode evolution of boutique technology interfaces. It targets a sophisticated audience that values clarity, high-end hardware integration, and effortless digital experiences. 

The style is rooted in **Minimalism** with subtle **Glassmorphism** accents. It leverages expansive white space, precise alignment, and a restricted color palette to evoke an emotional response of calm, focus, and premium quality. Every element is intentional, stripping away unnecessary decoration to highlight functional elegance and technical mastery.

## Colors
The palette is centered on a high-purity white foundation to create a sense of limitless space. 

- **Primary (#007AFF):** A vibrant electric blue used sparingly for high-intent actions, progress indicators, and critical focus states.
- **Secondary (#121212):** A deep charcoal used for primary headings and body text to ensure maximum legibility and a grounded, premium feel.
- **Tertiary (#6E6E73):** A muted slate for secondary information, metadata, and deactivated states.
- **Neutral (#F5F5F7):** An off-white "Apple-esque" grey used for background surfaces and subtle container differentiation.
- **Surface (#FFFFFF):** Pure white is reserved for the highest level of the UI hierarchy, such as active cards and modals.

## Typography
This design system utilizes **Inter** exclusively to maintain a systematic, utilitarian, and modern character. 

The typographic hierarchy relies on tight letter-spacing for large headlines to create a "compacted" premium look, while body text maintains standard spacing for optimal readability. Use `headline-xl` for hero sections, `headline-lg` for page titles, and `label-sm` for overlines or category tags. All weights are kept between Regular (400) and Bold (700) to avoid visual clutter.

## Layout & Spacing
The layout follows a **Fluid Grid** model with strict adherence to an 8px spatial rhythm. 

- **Desktop:** 12-column grid, 64px side margins, 24px gutters.
- **Tablet:** 8-column grid, 32px side margins, 20px gutters.
- **Mobile:** 4-column grid, 16px side margins, 16px gutters.

Spacing should be generous to maintain the minimalist ethos. Use `xl` (80px) vertical padding between major page sections to allow the content to "breathe." Containers should favor internal padding of `md` (24px) to ensure a high-end, spacious feel.

## Elevation & Depth
Elevation is communicated through **Tonal Layering** and **Ambient Shadows** rather than harsh borders.

- **Level 0 (Background):** Neutral (#F5F5F7).
- **Level 1 (Cards/Sheet):** Surface (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.04)).
- **Level 2 (Modals/Popovers):** Surface (#FFFFFF) with a more pronounced ambient shadow (0px 12px 40px rgba(0, 0, 0, 0.08)).

For floating navigation or headers, use a **Backdrop Blur** (20px) with 80% opacity on the Surface color to create a glassmorphic effect that maintains context of the content beneath.

## Shapes
The shape language is consistently "Rounded," utilizing an **8px (0.5rem)** base radius. This provides a friendly but disciplined tech aesthetic.

- **Standard (Buttons, Inputs):** 8px radius.
- **Large (Cards, Modals):** 16px (1rem) radius.
- **Extra Large (Feature Banners):** 24px (1.5rem) radius.

Avoid full pill-shapes unless used for small tags or chips to maintain the structural, architectural feel of the design.

## Components

- **Buttons:** Primary buttons use the Electric Blue (#007AFF) background with White text. Secondary buttons use a Neutral (#F5F5F7) fill with Charcoal text. Use an 8px radius and horizontal padding of 24px.
- **Input Fields:** Use a subtle 1px border (#E5E5E7) with a white fill. On focus, the border transitions to Electric Blue with a faint blue glow.
- **Cards:** Cards should be borderless, utilizing the Level 1 shadow and White surface against the Off-white background.
- **Chips:** Small, 8px rounded elements using a light tint of blue (e.g., #007AFF at 10% opacity) for active states, and light grey for inactive.
- **Lists:** Clean dividers using #E5E5E7, with generous 16px vertical padding between items.
- **Checkboxes/Radios:** Use the Electric Blue for the active state. Maintain a 4px radius for checkboxes to keep them consistent with the system's roundedness.
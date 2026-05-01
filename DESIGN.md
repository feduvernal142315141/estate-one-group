---
name: Obsidian & Gold Premium
colors:
  surface: '#fbfbe2'
  surface-dim: '#dbdcc3'
  surface-bright: '#fbfbe2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f5dc'
  surface-container: '#efefd7'
  surface-container-high: '#eaead1'
  surface-container-highest: '#e4e4cc'
  on-surface: '#1b1d0e'
  on-surface-variant: '#444748'
  inverse-surface: '#303221'
  inverse-on-surface: '#f2f2d9'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#b52619'
  on-secondary: '#ffffff'
  secondary-container: '#ff5c47'
  on-secondary-container: '#610000'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#241a00'
  on-tertiary-container: '#a08000'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a8'
  on-secondary-fixed: '#410000'
  on-secondary-fixed-variant: '#920703'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fbfbe2'
  on-background: '#1b1d0e'
  surface-variant: '#e4e4cc'
typography:
  display-hero:
    fontFamily: Noto Serif
    fontSize: 80px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1-editorial:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  h2-section:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  h3-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0.15em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-gold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 160px
---

## Brand & Style

This design system is engineered for the "God Level" of luxury real estate—targeting ultra-high-net-worth individuals who demand discretion, legacy, and architectural excellence. The brand personality is **Authoritative, Timeless, and Cinematic**. It avoids the clutter of traditional real estate platforms in favor of a high-end editorial experience.

The visual style is a fusion of **Heritage Minimalism** and **Modern Glassmorphism**. It borrows the structural discipline of Swiss design, the material richness of Dubai’s high-rise architecture, and the frictionless interaction patterns of modern consumer tech. The emotional response is one of immediate trust and exclusivity; the UI does not scream for attention, it commands it through silence and "breathing room."

## Colors

The palette is anchored by **Obsidian Black**, used to bookend the experience in the navigation and footer, creating a "frame" of authority. The **Cream** base serves as the primary canvas for property listings and editorial content, preventing the "digital fatigue" often associated with pure dark-mode interfaces.

**Warm Gold** is reserved for surgical precision: 1px borders, bespoke iconography, and active states that signify "The Gold Standard." **Deep Red** acts as the high-velocity trigger; it is used exclusively for primary conversion points and "Sold" status badges, ensuring that the most important actions are impossible to ignore without compromising the luxury aesthetic.

## Typography

Typography is treated as a core architectural element. **Noto Serif** provides the editorial weight required for a heritage brand, utilized for large-scale headlines and property titles. Increased letter-spacing on display styles evokes the feeling of a luxury gallery.

**Inter** serves as the functional workhorse. By utilizing generous line-heights (1.6 to 1.8), body text remains legible and airy, even in information-dense property specifications. Small-caps labels in Inter are used for metadata to provide a technical, "Sotheby's catalog" precision.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model (12 columns) centered within a 1440px container. The defining characteristic is the **Section Gap**—a massive 160px vertical buffer between major content blocks to ensure each property or value proposition feels singular and significant.

Layouts should favor asymmetrical compositions: large-scale imagery on one side balanced by tightly grouped typography on the other. Empty space is not "white space"; it is "luxury space," signifying that the brand is not in a rush to sell, but rather inviting the user to observe.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Ambient Diffusion** rather than traditional drop shadows. 

1.  **Level 1 (Surface):** The Cream background.
2.  **Level 2 (Glass Containers):** Overlays for search filters or property hover states. Use a backdrop blur of 20px with a 1px border in Gold (15% opacity).
3.  **Level 3 (Modals/Power Nav):** Dark Glass (Obsidian at 85%) with a subtle 40px blur radius.

Shadows must be "long and soft"—using a 10% opacity Obsidian tint with a 60px blur and 20px Y-offset, mimicking the soft natural lighting of a high-end gallery.

## Shapes

The shape language is strictly **Sharp (0px)**. In the world of high-end real estate, sharp corners denote architectural precision, structural integrity, and custom tailoring. Circular elements are only permitted for user avatars or specific interactive "play" buttons for property films. All cards, input fields, and CTA buttons must maintain a 90-degree edge to reflect the "God Level" Mies van der Rohe aesthetic.

## Components

**Buttons:**
- **Primary:** Deep Red background, white Inter text (All Caps), no border. Hover state shifts to a slightly darker red with a 2px bottom border in Gold.
- **Secondary:** Transparent with a 1px Gold border. Text in Obsidian or Gold.
- **Ghost:** Text only with a 1px Gold underline that expands from the center on hover.

**Cards:**
- Property cards feature full-bleed imagery. Metadata is housed in a Cream footer or a Glassmorphic overlay. No borders, except for a 1px Gold separator between the image and text if necessary.

**Inputs:**
- Bottom-border only (1px Gold). Labels sit above the line in small-caps Inter. On focus, the line weight doubles to 2px.

**Luxury Elements:**
- **Property Film Trigger:** A large, floating Gold ring (1px stroke) with a "Play" icon, utilizing a backdrop blur to sit elegantly over 4K video backgrounds.
- **The "Heritage" Divider:** A 100px wide, 1px thick Gold horizontal line used to separate headlines from body copy in editorial sections.
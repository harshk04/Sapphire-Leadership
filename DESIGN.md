---
name: Sapphire Executive Design
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424752'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737783'
  outline-variant: '#c3c6d4'
  surface-tint: '#255cb1'
  primary: '#00377a'
  on-primary: '#ffffff'
  primary-container: '#0b4da2'
  on-primary-container: '#a7c2ff'
  inverse-primary: '#adc6ff'
  secondary: '#4e5e81'
  on-secondary: '#ffffff'
  secondary-container: '#c6d7ff'
  on-secondary-container: '#4c5d80'
  tertiary: '#00318c'
  on-tertiary: '#ffffff'
  tertiary-container: '#0046be'
  on-tertiary-container: '#afc1ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004494'
  secondary-fixed: '#d7e2ff'
  secondary-fixed-dim: '#b5c7ee'
  on-secondary-fixed: '#071b3a'
  on-secondary-fixed-variant: '#364768'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003da9'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  achievement-gold: '#C5A059'
  surface-glass: rgba(255, 255, 255, 0.7)
  sapphire-glow: rgba(11, 77, 162, 0.15)
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 84px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 120px
---

## Brand & Style

This design system embodies the intersection of institutional authority and high-technology elegance. It is crafted for "Sapphire Leadership & Advisory" to communicate trust, intellectual depth, and forward-thinking precision.

The visual direction uses **Glassmorphism** as a core structural element, moving away from flat enterprise standards toward a more layered, atmospheric experience. The style is defined by:
- **Atmospheric Depth:** Using subtle background blurs and tinted overlays to create a "glass-on-silk" feel.
- **Editorial Precision:** Large, high-contrast typography that mirrors the confidence of a premium consulting firm.
- **Interactive Sophistication:** Micro-interactions that feel expensive—low-friction, high-reward transitions and magnetic states that respond to the user's focus.

## Colors

The palette is anchored in a spectrum of deep blues to evoke reliability and wisdom. 
- **Sapphire Blue (#0B4DA2)** is the primary identity color, used for core brand moments and high-level calls to action.
- **Deep Navy (#071B3A)** serves as the grounding text and dark-mode surface color, providing a McKinsey-esque gravitas.
- **Royal Blue (#155EEF)** is used for interactive states and digital-first UI elements to ensure accessibility and "tech" energy.
- **Achievement Gold (#C5A059)** is a restricted accent used solely for badges, certifications, and high-value highlights.

Gradients should be used sparingly but effectively, typically a soft linear flow from Deep Navy to Sapphire Blue for hero backgrounds.

## Typography

The typography system pairs **Hanken Grotesk** for headlines with **Inter** for body text. 
- **Hanken Grotesk** provides a sharp, contemporary "architectural" feel to titles, utilizing tighter letter-spacing and heavy weights to command attention.
- **Inter** ensures maximum legibility for long-form advisory reports and educational content.
- Use `display-xl` for hero section statements only. 
- All labels and sub-headers should utilize the `label-sm` style with increased tracking to maintain a sophisticated, airy feel.

## Layout & Spacing

This design system uses a **Fixed Grid** approach for desktop to maintain the feel of an editorial publication, transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid with a 1280px max-width. Use generous `section-padding` (120px+) to create an elite, unhurried atmosphere.
- **Gaps:** Use a 32px gutter to allow content "breathing room."
- **Mobile:** 4-column grid with 20px margins. Headlines should downscale using the mobile-specific tokens to prevent awkward wrapping.
- **Rhythm:** Vertical spacing follows an 8px base unit. Component stacks (like cards) should favor the `stack-lg` (32px) to emphasize separation of ideas.

## Elevation & Depth

Elevation is achieved through **Tonal Layers** and **Glassmorphism** rather than traditional black shadows.

1.  **The Base Layer:** Solid #F8FAFC (Neutral).
2.  **The Glass Layer:** Semi-transparent surfaces (`surface-glass`) with a 16px to 32px backdrop blur. These surfaces must have a 1px solid white border at 20% opacity to define their edges.
3.  **The Interactive Layer:** Elements like cards use a soft, tinted shadow (Sapphire Glow) that expands on hover, creating the illusion of the element lifting toward the user.
4.  **Floating Elements:** The primary navigation uses a high-index blur to appear as if it is floating independently above the page content.

## Shapes

The shape language is dominated by **Pill-shaped** and highly rounded containers. This softens the formal blue palette and aligns with modern premium tech aesthetics (Apple/Stripe).

- **Buttons & Nav:** Fully rounded (pill) for a soft, approachable interactive feel.
- **Cards:** Large corner radii (24px to 48px) to frame content elegantly.
- **Inputs:** Pill-shaped to match the button styling, ensuring a cohesive form language.

## Components

### Buttons
Primary buttons are Sapphire Blue pills with white text. They feature a "magnetic" hover state where the button slightly tracks the cursor's movement within its hit area. Secondary buttons should be transparent with a Sapphire Blue border.

### Glassmorphism Cards
Cards are the primary container for educational content. They must use the `surface-glass` variable, a subtle inner glow, and a 1px border. Background content should remain visible but blurred beneath them.

### Floating Navigation
The main navigation is a "floating pill" at the top of the viewport. It should be semi-transparent with a heavy backdrop blur. Links use the `label-sm` typography with a dot-indicator appearing beneath the active item.

### Input Fields
Fields are white or semi-transparent pills with subtle internal shadows. Focus states utilize a 2px Royal Blue ring with a soft outer glow.

### Achievement Chips
Small, high-contrast pills using the Achievement Gold. These are used for "New," "Expert Led," or "Certification" tags. They should use a slightly smaller, bolder version of the `label-sm` font.

### Section Transitions
Use smooth, staggered reveals. As the user scrolls, glass layers should fade in and slide up slightly (20px) to create a sense of choreographed arrival.
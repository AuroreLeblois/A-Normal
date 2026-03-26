# Design System Document

## 1. Overview & Creative North Star: "The Obsidian Archive"

This design system is a sophisticated evolution of the 'A Normal' visual identity. It moves away from the flat, utilitarian nature of typical web resources toward a **High-End Editorial** experience. We define our Creative North Star as **"The Obsidian Archive"**: a digital space that feels like a rare, illuminated manuscript discovered in a high-tech vault.

While the original site utilizes a standard grid, this system breaks the "template" look through:
*   **Intentional Asymmetry:** Using varying card heights and offset typography to create a narrative flow.
*   **Tonal Depth:** Moving beyond flat hex codes to embrace layered surfaces that mimic physical materials.
*   **Luminous Accents:** Treating the gold and orange tokens not just as colors, but as light sources that "glow" against the deep anthracite backgrounds.

---

## 2. Colors

The palette is anchored in deep, ink-like tones contrasted by high-vibrancy "luminous" accents.

### Core Tones
*   **Surface (Deep Charcoal):** `#131313` – The foundation of the Archive.
*   **Primary (Luminous Gold):** `#FFDCA1` – Used for refined interactive states.
*   **Primary Container (Vibrant Amber):** `#FFB800` – Used for high-impact CTAs and branding.
*   **On-Surface (Soft Parchment):** `#E5E2E1` – Optimized for long-form reading without the harshness of pure white.

### The "No-Line" Rule
To achieve a premium feel, **1px solid borders are prohibited for sectioning.** Instead of using lines to divide content, designers must use:
*   **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
*   **Negative Space:** Utilizing the Spacing Scale (specifically `12` and `16`) to create natural cognitive breaks.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Each "nested" container should climb or descend the tier scale:
1.  **Level 0 (Base):** `surface` (#131313)
2.  **Level 1 (Card):** `surface-container-low` (#1C1B1B)
3.  **Level 2 (In-Card Element):** `surface-container-high` (#2A2A2A)

### The "Glass & Gradient" Rule
For primary actions and hero sections, use a **Signature Texture**:
*   **Linear Gradient:** From `primary_container` (#FFB800) to `primary_fixed_dim` (#FFBA20) at a 135-degree angle.
*   **Glassmorphism:** For floating menus, use `surface_container_highest` with 60% opacity and a `24px` backdrop-blur.

---

## 3. Typography

The typographic system pairs a modern, technical sans-serif with a high-contrast serif to create an "Editorial" feel.

*   **Display & Headline (Newsreader):** Used for titles, narrative hooks, and storytelling. The serif adds a "literary" weight that elevates the site from a mere tool to a brand experience.
*   **Title & Body (Inter):** A clean, neutral workhorse. Its high legibility ensures that complex RPG rules remain accessible.
*   **Labels (Space Grotesk):** A technical, geometric sans-serif used for metadata (e.g., PDF file sizes, tags). This creates a functional contrast against the narrative body text.

---

## 4. Elevation & Depth

We eschew traditional "drop shadows" in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking" the surface tiers. A `surface-container-lowest` card placed on a `surface` background creates a "carved-in" look, while `surface-bright` creates a "lifted" look.
*   **Ambient Shadows:** For floating elements (like dice rollers or tooltips), use a `48px` blur with 6% opacity. The shadow color should be a tinted version of the surface color—never pure black—to simulate natural light absorption.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` (#514532) at **15% opacity**. It should feel felt, not seen.

---

## 5. Components

### Buttons
*   **Primary (The Glow Variant):** Uses the `primary_container` background with a subtle outer glow (box-shadow: `0 0 20px rgba(255, 184, 0, 0.3)`).
*   **Secondary (The Outline):** No background. Uses the "Ghost Border" logic and `primary` text.
*   **Hover States:** Buttons should feel tactile. On hover, increase the glow intensity and slightly shift the gradient angle.

### Cards & Resource Items
*   **Forbid Divider Lines:** Use `surface-container` shifts to differentiate the header from the footer of a card.
*   **Resource Display:** PDFs should be presented in "Shelf" layouts. Use `surface_container_highest` for the thumbnail container to give it a physical presence.

### Chips (Labels)
*   **Style:** Small caps using `label-sm` (Space Grotesk). 
*   **Visual:** Low-contrast background (`surface_variant`) to ensure they don't compete with primary CTAs.

### Input Fields
*   **Foundation:** `surface_container_lowest`.
*   **Focus State:** Instead of a thick border, use a `1px` gradient border transition and a soft `primary` glow.

---

## 6. Do's and Don'ts

### Do
*   **Use Asymmetry:** Offset image elements or icons to break the vertical "column" feel.
*   **Embrace the Dark:** Allow large areas of `#131313` to breathe. White space in a dark theme is "Luxurious Space."
*   **Contextual Icons:** Use icons related to the RPG universe (D20s, Masques) but render them in a minimalist, single-weight line style.

### Don't
*   **No Pure White:** Never use `#FFFFFF`. Use the `on_surface` (#E5E2E1) to maintain the "Obsidian Archive" mood.
*   **No Sharp Corners:** Always follow the Roundedness Scale (Default: `0.5rem`).
*   **No Flat Buttons:** Primary buttons must always have a subtle gradient or glow to represent "magical" interactivity.
*   **No Grid-Rigidity:** Avoid perfectly symmetrical 3-column layouts. Try a 2/3 and 1/3 split to create a more editorial, magazine-like flow.
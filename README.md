# Revival Watches — Smartwatch Landing

Live Demo: (deploy after setup)

## Project Overview
Revival Watches is a premium smartwatch brand focused on durability, modern design, and health-first features. This repository contains a responsive landing page built with React + Tailwind CSS following the provided LG layout. Replace placeholder images with high-quality watch imagery in `src/assets/images`.

## Brand Identity
### Brand name: Revival Watches
- Tagline: Time Reborn

### Color System
- Primary: `#0f6b5a` (brand trust, health/eco tone)
- Secondary: `#f6a01a` (energy / accents)
- Accent: `#ff4d6d` (CTA highlights)
- Neutral dark: `#0f1724` (text)
- Neutral light: `#f7fafc` (background)

### Typography
- Headings & UI: Inter (system fallback). Clear and geometric for modern look.

## Design Decisions
- Layout measured with Tailwind spacing utilities to match the LG design proportions.
- Components use flex & grid to align with the Figma layout while keeping semantic HTML.

## Component Architecture
Files follow `src/components/{layout,sections,common}` as requested. Components use PropTypes and destructured props.

## Installation & Setup
1. Install dependencies:

```bash
cd /workspaces/Final-Project
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build:

```bash
npm run build
```

## Images and Credits
- Download high-quality watch images (min 1920x1080 hero, 800x600 cards) and place them in `src/assets/images`. Suggested sources: Unsplash, Pexels.
- Provide credits in this README after adding images.

## Performance & Accessibility
- Images should be optimized (WebP recommended). Use `loading="lazy"` (already implemented) and React.memo for heavy components.

## Development Notes
- Tailwind v3 custom config in `tailwind.config.cjs`.
- Use recommended Lighthouse checks after deployment.

## Future Improvements
- Add animations and micro-interactions
- Dark mode
- PWA support
# Final-Project
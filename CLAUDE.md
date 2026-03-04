# Dexter Landing Page

AI-powered DeFi agent landing page. React + Vite + TypeScript + Tailwind CSS. Deployed on Vercel.

## Commands

```bash
npm run dev      # Vite dev server on port 3000
npm run build    # Production build → dist/
npm run preview  # Preview production build
npm run lint     # ESLint (js,jsx,ts,tsx)
```

## Architecture

```
App.tsx                    # Root component (dark mode wrapper)
main.tsx                   # Entry point, mounts to #root
components/
  Header.tsx               # Navigation bar
  HeroSection.tsx          # Hero with CTAs
  MetricsSection.tsx       # Animated counters
  HowItWorksSection.tsx    # 3-step explainer with animated SVG icons
  FinalCTASection.tsx      # Discord CTA
  Footer.tsx               # Footer
  ScanIcon.tsx, ScoreIcon.tsx, ExecuteIcon.tsx  # Animated SVG icons
  ui/                      # shadcn/ui primitives (button, card, etc.)
  figma/                   # Figma-exported components
imports/                   # SVG assets and logo components
styles/
  globals.css              # Theme variables, typography system, utility classes
  effects.css              # Animation effects
public/                    # Static assets (logos, icons)
```

Path alias: `@/` → project root (configured in vite.config.ts and tsconfig.json).

## Design System — Flagship Theme 2.0

Read `Guidelines.md` before making visual changes — it has full design specs.

### Key Rules

- **Dark mode only** — `.dark` class on root div, never remove it
- **Primary brand color**: `#bded63` (lime green) — use sparingly for CTAs and highlights
- **Background hierarchy**: ultra-dark `#0C0C0D` → carbon `#1A1A1B` → graphite `#2A2A2A`
- **Fonts**: Space Grotesk (headlines/display), Inter (body), IBM Plex Mono (labels/mono)
- All colors use CSS custom variables (`--dexter-*`) defined in `styles/globals.css`

### Custom CSS Classes

Use these instead of raw Tailwind for typography and layout:

| Class | Purpose |
|-------|---------|
| `.text-display` | 64px Space Grotesk headlines |
| `.text-headline` | 36px section headers |
| `.text-subhead` | 20px descriptions |
| `.text-label` | IBM Plex Mono uppercase labels |
| `.text-body` | 16px body text |
| `.container-dexter` | Max 1280px with responsive padding |
| `.hover-lift` | Card hover: translateY(-2px) + shadow |
| `.border-glow` | Hover glow on interactive elements |
| `.glow-soft` / `.glow-medium` | Static glow effects |
| `.section-padding` | Responsive vertical section padding |

### Typography Gotchas

- Don't override font-size/weight/line-height with Tailwind on elements using `.text-display`, `.text-headline`, etc.
- Labels (`.text-label`) are always uppercase with letter-spacing
- One primary CTA button per section max

## Code Style

- Functional React components with named exports
- Tailwind for styling, CSS custom properties for theme tokens
- shadcn/ui components in `components/ui/` (don't modify these directly)
- SVG animations use inline `<animate>` elements with 2.5s duration

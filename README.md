# Portfolio — React

React port of the original static portfolio (D:\Portfolio). Homepage + three case
studies (Lingofable, Valasys, FanCrew), replicating content and design exactly.

## Stack

- Vite 6 + React 18
- react-router-dom 6 (client-side routing)
- All original CSS reused verbatim from the static site
- The FanCrew interactive architecture canvas is ported 1:1 from
  `architecture.js` (`src/lib/fancrewArch.js`)

## Run

```
npm install
npm run dev       # dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # serve the production build
```

## Routes

- `/` — Home
- `/projects/lingofable`
- `/projects/valasys`
- `/projects/fancrew` (includes interactive Product Architecture canvas)

## Structure

```
public/                       static assets served at site root
  assets/                     shared css / images / js (mirrors original paths)
  projects/<name>/assets/     per-project images & media
src/
  styles/                     verbatim copies of the original CSS
  components/                 TopNav, Footer, Sidebars, Modal, CaseLayout
  components/fancrew/         ArchitectureCanvas (React wrapper)
  hooks/                      scroll-spy, reveal, feature-card, clock, page-title
  lib/fancrewArch.js          ported canvas engine (init + cleanup)
  pages/                      Home, FanCrew, Lingofable, Valasys
  App.jsx / main.jsx          routing + global CSS
```

## Notes

- Routing uses `BrowserRouter` and clean paths. On static hosting without SPA
  fallback, deep links should be rewritten to `index.html` (or switch to
  `HashRouter` in `src/main.jsx`).
- `base: './'` in `vite.config.js` keeps built asset URLs relative, so the
  `dist/` folder can be opened from any location or sub-path.
- The exact same profile-modal markup is rendered on every page (as in the
  original site); it stays inert because no trigger button exists in the
  originals.
# nitz.clicks — photography portfolio (prototype)

A standalone macro-photography portfolio site, designed around the warm-bokeh aesthetic of your shots.

## Concept

**"small things, big light."** — the design echoes your signature: tiny subject, huge bokeh, golden warmth.

- Warm cream paper background with film-grain overlay
- Custom **bokeh cursor** that grows and labels itself when hovering photos
- Hero: scattered, parallax-driven photo arrangement with ambient bokeh blobs
- Featured: asymmetric editorial grid with hover captions
- Marquee: italic "look closer" running tagline
- Archive: filterable grid (Insects / Botanical / Liquid / All), desaturates until hover
- Lightbox with photo metadata
- Distinctive type pairing: **Fraunces** (display serif, with optical sizing) + **JetBrains Mono** (monospace details)

## Run it

Just open `index.html` in a browser. No build step needed.

For a local server (better for image loading):
```bash
cd photo-portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Files

- `index.html` — single-file site (HTML + CSS + JS inline for easy deploy)
- `images/` — your 8 photos, renamed with semantic slugs

## Next steps (when you're ready)

1. **Add more photos** — the archive layout scales naturally; just add more `.arc` blocks
2. **Optimize images** — convert to WebP, add `srcset` for responsive sizes
3. **Hosting** — deploy to GitHub Pages at `photos.nitishdevadiga.com` via Cloudflare Pages
4. **Series pages** — turn each "Featured Series" into its own scroll-story page
5. **EXIF data** — pull camera/lens/aperture from the image files and show on hover
6. **Touch/swipe** — gestures for mobile lightbox navigation


# Fintech Template Clone (Static Mirror)

This is a static mirror of `https://preview--fintech-template-642.lovable.app/` captured with wget. All HTML, CSS, and JS assets are included for local preview or static hosting.

## Run locally

- Using Python HTTP server:

```bash
cd preview--fintech-template-642.lovable.app
python3 -m http.server 8080 --bind 0.0.0.0
```

Open: `http://localhost:8080`

## Structure

- `preview--fintech-template-642.lovable.app/index.html` – main entry
- `preview--fintech-template-642.lovable.app/assets/` – bundled JS/CSS

## Deploy

Deploy the `preview--fintech-template-642.lovable.app/` folder to any static host (Vercel, Netlify, GitHub Pages, S3/CloudFront, Nginx). Set the site root to that folder.

## Notes

- The page includes a Lovable badge and external `lovable.js` script to match the original. Remove those only if you don’t need them.